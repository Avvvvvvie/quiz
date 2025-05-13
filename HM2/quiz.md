> [!quiz]- Was bedeutet multivariat?
> Es bedeutet, dass eine Funktion mehrere Variablen hat.

> [!quiz]- Was ist der Unterschied einer skalarwertigen und einer Vektorwertigen Funktion?
> Eine Skalarwertige Funktion gibt einen Skalar zurück und eine Vektorwertge Funktion gibt einen Vektor zurück.

> [!quiz]- Wie sieht die explizite vs. die implizite Darstellung einer Funktion aus?
> Implizit: y = x...
> Explizit: ... = 0

> [!quiz]- Wie sieht eine Jakobi-Matrix aus?
> $Df = ((del f_1) / (del x_1),...,(del f_1) / (del x_n);...,...,...;(del f_m) / (del x_1),...,(del f_m) / (del x_n))$

> [!quiz]- Wie liniearisiert man eine multivariate Funktion?
> $g(x) = f(vec x_0) + Df(vec x_0) * (vec x - vec x_0)$

> [!quiz]- Was gibt $(del f) / (del x) f(g(x))$
> $f'(g(x)) * g'(x)$

> [!quiz]- Was gibt $(del f) / (del x) f(x) * g(x)$
> $f'(x) * g(x) + f(x) * g'(x)$

> [!quiz]- Was gibt $(del f) / (del x) (f(x)) / (g(x))$
> $(f'(x) * g(x) - f(x) * g'(x)) / (g(x)^2)$

> [!quiz]- Newtonverfahren in 1D
> $x_(k+1) = x_k - (f(x_k)) / (f'(x_k))$

> [!quiz]- Multivariates Newtonverfahren
> 1. $Df^-1(vec x^((k))) * vec delta = -vec f(vec x^((k)))$ nach $vec delta$ auflösen.
> 2. $vec x^((k+1)) = vec x^((k)) + vec delta$

> [!toquiz]- Was ist der Unterschied zwischen einem Ausgleichsproblem und einem Interpolationsproblem?

> [!quiz]- Was ist eine lineare Ausgleichsrechnung?
> Eine Ausgleichsrechnung mit nur linearen Parameter. Das heisst, es sind nur koeffizienten gesucht. 

> [!quiz]- Was ist ein überbestimmtes Gleichungssystem?
> Ein Gleichungssystem, welches viel mehr Daten hat als der Grad des Polynoms.

> [!quiz]- Wie sieht die Vandermonde Matrix aus?
> $(1,x_0,...,x_n;...,...,...,...;1,x_n,...,x_n^n)(a_0;...;a_n) = (y_0;...;y_n)$

> [!toquiz]- Wie lautet die Lagrange-Interpolationsformel?
> Es gibt n+1 Lagrangepolynome bei n+1 Datenpunkten:
> $l_i(x) = Pi_(j=0)^n (x - x_j) / (x_i - x_j)$ wobei $i != j$
> Diese sind 1 in ihrer Stützstelle $x_i$ und 0 in den anderen Stützstellen.
> Dadurch kann man ein Interpolationspolynom vom Grad n bauen:
> $P_(n-1)(x) = Sigma_(i=0)^n  l_i(x) * y_i$

> [!toquiz]-  Was ist die Formel zur Fehlerabschätzung einer Polynominterpolation im Punkt x?
$|f(x) - P_n(x)| <= |(x-x_0)...(x-x_n)| / ((x + 1)!) * max_(z epsilon [x_0,x_n]) |f^((n+1))(z)|$ wobei $x_0 ... x_n$ Stützpunkte sind.

> [!quiz]- Wie viele Punkte braucht es für ein Polynom von Grad 2?
> 3

> [!toquiz]- Wie berechnet man die Spline-Interpolation

> [!quiz]- Wieviele Gleichunen bei n Datenpunkten
> - (n-1) * 2 für Interpolation (2 pro intervall)
> - (n-2) für 1.Ableitung
> - (n-2) für 2.Ableitung
> - 2 weitere

> [!toquiz]- Wie sehen die Bedingungen aus für natürliche Splines?

> [!toquiz]- Wie sehen die Bedingungen aus für periodische Splines?

> [!toquiz]- Wie sehen die Bedingungen aus für not-a-knot Splines?

> [!quiz]- Wie löst man ein lineares Ausgleichssystem?
> Gegeben sind n Wertpaare und m Basisfunktionen. Zu lösen ist $A^T A vec lambda = A^T vec y$, wobei $A = (f_1(x_1),...,f_m(x_1);...,...,...;f_1(x_n),...,f_m(x_n))$

> [!toquiz]- Wie löst man das lineare Ausgleichssystem mit QR-Zerlegung?

> [!toquiz]- Wie löst man das lineare Ausgleichssystem mit dem Gauss-Newton Verfahren?

> [!quiz]- Wie lautet die Trapezregel?
> $T = (b - a) * (f(a) + f(b)) / 2$

> [!quiz]- Wie lautet die Rechtecksregel?
> $R = (b - a) * f((b+a)/2)$

> [!quiz]- Wie lautet die Simpsonregel?
> $S = (b - a) / 6 (f(a) + 4f((a+b)/2)+f(b))$

> [!quiz]- Wie nutzt man die Quadraturformeln?
> Unsummiert: a und b sind der zu integrierende Bereich.
> Summiert: Der Bereich wird in n gleich grosse Abschnitte der Länge $h = (b - a) / n$ unterteilt. $x_i = a + i * h$

> [!quiz]- Wie lautet die summierte Trapezregel?
> $T = h * ((f(a) + f(b))/2 * f(x_1) + ... + f(x_n))$

> [!quiz]- Wie lautet die summierte Simpsonregel?
> $S = h/3 (1/2 f(a) + Sigma_(i=1)^(n-1) f(x_i) + 2 Sigma_(i=1)^n f((x_(i-1) + x_i)/2) + 1/2 f(b))$

> [!toquiz]- Wie schätzt man den Fehler ab für summierte Quadraturformeln?
> $|int_a^b f(x)dx - Rf(h)| <= h^2/24 (b - a) * max |f''(x)|$
> 
> $|int_a^b f(x)dx - Tf(h)| <= h^2/12 (b - a) * max |f''(x)|$
> 
> $|int_a^b f(x)dx - Sf(h)| <= h^4/2880 (b - a) * max |f^((4))(x)|$
>
> Bei R&T ist dies exakt für Polynom vom Grad 1, S für Polynom vom Grad 3. /24 macht R doppelt so gut wie /12 T

> [!toquiz]- Wie benutzt man die Gaussformeln?
> Für jedes n gibt es eine Formel, die für diese Anzahl Stützstellen optimal ist.
> $n = 1: (b-a) f((b+a)/2)$
> $n = 2: (b - a)/2 [f(-1/sqrt(3) * (b-a)/2 + (b+a)/2)+f(1/sqrt(3) * (b-1)/2 + (b+a)/2)]$
> $n = 3: (b-1)/2 [5/9 * f(-sqrt(0.6)*(b-a)/2+(b+a)/2) + 9/8 * f((b+a)/2)]$ $+ (b-a)/2 * [5/9 * f(sqrt(0.6) * (b-a)/2 + (b+a)/2)]$

> [!toquiz]- Wie funktioniert die Romberg Extrapolation?

