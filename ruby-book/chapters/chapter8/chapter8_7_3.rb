module Loggable
    # 定数を定義する
    PREFIX = '[LOG]'.freeze

    def log(text)
        puts "#{PREFIX} #{text}"
    end
end

puts Loggable::PREFIX
