import numpy as np

def a(x, f):
    return np.array([[fm(xi) for fm in f] for xi in x])

def qr(A):
    return np.linalg.qr(A)

def curve_fit(x, y, f):
    A = a(x, f)
    lam = np.linalg.solve(A.T @ A, A.T @ y)
    error = curve_fit_error(A, lam, y)
    yy = lambda xx: [sum(lam[i] * f[i](x) for i in range(len(lam))) for x in xx]
    return yy, error

def curve_fit_qr(x, y, f):
    A = a(x, f)
    Q, R = qr(A)
    lam = np.linalg.solve(R, Q.T @ y)
    error = curve_fit_error(A, lam, y)
    yy = lambda xx: sum(lam[i] * f[i](xx) for i in range(len(lam)))
    return yy, error

def compare_cond(x, f):
    A = a(x, f)
    Q, R = qr(A)
    print("Condition number for A:", np.linalg.cond(A.T @ A, np.inf))
    print("Condition number for R:", np.linalg.cond(R, np.inf))

def polyfit(x,y,degree):
    coefficients_polyfit = np.polyfit(x, y, degree)
    return lambda xx: np.polyval(coefficients_polyfit, xx)

def curve_fit_error(A, lam, y):
    return np.linalg.norm(y - (A @ lam), 2) ** 2
