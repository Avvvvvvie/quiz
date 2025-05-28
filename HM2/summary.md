### Partielle Ableitung

$(del f) / (del x) f(g(x)) = f'(g(x)) * g'(x)$

$(del f) / (del x) f(x) * g(x) = f'(x) * g(x) + f(x) * g'(x)$

$(del f) / (del x) (f(x)) / (g(x)) = (f'(x) * g(x) - f(x) * g'(x)) / (g(x)^2)$


### Linearisierung

Gegeben: $y = (f_1(x);...;f_n(x))$ und $x = (x_1;...;x_n)$

Jakobi Matrix: $Df = ((del f_1) / (del x_1),...,(del f_1) / (del x_n);...,...,...;(del f_m) / (del x_1),...,(del f_m) / (del x_n))$

Linearisierung: $g(x) = f(vec x_0) + Df(vec x_0) * (vec x - vec x_0)$


### Newton Verfahren

Ungedämpft:

1. $Df(vec x^((k))) * vec delta^((n)) = -vec f(vec x^((k)))$ nach $vec delta$ auflösen.
2. $vec x^((k+1)) = vec x^((k)) + vec delta^((k))$

Vereinfacht (konvergiert linear statt quadratisch):

1. $Df(vec x^((0))) * vec delta^((k)) = -vec f(vec x^((k)))$ nach $vec delta$ auflösen.
2. $vec x^((k+1)) = vec x^((k)) + vec delta^((k))$

Abbruchsbedinungen:

- $||x^((n+1)) - x^((n))|| <= epsi$
- $||f(x^((n+1)))|| <= epsi$

Gedämpft:

1. $Df(vec x^((k))) * vec delta^((n)) = -vec f(vec x^((k)))$ nach $vec delta$ auflösen.
2. Finde minimales $k in {0,1,...,k_"max"}$ für welches gilt: $||f(x^((n)) + delta^((n)) / 2^k)||_2 < ||f(x^((n)))||_2$
3. Sonst $k=0$
4. $x^((n+1)) := x^((n)) + delta^((n))/ 2^k$ 

Auflösen:

$vec delta = -Df^-1(vec x^((k))) f(vec x^((k)))$

### Lagrange Interpolationsformel

Fehlerabschätzung

Algorithmus: natürliche kubische Splinefunktion