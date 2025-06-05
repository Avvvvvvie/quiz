import numpy as np
from scipy.interpolate import CubicSpline
import matplotlib.pyplot as plt
from sympy import factorial


def natural_cubic_spline(x, y):
    def compute_c(y, h):
        n = len(y) - 1

        if n < 2:
            return np.zeros(n + 1)

        # Build tridiagonal matrix A and right-hand side vector z
        A = np.zeros((n - 1, n - 1))
        z = np.zeros(n - 1)

        for i in range(n - 1):
            hi = h[i]
            hi1 = h[i + 1]

            if i > 0:
                A[i, i - 1] = h[i]  # sub-diagonal
            A[i, i] = 2 * (hi + hi1)  # diagonal
            if i < n - 2:
                A[i, i + 1] = hi1  # super-diagonal

            z[i] = 3 * (y[i + 2] - y[i + 1]) / hi1 - 3 * (y[i + 1] - y[i]) / hi

        # Solve for internal c values
        c_inner = np.linalg.solve(A, z)

        # Add boundary conditions c_0 = 0 and c_n = 0
        c = np.zeros(n + 1)
        c[1:n] = c_inner

        return c

    a = np.array(y[0:-1])
    h = np.array([x[i + 1] - x[i] for i in range(len(x) - 1)])
    c = compute_c(y, h)

    b = np.array([
        (y[i + 1] - y[i]) / h[i] - h[i] / 3 * (c[i + 1] + 2 * c[i])
        for i in range(len(h))
    ])

    d = np.array([
        (c[i + 1] - c[i]) / (3 * h[i])
        for i in range(len(h))
    ])

    def get_function(k):
        i = min(max(np.searchsorted(x, k) - 1, 0), len(x) - 2)
        return a[i] + b[i] * (k - x[i]) + c[i] * (k - x[i])**2 + d[i] * (k - x[i])**3

    return lambda xx : [get_function(k) for k in xx]

def natural_spline_scipy(x, y):
    spline = CubicSpline(x, y, bc_type='natural')
    return lambda xx: spline(xx)
def periodic_spline_scipy(x, y):
    spline = CubicSpline(x, y, bc_type='periodic')
    return lambda xx: spline(xx)
def not_a_knot_spline_scipy(x, y):
    spline = CubicSpline(x, y, bc_type='not-a-knot')
    return lambda xx: spline(xx)


def natural_spline_matrix_4(x, y):
    equations = np.array([
    ###  a        b           c                d
        [1, 0, 0, x[0], 0, 0, x[0] ** 2, 0, 0, x[0] ** 3, 0, 0],
        [0, 1, 0, 0, x[1], 0, 0, x[1] ** 2, 0, 0, x[1] ** 3, 0],
        [0, 0, 1, 0, 0, x[2], 0, 0, x[2] ** 2, 0, 0, x[2] ** 3],
        [0, 0, 1, 0, 0, x[3], 0, 0, x[3] ** 2, 0, 0, x[3] ** 3],
        [1, -1, 0, x[1], -x[1], 0, x[1] ** 2, -(x[1] ** 2), 0, x[1] ** 3, -(x[1] ** 3), 0],
        [0, 1, -1, 0, x[2], -x[2], 0, x[2] ** 2, -(x[2] ** 2), 0, x[2] ** 3, -x[2] ** 3],
        [0, 0, 0, 1, -1, 0, 2 * x[1], -2 * x[1], 0, 3 * (x[1] ** 2), -3 * (x[1] ** 2), 0],
        [0, 0, 0, 0, 1, -1, 0, 2 * x[2], -2 * x[2], 0, 3 * (x[2] ** 2), -3 * (x[2] ** 2)],
        [0, 0, 0, 0, 0, 0, 2, -2, 0, 6 * x[1], -6 * x[1], 0],
        [0, 0, 0, 0, 0, 0, 0, 2, -2, 0, 6 * x[2], -6 * x[2]],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 6 * x[0], 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 6 * x[3]],
    ])
    b = np.array([
        y[0], y[1], y[2], y[3], 0, 0, 0, 0, 0, 0, 0, 0
    ])

    return solve_spline(x, equations, b)

