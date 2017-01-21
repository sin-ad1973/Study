#!/usr/bin/perl

use strict;
use warnings;
use CGI;

#CGIオブジェクト生成
my $q = CGI->new;

#HTTPヘッダ出力
print $q -> header;

my $title = "Title";
my $message = "Helo World";

#ヒアドキュメント
my $content = <<"EOS";
<html>
	<head>
		<title>$title</title>
	</head>
	<body>
		<h1>$message</h1>
	</body>
</html>
EOS

print $content;

