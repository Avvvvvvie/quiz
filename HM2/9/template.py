import numpy as np

def gaussformeln(f, a, b, n):
    if n == 1:
        return (b - a) * f((a + b) / 2)
    if n== 2:
        return (b - a) / 2 * (f((-1 * (b - a)) / (np.sqrt(3) * 2) + ((b + a) / 2)) + f((b - a) / (np.sqrt(3) * 2) + ((b + a) / 2)))
    if n == 3:
        return (b - a) / 2 * ((5/9) * f(-np.sqrt(0.6) * (b - a) / 2 + (b + a) / 2) + (8/9) * f((b + a) / 2)) + (b - a) / 2 * (5/9) * f(np.sqrt(0.6) * (b - a) / 2 + (b + a) / 2)


def romberg(f, a, b, m):
    R = np.zeros((m + 1, m + 1))
    h = b - a

    R[0, 0] = 0.5 * h * (f(a) + f(b))

    for j in range(1, m + 1):
        h /= 2
        total = sum(f(a + (2 * k - 1) * h) for k in range(1, 2**(j - 1) + 1))
        R[j, 0] = 0.5 * R[j - 1, 0] + h * total

        for k in range(1, j + 1):
            R[j - k, k] = (4**k * R[j - k + 1, k - 1] - R[j - k, k - 1]) / (4**k - 1)

    return R[0, m]