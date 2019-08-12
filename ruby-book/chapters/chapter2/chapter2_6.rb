def add(a, b)
    a + b
end

def greeting(country)
    
    return 'countryを指定して下さい' if country.nil?

    if (country == 'japan')
        'こんにちは'
    else
        'Hello'
    end
end

ret = add(1, 2)
puts ret

puts greeting(nil)
puts greeting('japan')

