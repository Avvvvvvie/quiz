import sympy as sp

def compute_jacobian(functions, variables):
    f = sp.Matrix(functions)
    x = sp.Matrix(variables)
    J = f.jacobian(x)
    return J

def evaluate_jacobian_at_point(J, point):
    return J.evalf(subs=point)

def pprint(f):
    sp.pprint(f)

def linearize(functions, variables, point_dict):
    Df = functions.jacobian(variables)
    Df0 = Df.subs(point_dict)
    f0 = functions.subs(point_dict)

    return f0 + Df0 @ (variables - sp.Matrix([v for k, v in point_dict.items()]))
