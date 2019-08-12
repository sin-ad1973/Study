# 例外が発生しない場合
ret = 1 / 1 rescue 0
puts ret

# 例外が発生する場合
ret = 1 / 0 rescue 0
puts ret
