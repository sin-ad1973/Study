class User

    def hello
        "Hello, #{self.name}."
    end

    private

    def name
        'Alice'
    end
end

user = User.new
user.hello
