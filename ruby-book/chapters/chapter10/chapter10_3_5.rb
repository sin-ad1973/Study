# Proc.newの場合
add_proc = Proc.new { |a, b| a + b }
puts add_proc.class
puts add_proc.lambda?

# ラムダの場合
add_lambda = -> (a, b) { a + b }
puts add_lambda.class
puts add_lambda.lambda?
