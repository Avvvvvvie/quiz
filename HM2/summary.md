### Partielle Ableitung

$(del f) / (del x) f(g(x)) = f'(g(x)) * g'(x)$

$(del f) / (del x) f(x) * g(x) = f'(x) * g(x) + f(x) * g'(x)$

$(del f) / (del x) (f(x)) / (g(x)) = (f'(x) * g(x) - f(x) * g'(x)) / (g(x)^2)$

$log(x)' = 1/x$

$(e^(5x))' = 5 * e^(5x)$

### Inverse

$(a, b; c, d)^-1 = 1/(ad - bc) (d, -b; -c, a)$

$(a, b, c|1,0,0;d, e, f|0,1,0;g, h, i|0,0,1)$

### Linearisierung

Gegeben: $y = (f_1(x);...;f_n(x))$ und $x = (x_1;...;x_n)$

Jakobi Matrix: $Df = ((del f_1) / (del x_1),...,(del f_1) / (del x_n);...,...,...;(del f_m) / (del x_1),...,(del f_m) / (del x_n))$

Linearisierung: $g(x) = f(vec x_0) + Df(vec x_0) * (vec x - vec x_0)$


### Newton Verfahren für nichtlineare Gleichungssysteme

(Es gilt: f(x) = vec 0)

Basic: x1 = x0 - f(x) / f'(x)

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


### Lagrange Interpolationsformel bei n+2 Stützpunkten

$P_(n+1)(x) = Sigma_(i=0)^n  l_i(x) * y_i$

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

n = Anzahl Splines. i bis n-1. n = 3 -> A ist 2x2

$a_i = y_i$, $h_i = x_(i+1) - x_i$

$c_0 = 0$, $c_n = 0$

für $c_1 - c_(n-1)$ !!! lösen von $Ac = z$

$A = (2(h_0 + h_1),h_1,0,0,0;h_1,2(h_1 + h_2), h_2,0,0;0,h_2,2(h_2 + h_3),h_3,0;0,...,...,...,0;0,0,h_(n-3),2(h_(n-3) + h_(n-2)),h_(n-2);0,0,0,h_(n-2),2(h_(n-2) + h_(n-1)))$

$c = (c_1;...;c_(n-1))$

$z = (3 (y_2 - y_1) / h_1 - 3 (y_1 - y_0) / h_0; 3 (y_3 - y_2) / h_2 - 3 (y_2 - y_1) / h_1;...;3 (y_n - y_(n-1)) / h_(n-1) - 3 (y_(n-1) - y_(n-2)) / h_(n-2))$


$b_i = (y_(i+1) - y_i) / h_i - h_i / 3 (c_(i+1) + 2 c_i)$

$d_i = 1/(3 h_i) (c_(i+1) - c_i)$

$S_i(x) = a_i + b_i (x - x_i) + c_i (x - x_i)^2 ...$

### Lineares Ausgleichssystem

Normalengleichungssystem

$A^T A vec lambda = A^T vec y$

$f(x) = lambda_0 * f_0(x) + ... + lambda_m + f_m(x)$

$A = (f_0(x_0),...,f_m(x_0);...,...,...;f_0(x_n),...,f_m(x_n))$

Fehlerfunktional:

$||y - f(x)||_2^2$ bzw $||y - A vec lambda||_2^2$

### Allgemeines Ausgleichsproblem, Nichtlinear, Quadratmittelproblem

Von Hand:

$g(lambda) = (y_0 - f(x_0);...;y_n - f(x_n))$

$E(f) = g(lambda)^2$

$||E(f)||_2 -> "min" => (del E(f)) / (del lambda_i) = 0$

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

$Tf(h) = h * ((f(a) + f(b))/2 + Sigma_(i=1)^(n-1) f(x_i))$

Simpson:

$Sf = (b - a) / 6 (f(a) + 4f((a+b)/2)+f(b))$

$Sf(h) = h/3 (1/2 f(a) + Sigma_(i=1)^(n-1) f(x_i) + 2 Sigma_(i=1)^n f((x_(i-1) + x_i)/2) + 1/2 f(b))$

Summiert: Der Bereich wird in n gleich grosse Abschnitte der Länge $h = (b - a) / n$ unterteilt. $x_i = a + i * h$

### Fehlerabschätzung Quadraturformeln

$|int_a^b f(x)dx - Rf(h)| <= h^2/24 (b - a) * max |f''(x)|$

$|int_a^b f(x)dx - Tf(h)| <= h^2/12 (b - a) * max |f''(x)|$

$|int_a^b f(x)dx - Sf(h)| <= h^4/2880 (b - a) * max |f^((4))(x)|$

Bei R&T ist dies exakt für Polynom vom Grad 1, S für Polynom vom Grad 3. /24 macht R doppelt so gut wie /12 T

### Gauss Formeln
$n = 1: (b-a) f((b+a)/2)$

