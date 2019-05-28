# クロージャ
def generate_proc(array)
    counter = 0
    Proc.new do
        counter += 10
        array << counter
    end
end

values = []
sample_proc = generate_proc(values)
p values

sample_proc.call
p values

sample_proc.call
p values
