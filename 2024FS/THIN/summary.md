### Ackermann Funktion
Ist wie Loop Interpreter, es gilt:
1. Überall definiert
2. While/Turing berechenbar
3. Nicht Loop berechenbar = nicht primitiv rekursiv

Beweise:
1. Durch kleinsten Verbrecher und 3.Definition. `a(n,m) = a(n-1,a(n,m-1))`
2. a(0,m) = m+1. a(n,0) = a(n-1,1). a(n,m) = a(n-1,a(n,m-1)). Dies ist in einer beliebeiger Programmiersprache implementierbar.
3. Wächst schneller als jede primitiv rekursive Funktion.

### Entscheidugnsproblem $A sube Sigma^**$
Gegeben: $w in Sigma^**$

Gefragt: ist $w in A$? ja/nein

Entscheidbar = Eine Turing Maschine existiert, die immer anhält mit Resultat ja/nein.

Semi Entscheidbar =
- Ja wenn ja, $↑$ wenn nein
- rekursiv aufzählbar
- erkennbar in Zuständen

$A$ und $bar A$ sind semi-entscheidbar => $A$ ist entscheidbar

$A in Sigma^**$ ist entscheidbar => $bar A$ ist entscheidbar

$A, B$ sind (semi)entscheidbar => 
- $A nn B$ ist (semi)entscheidbar
- $A uu B$ ist (semi)entscheidbar

$A -<= B$ = $A$ ist auf $B$ reduzierbar. 
- $f(x) in B$ <=> $x in A$ ist die Reduktion von $A$ auf $B$ via $f$.
- $A sube C$ => $A -<= C$
- $B$ ist (semi)entscheidbar => $A$ ist (semi)entscheidbar
- $A$ unentscheidbar => $B$ unentscheidbar

### Rice
Folgendes ist unmöglich zu wissen:
- Ob 2 Programme die gleiche Funktion haben
- Ob ein Programm Bugs hat
- Ob ein Programm hält
- Ob ein Programm eine Spezifikation erfüllt

