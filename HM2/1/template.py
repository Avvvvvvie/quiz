import matplotlib.pyplot as plt
import numpy as np

def meshgrid3d(x, y, f):
    x, y = np.meshgrid(x, y)
    z = f(x, y)
    return x, y, z

def wireframe(x, y, z):
    fig = plt.figure(figsize=(10, 5))
    ax = fig.add_subplot(111, projection='3d')
    ax.plot_wireframe(x, y, z)

def surface(x, y, z):
    fig = plt.figure(figsize=(10, 5))
    ax = fig.add_subplot(111, projection='3d')
    surf = ax.plot_surface(x, y, z, cmap='viridis')
    fig.colorbar(surf)

def contour(x, y, z):
    fig = plt.figure(figsize=(10, 5))
    ax3 = fig.add_subplot(133)
    contourf = ax3.contourf(x, y, z, cmap='viridis')
    fig.colorbar(contourf)