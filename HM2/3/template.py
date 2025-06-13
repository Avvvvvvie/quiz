import sympy as sp
import numpy as np

def newton_simplified(f, Df, x0, tolerance, max_iterations, symbols):
    Df_val = substitute_symbols(Df.inv(), symbols, x0).evalf()
    for i in range(max_iterations):
        f_val = substitute_symbols(f, symbols, x0).evalf()
        delta = Df_val @ -f_val
        x0 = x0 + delta

        print(f"Iteration {i}: x0 = {x0}")
        if f_val.norm(2) < tolerance:
            print(f"Convergence {x0} reached after {i} iterations.")
            break
    return x0

def newton(f, Df, x0, tolerance, max_iterations, symbols):
    for i in range(max_iterations):
        f_val = substitute_symbols(f, symbols, x0).evalf()
        Df_val = substitute_symbols(Df.inv(), symbols, x0).evalf()
        delta = Df_val @ -f_val
        x0 = x0 + delta

        print(f"Iteration {i}: x0 = {x0}")
        if f_val.norm(2) < tolerance:
            print(f"Convergence {x0} reached after {i} iterations.")
            return x0
    print("Maximum iterations have been reached. Consider adjusting parameters.")

def damped_newton_simplified(f, Df, x0, kmax, tolerance, max_iterations, symbols):
    Df_val = substitute_symbols(Df.inv(), symbols, x0).evalf()
    for i in range(max_iterations):
        f_val = substitute_symbols(f, symbols, x0).evalf()
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

def damped_newton(f, Df, x0, kmax, tolerance, max_iterations, symbols):
    for i in range(max_iterations):
        f_val = substitute_symbols(f, symbols, x0).evalf()
        Df_val = substitute_symbols(Df.inv(), symbols, x0).evalf()
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

def damped_newton_old(f, Df, x0, k, tolerance, max_iterations, symbols):
    for i in range(max_iterations):
        f_val = substitute_symbols(f, symbols, x0).evalf()
        Df_val = substitute_symbols(Df.inv(), symbols, x0).evalf()
        delta = Df_val @ -f_val

        x0 = x0 + k * delta

        print(f"Iteration {i}: x0 = {x0}")
        print(f"Norm of f(x0) = {f_val.norm(2)}")
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
