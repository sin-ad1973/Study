class NoCountryError < StandardError
    # 国名を属性として取得できるようにする
    attr_reader :country

    def initialize(message, country)
        @message = message
        @country = country
    end
end

def currency_of(country)
    case country
    when :japan
        'yen'
    when :us
        'dollar'
    when :india
        'rupee'
    else
        # NoCountryErrorを発生させる
        raise NoCountryError.new('無効な国名です', country)
    end
end

currency_of(:japan)
currency_of(:itary)
