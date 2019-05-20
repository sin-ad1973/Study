class Tempo
    include Comparable

    attr_reader :bpm

    # bpmはBeats Per Minuteの略で音楽の速さを表す単位
    def initialize(bpm)
        @bpm = bpm
    end

    # <=>はComparableモジュールで使われる演算子(メソッド)
    def <=>(other)
        if (other.is_a?(Tempo))
            # bpm同士を<=>で比較した結果を返す
            bpm <=> other.bpm
        else
            # 比較できない場合はnilを返す
            nill
        end
    end
end

t_120= Tempo.new(120)
t_180= Tempo.new(180)

puts t_120 > t_180
puts t_120 <= t_180
puts t_120 == t_180

tempos = [ Tempo.new(180), Tempo.new(60), Tempo.new(120)]
p tempos.sort
