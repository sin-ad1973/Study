class Product

    # クラスインスタンス変数
    @name = 'Product'

    def self.name
        # クラスインスタンス変数を参照
        @name
    end

    def initialize(name)
        # インスタンス変数
        @name = name
    end

    def name
        # インスタンス変数を参照
        @name
    end
end

class DVD < Product

    # クラスインスタンス変数
    @name = 'DVD'

    def self.name
        # クラスインスタンス変数を参照
        @name
    end

    def initialize(name)
        # インスタンス変数
        @name = name
    end

    def name
        # インスタンス変数を参照
        @name
    end
end

puts Product.name
puts DVD.name

product = Product.new('A great movie')
puts product.name

dvd = DVD.new('An awesome film')
puts dvd.name
