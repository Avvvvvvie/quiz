###### Einheiten

T -> G -> M -> k -> 1 -> m -> $mu$ -> n -> p -> f

### Kraft, Ladung, Energie

###### Kraft $F = m * a$

Ladung Elektron : $1.602189 * 10^(-19)$

Masse Elektron : $9.11 * 10^(-31)$

Masse Proton : $1.67262 * 10^(-27)$
###### Gravitationskräfte zwischen zwei Massen / Kraft auf Ladung q1, verursacht durch Ladung q2

$F_G = gamma (m_1 * m_2) / r^2$

$gamma = 6.674 * 10^-11$ = Gravitationskonstante

###### Coulombkraft zwischen zwei Ladungen

$F_12 = 1 / (4 pi epsilon_0) * (q_1 * q_2) / (|r_12|^2) * n_12$

oder

$F_12 = 1 / (4pi * epsilon_0) * (q_1 * q_2) / (r_12^2)$ (r = Abstand wenn man nur den Betrag will)

$r_12 = r_1 - r_2$ = Distanzvektor von Ladung 12 zu Ladung q1

$n_12 = r_12 / |r_12|$ = Einheitsvektor von Ladung q2 zu Ladung q1

$epsilon_o = 8.859 ** 10^-12$ = Elektrische Feldkonstante

Gravitation kann auf der atomaren Ebene vernachlässigt werden.

###### Potentielle Energie einer Masse im Schwerefeld der Erde
$E_(pot) = mgh$

###### Kinetische Energie $E_"kin" = (mv^2) / 2$

###### Federenergie $E_"spring" = k * (x - L)^2 / 2$

###### Potentielle Energie einer Ladung bei einer Spannung
$E_"pot.el" = Uq$

###### Weg, Zeit, Geschwindigkeit und Beschleunigung

|       | t                    | s                | v               | a                |
| ----- | -------------------- | ---------------- | --------------- | ---------------- |
| **t** |                      | $s = v^2 / (2a)$ | $v = sqrt(2as)$ | $a = v^2 / (2s)$ |
| **s** | $t = v / a$          |                  | $v = a * t$     | $a = v / t$      |
| **v** | $t = sqrt((2s) / a)$ | $s = (at^2) / 2$ |                 | $a = (2s) / t^2$ |
| **a** | $t = (2s) / v$       | $s = (vt) / 2$   | $v = (2s) / t$  |                  |

###### Arbeit: Joule [J]

$E_"mech" = F * s$

### Veränderungsraten, Strom, Spannung, Leistung, Widerstand, Batterie

###### Strom [Ampère] = Ladung [Coulomb] / Zeit [s]
$I = Q / t$

######Leistung [Watt] = Energie [Joule] / Zeit [s]
$P = E / t$

$1"J" = 1 "Ws"$

$1 "kWh" = 3.6 * 10^6 "Ws" = 3.6 * 10^6 "J"$
###### Wirkungsgrad $eta = P_"output" / P_"input"$
t/wirkungsgrad = neue dauer

$I = U_0 / R_"tot"$

$P_"tot" = I * U_0$

$P_"last" = I^2 * R_"last"$

-> Plast/Ptot
###### Wirkungsgrade
- Elektromotor : 80 - 99%
- Transformator : 80 - 99%
- Elektroheizung : 100%
- Verbrennungsmotor : 30 - 40%
- Solarzelle : 15 - 24%
- Windturbine : 45 - 55%
- Wasserkraftwerk : 80 - 90%
- Kohlekraftwerk : 40 - 45%
- Mensch (mech. Arbeit) : ≈ 25%

###### Elektrische Leistung
$P_"el" = U*I$

###### Ohm’sches Gesetz
$U = R*I$

$P = I^2 * R$

$P = U^2 / R$

$P = W / t$

###### Elektrischer Widerstand eines Drahtes
$R = (rho * l) / A$

