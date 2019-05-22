begin
    'abc'.foo
rescue ZeroDivisionError
    puts "0で除算しました"
rescue NoMethodError
    puts "存在しないメソッドが呼び出されました"
end
