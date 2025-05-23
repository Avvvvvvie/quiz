
> [!info]- Was ist eine Skalarwertige Funktion?
> Eine Funktion, die einen Skalar, also eine Zahl als resultat hat.

> [!info]- Was bedeutet multivariat?
> Es bedeutet, dass eine Funktion mehrere Variablen hat.

> [!info]- Was ist der Unterschied einer skalarwertigen und einer Vektorwertigen Funktion?
> Eine Skalarwertige Funktion gibt einen Skalar zurück und eine Vektorwertge Funktion gibt einen Vektor zurück.

> [!info]- Wie sieht die explizite vs. die implizite Darstellung einer Funktion aus?
> Implizit: y = x...
> 
> Explizit: ... = 0

> [!info]- Was macht man bei der Partiellen Ableitung?
> Man leitet nach der einen Variable ab, um die Steigung in diese Richtung zu erhalten / in die Richtung der Achse der Variable.

> [!info]- Wie sieht eine Jakobi-Matrix aus?
> $Df = ((del f_1) / (del x_1),...,(del f_1) / (del x_n);...,...,...;(del f_m) / (del x_1),...,(del f_m) / (del x_n))$

> [!info]- Wie liniearisiert man eine multivariate Funktion?
> $g(x) = f(vec x_0) + Df(vec x_0) * (vec x - vec x_0)$

> [!info]- Was gibt $(del f) / (del x) f(g(x))$
> $f'(g(x)) * g'(x)$

> [!info]- Was gibt $(del f) / (del x) f(x) * g(x)$
> $f'(x) * g(x) + f(x) * g'(x)$

> [!info]- Was gibt $(del f) / (del x) (f(x)) / (g(x))$
> $(f'(x) * g(x) - f(x) * g'(x)) / (g(x)^2)$

