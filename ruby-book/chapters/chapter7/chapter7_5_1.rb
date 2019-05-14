class User
    attr_accessor :name

    def initialize(name)
        @name = name
    end

    def rename_to_bob
        # selfなしでname=メソッドを呼ぶ(?)
        name = 'Bob'
    end

    def rename_to_carol
        # self付きでname=メソッドを呼ぶ
        self.name = 'Carol'
    end

    def rename_to_dave
        # 直接インスタンス変数を置き換える
        @name = 'Dave'
    end
end

user = User.new('Alice')
user.rename_to_bob
puts user.name
user.rename_to_carol
puts user.name
user.rename_to_dave
puts user.name