| Material       | $rho$                     |
| -------------- | ------------------------- |
| Eisen          | $1 * 10^-1 − 1.5 * 10^−1$ |
| Kupfer         | $1.7 * 10^−2$             |
| Gold           | $2.2 * 10^−2$             |
| Silber         | $1.6 * 10^−2$             |
| Leitungswasser | $2 * 10^7$                |
| Meerwasser     | $5 * 10^5$                |

**Spannungsmessung:** hoher Innenwiderstand

**Strommessung:** niedriger Innenwiderstand
### Schaltungen
Knotenregel = $I_"in" = I_"out"$

Maschenregel = $U_0 = U_1 + U_2 ...$

Serienschaltung = $R = R_1 + R_2$

Paralellschaltung = $R = 1 / (1 / R_1 + 1 / R_2)$

### Kondensator / RC-Schaltkreis

###### Kapazität C [Farad]
$C = Q / U_C$

$C = epsi_0 * epsi_r * A / d$

![|100x0](assets/Pasted%20image%2020250123104348.png)
![|150x0](assets/Pasted%20image%2020250123104421.png)
###### Strom durch den Kondensator
$I = Q / (Delta t)$

$I(t) = (U_0 - U_C(t)) / R$

$I(t) = 1/R * (U_0 - (Q(t)) / C)$

Die Zeitkonstante wird erreicht bei **37%** des Ursprungswertes des Stroms. Die Kondensatorspannung $U_C$ steigt in der Zeitkonstante auf **63%** der Quellenspannung $U_0$ an. Nach fünf Zeitkonstanten ist diese Spannung zu mehr als 99 % erreicht.

$tau = R * C$

**Hochpassfilter**
![|500x0](assets/Pasted%20image%2020241027115943.png)

**Tiefpassfilter**
![|500x0](assets/Pasted%20image%2020241027120156.png)
Tiefpassfilter -> begrenzt hohe frequenz. x < fg -> Uout unter 70.7% U0 weil je höher desto tiefer
Hochpassfilter -> begrenzt tiefe Frequenz

Bei Grenzfrequenz $f_g$ : Ausgangsspannung beträgt 70.7% der Eingangsspannung.

$f_g = 1 / (2pi * R * C) = 1 / (2pi * tau)$


### Spule / RL-Schaltkreis

**Induktivität L** [Henry]

$L = (U_L * Delta t) / (Delta I)$

$U_L$ = Spannung über Spule

$L = mu_0 * mu_r * N^2 * A / l$

Die Veränderungsrate des Stroms ist die Veränderungsrate der Veränderungsrate der Ladung.
Ein Eisenkern verstärkt das Magnetfeld der Spule erheblich, da das Material magnetische Flusslinien besser bündelt. Die Induktivität wird erhöht.

$I/t = Q / t^2$

$I(oo) = U_0 / R$

###### Zeitkonstante
$tau = L / R$

I steigt zu 63%

### LC-Schwingkreis
![|300x0](assets/Pasted%20image%2020241027120838.png)

$f = 1 / (2pi sqrt(LC))$

### Gedämpfter Schwingkreis / LCR-Schwingkreis

$f = 1 / (2pi) sqrt(1 / (LC) - R^2 / (4L^2))$

Schwingt, wenn: $R < 2 sqrt(L / C)$

###### Zeitkonstante

$tau = (2L) / R$

### Signale

###### Blindwiderstand
Je höher die Frequenz, desto kleiner der Blindwiderstand und desto grösser der Stromfluss.

$X = 1 / (2pi f C)$

###### Sinussignal

$U(t) = U_0 * sin(2 pi f t + varphi)$

$sin(x + pi/2) = cos(x)$

$sin(0) = 0$

1Hz -> T = 1

2Hz -> T = 0.5

![|400x0](assets/Pasted%20image%2020241027140706.png)
###### Phasenverschiebung
![|300x0](assets/Pasted%20image%2020250123101403.png)

### Halbleiter
Dotiert wird auf Silizium.

###### P-Dotierunh
Ein Elektron zu wenig -> positive Ladung.
Bor, Aluminium

