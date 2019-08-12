# Proc.newの作成と実行
add_proc = Proc.new { |a, b| a + b }
puts add_proc.call(1, 2)

# ラムダの作成と実行
add_lambda = -> (a, b) { a + b }
puts add_lambda.call(1, 2)
