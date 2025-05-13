
### Rechnerarithmetik

###### Maschinendarstellbare Zahlen
- $M = {x in R | x = +-0.m_1m_2...m_n * B^(+-0.e_1e_2...e_l)} nn {0}$
- $2 * 2^(m) * (2 * 2^l - 1) + 1$ verschiedene Zahlen (mit Vorzeichen)
- $x_min= 0.1 * 10^(-e..e)$
- $x_max = 0.99..9 * 10^(e..e)$
- normaisiert = 1. Ziffer keine 0

###### IEC/IEEE:
- $x = (-1)^V * (1.M..M) * 2^((E..E)-"bias")$
- single precision: 1 Bit Vorzeichen, 23 Bit Mantisse, 8 Bit Exponent
- double precision: 1 Bit Vorzeichen, 52 Bit Mantisse, 11 Bit Exponent
- $x_max = (1-B^-n)B^(e_max)$
- $x_"min" = B^(e_"min" - 1)$
- $m = n - 1$

###### Fehler
Absoluter Fehler = $|tilde x - x|$
Relativer Fehler = $|(tilde x - x)| / x$
Maximaler abs. Fehler = $B/2 * B^(e-n-1)$
Maschinengenauigkeit eps = maximaler rel. Fehler = $1/2 * B^(1-n)$ 
1 + eps = 1

###### Rundungsfehler
Bsp: 2590 + 4 + 4 in 3 Stellen = rd(2590 + 4) = 2590
Man sollte in aufsteigender Reihenfolge summieren.

