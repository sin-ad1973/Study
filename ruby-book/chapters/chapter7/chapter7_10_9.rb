# ダックタイピング

class Product
    def initialize(name, price)
        @name = name
        @price = price
    end

    def display_text
        # stock?メソッドはサブクラスで実装する想定
        stock = stock? ? 'あり' : 'なし'
        "商品名: #{@name} 価格: #{@price}円 在庫: #{stock}"
    end
end

class DVD < Product
    # 在庫があればtrueを返す
    def stock?
        true
    end
end

product = Product.new('A great film', 1000)
# 下記はエラーになる
# puts product.display_text

dvd = DVD.new('An awesom film', 3000)
puts dvd.display_text