###### N-Dotierung
Ein Elektron zu viel -> negative Ladung. Phosphor

###### PN-Übergang
Ein positiver Strom kann nur in P->N Richtung fliessen.

### Transistor

P-Transistor : Strom fliesst, wenn kein Strom beim Gate fliesst.

N-Transistor : Strom fliesst, wenn ein Strom beim Gate fliesst. (Spannung von Gate zu Source muss Grenzwert erreichen)

![|200x0](assets/Pasted%20image%2020241027141537.png)

Der Strom kann auch nur in eine Richtung fliessen (von Source zu Drain), wie bei einem Halbleiter.

###### Open Drain
Ein NOT-Gate mit einem Open Drain und Pull-Up ist nicht effizient, weil konstant Strom fliesst.

###### Push-Pull
Bei einem NOT-Gate mit Push-Pull fliesst nur Strom, wenn beim Output Strom fliessen soll.

### Logik-Gatter
- NAND : <2
- NOR  : =0
- XOR  : =1
- XNOR : =0 || =2

![](assets/Pasted%20image%2020241229143711.png)
###### NOR
![|200x0](assets/Pasted%20image%2020250123094142.png)
###### NAND
![|200](assets/Pasted%20image%2020250123094211.png)
###### OR
![|200x0](assets/Pasted%20image%2020250123094257.png)

###### 1 Bit Halbaddierer
![|300x0](assets/Pasted%20image%2020241028164820.png)

###### 1 Bit Volladdierer
![|300x0](assets/Pasted%20image%2020241028164854.png)

1 Bit Volladdierer mit Carrier vom letzten Volladdierer

4 Bit Volladdierer verbindet 4 von diesen.

![|400x0](assets/Pasted%20image%2020241028165004.png)

### Flipflops

###### SR-Flipflop

| S   | R   | Q   | !Q  |
| --- | --- | --- | --- |
| 0   | 0   | Q   | !Q  |
| 1   | 0   | 1   | 0   |
| 0   | 1   | 0   | 1   |
| 1   | 1   | 0   | 0   |

###### JK-Flipflop

| J   | K   | Flanke | Q Next |
| --- | --- | ------ | ------ |
| 1   | 1   | h      | !Q     |
| 1   | 0   | h      | 1      |
| 0   | 1   | h      | 0      |
| 0   | 0   | 1,0,t  | Q      |

###### D-Flipflop

| D   | Flanke | Q Next |
| --- | ------ | ------ |
| 0   | h      | 0      |
| 1   | h      | 1      |
| X   | 1,0,t  | Q      |

###### Asynchronzähler

![|400x0](assets/Pasted%20image%2020241028164657.png)

### Sensoren

###### Sensorkette
Sensoren -> Multiplexer -> Verstärker -> Sample&Hold -> A/D-Wandler -> Messrechner

Multiplexen = Auswählen des Messsignals mit dem Multiplexer

Sample & Hold = Abtasten und Halten des Messsignals

N-Bit-AD-Wandler hat 2^N Messstufen

relative Abweichung = 1 / 2^N

wenn <= 8 Bits dann 1 / (2^N - 1)

###### Dehnmessung

$(Delta R) / R = (k * Delta l) / l = k * epsi$

###### Photodiode
Photonoen erzeugen ein Elektron-Loch-Paar, so dass Elektronen zwischen den zwei Halbleitern durchfliessen können.

###### CO2-Messer
Mehr CO2 absorbiert Strahlung von 4.27μm, welche von einer Glühbirne erzeugt wird. Je weniger Strahlung gemessen wird, desto mehr CO2 ist vorhanden.

### Elektrische magnetische Felder

Ein Magnetisches Feld wird erzeugt durch
- Ströme (bewegte elektrische Ladungen)
- zeitlich veränderliche elektrische Felder
- magnetische Momente

und ein Elektrisches Feld durch
- (ruhende) Ladungen
- zeitlich veränderliche magnetische Felder

