class Second
    def initialize(player, uniform_number)
        @player = player
        @uniform_number = uniform_number
    end
end

class Second
    def initialize(digits)
        @digits = digits
    end
end

puts Second.new('Alice', 13)
puts Second.new(13)
