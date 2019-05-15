class Product
    SOME_NAMES = ['Foo', 'Bar', 'Baz'].freeze

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
