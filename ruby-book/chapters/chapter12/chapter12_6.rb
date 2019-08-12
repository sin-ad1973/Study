# 文字列としてRubyのコードを記述する
code = '[1, 2, 3].map { |n| n * 10 }'

# evalメソッドに渡すと、文字列がRubyのコードとして実行されr
puts eval(code)
puts ''


# OSのcatコマンドでテキストファイルの中身を表示する
puts `cat ../../lib/fizz_buzz.rb`



str = 'a,b,c'

# str.upcaseを呼ぶのと同じ
puts str.send('upcase')
# str.splitを呼ぶのと同じ
puts str.send('split', ',')
