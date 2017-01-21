#!/usr/bin/perl

use strict;
use warnings;
use CGI;

#CGIオブジェクト生成
my $q = CGI -> new;

#HTTPヘッダ出力(文字コード指定)
$q -> charset('EUC-JP');
print $q -> header;

#環境変数の出力
my $content = <<"EOF";
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=EUC-JP">
		<title>タイトル</title>
	</head>
	<body>
		こんにちは
	</body>
</html>
EOF

print $content;