###### Näherungen
Konditionszahl $K = (|f'(x)| * |x|) / (|f(x)|)$
Näherung absoluten Fehlers = $|f'(x)| * |tilde x - x|$
Näherung des relativen Fehlers = $K * |tilde x - x| / |x|$
Näherung zu x mit maximalem abs. Fehler a = $[x - a, x + a]$

###### Auslöschng
Wenn f(x) = x + c entgegengesetze Vorzeichen haben und etwas gleich gross sind, dann wird das Ergebnis sehr nahe bei 0 sein. Dadurch ist K sehr gross und das Problem schlecht Konditioniert.
Bei der Multiplikation ist K = 1. Dies ist gut Konditioniert weil die Zahl klein ist.

### Nichtlineare Gleichungen

###### Heron-Verfahren
Berechnet eine Quadratwurzel der Zahl $A > 1$
$x_(n+1) = (x_n + A / x_n) / 2$

###### Fixpunktiteration

1. Gleichung stellen in der Form $F(x) = x$
2. Einen Startwert $x_0$ wählen
3. $x_(k+1) = F(x_k)$

Dies Konvergiert zu einem Fixpunkt, wenn $F'(x) < 1$ (je kleiner, desto schneller)

###### Banascher Fixpunktsatz
Wenn gilt: $|F(x) - F(y)| <= alpha * |x - y|$ für alle x, y in [a, b] mit F[a, b] -> [a, b], bzw:
- y-Werte müssen zwischen a und b sein
- Der maximale Betrag der Steigung F' darf nicht grösser als 1 sein
($alpha$ = Lipschitz-Konstante < 1)

Dann gilt:
- F hat genau einen Fixpunkt in [a, b]
- Die Fixpunktiteration konvergiert für Startwerte in [a, b]
- a-priori Fehlerabschätzung: $|x_n - bar x| <= alpha^n / (1 - alpha) * | x_1 - x_0|$
- a-posteriori: $|x_n - bar x| <= alpha / (1 - alpha) * | x_n - x_(n-1)|$
- $alpha = max |F'(x)|$

###### Newton-Verfahren

$x_(n+1) = x_n - (f(x_n)) / (f'(x_n))$

Konvergiert, wenn $|(f(x) * f''(x)) / [f'(x)]^2| < 1$

###### Vereinfachtes Newton-Verfahren

$x_(n+1) = x_n - (f(x_n)) / (f'(x_0))$

###### Sekantenverfahren

$x_(n+1) = x_n - (x_n - x_(n-1)) / (f(x_n) - f(x_(n-1))) * f(x_n)$

###### Konvergenzordnung
Ein Verfahren hat die Konvergenzordnung q, wenn für alle n gilt:
$|x_(n+1) - bar x| <= c * |x_n - bar x|^q$

q = 1 = Lineare Konvergenz

###### Fehlerabschätzung
Falls bei einer Nullstelle $xi$ und einer Fehlerschranke / Fehlertoleranz $epsi$ gilt: $f(x_n - epsi) * f(x_n + epsi) < 0$, dann gilt: $|x_n - xi| < epsi$

Für Abbruchbedingungen kann auch geschaut werden, ob $|x_(n+1) - x_n| < epsi$.


### Lineare Gleichungen
$Ax = b$
###### Gauss-Algorithmus
Die Matrix wird in eine (unnormierte) obere Dreiecksmatrix gebracht.
Es gilt $det(A) = (-1)^I * det(A) = (-1)^I * Pi_(i=1)^n tilde a_ii$ wobei $I$ die Anzahl Zeilenvertauschungen und $tilde a_ii$ die Diagonalelemente sind. Der Faktor $lambda$ ist der Faktor bei der Elimination.

###### LR-Zerlegung ohne Zeilenvertauschen

$L = (1,0,0;lambda,1,0;lambda,lambda,1)$ $R = (?,?,?;0,?,?;0,0,?)$ $lambda = A_((i+1)j) / A_(ij)$

1. Man löst das Gleichungssystem $Ly = b$ und erhält $y$
2. Vorwärtseinsetzen: $Ly= b$
3. Rückwärtseinsetzen: $Rx = y$

###### LR-Zerlegung mit Zeilenvertauschen
Zusätzlich werden in der Matrix $P = (1,0,0;0,1,0;0,0,1)$ die Zeilen vertauscht. Man muss also A->R, L und P gleichzeitig berechnen. 

Es gilt neu $Ly= P*b$

###### Householder-Matrix
$|u| = sqrt(u_1^2 + ... + u_n^2)$
$tilde u = u / |u|$

$H = I_n - 2 tilde u tilde u^T$
H ist symmetrisch: $H = H^T$

$(1,2,3) * (1;2;3) = (1, 2, 3;2, 4, 6;3,6,9)$

###### QR-Zerlegung

1. 
	$v_n = a_n + sign(a_(n1)) * ||a_n||_2 * e_n$ wobei $e_1 = (1,0,0,..)^T$ und $a_n$ = 1. Spalte von $A_n$
	$u_n = 1/|v_n| v_n$
	$H_n = I_n - 2 u_n u_n^T$
2. 
	$Q_n * ... Q_1 * A_n = (**,**,**;0,A_(n+1),;0,,)$
	$Q_1 = H_1$ ... $Q_2 = (1,0,0;0,H_2,;0,)$ 
1. 
	$Q = Q_1 * ... * Q_n$
	$R = Q_n * ... * Q_1 * A$
	$QR = A$
4. 
	$Rx = Q^T b$

###### Vektornorm
![[Pasted image 20250110154846.png|300]]
###### Matrixnorm
![[Pasted image 20250110154931.png|300]]

###### Abschätzung fehlerbehafteter Vektor

$cond(A) = ||A||_oo * ||A^-1||_oo$

$||x - tilde x||_oo / ||x||_oo <= cond(A) * ||b - tilde b||_oo/||b||_oo$

###### Abschätzung für fehlerbehaftete Matrix

$||x - tilde x||_oo / ||x||_oo <= (cond(A)) / (1 - cond(A) * ||A - tilde A||_oo / ||A||_oo) * (||A - tilde A||_oo / ||A||_oo + ||b - tilde b||_oo / ||b||_oo)$

Wenn A (3x3) um maximal 2 elementweise gestört ist,
dann ist $||A - tilde A||_oo = 6$

###### Aufwand

Gauss $O(2/3 n^3)$
LR $O(2/3 n^3)$
QR $O(5/3 n^3)$
Einsetzen $O(n^2)$


###### Jakobi-Verfahren / Gesamtschrittverfahren
![[Pasted image 20250110161729.png|100]]
$A = L + D + R$
$x^(k+1) = -D^-1 (L + R) x^k + D^-1 b$

$x_1^(k+1) = (-(a_12 x_2^k + a_13 x_3^k) + b_1 ) 1/a_11$
$x_2^(k+1) = (-(a_21 x_1^k + a_23 x_3^k) + b_2 ) 1/a_22$
$x_1^(k+1) = (-(a_31 x_1^k + a_32 x_2^k) + b_3 ) 1/a_33$

###### Iteratives Gauss-Seidel-Verfahren

$x^(k+1) = -(D + L)^-1 R x^k + (D + L)^-1 b$

$x_1^(k+1) = (-(a_12 x_2^k + a_13 x_3^k) + b_1 ) 1/a_11$
$x_2^(k+1) = (-(a_21 x_1^(k+1) + a_23 x_3^k) + b_2 ) 1/a_22$
$x_1^(k+1) = (-(a_31 x_1^(k+1) + a_32 x_2^(k+1)) + b_3 ) 1/a_33$


###### Fehlerabschätzung der Fixpunktiteration
Falls $||B||_oo < 1$
a-priori $||x^n - bar x||_oo <= ||B||_oo^n / (1 - ||B||_oo) ||x^1 - x^0||_oo$
a-posteriori $||x^n - bar x||_oo <= ||B||_oo^n / (1 - ||B||_oo) ||x^1 - x^0||_oo$

Jacobi $B = -D^-1(L+R)$
Gauss-Seidel $B = -(D+L)^-1 R$

###### Konvergenz der Fixpunktiteration
Falls A diagonaldominant ist, kovergiert das Verfahren
= Die Werte in der Diagonalen sind grösser als Werte oben und unten davon ODER rechts und links davon


### Eigenwerte und Eigenvektoren

###### Imaginäre Zahlen
Normalform $z = x + iy$
Trigonometrische Form $z = r(cos varphi + i * sin varphi)$ wobei $x = r * cos varphi$
Exponentialform $z = re^(i varphi)$ wobei $e^(i varphi) = cos varphi + i * sin varphi$

$r = |z| = sqrt(y^2 + x^2)$
$z^** = x + -iy$
$z_1 / z_2 = (x_1 x_2 + y_1 y_2) / (x_2^2 + y_2^2) + i(y_1 x_2 - x_1 y_2) / (x_2^2 + y_2^2)$

$z^n = x$ Lösen:
- $k = 0,1,...,n-1$
- $r = root(n)(x)$
- $z^n = x * e^(i(0 + k ** 2 pi))$
- $z_k = re^(i ((0 + k * 2 pi)) / n)$

$3 + 2j = sqrt(3^2 + 2^2) * e^(j * tan(2/3))$

$varphi = pi - arctan(y / x)$

![[Pasted image 20250110165905.png|300]]

###### Eigenvektor
Wenn gilt $Ax = lambda x$ dann ist $x$ ein Eigenvektor.
Wird auf Länge 1 normiert.
det(A) = Produkt aller Eigenwerte $lambda$
tr(A) = Summe aller Eigenwerte
Eigenwerte Diagonalmatrix/Dreiecksmatrix = Diagonalelemente

Eigenwerte von $A = (a,b;c,d)$:
$p(lambda) = det(A - lambda I_n) = (a - lambda)(d - lambda) - b c$

$det B_(3x3) =$
![[Pasted image 20250110193458.png|300]]

Eigenvektor zu Eigenwert $lambda$ von $A$:
$vec x = (A - lambda I_n | vec 0)$ 

Nicht reelle Nullstellen treten in Paaren auf (+-i)

###### Eigenraum
Hat die Dimensionen $n - Rg(A - lambda I_n)$
###### Diagonalisierbare Matrixen
- $B = T^-1 A T$
- Haben gleiche EW/EV
- Die Spalten der Transformationsmatrix sind die EV wenn A symmetrisch ist
###### Numerische Berechnung
Durch QR-Zerlegung von $A_n$: 
$A = Q_n R_n$
$R_n = Q_n^T A$
$A_(n+1) = R_n Q_n = Q_n^T A Q_n$

Alle $A_n$ sind einender Ähnlich und evt. diagonalisierbar
Wenn die matrix Teilweise in die Dreicecksform gebracht werden kann:
ZB $A = (**,**,**;**,**,**;0,0,1)$ dann gibt es 1 reellen Eigenwert 1. Und 2 Komplexe Werte, die wie sonst für eine 2x2 Matrix bestimmt werden können. Die Eigenvektoren könnnen dann als 3x3 Gleichungsystem gelöst werden.

###### Spektralradius
= Grösster Eigenwert

Berechenbar durch Vektoriteration / von-Mises-Iteration:
![[Pasted image 20250110195429.png|150]]
###### Mitternachtsformel
$(-B +- sqrt(B^2 - 4AC)) / (2A)$

###### Ableitungen
$f * g = f' * g + f * g'$
$f/g = (f' * g - g' * f) / g^2$
$f(g) = f'(g) * g'$
$cos' = -sin$
$1/x' = -1/x^2$

###### sin cos
cos(0) = 1, sin(0) = 0
cos(pi) = -1, sin(pi) = 0
cos(pi/2) = 0, sin(pi/2) = 1

sin(x) = cos(x - pi/2)