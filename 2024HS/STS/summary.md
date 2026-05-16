
### Deskriptive Statistik

###### Merkmalsträger
- Qualitativ/Kategoriell
	- Nominal: Parteien
	- Ordinal: Prüfungresultat schlecht, mittel, gut
- Quantitativ/Metrisch
	- Diskret: Würfel 1-6, Anzahl (es gibt Lücken)
	- Stetig: Geschwindigkeit

###### Verteilungsfunktionen
- **PMF** distrekte Merkmale
- **PDF** stetige Merkmale
- **CDF** kumulative Verteilungsfunktion

| Klasse | [100,200[ | [200,400[ |
| ------ | --------- | --------- |
| hi     | 5         | 15        |
| fi     | 5/20      | 15/20     |
| PDF    | 5/20/100  | 15/20/200 |
| CDF    | 5/20      | 20/20     |

###### Durchschnitt
= $bar x$, arithmetisches Mittel, Mittelwert, Erwartungswert
= fi * klassenmitte_i
###### q-Quantil mit n Stichproben
Ist $n * q$ ganze Zahl dann $R_q = 1/2 (x_(n*q) + x_(n*q+1))$

Sonst $R_q = x_(|~n*q~|)$

0.5-Quantil = 2. Quantil, Medianwert, Zentralwert, $x_"med"$

Quantile aus CDF: $(a+b)/2$

![|400x0](/assets/Pasted%20image%2020250104112959.png)

$R_q = (b-a) / (F(a) - F(b)) * (q - F(a-1)) + a$ 

$q = F(a-1) + (R_q * (F(a) - F(a-1))) / (b-a)$

![|350x0](/assets/Pasted%20image%2020240923134042.png)
###### Boxplot
Box: 1., 2. und 3. Quantil

Whisker: Maximal 1.5 x Interquartilsabstand entwernt von Q1/Q3

Ausreisser: alle Ausserhalb Whisker

###### Modalwert / Modus / $x_"mod"$
= Der Wert der am häufigsten vorkommt

###### Varianz
x=stichproben, a=merkmalwerte
$tilde s^2 = 1/n sum_(i=1)^n (x_i - bar x)^2 = 1/n sum_(i=1)^m h_i * (a_i - bar x)^2 = (1/n sum_(i=1)^n x_i^2) - bar x^2 = (1/n sum_(i=1)^m a_i^2 * h_i) - bar x^2 = (sum_(i=1)^m a_i^2 * f_i) - bar x^2 = bar (x^2) - bar x^2$

$s^2 = 1/(n - 1) sum_(i=1)^n (x_i - bar x)^2 = n / (1 - n) tilde s^2$ 

###### Standardabweichung
$tilde s = sqrt(tilde s^2)$

###### Form der Verteilung
- Rechtsschief: $x_"mod" < x_"med" < tilde x$ = Maximum auf linker Seite
- Linksschief: $x_"mod" > x_"med" > tilde x$
- Symmetrisch: $x_"mod" = x_"med" = tilde x$
- unimodal = 1 Maximum, bimodal = 2 Maxima etc.


###### Bivariate Daten
- Zwei Kategorien: Mosaikplot
- 1 Kategorie, 1 Metrisch: Boxplot
- 2 Metrisch: Scatterplot

###### Pearson-Korrelationskoeffizient
$tilde s_(xy) = 1/n sum_(i=1)^n (x_i - bar x) (y_i - bar y) = bar (xy) - bar x * bar y$

$r_(xy) = (tilde s_(xy)) / (tilde s_x * tilde s_y) = (bar (xy) - bar x * bar y) / (sqrt(bar (x^2) - bar x^2) * sqrt(bar (y^2) - bar y^2))$

Nahe bei 1 = hohe Korrelation

| x   | 1   | 2   | 1.5  |
| --- | --- | --- | ---- |
| y   | 4   | -1  | 1.5  |
| x2  | 1   | 4   | 2.25 |
| y2  | 16  | 1   | 2.25 |
| xy  | 4   | -2  | 2.25 |

###### Spearman-Rangkorrelationskoeffizient

| x             | 5    | 2    |     |
| ------------- | ---- | ---- | --- |
| y             | 9    | 11   |     |
| rgx           | 2    | 1    | 1.5 |
| rgy           | 1    | 2    | 1.5 |
| rgx - avg rgx | 0.5  | -0.5 |     |
| rgy - avg rgy | -0.5 | 0.5  |     |

$R_"Sp" = (sum_(i=1)^n (rg(x_i) - bar(rg(x)))(rg(y_i) - bar(rg(y)))) / (sqrt(sum_(i=1)^n (rg(x_i) - bar(rg(x)))^2) * sqrt(sum_(i=1)^n (rg(y_i) - bar(rg(y)))^2))$


### Kombinatorik

$(n;k) = n!/((n-k)!*k!)$

$(n;0) = 1$

![|500x0](/assets/Pasted%20image%2020250104122443.png)
1. Nummerncode
2. Platzierung Wettkampf
3. x objekte aus y schalen
4. x zahlen im lotto ziehen

![|350](/assets/Pasted%20image%2020250104123025.png)


### Elementare Wahrscheinlichkeit

- E(X) = $mu$ (Lagemass)
- V(X) = $sigma^2$ (Streumass)
- S(X) = $sigma$

###### Bedingte Wahrscheinlichkeit

|           | X   | Y   | Summe |
| --------- | --- | --- | ----- |
| **A**     | 2   | 4   | 6     |
| **B**     | 3   | 1   | 4     |
| **Summe** | 5   | 5   | 10    |

###### Ereignisbaum
$P(A|B)$ = $(P(A nn B)) / (P(B))$

2 Ereignisse sind stochastisch unabhängig wenn gilt:

$P(X = x ^^ Y = y) = P(X = x) * P(Y = y)$

Bei 3 Ereignissen müssen alle Teilmengen unabhängig sein.
Für stochastisch unabhängige Ereignisse gilt: 

$E(X * Y) = E(X) * E(Y)$

und

$V(X + Y) = V(X) + V(Y)$

Z.b. P(X&A) = 2/10. P(X) = 1/2. P(A) = 6/10. nein.

### Verteilungen
![|500x0](/assets/Pasted%20image%2020250104132639.png)
E(Z) = 2E(X) + E(Y), z = 2x+y
V(Z) = 4V(X) + V(Y)
###### Hypergeometrische Verteilung
Es gibt M Merkmalsträger in N, x Merkmalsträger in n Stichproben
ohne zurücklegen

$P(X = x) = ((M;x) * (N-M;n-x)) / (N;n)$

$E(X) = n * M/N$

$VAR(X) = n * M/N * (1 - M/N) * (N-n) / (N - 1)$  

###### Bernoulliverteilung
- P(X = 1) = p, P(X = 0) = q
- E(X) = p
- E(X^2) = p * 1 + q * 0 = p
- V(X) = pq

###### Binomialverteilung
P(X = 1) tritt x-Mal ein bei n Wiederholungen mit zurücklegen. zb 3x Kopf

$(n;x) * p^x * q^(n-x)$

###### Poissonverteilung
Wahrscheinlichkeit dass Ereignis in einem Intervall i x-Mal vorkommt. Einheit von $lambda$ ist in Ereignisse/i

$P(X = x) = lambda^x / x! * e^(-lambda), lambda > 0$

Annäherung der Binominalverteilung: $lambda = n * p$

E(X) = VAR(X) = lambda

###### Gaussverteilung
$varphi(mu, sigma) = 1/ (2 pi * sigma) * e^(-1/2((x - mu) / sigma)^2)$

$E(X) = mu$

$V(X) = sigma^2$

###### Normalverteilung
= $varphi(0, 1)$

Bei der Normalverteilung liegen:
- ca. 68% zwischen $mu - sigma$ und $mu + sigma$
- ca. 95% zwischen $mu - 2sigma$ und $mu + 2sigma$
- ca. 99.7% zwischen $mu - 3sigma$ und $mu + 3sigma$

$U = (X - mu) / sigma$

$P(X <= x) = P(U <= u)$

$P(mu − e <= X <= mu + e) = 2 ** phi(e/sigma) − 1$

###### Zentraler Grenzwertsatz
Eine Grösse ist näherungsweise normalverteilt, wenn sie von einer Überlagerung von vielen unabhängigen zufälligen Einflüssen abhängt.

Annäherung der Binominalverteilung: $mu = np$ und $sigma^2 = npq$ wenn $npq > 9$

Stetigkeitskorrektur: P(5 < X <= 10) = P(5.5 <= X <= 10.5)

Annäherung der Poissonverteilung: $mu = lambda$ und $sigma^2 = lambda$

### Methode der kleinsten Quadrate
![|500x0](/assets/Pasted%20image%2020250104222804.png)
(in y richtung)
###### Nichtlineares Verhalten
Statt mit den originalen Werten kann z.B. mit dem Logarithmus der Werte gerechnet werden:

![|350x0](/assets/Pasted%20image%2020250105130155.png)

###### Residuenplot
$epsilon_i = y_i - hat y_i$

$hat y_i = g(x_i) = mx_i + d$

###### Bestimmtheitsmass
![|500x0](/assets/Pasted%20image%2020250105130119.png)

R^2 % der Gesamtvarianz in den y-Daten kann durch die Regressionsgerade erklärt werden
###### Mehrere Variablen

Gegeben sind:

Messwerte der Kategorie C: $y = (y_1;...;y_n)$

Andere Kategorien: $X = (A_1,B_1,1;...,...,1;A_n,B_n,1)$

Lösbar mit $p = (X^T X)^-1 X^T y$ für $y = Xp + epsilon$

$hat y = b_1 x_1 + b_2 x_2 + a$ 

$R^2 = (Sigma(hat y_i - bar y)^2) / (Sigma(y_i - bar y)^2)$

### Parameter- und Intervallschätzung

Schätzungen für $hat theta$

$hat mu = bar x$ oder $x_"med"$

$hat sigma^2 = s^2$

$hat p = fi = M / N$ bei M Merkmalsträgern in M

###### Maximum-Likelihood-Schätzung

Für Normalverteilung: $hat mu = bar x$ und $hat sigma^2 = tilde s^2$

Für Poissonverteilung: $lambda = 1/bar x$

###### Vertrauensintervalle

Für Vertrauensintervall $P(Theta_u <= theta <= Theta_o) = y$

$phi(c) = (1+y) / 2$

$e = c * sigma / sqrt(n)$

$Theta_u = bar X - e$ und $Theta_o = bar X + e$

P($bar x$ max um a abweicht)

$X~N(mu, sigma) -> bar X~N(mu, sigma/sqrt(n))$
$P(-a <= bar x - mu <= +a) = P(-a/(sigma/sqrt(n)) <= (bar x - mu) / (sigma/sqrt(n)) <= a/(sigma/sqrt(n))) = phi(?) - phi(-?) = ?? - (1 - ??)$

###### Weitere Verteilungen
t-verteilung: bei unbekannter varianz -> s^2 der stichprobe
- E(T) = 0
- Var(t) = n / (n - 2)
- t(n, a) = -t(n, 1-a)

𝜒2-Verteilung: $sigma$ schätzen
- chi(n) n = anzahl frei veränderbarer parameter
- n zufallsvars -> summe der quadrierten zsv

Die 𝜒2-Verteilung findet Anwendung, wenn man die *empirische Varianz bestimmt* hat und die Schätzung des Vertrauensintervalls ermitteln möchte, das den (unbekannten) Wert der Varianz der Grundgesamtheit mit einer gewissen Wahrscheinlichkeit einschliesst.

###### Übersicht über verschiedene Vertrauensintervalle zum Niveau $gamma$

![](/assets/Pasted%20image%2020250606102712.png)