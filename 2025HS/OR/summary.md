### Lineare Optimierung
![](assets/Pasted%20image%2020260123142201.png)
Kanonische Form: $"max " c^Tx , Ax <= b$ // $"min " c^Tx , Ax >= b$

Standard Form:   $"max "c^Tx , Ax = b$  // $"min "c^Tx , Ax = b$

#### Simplex-Verfahren
- Standardform
- Wahl Spalte: Kleinster positiver Wert
- Wahl Zeile: Kleinstes RS/zeile (für zeilen > 0)
- Keine Lösung: Hilfszielwert =/= 0
- Mehrere Lösungen: Zielzeile von Nichtbasisvariable = 0
- Unbeschränkt: Keine Pivotzeile wählbar (alle in A <= 0)
- Minimieren: Soll alles negativ. Maximieren: Soll alles positiv
- 2 Phasen: z'<0 = unbeschränkt, unzulässing = nicht lösbar

#### Formale Lösung
$x$ = Basisvariablen, $y$ = Nicht-Basisvariablen
$B$ = Basisvariablen-Matrix, $D$ = Nicht-Basisvariablen-Matrix
$c$ = Zielfunktionskoeffizienten, $d$ = Nicht-Basisvariablen-Koeffizienten

1. Auswahl zulässiger Basis $B^-1 b >= 0$
2. Simplex-Kriterium $tilde c^T B^-1 D - d^T <= 0$ für Optimalität
3. $z = tilde c^T B^-1 b - (tilde c^T B^-1 D-d^T) y$

Maximale Vergrösserung der Nichtasisvariable v: $tilde x = b - D_v * v >= 0$

Gesamter Lösungsvektor: $x = B^-1 b - B^-1 D y$

#### Dualität
$"max "c^Tx, Ax <= b <=> "min "b^Ty, A^Ty >= c$

Wenn beide zulässig sind dann existiert $c^T x = b^T y$

Komplementaritätsbedingungen [Link](2025HS/OR/Woche%206/Übungsserie%206.md#3.%20Komplementaritärsbedingungen)
$x_j * (A^T y - c)_j = 0$
$y_i * (A x - b)_i = 0$

Ax_i => i-te Zeile von A, * x

Schattenpreis: $Delta * y_i$
#### [Branch_and_Bound_Algorithmus](2025HS/OR/Woche%208/Branch_and_Bound_Algorithmus.pdf)

### Optimale Wege
#### Dijkstra
0. alle unereichbaren unendlich (l_i = ..., pred_i = /)
1. nachbarn berechnen
2. kürzesten in mege nehmen
3. jetzt hat es neue nachbarn
![|350x0](assets/Pasted%20image%2020260121155753.png)

#### Floyd-Warshall
Erlaube Knoten i in i-ter Iteration

#### Topologische Sortierung / Weg für azyklische Graphen
1. Knoten ohne Vorgänger wählen
2. Länge zu Nachgänger updaten
3. Gewählten Knoten entfernen

#### LP Formulierung
![|600x0](assets/Pasted%20image%2020260122132721.png)

### TSP
#### Umwandlung
Alles verbinden + Strafe auf neue Kanten mit Summe aller anderen Kantenwerte

#### Nearest Neighbor
Einfach immer nähesten Knoten nehmen
#### Nearest, Farthest, Cheapest Insertion
1. Teiltour aus 2 Knoten
2. Wähle nähesten/weitesten Knoten
3. Füge diesen an besten Stelle ein (bestes Delta)

Cheapest Insertion => statt Schritt 2 für alle Knoten Schritt 3 probieren

#### 2/3/4-Opt
2/3/4 Knoten vertauschen bis nicht mehr möglich

#### LP Formulierung
![|600x0](assets/Pasted%20image%2020260122132902.png)

Es gilt: $3 <= |S| <= |__|V|/2__|$

### Optimale Bäume
#### LP Formulierung
![|600x0](assets/Pasted%20image%2020260123085544.png)
Mindestens k-1 Kanten müssen zwischen k disjunkten Mengen gewählt sein
#### Kruskal Algorithmus
1. Ordne Kanten nach aufsteigenen Gewichten
2. Wähle nächstkleinste Kante die keinen Zyklus kreiert
#### Steiner Bäume
1. Konstruiere den vollständigen Graphen mit kürzesten Weglängen als Gewichten
2. Es existiert ein minimaler Steiner-Baum mit maximal |N|-2 Zwischenknoten
