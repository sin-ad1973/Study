module Loggable
    def log(text)
        puts "[LOG] #{text}"
    end

    # logメソッドをミックスインとしてもモジュールの特異メソッドとしても使えるようにする
    module_function :log
end

# モジュールの特異メソッドとして呼び出し
Loggable.log('Hello')


# Loggableモジュールをincludeしたクラスを定義する
class Product
    include Loggable

    def title
        # includeしたLoggableモジュールのlogメソッドを呼び出す
        log('tile is called.')
    end
end

product = Product.new
product.title

