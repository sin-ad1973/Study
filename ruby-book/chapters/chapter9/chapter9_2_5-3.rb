begin
    'abc'.foo
rescue ZeroDivisionError, NoMethodError => e
    puts "0で除算したか、存在しないメソッドが呼び出されました"
    puts "エラークラス：#{e.class}"
    puts "エラーメッセージ：#{e.message}"
end
