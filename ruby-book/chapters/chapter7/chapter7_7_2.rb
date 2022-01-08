class User

    def hello
        # private methodをself付きで呼び出せない
        # puts "Hello, #{self.name}."
        # selfを付けないで呼び出す
        puts "Hello, #{name}."
    end

    private

    def name
        'Alice'
    end
end

user = User.new
user.hello
