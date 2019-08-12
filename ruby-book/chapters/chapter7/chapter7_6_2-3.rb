class User
end

user = User.new
puts user.class
puts User.superclass

puts user.instance_of?(User)
puts user.instance_of?(String)

puts user.is_a?(User)
puts user.is_a?(Object)
puts user.is_a?(BasicObject)

puts user.is_a?(String)