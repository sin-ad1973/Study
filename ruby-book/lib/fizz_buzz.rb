def fizz_buxx(n)
    if (n % 15 == 0)
        'Fizz Buzz'
    elsif (n % 5 == 0)
        'Buzz'
    elsif (n %3 == 0)
        'Fizz'
    else
        n.to_s
    end
end

puts(fizz_buxx(1))
puts(fizz_buxx(3))
puts(fizz_buxx(5))
puts(fizz_buxx(15))
puts(fizz_buxx(33))
puts(fizz_buxx(40))
puts(fizz_buxx(30))
