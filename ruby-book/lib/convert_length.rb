# 1mは1.0meter, 1mは3.28feet, 1mは39.37inch
UNITS = { m: 1.0, ft: 3.28, in: 39.37 }

def convert_length(length, from: m, to: m)
    (length / UNITS[from] * UNITS[to]).round(2)
end
