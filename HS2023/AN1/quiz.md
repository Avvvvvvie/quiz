
> [!quiz]- Wie sieht eine geometrische Reihe aus?
> $$
> c ** q^(n-1)
> a_(n-1) q
> $$

> [!quiz]- Wie sieht eine arithmetische Reihe aus?
> $$
> \begin{flalign*}
> &c + (n-1) \cdot d&\\
> &a_{n-1} + d&\\
> \end{flalign*}
> $$

> [!quiz]- Welche darstellungen von Reihen gibt es?
> - implizite Darstellung: mit n-1
> - explizite Darstellung: mit n
> - aufzählende Darstellung: 1,2,3...

> [!quiz]- Wie berechnet man Sn einer Reihe mit a1 und q?
> $$
> \begin{flalign*}
> &Arithmetisch: S_n = a_1 \cdot n + \frac{n \cdot (n - 1)}{2} \cdot d = \frac{a_{1} + a_{n}}{2} \cdot d&\\
> &Geometrisch: S_n = a_{1} \cdot \frac{q^n - 1}{q - 1}&\\
> \end{flalign*}
> $$

> [!quiz]- Wie lautet die Produkteregel beim Ableiten?
> $$
> (f(x) \cdot g(x))' = f'(x) \cdot g(x) + f(x) \cdot g'(x)
> $$

> [!quiz]- Wie lautet die Quotientenregel beim Ableiten?
> $$
> \left( \frac{f(x)}{g(x)} \right)' = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g(x)^2}
> $$

> [!quiz]- Wie lautet die Kettenregel beim Ableiten?
> $$
> f'(x) = (F(g(x)))' = F'(g(x)) \cdot g'(x)
> $$

> [!quiz]- Was ist eine gerade Funktion?
> f(-x) = f(x)

> [!quiz]- Was ist eine ungerade Funktion?
> f(-x) = -f(x)

> [!quiz]- a^x = e^?
> (e^ln(a))^x

> [!quiz]- sin(x)' = ?
> cos(x)

> [!quiz]-  cos(x)' = ?
> -sin(x)

> [!quiz]- tan(x)' = ?
> $$
> \begin{flalign*}
> &\frac{1}{\cos^2(x)}&\\
> \end{flalign*}
> $$

> [!quiz]- arcsin(x)' = ?
> $$
> \begin{flalign*}
> &\frac{1}{\sqrt{ 1 - x^2 }}&\\
> \end{flalign*}
> $$

> [!quiz]- arccos(x)' = ?
> $$
> \begin{flalign*}
> &-\frac{1}{\sqrt{ 1 - x^2 }}&\\
> \end{flalign*}
> $$

> [!quiz]- arctan(x)' = ?
> $$
> \begin{flalign*}
> &\frac{1}{1+x^2}&\\
> \end{flalign*}
> $$

> [!quiz]- Welcher Grad hat x^3 + 2x?
> Grad 3

> [!quiz]- Welchen Wert hat 4x^2 - 3x + 9 mit dem Horner-Schema bei x = 3?
> 144

> [!quiz]- Was gibt (x^3 - 2x^2 - 3) / (x - 1) mit Polynomdivision? Was sagt das Ergebnis aus?
> x^2 - x - (3/(x-1)
> 
> Das Ergebnis ohne Rest ist die Asymptote / Näherung der Originalfuntion für sehr grosse x.

> [!quiz]- Wann hat eine Funktion ein absolutes/globales Maximum/Minimum?
> Ob es sich um ein globales Minimum oder Maximum handelt, findest du heraus, indem du den Grenzwert der Funktion f(x) bildest. Dadurch kannst du feststellen, ob die Funktion nach oben oder nach unten unbeschränkt ist. Sobald diese nach oben unbeschränkt ist, gibt es kein globales Maximum und wenn nach unten unbeschränkt ist, gibt es kein globales Minimum.

> [!quiz]- Wie funktioniert das Newtonsche Tangentenverfahren?
> Mit dem Verfahren kann man Nullstellen annähern.
> 
> Man wählt einen Punkt, liniearisiert dort die Funktion. Die Nullstelle dieser Tangente wird als neuer Punkt für den nächsten Iterierungsschritt verwendet.

> [!quiz]- Was gibt es für Limesregeln?
> Konstanten kann man herausnehmen. Bei den 4 Grundoperationen kann man aufteilen, wenn alle Bestandteile auch einen Grenzwert haben (nicht unendlich). 1/n geht zu 0, q^n auch wenn |q|<1. Die n-te Wurzel von k geht zu 1 und auch die von n. (1+1/n)^n geht zu e. Die Zahl über n wird zum Exponenten von e.

> [!quiz]- Was gibt es für Symmetrieeigenschaften?
> Exponenten von x alle gerade: zu XY-Diagonale Achsensymmetrisch
> 
> Exponenten von x alle ungerade: Punktsymmetrisch

Potenzfunktionen / Monome sind die Grundbausteine von Polynomen.
Monom mit geradem exponent => gerade Funktion, spiegelt sich an y-Achse
Monom mit ungeradem exponent => ungerade Funktion, punktspiegelung an Ursprung
- Bruch von 2 Polynomen = rationale Funktion
- 1+2+3+...+n = (n(n+1)) / 2
- f(x) = g(x) heisst, dass es für alle x stimmt, es ist nicht nur eine bestimmte Anzahl Fälle gesucht
- gerader Funktion => ist symmetrisch zu y-Achse