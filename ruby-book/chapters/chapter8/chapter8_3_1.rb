# モジュール
module Loggable

    private
    def log(text)
        puts "[LOG] #{text}"
    end
end

class Product
    include Loggable

    def title
        log 'title is called'
        puts 'A great movie'
    end
end

class User
    include Loggable

    def name
        log 'name is called'
        puts 'Alice'
    end
end

product = Product.new
product.title

user = User.new
user.name

