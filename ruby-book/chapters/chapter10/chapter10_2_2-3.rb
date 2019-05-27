def greeting(&block)
    puts 'おはよう'
    text = 
    if block.arity == 1
        # ブロック引数が1個の場合
        yield 'こんにちは'
    elsif block.arity == 2
        # ブロック引数が2個の場合
        yield 'こんに', 'ちは'
    end
    puts text
    puts 'こんばんは'
end



# 1個のブロック引数でメソッドを呼び出す
greeting do |text|
    text * 2
end

# 2個のブロック引数でメソッドを呼び出す
greeting do |text1, text2|
    text1 * 2 + text2 * 2
end

