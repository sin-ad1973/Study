module Taggable
    def price_tag
        # priceメソッドはinclude先で定義されているはず、という前提
        "#{price}円"
    end
end

class Product
    include Taggable

    def price
        1000
    end
end

puts Product.include?(Taggable)
product = Product.new
puts product.class.include?(Taggable)
puts product.is_a?(Taggable)

puts product.price_tag
