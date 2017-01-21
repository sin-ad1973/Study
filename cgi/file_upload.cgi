#!/usr/bin/perl

use strict;
use warnings;
use CGI;
use File::Copy;

#アップロードの上限を3MBに制限
$CGI::POST_MAX = 3 * 1024 * 1024;

#CGIオブジェクト生成
my $q = CGI -> new;

#文字コード設定
$q -> charset('EUC-JP');

#画像ファイル保存ディレクトリ
my $image_dir = $ENV{DOCUMENT_ROOT} . '/' . 'image';

#掲示板の送信ボタンが押された場合の処理(画像ファイル保存)
if ($ENV{REQUEST_METHOD} eq 'POST') {

	#CGIエラーチェック
	my $cgi_error = $q -> cgi_error;
	if ($cgi_error) {
		if ($cgi_error =~ /413/) {
			show_error_page($q, "ファイルサイズが大きすぎます。");
		} else {
			show_error_page($q, "エラーが発生しました。");
		}
	}

	#アップロードされた画像ファイルのハンドル取得
	my $fh = $q -> upload('image');

	#ファイルが指定されていない場合エラーページ表示
	if (!$fh) {
		show_error_page($q, "ファイルを指定して下さい。");
	}

	#ファイルの種類が画像ファイルであることをチェックする
	my $content_type = $q -> uploadInfo($fh) -> {'Content-Type'};

	my $is_image;
	if ($content_type eq 'image/gif' ||
		$content_type eq 'image/pjpeg' ||
		$content_type eq 'image/jpeg' ||
		$content_type eq 'image/jpg' ||
		$content_type eq 'image/png') {

		$is_image = 1;
	}

	if (!$is_image) {
		show_error_page($q, "ファイル形式が不正です。($content_type)");
	}

	#アップロードされたファイル名が重複しないように名前を決定

	#日付と時刻の取得
	my ($sec, $min, $hour, $day, $month, $year) = localtime;
	$month = $month + 1;
	$year = $year + 1900;

	#0〜99999のランダムな数字を取得
	my $rand_num = int(rand 100000);

	#日付とランダムな数字からファイル名を決定
	#image-yyyymmddhhmmss-ランダム数値
	my $file = sprintf("image-%04s%02s%02s%02s%02s%02s-%05s",
		$year, $month, $day, $hour, $min, $sec, $rand_num);

	#ファイル名が既に存在する場合はファイル名を再設定
	while (-f "$image_dir/$file") {
		$rand_num = int(rand 100000);
		my $file = sprintf("image-%04s%02s%02s%02s%02s%02s-%05s",
			$year, $month, $day, $hour, $min, $sec, $rand_num);
	}

	#画像ファイル保存
	copy($fh, "$image_dir/$file")
		or die "Cannot copy: $!";

	#自分自身(スクリプト)にリダイレクト
	print $q -> redirect($ENV{SCRIPT_NAME});

} else {
	#ページにアクセスがあった場合の処理(GETメソッド,投稿内容表示)

	#画像ファイルのディレクトリからファイル名を取得
	my $dh;
	opendir $dh, $image_dir
		or die "Cannot open $image_dir: $!";

	my @files;
	while (my $file = readdir $dh) {
		#カレントディレクトリと親ディレクトリ以外のファイル名取得
		if ($file ne '.' && $file ne '..') {
			push @files, $file;
		}
	}

	closedir $dh;

	#画像ファイルを新しい順に並べ替える
	@files = sort {$b cmp $a} @files;

	#画像を表示するHTML作成
	my $embed_entries;
	foreach my $file (@files) {
		my $entry = <<"EOS";
<div>
	<hr>
	<div>画像: $file</div>
	<div>
		<img src = "/image/$file">
	</div>
</div>
EOS

		$embed_entries .= $entry
	}

	my $content = <<"EOS";
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html;charset=EUC-JP">
	<title>画像掲示板</title>
	</head>
	<body>
		<h1>画像掲示板</h1>
		<form method="post" action="file_upload.cgi" enctype="multipart/form-data">
			<div>
			ファイル名
			<input type="file" name="image">
			<input type="submit" value="ファイルアップロード">
			</div>
		</form>
		<div>
			$embed_entries
		</div>
	</body>
</html>
EOS

	print $q -> header;
	print $content;
}

#エラーメッセージ表示用サブルーチン
sub show_error_page {
	my ($q, $err_message) = @_;

	my $content = <<"EOS";
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html;charset=EUC-JP">
	<title>エラー</title>
	<body>
		$err_message
	</body>
</html>
EOS

	print $q -> header;
	print $content;
	exit;
}