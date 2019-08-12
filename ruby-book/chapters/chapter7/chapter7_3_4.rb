# 7.3.4

class User
    def initialize(name)
        @name = name
    end

    # self.を付けるとクラスメソッド
    def self.create_users(names)
        names.map do |n|
            User.new(n)
        end
    end

    # これはインスタンスメソッド
    def hello
        "Hello, #{@name}"
    end
end

users = User.create_users(['Alice', 'Carol', 'Hupty'])
users.each do |n|
    puts n.hello
end

