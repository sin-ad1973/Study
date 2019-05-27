def greeting(proc1, proc2, proc3)
    puts proc1.call('おはよう')
    puts proc2.call('こんにちは')
    puts proc3.call('こんばんは')
end

# Procオブジェクトを作成し、それをブロックの代わりにgreetingメソッドに渡す
shuffle_proc = Proc.new { |text| text.chars.shuffle.join }
repeat_proc = Proc.new { |text| text * 2 }
question_proc = Proc.new { |text| "#{text}?" }
greeting(shuffle_proc, repeat_proc, question_proc)
