module Loggable
    # 特異メソッドとしてメソッドを定義する
    class << self
        def log(text)
            puts "[LOG] #{text}"
        end
    end
end

# 他のクラスにミックインしなくてもモジュール単体でそのメソッドを呼び出せる
Loggable.log('Hello')