Die magnetische Kraft wirkt nur auf bewegte elektrische Ladungen. Dies ist die Lorentz-Kraft.

###### Einheiten
E = elektrisches Feld : Volt / Meter oder Newton / Coulomb = Kraft / Ladung

Richting des E-Feldes : + zu -

B = magnetische Feldstärke : Tesla oder kg / (s C)

Richting des B-Feldes : von N zu S / - zu + (technische stromrichtung: + zu -)

r = Ort der Ladung q

v = Geschwindigkeit der Ladung q

###### Elektrisches Feld Plattenkondensator

$E = U / d " oder " E = Q / (epsilon_0 * A)$

$|E| = 1 / (4 pi epsilon_0) * q_1 / r^2$

Dadurch Coulomb-Kraft $vec F = q_2 * vec E$

###### Lorentz-Kraft [Newton]
$vec F_L = q * (vec v xx vec B)$

Wenn $vec v$ senkrecht auf $vec B$ steht, dann gilt $m = (rqB) / v$ (Magnetische Kraft auf eine bewegte Ladung)

###### Elektromagnetische Kraft auf Ladung q
$F_"elmag" = q * (vec E + vec v xx vec B)$

Wenn kein b F = qE -> a=F/m (Elektrisches Feld, Tintenstrahldrucker)

###### Energiedichte w (Energie pro Volumen [Joule])
$w = epsi_0 / 2 * vec E^2 + (epsi_0 c^2) / 2 vec B^2$

$w = F * d = q * E * d = q * U$

$1eV = 1.6 * 10^−19 J$

$w = (m * v^2) / 2 = E_"kin"$

###### Gesamtenergie
$epsi = w / V$

###### Impuls eines Teilchens
$p = m v = q B r$

###### Gleichförmig drehende Schlaufe im Magnetfeld
$U(t) = U_0 sin(omega t + phi_0)$

### Elektrodynamik

###### Satz von Gauss

Der Fluss des elektrischen Feldes durch diese Fläche ist proportional zur Ladung, die von der Fläche umschlossen wird.

$Phi_(vec E) = 1/e_0 q$

###### Fluss der Feldes E durch eine Fläche A

Fläche $Phi = A * E$

Senkrecht zu Zylinderboden $Phi = 2 pi r^2 * E$

Paralell zu Zylinderboden $Phi = 2 pi r h * E$

Kugel $Phi = 4 pi r^2 * E$

Schiefe Ebene mit Winkel theta zwischen normale und Feldvektoren
$Phi = A * B * cos(theta)$

###### Spannung über einen Kondensator
$U = E * d$

###### Kapazität eines Kondensators
$C = (e_0 * A) / d$

###### Linienintegral
$U = int_y vec E d y$

y ist dabei ein beliebiger geschlossener Weg
###### Durchflutungsgesetz
$mu_0 * I = int_y vec B d y$

###### Nicht stationärer Fall
Ein zeitlich veränderlicher Fluss eines E-Feldes führt zu einem B-Feld.

Ein zeitlich veränderlicher Fluss eines B-Feldes führt zu einem E-Feld.

![|200x0](assets/Pasted%20image%2020241231150326.png)

![|200x0](assets/Pasted%20image%2020241231150352.png)

Fläche $S = Lvt -> U_ind = -BLv$
###### Magnetfeld im Abstand r
$B = (mu_0 I) / (2 pi r)$

###### Magnetfeld im Inneren einer Spule
$B = mu_r mu_0 N / l I$

$mu_0 = 1.2567 * 10^−6$

$mu_r$ = Permeabilitätszahl der Spulenfüllung

![|400x0](assets/Pasted%20image%2020241231144500.png)

###### Induktionsgesetz
Die zeitliche Änderung des Flusses eines Magnetfeldes durch eine Schlaufe induziert in dieser Schlaufe eine Induktionsspannung / Nennspannung / Effektivspannung U

Wenn $U(t) = U_0 * sin(2 pi f t + varphi)$

