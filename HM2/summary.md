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

### Vandermonde

$(a_0;...;a_n) = (1,x_0,...,x_0^n;...,...,...,...;1,x_n,...,x_n^n)^-1 (y_0;...;y_n)$

$P_n(x) = a_0 + a_1 x + a_2 x^2 + ... + a_n x^n$


### Lagrange Interpolationsformel

$P_(n)(x) = Sigma_(i=0)^n  l_i(x) * y_i$

$l_i$ sind die n+1 Lagrangepolynome:

$l_i(x) = Pi_(j=0)^n (x - x_j) / (x_i - x_j)$ wobei $i != j$

Fehlerabschätzung:

$|f(x) - P_n(x)| <= |(x-x_0) * ... * (x-x_n)| / ((n + 1)!) * max_(z epsilon [x_0,x_n]) |f^((n+1))(z)|$ 

### Spline-Interpolation

Interpolation der Stützpunkte:

${:S_0(x_0) = y_0;...;S_n(x_n) = y_n:}$

Stetiger Übergang):

${:S_0(x_1) = S_1(x_1);...;S_(n-1)(x_(n-1)) = S_n(x_(n-1)):}$

Erste Ableitung an der Übergängen:

${:S'_0(x_1) = S'_1(x_1);...;S'_(n-1)(x_n) = S'_n(x_n):}$

Zweite Ableitung:

${:S''_0(x_1) = S''_1(x_1);...;S''_(n-1)(x_n) = S''_n(x_n):}$

Natürliche Splines:

$S''_0(x_0) = 0$

$S''_2(x_3) = 0$

Periodische Splines:

$S'_0(x_0) = S'_2(x_3)$

$S''_0(x_0) = S''_2(x_3)$

not-a-knot Splines:

$S'''_0(x_1) = S'''_1(x_1)$

$S'''_1(x_2) = S'''_2(x_2)$

Lösen des Gleichungssystems:

$(a_0,...,a_n,b_0,...,b_n,...)^T = A^-1 vec y$ 

$S_i(x) = a_i + b_i (x - x_i) + c_i (x - x_i)^2 ...$

### Algorithmus: Natürliche kubische Splinefunktion

$a_i = y_i$, $h_i = x_(i+1) - x_i$

$c_0 = 0$, $c_n = 0$

für $c_1 - c_(n-1)$ lösen von $Ac = z$

$A = (2(h_0 + h_1),h_1,0,0,0;h_1,2(h_1 + h_2), h_2,0,0;0,h_2,2(h_2 + h_3),h_3,0;0,...,...,...,0;0,0,h_(n-3),2(h_(n-3) + h_(n-2)),h_(n-2);0,0,0,h_(n-2),2(h_(n-2) + h_(n-1)))$

$c = (c_1;...;c_(n-1))$

$z = (3 (y_2 - y_1) / h_1 - 3 (y_1 - y_0) / h_0; 3 (y_3 - y_2) / h_2 - 3 (y_2 - y_1) / h_1;...;3 (y_n - y_(n-1)) / h_(n-1) - 3 (y_(n-1) - y_(n-2)) / h_(n-2))$


$b_i = (y_(i+1) - y_i) / h_i - h_i / 3 (c_(i+1) + 2 c_i)$

$d_i = 1/(3 h_i) (c_(i+1) - c_i)$


### Lineares Ausgleichssystem

$A^T A vec lambda = A^T vec y$

$f(x) = lambda_0 * f_0(x) + ... + lambda_m + f_m(x)$

$A = (f_0(x_0),...,f_m(x_0);...,...,...;f_0(x_n),...,f_m(x_n))$

Fehlerfunktional:

$||y - f(x)||_2^2$ bzw $||y - A vec lambda||_2^2$

### Allgemeines Ausgleichsproblem

Von Hand:

$g(lambda) = (y_0 - f(x_0);...;y_n - f(x_n))$

$E(f) = g(lambda)^2$

$E(f) -> "min" => (del E(f)) / (del lambda_i) = 0$

Mit Jakobi-Matrix / Newton Verfahren:

$g(lambda) = (y_0 - f(x_0);...;y_n - f(x_n))$

$Dg(lambda^((0))) = ((del g_0) / (del lambda_0),...,(del g_0) / (del lambda_n);...,...,...;(del g_m) / (del lambda_0),...,(del g_m) / (del lambda_n))$

$Dg(lambda^((n)))^T Dg(lambda^((n))) vec delta = (-Dg(lambda^((n))))^T g(lambda^((n)))$

$lambda^((n+1)) = lambda^((n)) + vec delta$

QR: $R delta = -Q^T g(lambda^((0)))$

### Numerisches Integrieren Quadraturformeln

Rechteck:

$Rf = (b - a) * f((b+a)/2)$

$Rf(h) = h * Sigma_(i=0)^(n-1) f(x_i + h/2)$

Trapez:

$T(f) = (b - a) * (f(a) + f(b)) / 2$

$Tf(h) = h * ((f(a) + f(b))/2 * Sigma_(i=1)^(n-1) f(x_i))$

Simpson:

$Sf = (b - a) / 6 (f(a) + 4f((a+b)/2)+f(b))$

$Sf(h) = h/3 (1/2 f(a) + Sigma_(i=1)^(n-1) f(x_i) + 2 Sigma_(i=1)^n f((x_(i-1) + x_i)/2) + 1/2 f(b))$

Summiert: Der Bereich wird in n gleich grosse Abschnitte der Länge $h = (b - a) / n$ unterteilt. $x_i = a + i * h$

### Fehlerabschätzung Quadraturformeln

$|int_a^b f(x)dx - Rf(h)| <= h^2/24 (b - a) * max |f''(x)|$

$|int_a^b f(x)dx - Tf(h)| <= h^2/12 (b - a) * max |f''(x)|$

$|int_a^b f(x)dx - Sf(h)| <= h^4/2880 (b - a) * max |f^((4))(x)|$

Bei R&T ist dies exakt für Polynom vom Grad 1, S für Polynom vom Grad 3. /24 macht R doppelt so gut wie /12 T