def currency_of(country)
    case country
    when :japan
        'yen'
    when :us
        'dollar'
    when :india
        'rupee'
    else
        # 意図的に例外を発生させる
        raise ArgumentError, "無効な国名です。#{country}"
    end
end

currency_of(:japan)
currency_of(:italy)
