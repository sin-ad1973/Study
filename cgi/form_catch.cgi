#!/usr/bin/perl

use strict;
use warnings;
use CGI;

#CGIオブジェクト生成
my $q = CGI -> new;
$q -> charset('EUC-JP');

#Form受け取り
my $message = $q -> param('message');

$message = $q -> escapeHTML($message);

#HTTPヘッダ出力
print $q -> header;

my $contents = <<"EOF";
<html>
	<head>
		<meta http-equiv="Contents-Type" content="text/html;charset=EUC-JP">
		<title>Form受け取り</title>
	</head>
	<body>
		<center>$message</center>
	</body>
</html>
EOF

print $contents;