> [!info]- Wie lautet die Formel zum Newtonverfahren in 1D?
> $x_(k+1) = x_k - (f(x_k)) / (f'(x_k))$

> [!info]- Wie geht man beim multivariaten Newtonverfahren vor?
> 1. $Df^-1(vec x^((k))) * vec delta = -vec f(vec x^((k)))$ nach $vec delta$ auflösen.
> 2. $vec x^((k+1)) = vec x^((k)) + vec delta$

> [!info]- Was ist der Unterschied zwischen einem Ausgleichsproblem und einem Interpolationsproblem?
> Die Interpolation ist ein Spezialfall der linearen Ausgleichsrechnung, bei dem zu einer Menge von vorgegebenen Punkten eine Funktion gesucht wird, die exakt (und nicht nur näherungsweise) durch diese Punkte verläuft.

> [!info]- Was ist eine lineare Ausgleichsrechnung?
> Eine Ausgleichsrechnung mit nur linearen Parameter. Das heisst, es sind nur koeffizienten gesucht. 

> [!info]- Was ist ein überbestimmtes Gleichungssystem?
> Ein Gleichungssystem, welches viel mehr Daten hat als der Grad des Polynoms.

> [!info]- Wie sieht die Vandermonde Matrix aus?
> $(1,x_0,...,x_n;...,...,...,...;1,x_n,...,x_n^n)(a_0;...;a_n) = (y_0;...;y_n)$

> [!info]- Wie lautet die Lagrange-Interpolationsformel?
> Es gibt bei n+1 Datenpunkten ein Polynom von Grad n:
> 
> $P_(n-1)(x) = Sigma_(i=0)^n  l_i(x) * y_i$
> 
> $l_i$ sind die n+1 Lagrangepolynome:
> 
> $l_i(x) = Pi_(j=0)^n (x - x_j) / (x_i - x_j)$ wobei $i != j$
> 
> Diese ergeben alle 1 in ihrer Stützstelle $x_i$ und 0 in den anderen Stützstellen.
> 

> [!info]-  Was ist die Formel zur Fehlerabschätzung einer Polynominterpolation im Punkt x?
$|f(x) - P_n(x)| <= |(x-x_0)...(x-x_n)| / ((n + 1)!) * max_(z epsilon [x_0,x_n]) |f^((n+1))(z)|$ wobei $x_0 ... x_n$ Stützpunkte sind.

> [!info]- Wie viele Stützpunkte braucht es um ein Polynom von Grad 2 zu Interpolieren?
> 3

> [!info]- Wie berechnet man die Spline-Interpolation
> Man löst ein Gleichungssystem bestehend aus folgenden Gleichungen:
> 
> Interpolation der Stützpunkte:
> 
> ${:S_0(x_0) = y_0;...;S_n(x_n) = y_n:}$
> 
> Stetiger Übergang:
> 
> ${:S_0(x_1) = S_1(x_1);...;S_0(x_1) = S_1(x_1):}$
> 
> Erste Ableitung an der Übergängen:
> 
> ${:S'_0(x_1) = S'_1(x_1);...;S'_(n-2)(x_(n-1)) = S'_(n-1)(x_(n-1)):}$
> 
> Zweite Ableitung:
> 
> ${:S''_0(x_1) = S''_1(x_1);...;S''_(n-2)(x_(n-1)) = S''_(n-1)(x_(n-1)):}$
> 
> Dann nimmt man noch zwei weitere Gleichungen je nach Spline.

> [!info]- Wieviele Gleichungen braucht man bei n Datenpunkten bei einer Spline-Interpolation?
> - (n-1) * 2 für Interpolation (2 pro intervall)
> - (n-2) für 1.Ableitung
> - (n-2) für 2.Ableitung
> - 2 weitere

> [!info]- Wie sehen die Bedingungen aus für natürliche Splines?
> $S''_0(x_0) = 0$
> 
> $S''_2(x_3) = 0$

> [!info]- Wie sehen die Bedingungen aus für periodische Splines?
> $S'_0(x_0) = S'_2(x_3)$
> 
> $S''_0(x_0) = S''_2(x_3)$

> [!info]- Wie sehen die Bedingungen aus für not-a-knot Splines?
> $S'''_0(x_1) = S'''_1(x_1)$
> 
> $S'''_1(x_2) = S'''_2(x_2)$

> [!info]- Wie löst man ein lineares Ausgleichssystem?
> Gegeben sind n Wertpaare und m Basisfunktionen. Zu lösen ist $A^T A vec lambda = A^T vec y$, wobei $A = (f_1(x_1),...,f_m(x_1);...,...,...;f_1(x_n),...,f_m(x_n))$

> [!question]- Wie löst man das lineare Ausgleichssystem mit QR-Zerlegung?

> [!question]- Wie löst man das lineare Ausgleichssystem mit dem Gauss-Newton Verfahren?

> [!info]- Wie lautet die Trapezregel?
> $T = (b - a) * (f(a) + f(b)) / 2$

> [!info]- Wie lautet die Rechtecksregel?
> $R = (b - a) * f((b+a)/2)$

> [!info]- Wie lautet die Simpsonregel?
> $S = (b - a) / 6 (f(a) + 4f((a+b)/2)+f(b))$

> [!info]- Wie nutzt man die Quadraturformeln?
> Unsummiert: a und b sind der zu integrierende Bereich.
> Summiert: Der Bereich wird in n gleich grosse Abschnitte der Länge $h = (b - a) / n$ unterteilt. $x_i = a + i * h$

> [!info]- Wie lautet die summierte Trapezregel?
> $T = h * ((f(a) + f(b))/2 * f(x_1) + ... + f(x_n))$

> [!info]- Wie lautet die summierte Simpsonregel?
> $S = h/3 (1/2 f(a) + Sigma_(i=1)^(n-1) f(x_i) + 2 Sigma_(i=1)^n f((x_(i-1) + x_i)/2) + 1/2 f(b))$

> [!question]- Wie schätzt man den Fehler ab für summierte Quadraturformeln?
> $|int_a^b f(x)dx - Rf(h)| <= h^2/24 (b - a) * max |f''(x)|$
> 
> $|int_a^b f(x)dx - Tf(h)| <= h^2/12 (b - a) * max |f''(x)|$
> 
> $|int_a^b f(x)dx - Sf(h)| <= h^4/2880 (b - a) * max |f^((4))(x)|$
>
> Bei R&T ist dies exakt für Polynom vom Grad 1, S für Polynom vom Grad 3. /24 macht R doppelt so gut wie /12 T

> [!question]- Wie benutzt man die Gaussformeln?
> Für jedes n gibt es eine Formel, die für diese Anzahl Stützstellen optimal ist.
> $n = 1: (b-a) f((b+a)/2)$
> $n = 2: (b - a)/2 [f(-1/sqrt(3) * (b-a)/2 + (b+a)/2)+f(1/sqrt(3) * (b-1)/2 + (b+a)/2)]$
> $n = 3: (b-1)/2 [5/9 * f(-sqrt(0.6)*(b-a)/2+(b+a)/2) + 9/8 * f((b+a)/2)]$ $+ (b-a)/2 * [5/9 * f(sqrt(0.6) * (b-a)/2 + (b+a)/2)]$

> [!question]- Wie funktioniert die Romberg Extrapolation?

... woche 13

Was ist stabile Differenzialgleichung?