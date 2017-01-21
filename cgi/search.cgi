#!/usr/bin/perl

use strict;
use warnings;
use CGI;
use Encode;
use Scalar::Util qw(looks_like_number);
use URI;

#CGIオブジェクト生成
my $q = CGI -> new;

#文字コードの設定
$q -> charset("EUC-JP");

#情報保存ファイル
my $data_file = "./data_file/person_data.txt";

#パス情報を取得
my $path_info = $q -> path_info;

#出力するHTML
my $content;


if ($path_info eq '/resist') {
	#登録画面表示
	$content = create_resist_content($q);

} elsif ($path_info eq '/post') {
	#登録処理
	post_entry($q, $data_file);

	#検索画面にリダイレクト
	print $q -> redirect($q -> script_name);
	exit;

} elsif ($path_info eq '/error') {
	#エラー画面表示
	$content = create_error_content($q);

} elsif ($path_info eq '/search-result') {
	#検索結果画面表示
	$content = create_search_result_content($q, $data_file);

} else {
	#検索画面表示
	$content = create_search_content($q);

}

#HTML出力
print $q -> header;
print $content;



#登録画面表示 処理
sub create_resist_content {

	#パラメータ受取
	my $q = shift;

	#登録処理URL生成
	my $post_url = $q -> script_name . '/post';

	#検索画面URL生成
	my $search_page_url = $q -> script_name . '/search';

	#登録画面HTML
	my $content=<<"EOS";
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=EUC-JP">
		<title>簡易検索システム</title>
	</head>
	<body>
		<h1>簡易検索システム</h1>
		<form method="post" action="$post_url">
			<div>
			情報を登録します
			</div>
			<div>
			氏名
			<input type="text" name="name">
			</dif>
			<div>
			身長
			<input type="text" name="height">
			</div>
			<div>
			<input type="submit" value="登録">
			</div>
		</form>
		<div>
			<a href="$search_page_url">検索画面へ</a>
		</div>
	</body>
</html>
EOS
	return $content;
}


#登録処理
sub post_entry {

	#パラメータ受取
	my ($q, $data_fle) = @_;

	#氏名(デコード)
	my $name = decode('EUC-JP', $q -> param('name'));

	#氏名入力チェック
	if (!$name) {
		#エラーページにリダイレクト
		my $error = "氏名を入力して下さい。";
		redirect_error_page($error);
	}

	#身長(デコード)
	my $height = decode('EUC-JP', $q -> param('height'));

	#身長 数値チェック
	if (!looks_like_number($height)) {
		#エラーページにリダイレクト
		my $error = "身長は数値で入力して下さい。";
		redirect_error_page($error);
	}

	#ファイルオープン
	open my $fh, ">>", $data_file
		or die "Cannot open $data_file: $!";

	#出力前エンコード
	$name = encode('EUC-JP', $name);
	$height = encode('EUC-JP', $height);

	#出力行作成
	my $line = join("\t", $name, $height) . "\n";

	#ファイル出力
	print $fh $line;

	#ファイルクローズ
	close $fh;

	#検索ページにリダイレクト
	print $q -> redirect($q -> script_name);
}


#検索画面表示 処理
sub create_search_content {

	#パラメータ受取
	my $q = shift;

	#検索結果画面URL生成
	my $search_result_url = $q -> script_name . '/search-result';

	#登録画面URL生成
	my $resist_page_url = $q -> script_name . '/resist';

	#検索画面HTML
	my $content=<<"EOS";
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=EUC-JP">
		<title>簡易検索システム 検索画面</title>
	</head>
	<body>
		<h1>簡易検索システム 検索画面</h1>
		<form method="get" action="$search_result_url">
			<div>
			情報を検索します
			</div>
			<div>
			身長
			<input type="text" name="height-min">〜
			<input type="text" name="height-max">
			</div>
			<div>
			<input type="submit" value="検索">
			</div>
		</form>
		<div>
		<a href="$resist_page_url">登録画面へ</a>
		</div>
	</body>
</html>
EOS
	return $content;
}


#検索処理 及び 検索結果画面表示 処理
sub create_search_result_content {

	#パラメータ受取
	my ($q, $data_file) = @_;

	#検索条件取得(デコード)
	my $height_min = decode("EUC-JP", $q -> param('height-min'));
	my $height_max = decode("EUC-JP", $q -> param('height-max'));

	#身長数値チェック
	if (!looks_like_number($height_min) || !looks_like_number($height_max)) {
		#エラーページにリダイレクト
		my $error = "身長の範囲を数値で入力して下さい。";
		redirect_error_page($error);
	}

	#ファイルオープン
	open my $fh, "<", $data_file
		or die "Cannot open $data_file: $!";

	#検索にマッチしたデータを取得
	my $match_persons = [];
	while (my $line = <$fh>) {

		#改行削除
		chomp $line;

		#行分解
		my @items = split("\t", $line);

		#人物情報ハッシュ(リファレンス)
		my $person = {};
		$person -> {name} = $items[0];
		$person -> {height} = $items[1];

		#条件にマッチした場合は追加
		if ($person -> {height} >= $height_min && 
			$person -> {height} <= $height_max) {

			push @{$match_persons}, $person;
		}
	}

	#検索結果HTML生成(レコード毎)
	my $embed_entries;
	foreach my $person (@{$match_persons}) {

		my $name = $q -> escapeHTML($person -> {name});
		my $height = $q -> escapeHTML($person -> {height});

		my $entry=<<"EOS";
<div>
	<hr>
	<div>氏名: $name</div>
	<div>身長: $height</div>
</div>
EOS
		$embed_entries .= $entry;

	}

	#検索画面URL生成
	my $search_page_url = $q -> script_name . '/search';

	#登録画面URL生成
	my $resist_page_url = $q -> script_name . '/resist';

	#検索結果HTML生成
	my $content=<<"EOS";
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=EUC-JP">
		<title>簡易検索システム 検索結果</title>
	</head>
	<body>
		<h1>簡易検索システム 検索結果</h1>
		<div>
			<a href="$search_page_url">検索画面へ</a>
			<a href="$resist_page_url">登録画面へ</a>
		</div>
		<div>
			$embed_entries
		</div>
	</body>
</html>
EOS
	#ファイルクローズ
	close $fh;

	return $content;
}

#エラー画面リダイレクト 処理
sub redirect_error_page {

	#パラメータ受取
	my $error_message = shift;

	#エラー画面を表示するページのURL生成
	my $error_page_url = URI -> new($q -> script_name . '/error');

	#エラーメッセージをクエリ文字列に設定
	$error_page_url -> query_form({error => $error_message});

	#URLを文字列に変換
	my $error_page_url_as_string = $error_page_url -> as_string;

	#リダイレクト
	print $q -> redirect($error_page_url_as_string);
	exit;
}

#エラー画面表示 処理
sub create_error_content {

	#パラメータ受取
	my $q = shift;
	my $error = $q -> param('error');

	#エラー画面HTML
	my $content=<<"EOS";
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=EUC-JP">
		<title>簡易検索システム エラー画面</title>
	</head>
	<body>
		$error
	</body>
</html>
EOS
	return $content;
}
