module Baseball
    # これはBaseballモジュールに属するSedondクラス

    class Second
        def initialize(player, uniform_number)
            @player = player
            @uniform_number = uniform_number
        end
    end
end

module Clock
    # これはClockモジュールに属するSecondクラス

    class Second
        def initialize(digits)
            @digits = digits
        end
    end
end

puts Baseball::Second.new('Alice', 13)
puts Clock::Second.new(13)