def solve_spline(x, equations, b):
    c = np.linalg.solve(equations, b)
    n = len(x) - 1

    def getFunction(k):
        i = min(max(np.searchsorted(x, k) - 1, 0), len(x) - 2)
        return c[i] + c[i + n] * k + c[i + n * 2] * (k ** 2) + c[i + n * 3] * (k ** 3)

    return lambda xx: [getFunction(k) for k in xx]

def spline_base(x, y):
    n = len(x) - 1
    matrix_size = n * 4
    b = []
    equations = []

    # data points
    for i in range(n):
        equation = np.zeros(matrix_size)
        for j in range(4):
            equation[j * n + i] = x[i] ** j
        equations.append(equation)
        b.append(y[i])
        if i == n - 1:
            equation = np.zeros(matrix_size)
            for j in range(4):
                equation[j * n + i] = x[i + 1] ** j
            equations.append(equation)
            b.append(y[i + 1])

    # continuity a + b x + c x^2 + d x^3
    for i in range(n - 1):
        equation = np.zeros(matrix_size)
        for j in range(4):
            equation[j * n + i] = x[i + 1] ** j
            equation[j * n + i + 1] = -x[i + 1] ** j
        equations.append(equation)
        b.append(0)

    # f' b + 2c x + 3d x^2
    for i in range(n - 1):
        equation = np.zeros(matrix_size)
        for j in range(1, 4):
            equation[j * n + i] = x[i + 1] ** (j - 1) * j
            equation[j * n + i + 1] = -(x[i + 1] ** (j - 1)) * j
        equations.append(equation)
        b.append(0)

    # f'' 2c + 6d x
    for i in range(n - 1):
        equation = np.zeros(matrix_size)
        for j in range(2, 4):
            equation[j * n + i] = (x[i + 1] ** (j - 2)) * (j - 1) * j
            equation[j * n + i + 1] = -(x[i + 1] ** (j - 2)) * (j - 1) * j
        equations.append(equation)
        b.append(0)
    return equations, b, matrix_size, n

def natural_spline_matrix(x, y):
    equations, b, matrix_size, n = spline_base(x, y)

    # S1''(x0) = 0 = 2c + 6d x0
    equation = np.zeros(matrix_size)
    for j in range(2, 4):
        equation[j * n] = (x[0] ** (j-2)) * (j-1) * j
    equations.append(equation)
    b.append(0)

    # Sn-1''(xn) = 0 = 2c + 6d xn
    equation = np.zeros(matrix_size)
    for j in range(2, 4):
        equation[j * n + (n-1)] = (x[n] ** (j-2)) * (j-1) * j
    equations.append(equation)
    b.append(0)

    print(np.array(equations))
    print(np.array(b))

    return solve_spline(x, np.array(equations), np.array(b))


def periodic_spline_matrix(x, y):
    equations, b, matrix_size, n = spline_base(x, y)

    # S0'(x0) = Sn-1'(xn)
    # S' = b + 2c x + 3d x^2
    equation = np.zeros(matrix_size)
    for j in range(1, 4):
        equation[j * n] = x[0] ** (j - 1) * j
        equation[j * n + (n-1)] = -(x[n] ** (j - 1)) * j
    equations.append(equation)
    b.append(0)

    equation = np.zeros(matrix_size)
    for j in range(2, 4):
        equation[j * n] = (x[0] ** (j - 2)) * (j - 1) * j
        equation[j * n + (n-1)] = -(x[n] ** (j - 2)) * (j - 1) * j
    equations.append(equation)
    b.append(0)

    return solve_spline(x, np.array(equations), np.array(b))

def not_a_knot_spline_matrix(x, y):
    equations, b, matrix_size, n = spline_base(x, y)

    #f''' = 6d ...
    equation = np.zeros(matrix_size)
    for j in range(3, 4):
        equation[j * n] = x[1] * (j - 2) * (j - 1) * j
        equation[j * n + 1] = -x[1] * (j - 2) * (j - 1) * j
    equations.append(equation)
    b.append(0)

    equation = np.zeros(matrix_size)
    for j in range(3, 4):
        equation[j * n + (n-1)] = x[n] * (j - 2) * (j - 1) * j
        equation[j * n + (n-2)] = -x[n] * (j - 2) * (j - 1) * j
    equations.append(equation)
    b.append(0)

    return solve_spline(x, np.array(equations), np.array(b))