dann $U_"eff" = sqrt(1/T int_0^T U(t)^2 dt) = U_0 / sqrt 2$

###### Transformator

$N_1 / N_2 = I_2 / I_1 = U_1 / U_2$

###### Induktivität einer Spule mit N Windungen

$L = mu_r * mu_0 * N^2 / l * A$

### Wellenphänomene

Wellenlänge $lambda = c/f$ [m]

Wellenzahl $k = 2 pi / lambda$

Ausbreitungsgeschwindigkeit $c = lambda / T$

Lichgeschwindigkeit $c_0 = 3 * 10^8 m/s$

Werden zwei identische Wellen überlagert, so kann sich die maximale Intensität vervierfachen. Die Flankensteilheit von Signalen in der Realität ist immer endlich.

Ein Tiefpassfilter hat einen Einfluss auf die Flankensteilheit eines Signals.  

Signale mit unendlich steilen Flanken sind in der Realität nicht möglich.  

Nicht alle digitalen Signale haben die gleiche Flankensteilheit.  

Signale mit steilen Flanken transportieren nicht weniger Energie als Signale mit weniger steilen Flanken.  

Die Flankensteilheit von Signalen ist relevant für die Signalqualität. 

Die Flankensteilheit eines Signals beeinflusst die Frequenzen im Signal.  

Reale Signale haben nie eine unendliche Flankensteilheit.

###### Brechnungsindex
Der Brechungsindex n eines Mediums gibt an, um welchen Faktor sich Licht im Medium langsamer bewegt als im Vakuum.

$c_0 = n_"Meduim" * c_"Medium"$

![|250x0](assets/Pasted%20image%2020241231151816.png)

###### Lichtbrechung
Das Licht wird im optisch dichteren Material zum Lot hin gebrochen
= n1 < n2

Snellius-Gesetz $(sin(alpha)) / (sin(beta)) = c_1 / c_2 = (c_0 / n_1) / (c_0 / n_2) = n_2 / n_1$

![|200x0](assets/Pasted%20image%2020250123104517.png)

![|200x0](assets/Pasted%20image%2020241231152053.png)

###### Totalreflexion
Wenn $n_2 > n_1$ und $sin(beta) > n_1 / n_2$ dann kann das Licht nicht in das Medium 1 heraustreten.

![|230x0](assets/Pasted%20image%2020241231170517.png)

###### Intensität (Kugelwellen)

$P = I * 4 pi r^2$ [W]

$I_2 = (4 pi r^2_1 I_1) / (4 pi r^2_2)$ [W/m^2]

###### Absorption

$I_L(x) = I_(L_0) e^(-alpha x)$ 

$alpha$ = Dämpfungskoeffizient [1/m]
$I_(L_0)$ = Intensität beim Eintritt in das absorbierende Material

###### Dezibel

$H(r) = 10"dB" * log_10((I(r)) / 10^-12) = 10"dB" * log_10("SNR")$

$"Faktor" = 10^(x/10)$

- 6dB = Faktor 4
- 3dB = Faktor 2
- 17 dB = Faktor 50 = 10 + 10 - 3 = 10 x 10 / 2
- 2I => +3dB

x W wird um 10dB reduziert -> nur noch x/10 W Leistung

Schallintensiztät->Schallintensitätpegel = in Dezibel

2 gleiche Quellen = doppelte Intensität -> nochmals in Dezibel umrechnen oder faustregel +3db

###### Signal to Noise Ratio (SNR)
$"SNR" = P_"signal" / P_"noise" = I_"signal" / I_"noise" = A^2_"signal" / A^2_"noise"$

###### Humbucker Pickup
Nur durch das Magnetfeld induzierter Stom wird weitergeleitet, weil dort auf der einen Seite zuerst durch das verkehrte Magnetfeld der Srom umgekehrt wird und anschliessend die Spule umgekehrt gedreht ist. Auf der anderen Seite eben niht. Aber wenn der Strom von woanders kommt, dann ist die SPule zwar gedreht, aber das signal ist nicht wegen der Richtung des Magnetfelds auch gedreht.

