reverse_proc = Proc.new { |s| s.reverse }
p ['Ruby', 'Java', 'Perl'].map(&reverse_proc)



split_proc = :split.to_proc
p split_proc.call('a-b-c d')
p split_proc.call('a-b-c d', '-')
