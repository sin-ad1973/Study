#!/usr/bin/perl

use strict;
use warnings;
use CGI;
use CGI::Session;

my $q = CGI -> new;
$q -> charset('EUC-JP');

#ユーザー情報を格納するファイルを保存するディレクトリ
my $user_data_dir = "user_data";

#クッキーからセッションID取得
my $id = $q -> cookie('id');

#セッション管理のためのモジュール CGI::Session オブジェクト生成
#最初の訪問の場合はセッションIDが生成される
#2回目以降の訪問の場合はクッキーから取得したセッションIDを使用する
my $session = CGI::Session -> new("driver:File", $id, {Directory => $user_data_dir});

#セッションID取得
$id = $session -> id;

#ユーザーの訪問回数を取り出す
my $visit_cnt = $session -> param('visit_cnt');

#訪問回数を加算
$visit_cnt++;

#ユーザーの訪問回数をセッションに格納
$session -> param('visit_cnt', $visit_cnt);

#クッキーの作成(セッションIDを格納)
my $cookie = $q -> cookie(-name => 'id', -value => $id);

my $content = <<"EOS";
<html>
	<head>
		<meta-equiv="Content-Type" content="text/html;charset=EUC-JP">
		<title>セッション管理とクッキー</title>
	</head>
	<body>
		訪問回数：$visit_cnt
	</body>
</html>
EOS

#ヘッダにクッキーを設定して出力
print $q -> header(-cookie => $cookie);
print $content;

