b = 'Alice'

# ヒアドキュメント1 #############
a = <<TEXT
Hello,
I am #{b}
TEXT

puts(a)

# ヒアドキュメント2 #############
a = <<~TEXT
    Hello,
    I am #{b}
TEXT

puts(a)

# フォーマット #############
puts(sprintf('%0.3f', 1.2))
puts(sprintf('%0.3f + %0.3f', 1.2, 0.48))
