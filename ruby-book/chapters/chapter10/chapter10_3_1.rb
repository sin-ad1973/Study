# ブロックオブジェクト生成
add_proc = Proc.new do |a, b|
    a + b
end

puts add_proc.call(1, 2)
