#!/usr/bin/perl

use strict;
use warnings;
use DBI;
use CGI;
use lib "/home/sin-ad1973/perl5/lib/perl5/";
use JSON;
use XML::Simple;
use Data::Dumper;

# PRINT HTML
print "Content-type: text/html;charset=UTF-8\n";
print "\n";
print "<html>\n";
print "<head>\n";
print "<title>JSON TEST</title>\n";
print "</head>\n";
print "<body>\n";
print "JSON TEST<br><br>\n";

my $cgi = CGI->new();
my $user = 'sin-ad1973';
my $passwd = 'c3993955';

my $menu_config = getMenuConfig();
my %data_config = getDataConfig($user, $passwd);

# CREATE RETURN OBJECT
my %result;
$result{"menu_config"} = $menu_config;
$result{"data_config"} = \%data_config;

# CONVERT TO JSON
my $JSON = encode_json(\%result);

print $JSON;

# PRINT HTML
print "</body>\n";
print "</html>\n";

##########################
# CREATE DATA CONFIG     #
##########################
sub getMenuConfig {
  my $menu_config_xml = XMLin("./data_file/test.xml");
}

sub getMenuConfigTest {
  my $menu_config_hash;
  $menu_config_hash = XMLin("./data_file/test.xml");
  
  #my $items = $menu_config_hash->{"item"};

  #my %menu_config;
  #foreach my $key(keys(%{$items})) {
  #  print "$key<br>";
	
	#%menu_confing{$key}
	#my $co
	#foreach my $key2(keys(
  #}

  
  #$menu_config_hash = Dumper($menu_config_hash);
  #print my $menu_config_json = JSON->new->utf8(0)->encode($menu_config_hash);
}

##########################
# CREATE DATA CONFIG     #
##########################
sub getDataConfig {
  my ($user, $passwd) = @_;
  my $db = DBI->connect('DBI:mysql:sin-ad1973_test:mysql451.db.sakura.ne.jp', $user, $passwd) || CgiError("connect",$DBI::errstr);
  my $sth = $db->prepare("select data_name, owner from test order by data_name");

  $sth->execute or die "取得失敗:$DBI::errstr\n";

  my $current_data_name = "";
  my $i = 0;
  my %data_config;
  while (my @ref = $sth->fetchrow_array) {
    if ($i == 0) {
	  $current_data_name = $ref[0];
	  $data_config{$current_data_name} = [$ref[1]];

	  $i = $i + 1;
	  
	} elsif ($current_data_name eq $ref[0]) {
	  push(@{$data_config{$current_data_name}}, $ref[1]);

	} else {
	  $current_data_name = $ref[0];
	  $data_config{$current_data_name} = [$ref[1]];
	}
  }
  $sth->finish;
  $db->disconnect;
  %data_config;
}
