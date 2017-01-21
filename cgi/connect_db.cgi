#!/usr/bin/perl

use strict;
use warnings;
use DBI;

print "Content-type: text/html;charset=EUC-JP\n";
print "\n";

print "<html>\n";
print "<head>\n";
print "<title>CGI-DB接続テスト</title>\n";
print "</head>\n";
print "<body>\n";
print "CGI-DB接続テスト<br><br>\n";


my $user = 'sin-ad1973';
my $passwd = 'c3993955';
my $db = DBI->connect('DBI:mysql:sin-ad1973_test:mysql451.db.sakura.ne.jp', $user, $passwd) || CgiError("connect",$DBI::errstr);

print "接続に成功しました<BR>\n";

my $sth = $db->prepare("select * from test");

$sth->execute or die "取得失敗:$DBI::errstr\n";


my $num_rows = $sth->rows;
print "該当 $num_rows 件<BR>\n";
for (my $i=0; $i<$num_rows; $i++) {
	my @a = $sth->fetchrow_array;
	print "id=$a[0], name=$a[1] <BR>\n";
}

print "取得成功<BR>\n";

$sth->finish;
$db->disconnect;

print "</body>\n";
print "</html>\n";