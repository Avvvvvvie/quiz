import numpy as np

def midpoint_sys(f, a, b, y0, n):
    x = np.linspace(a, b, n+1)
    y = np.zeros((len(y0), n+1))
    y[:,0] = y0
    h = (b - a) / n
    for i in range(n):
        k1 = f(x[i], y[:,i])
        k2 = f(x[i] + 0.5*h, y[:,i] + 0.5*h*k1)
        y[:,i+1] = y[:,i] + h*k2
    return (x, y)

def euler_sys(f, a, b, y0, n):
    x = np.linspace(a, b, n + 1)
    h = (b - a) / n

    y = np.zeros((len(y0), n+1))
    y[:,0] = y0

    for i in range(n):
        xi = x[i]
        y[:,i+1] = y[:,i] + h * f(xi, y[:,i])

    return x, y

def runge_kutta_sys(f, a, b, y0, n):
    x = np.linspace(a, b, n + 1)
    h = (b - a) / n

    y = np.zeros((len(y0), n + 1))
    y[:, 0] = y0

    for i in range(n):
        xi = x[i]

        k1 = f(xi, y[:,i])
        k2 = f(xi + h / 2, y[:,i] + (h / 2) * k1)
        k3 = f(xi + h / 2, y[:,i] + (h / 2) * k2)
        k4 = f(xi + h, y[:,i] + h * k3)

        y[:,i+1] = y[:,i] + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4)

    return x, y