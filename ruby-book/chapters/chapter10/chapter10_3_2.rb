def greeting(&block)
    puts 'おはよう'
    text = block.call('こんには')
    puts text
    puts 'こんばんは'
end

# Procオブジェクトを作成し、それをブロックの代わりにgreetingメソッドに渡す
repeat_block = Proc.new { |text| text * 2}
greeting(&repeat_block)
