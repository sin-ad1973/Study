class User
    puts self

    def self.bar
        puts "クラスメソッド内のself: #{self}"
    end

    def baz
        puts "インスタンスメソッド内のself: #{self}"
    end
end

puts User.bar

user = User.new
user.baz
