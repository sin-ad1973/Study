class Product
    # SOME_NAMES = ['Foo', 'Bar', 'Baz']
    # SOME_NAMES = ['Foo', 'Bar', 'Baz'].freeze
    SOME_NAMES = ['Foo', 'Bar', 'Baz'].map {|n| n.freeze}.freeze

    def self.names_without_foo(names = SOME_NAMES)
        names.delete('Foo')
        names
    end

    def self.names_change_foo(names = SOME_NAMES)
        names[0].upcase!
        names
    end
end

# puts Product.names_without_foo
puts Product.names_change_foo
