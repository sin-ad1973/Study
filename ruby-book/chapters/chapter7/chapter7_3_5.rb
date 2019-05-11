# 7.3.5

class Product

    # 定数
    DEFAULT_PRICE = 0

    attr_reader :name, :price

    def initialize(name, price = DEFAULT_PRICE)
        @name = name
        @price = price
    end
end

procuct = Product.new('A free movie')
puts procuct.price
