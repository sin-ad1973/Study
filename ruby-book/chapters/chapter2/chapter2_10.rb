country = 'japan'

message = 
 case country
 when 'japan'
    'こんにちは'
 when 'us'
    'Hello'
 when 'italy'
    'ciao'
 else
    '???'
 end

puts message

#------------------------------
puts

n = 11
message = n > 10 ? '10より大きい' : '10以下'
puts message
