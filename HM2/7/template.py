import numpy as np
import sympy as sp

def getGDg(x, y, f, symbols):
    g_expr = sp.Matrix([y[k] - f.subs(sp.Symbol('x'), x[k]) for k in range(len(x))])
    Dg_expr = g_expr.jacobian(symbols)

    g = sp.lambdify([symbols], g_expr, 'numpy')
    Dg = sp.lambdify([symbols], Dg_expr, 'numpy')
    return g, Dg

def gauss_newton_d(g, Dg, lam0, tol, max_iter, pmax, damping):
    k = 0
    lam = np.copy(lam0)
    increment = tol + 1
    err_func = np.linalg.norm(g(lam))**2

    while increment > tol and k < max_iter:
        Q, R = np.linalg.qr(Dg(lam))
        delta = np.linalg.solve(R, -Q.T @ g(lam)).flatten()

        if damping:
            p = 0
            lam_new = lam + delta / 2**p
            err_func_new = np.linalg.norm(g(lam_new))**2
            while err_func_new > err_func and p < pmax:
                p += 1
                lam_new = lam + delta / 2**p
                err_func_new = np.linalg.norm(g(lam_new))**2
            lam = lam_new
            err_func = err_func_new
        else:
            lam = lam + delta
            err_func = np.linalg.norm(g(lam))**2

        increment = np.linalg.norm(delta)
        k += 1

    return lam, k

def evaluate_fit(f, fit, symbols):
    return sp.lambdify([sp.Symbol('x')], f.subs(zip(symbols, fit)), 'numpy')



def damped_newton(f, Df, x0, kmax, tolerance, max_iterations, symbols):
    for i in range(max_iterations):
        f_val = substitute_symbols(f, symbols, x0).evalf()
        Df_val = substitute_symbols(Df, symbols, x0).evalf().inv()
        delta = Df_val @ -f_val

        k = 0
        normfx = f_val.norm(2)
        fx = lambda : substitute_symbols(f, symbols, x0 + delta / 2 ** k).evalf()
        while (kmax > 0):
            if k > kmax:
                k = 0
                break
            if normfx > fx().norm(2):
                break
            k += 1

        x0 = x0 + delta / (2 ** k)

        print(f"Iteration {i}: x0 = {x0}")
        if f_val.norm(2) < tolerance:
            print(f"Convergence {x0} reached after {i} iterations.")
            return x0
    print("Maximum iterations have been reached. Consider adjusting parameters.")

def substitute_symbols(f, symbols, values):
    i = 0
    f_subs = f
    for symbol in symbols:
        f_subs = f_subs.subs(symbol, values[i])
        i = i + 1
    return f_subs
