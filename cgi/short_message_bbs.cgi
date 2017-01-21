#!/usr/bin/perl

use strict;
use warnings;
use CGI;
use Encode;

#CGIオブジェクト生成
my $q = CGI -> new;

#文字コード設定
$q -> charset('EUC-JP');

#投稿内容保存ファイル
my $data_file = "./data_file/bbs_data.txt";

#掲示板の送信ボタンが押された場合の処理(投稿内容保存)
if ($ENV{REQUEST_METHOD} eq 'POST') {

	#フォームから送信されたデータを取得
	my $title = $q -> param('title');
	my $message = $q -> param('message');

	#タイトルが無い場合はエラーページ表示
	if (!$title) {
		show_error_page($q, "タイトルを入力して下さい");
	}

	#メッセージが無い場合はエラーページ表示
	if (!$message) {
		show_error_page($q, "メッセージを入力して下さい");
	}

	#文字列をperlの内部形式に変換する
	$title = decode('EUC-JP', $title);
	$message = decode('EUC-JP', $message);

	#タイトルの文字数をチェック
	if (length $title > 30) {
		show_error_page($q, "タイトルが長すぎます");
	}

	#メッセージの文字数をチェック
	if (length $message > 100) {
		show_error_page($q, "メッセージがながすぎます");
	}

	#日付と時刻の取得
	my ($sec, $min, $hour, $day, $month, $year) = localtime;
	$month = $month + 1;
	$year = $year + 1900;

	#日付フォーマット(YYYY/mm/dd hh:mm:ss)
	my $datetime = sprintf("%04s/%02s/%02s %02s:%02s:%02s",
				$year, $month, $day, $hour, $min, $sec);

	#データを保存しやすい形に加工する
	my $record = join("\t", $datetime, $title, $message)."\n";

	#追加書き込みでファイルオープン
	my $data_fh;
	open $data_fh, ">>", $data_file
		or die "Cannot open $data_file: $!";

	#ファイルに出力する前に文字列を内部形式から復元
	$record = encode('EUC-JP', $record);

	#データ書き込み
	print $data_fh $record;

	close $data_fh;

	#自分自身(スクリプト)にリダイレクト
	print $q -> redirect($ENV{SCRIPT_NAME});

} else {
	#ページにアクセスがあった場合の処理(GETメソッド,投稿内容表示)

	#データファイルオープン
	my $data_fh;
	open $data_fh, "<", $data_file
		or die "Cannot open $data_file: $!";

	#データ読み込み
	my $entry_infos = [];
	while (my $line = <$data_fh>) {
		chomp $line;
		my @items = split /\t/, $line;

		my $entry_info = {};
		$entry_info -> {datetime} = $items[0];
		$entry_info -> {title} = $items[1];
		$entry_info -> {message} = $items[2];

		push @{$entry_infos}, $entry_info;
	}
	close $data_fh;

	#データを新しい順に並べ替える
	@{$entry_infos} = reverse @{$entry_infos};

	#表示する書き込み内容作成
	my $embed_entries;
	foreach my $entry_info (@{$entry_infos}) {
		#HTMLエスケープ
		my $datetime = $q -> escapeHTML($entry_info -> {datetime});
		my $title = $q -> escapeHTML($entry_info -> {title});
		my $message = $q -> escapeHTML($entry_info -> {message});

		my $entry = <<"EOS";
<div>
	<hr>
	<div>タイトル: $title ($datetime)</div>
	<div>メッセージ</div>
	<div>$message</div>
</div>
EOS

		$embed_entries .= $entry
	}

	my $content = <<"EOS";
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html;charset=EUC-JP">
	<title>一言メッセージ掲示板</title>
	</head>
	<body>
		<h1>一言メッセージ掲示板</h1>
		<form method="post" action="short_message_bbs.cgi">
			<div>
			タイトル
			<input type="text" name="title">
			</div>
			<div>
			メッセージ
			<textarea name="message" cols="50" rows="10"></textarea>
			</div>
			<div>
			<input type="submit" value="送信">
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