#!/usr/bin/perl

use strict;
use warnings;
use CGI;
use Encode;
use lib '~/perl5/lib/perl5/';
use HTML::Template;

#CGIオブジェクト生成
my $q = CGI -> new;

$q -> charset('EUC-JP');

#HTML::Templateオブジェクト生成
my $tmpl = HTML::Template -> new(filename => './tmpl/sample.tmpl');

#データ埋め込み
$tmpl -> param(message => 'こんにちは');

#埋め込み後のHTML出力
print $q -> header;
print $tmpl -> output;
