def hn(a,b,n):
    return (b - a) / n

def xi(a, i, h):
    return a + i * h

def rechtecksregel(a, b, n, f):
    h = hn(a, b, n)
    print(h)
    return h * sum(f(xi(a, i, h) + (h / 2)) for i in range(0, n))

def trapezregel(a, b, n, f):
    h = hn(a, b, n)
    print(h)
    return h * ((f(a) + f(b)) / 2 + sum(f(xi(a, i, h)) for i in range(1, n)))

def simpsonsregel(a, b, n, f):
    h = hn(a, b, n)
    return (h / 3) * (f(a) / 2 + sum(f(xi(a, i, h)) for i in range(1, n)) + 2 * sum((f(xi(a, i-1, h)) + f(xi(a, i, h))) / 2 for i in range(1, n+1)) + f(b) / 2)

def trapez_punkte(x,y):
    Tf = 0
    for i in range(len(x) - 1):
        Tf += (y[i] + y[i + 1]) / 2 * (x[i + 1] - x[i])
    return Tf
