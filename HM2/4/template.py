import numpy as np
from sympy import Integer, false


def vandermonde_interpolation(x, y):
    vandermonde = []
    for xi in x:
        row = []
        for i in range(len(x)):
            row.append(xi ** i)
        vandermonde.append(row)

    a = np.linalg.solve(vandermonde, y)

    return lambda k : sum(a[i] * (k ** i) for i in range(len(a)))

def lagrange_interpolation(x, y):
    return lambda k : sum(y[i] * sigma([(k - x[j]) / (x[i] - x[j]) for j in range(len(x)) if i!= j]) for i in range(len(x)))

def sigma(x):
    result = x[0]
    for i in range(1, len(x)):
        result *= x[i]
    return result