class Product
    attr_reader :name, :price

    def initialize(name, price)
        @name = name
        @price = price
    end

    def self.format_price(price)
        "#{price}円"
    end

    def to_s
        formatted_price = Product.format_price(price)
        puts "name: #{name}, price: #{formatted_price}"
    end
end

product = Product.new('A great movie', 1000)
product.to_s
