class User
    attr_reader :name, :weight

    def initialize(name, weight)
        @name = name
        @weight = weight
    end

    def heavier_than?(other_user)
        # protectedメソッドならばレシーバ(ここではother_user)付きで呼び出せるs
        other_user.weight < @weight
    end

    protected
    def weight
        @weight
    end
end

alice = User.new('Alice', 50)
bob = User.new('Bob', 60)

puts alice.heavier_than?(bob)
puts bob.heavier_than?(alice)
