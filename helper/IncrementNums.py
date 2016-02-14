# Reads input line by line and increments all numbers
# pre: input is provided
line = raw_input()
while line:
    num = ""
    first = ""
    second = ""
    for c in line:
        if c.isdigit():
            num += c
        elif not num:
            first += c
        else:
            second += c
    num = str(int(num) + 1)
    print first + num + second
    try:
        line = raw_input()
    except (EOFError):
        break #end of file reached