$n = 2: (b - a)/2 [f(-1/sqrt(3) * (b-a)/2 + (b+a)/2)+f(1/sqrt(3) * (b-1)/2 + (b+a)/2)]$

$n = 3: (b-1)/2 [5/9 * f(-sqrt(0.6)*(b-a)/2+(b+a)/2) + 9/8 * f((b+a)/2)]$ $+ (b-a)/2 * [5/9 * f(sqrt(0.6) * (b-a)/2 + (b+a)/2)]$

### Romberg-Extrapolation

$int_a^b$

$h_j = (b - a) / 2^j$, $n = 2^j$, $k = 0 ...$

$T_(j,0) = (b - a) / 2^j * ((f(a) + f(b)) / 2 + Sigma_(i=1)^(n-1) f(a + i * (b - a) / 2^j))$ 

$T_(j,k) = (4^k * T_(j+1,k-1) - T_(j, k-1)) / (4^k - 1)$

### DGL Separierung der Variablen

$dy / dx = x^2  y$

$dx * x^2 = dy / y$

$int x^2 dx = int 1 / y dy$

### Klassisches Euler-Verfahren

$dy / dx = f(x, y(x))$ mit $y(x_0) = y_0$

$x_(i+1) = x_i + h$

$y_(i+1) = y_i + h * f(x_i, y_i)$

### Mittelpunktverfahren

$k_1 = f(x_k, y_k)$

$k_2 = f(x_k + h/2, y_k + h/2 k_1)$

$x_(k+1) = x_k + h$

$y_(k+1) = y_k + h * k_2$

### Modifiziertes Euler-Verfahren

$k_1 = f(x_k, y_k)$

$k_2 = f(x_k + h, y_k + h * k_1)$

$x_(k+1) = x_i + h$

$y_(k+1) = y_i + h/2 (k_1 + k_2)$

### Fehlerordnung

kleines h: gösserer Rundungsfehler, kleinerer Diskretisierungsfehler

Lokaler Fehler der Ordnung p = $|y(x_(i+1)) - y_(i+1)| <= C * h^(p+1)$

Globaler Fehler der Ordnung p = $|y(x_(x_n)) - y_n| <= C * h^p$

Euler-Verfahren: Lokal = $h^2 / 2 y''(z)$ Global = $h/2 max |y''(x)| * tilde C$ -> P = 1

Mittelpunkt und Modifiziert: P = 2

### Klassisches vierstufiges Runge-Kutta-Verfahren

$k_1 = f(x_k, y_k)$

$k_2 = f(x_k + h/2, y_k + h/2 k_1)$

$k_3 = f(x_k + h/2, y_k + h/2 k_2)$

$k_4 = f(x_k + h, y_k + h k_3)$

$x_(k+1) = x_i + h$

$y_(k+1) = y_k + h/6 (k_1 + 2 k_2 + 2 k_3 + k_4)$

### Allgemeines s-stufiges Runge-Kutta-Verfahren

$k_1 = f(x_k, y_k)$

$k_2 = f(x_k + c_2 * h, y_k + h * (a_(21) * k_1))$

$k_3 = f(x_k + c_3 * h, y_k + h * (a_(31) * k_1 + a_(32) * k_2))$

$...$

$y_(k+1) = y_k + h * (b_1 k_1 + b_2 k_2 ...)$

### Butcher Schema
Linke Seite: $c_1 - c_s$ = Skalar von h von k1 bis ks

Unten: $b_1 - b_s$ = Kombination von allen k für die Berechnung der Steigung

Mitte: $a_(2,1) - a_(s, s-1)$ = Kombination von vorherigen k in nächstem k

Startet mit 0 | 0 oder bei $a_21$


### DGL n-ter Ordnung zu 1. Ordnung

$x''' = 2 x'' + 3 x'$

$x''' = 2 z_3 + 3 z_2 + 5$

$(z_1';z_2';z_3') = (z_2;z_3;2 z_3 + 3 z_2 + 5)$

$A = (0,1,0;0,0,1;0,3,2)$, $b = (0;0;5)$

$z' = Az + b$

### Stabilität

Gegeben: $f'$ ist monoton sinkend

Verfahren (hier Euler): $y_(i+1) = y + h * f'(y_i)$

Da monoton sinkend, gilt: $y_i > y_i + h * f'(y_i)$

($**$) Zwischenergebnis: $... < 1$ ($y_i$ wurde auf die gleiche Seite getan)

Ergebnis: $h < ...$

### Stabilitätsintervall:

Wenn $y' = -alpha y$ als $y_(i+1) = g(h alpha) * y_i$ geschrieben werden kann, dann ist das Verfahren für alle Alpha stabil, wo $|g(x)| < 1$ gilt. Diese Stabilitätsfunktion berechnet man bei ($**$)

Eulerverfahren: 1 + x

s-stufiges Runge Kutta: Polynom von Grad s