# 7.3.1〜7.3.3

class User1
    def initialize(name)
        @name = name
    end

    def hello
        "Hello, #{@name}"
    end
end
user1 = User1.new('Alice');
puts user1.hello



class User2
    def initialize(name)
        @name = name
    end

    # getter
    def name
        @name
    end

    # setter
    def name=(value)
        @name = value
    end

    def hello
        "Hello, #{@name}"
    end
end
user2 = User2.new('Alice')
user2.name = 'Carol'
puts user2.hello



class User3
    # @nameを読み書きするメソッドが自動的に定義される
    attr_accessor :name

    def initialize(name)
        @name = name
    end

    def hello
        "Hello, #{@name}"
    end
end
user3 = User3.new('Alice')
user3.name = 'Hupty'
puts user3.hello



class User4
    # @nameを読み取り専用として定義する
    attr_reader :name
    
    def initialize(name)
        @name = name
    end

    def hello
        "Hello, #{@name}"
    end
end
user4 = User4.new('Alice')
# 書込み不可のため以下はエラーになる
# user4.name = 'Dumpty'
puts user4.hello



class User5
    # @nameを書込み専用として定義する
    attr_writer :name
    
    def initialize(name)
        @name = name
    end

    def hello
        "Hello, #{@name}"
    end
end
user5 = User5.new('Alice')
user5.name = 'Dumpty'
puts user5.hello
# 読込み不可のため以下はエラーになる
# user5.name



class User6
    attr_accessor :name, :age

    def initialize(name, age)
        @name = name
        @age = age
    end
end
user6 = User6.new('Alice', 20)
puts user6.name
puts user6.age
