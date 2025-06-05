import numpy as np
import matplotlib.pyplot as plt

def richtungsfeld(f , xmin, xmax, ymin, ymax, hx, hy):
    # y′(x) = f (x, y(x))
    x = np.linspace(xmin, xmax, int((xmax - xmin) / hx) + 1)
    y = np.linspace(ymin, ymax, int((ymax - ymin) / hy) + 1)

    x, y = np.meshgrid(x, y)

    vx = np.ones_like(x)
    vy = f(x, y)
    # ev. normieren
    v = np.sqrt(vx ** 2 + vy ** 2)
    vx = vx / v
    vy = vy / v

    plt.quiver(x,y,vx,vy,color='b',width=0.003,angles='xy')
    plt.show()


def euler(f, a, b, n, y0):
    # set up grid
    x = np.linspace(a, b, n + 1)
    h = (b - a) / n

    # allocate array for solution
    y = np.zeros(n + 1)
    y[0] = y0

    # step through each interval
    for i in range(n):
        xi = x[i]
        y[i + 1] =  y[i] + h * f(xi, y[i])

    return x, y

def mittelpunkt(f, a, b, n, y0):
    # set up grid
    x = np.linspace(a, b, n + 1)
    h = (b - a) / n

    # allocate array for solution
    y = np.zeros(n + 1)
    y[0] = y0

    # step through each interval
    for i in range(n):
        xi = x[i]
        k1 = f(xi, y[i])
        k2 = f(xi + h / 2, y[i] + (h / 2) * k1)
        y[i + 1] = y[i] + h * k2

    return x, y

def euler_modifiziert(f, a, b, n, y0):
    # set up grid
    x = np.linspace(a, b, n + 1)
    h = (b - a) / n

    # allocate array for solution
    y = np.zeros(n + 1)
    y[0] = y0

    # step through each interval
    for i in range(n):
        xi = x[i]
        k1 = f(xi, y[i])
        k2 = f(xi + h, y[i] + h * k1)
        y[i + 1] = y[i] + (h / 2) * (k1 + k2)

    return x, y