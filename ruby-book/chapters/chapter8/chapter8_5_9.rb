module Loggable
    def log(text)
        puts "[LOG] #{text}"
    end
end

s = 'abc'

# 文字列は通常logメソッドを持たない

# 文字列sにLoggableモジュールのメソッドを特異メソッドとしてミックスインする
s.extend(Loggable)

# Loggableモジュールのlogメソッドが呼び出せるようになる
s.log('hello')
