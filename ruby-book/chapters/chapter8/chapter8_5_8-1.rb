module NameChanger
    def change_name
        # include先のクラスのインスタンス変数を変更する
        @name = 'アリス'
    end
end

class User
    include NameChanger

    attr_reader :name

    def initialize(name)
        @name = name
    end
end

user = User.new('Alice')
p user.name

# モジュールで定義したメソッドでインスタンス変数を書き換える
user.change_name
p user.name