###### Dipolantenne
Gibt wenig Signal in Richtung der Achse Stabes.
Halbwellendipol hat die Länge einer halben Wellenlänge. Wenn die Welle sich nur mit 95% ausbreitet, dann muss sie 95% kürzer sein.
Mit $c_0$ und $f$ berechenbar

###### Unschärfeprinzip

$(Delta f * Delta t) / 2 ~ 1$

Je steiler die Flanken eines Signals, desto grösser der Anteil der hohen Frequenzen im Signal.

###### Effekte in Ethernetkabel

- **Propagation delay**: Signal braucht eine gewisse Zeit, um vom einen Ende zum anderen zu gelangen. (→ Limite für Kabellänge) 
- **Bandbreite**: Je schneller das zu übertragende Signal, je kürzer die Pulse und desto grösser ist die Bandbreite des Signals.
- **Dispersion**: Signal degradiert, weil es aus unterschiedlichen Frequenzkomponenten besteht, es «verschmiert».
- **Absorption**: Je länger das Kabel, desto schwächer das Signal am anderen Ende.
- **Filterfunktion**: Frequenzabhängige Absorption dämpft hohe Frequenzen stärker als tiefe → Signal wird verzerrt, Kabel müssen auf gewünschte Bandbreite ausgelegt und standardisiert sein.
- **Rauschen**: Das Signal wird mit einem gewissen Rauschen empfangen werden → SNR darf nicht zu tief sein.


### Thermische Strahlung

###### Kelvin
T in Kelvin = T in Celsius + 273.15 K

###### Absorbtion
$alpha$ = Absorbtionskoeffizient 
$rho = 1 - alpha$ = Reflexionskoeffizient (Emmissionskoeffizient $epsi$). 
Dieser Anteil der Intensität wird reflektiert.

###### Wien'sches Verschiebungsgesetz
Maximum des Spektrums $lambda_"max" = b / T$ [m]

$b = 2.8978 ** 10^−3$

###### Strahler
$S$ = Strahlungsintensität pro Frequenz und Raumwinkel [W/m^2sr]

$P_"rad"$ = Abgestrahlene Leistung [W]

Leistung Heizstab $P_"el" + P_"therm" = 0$

###### Schwarzer Strahler
Bei einem schwarzen Strahler wird nichts reflektiert.

Es gilt:
- $alpha(f) = 1$
- $epsi(lambda) = 1$
- $S(f, T) = (2 h pi f^3) / c^2 1 / (e^((hf) / (k_B T) - 1))$ (Planck'sches Strahlungsgesetz / Verteilung der Intensität)
- $S(f, T) = (2 h pi c^2) / lambda^5 1 / (e^((hc) / (lambda k_B T) - 1))$
- $P_"rad" = (2 pi) / 15 k^4_B / (c^2 h^3) A T^4 = sigma * A * T^4$ (Stefan-Boltzmann Gesetz)
- $P_"rad" = -(dE) / (dt) = sigma A(T^4 - T^4_"env")$

$sigma = 5.67 * 10^-8$

$h = 6.626 * 10^-34$ = Plank'sches Wirkungsquant

$k_B = 1.38 * 10^-23$ = Boltzmann-Konstante

###### Grauer Strahler
Ein Teil ($P_"rad"$) wird reflektiert.

Es gilt:
- $epsi(lambda) < 1$
- $S(lambda, T) = epsi(lambda) (2 h pi c^2) / lambda^5 1 / (e^((hc) / (lambda k_B T) - 1))$
- $P_"rad" = -(dE) / (dt) = sigma epsi A(T^4 - T^4_"env")$

###### Thermische Energiebilanz

Energiestrom für Wärmeleitung $P_"cond" = Ah(T - T_"env")$

h = Wärmeübergangskoeffizient

Albedo = Intensität der reflektierten Strahlung / Intensität der einfallenden Strahlung = Anteil, der reflektiert wird