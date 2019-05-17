# モジュール
module Loggable
    def log(text)
        puts "[LOG] #{text}"
    end
end

class Product
    # extendによりクラス(特異)メソッドとしてミックスインする
    extend Loggable

    def self.title
        log 'title is called'
        puts 'A great movie'
    end
end

class User
    # extendによりクラス(特異)メソッドとしてミックスインする
    extend Loggable

    def self.name
        log 'name is called'
        puts 'Alice'
    end
end

Product.title
User.name

