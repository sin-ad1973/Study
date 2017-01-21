#!/usr/bin/perl

use strict;
use warnings;
use CGI;

#CGIオブジェクト生成
my $q = CGI -> new;
$q -> charset('EUC-JP');

#Form受け取り
my $name = $q -> param('name');
my $sex = $q -> param('sex');
my $job = $q -> param('job');
my $message = $q -> param('message');

my @hobbys = $q -> param('hobby');
my $hobby = join(',', @hobbys);
my @foods = $q -> param('food');
my $food = join(',', @foods);

$name = $q -> escapeHTML($name);
$sex = $q -> escapeHTML($sex);
$job = $q -> escapeHTML($job);
$hobby = $q -> escapeHTML($hobby);
$food = $q -> escapeHTML($food);
$message = $q -> escapeHTML($message);

#HTTPヘッダ出力
print $q -> header;

my $contents = <<"EOF";
<html>
	<head>
		<meta http-equiv="Contents-Type" content="text/html;charset=EUC-JP">
		<title>Form受け取り2</title>
	</head>
	<body>
		<div>
			名前：$name
		</div>
		<div>
			性別：$sex
		</div>
		<div>
			趣味：$hobby
		</div>
		<div>
			職業：$job
		</div>
		<div>
			好きな食べ物：$food
		</div>
		<div>
			メッセージ：$message
		</div>
</body>
</html>
EOF

print $contents;
