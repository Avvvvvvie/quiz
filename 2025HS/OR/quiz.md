[e-reader-A Gentle Introduction to Optimization](https://ereader.cambridge.org/wr/viewer.html?skipLastRead=true#book/e7804368-41e1-4d3a-a1fe-a6dbe90af22b/page017)

[Simplex-Methode Rechner | Rechner.now](https://rechner.now/simplex-methode-rechner/)

[LP ohne Lösung](https://www.matopt.de/lineare-optimierung/keine-loesung.html)

### Wie ist ein lineares Optimierungsproblem definiert?
Sowohl die Zeilfunktion als auch die Nebenbedingungen müssen linear sein. Alle Variablen dürfen nur mit Konstanten multipliziert sein und müssen in der 1. Portenz stehen.

### Wann ist eine Lösung eines linearen Optimierungsproblem zulässig?

### Wie sieht die kanonische Form für Maximierungsprobleme aus?

### Wie sieht die kanonische Form für Minimierungsprobleme aus?

### Wie sieht die Standard Form für Maximierungsprobleme aus?

### Wie sieht die Standard Form für Minimierungsprobleme aus?

### Was sind die vor/nachteile von standard vs kanonisch?
In LA lernt man das Gaus Jordan Verfahren, dafür ist die Standard Form besser. Gleichungssysteme sind bekannter. Ungleichungen wie in der kanonischen Form kann man dafür schön geometrisch zeichnen.

### Auf welche 5 Wege kann man in die kanonische Form umformulieren?
1. $x <= 0 -> x^(-) >= 0$ 
2. $x in R -> x^(+) - x^(-) >= 0$
3. $x + y = z -> z <= x + yz >= z$
4. $min x -> max -x$
5. $x + y <= z -> x + y + s = z$

### Was sind die 3 Schritte eines Optimierungsprozesses?
1. Ein Optimierungsmodell konstruieren (Variablen, Zielfunktion, Nebenbedingungen)
2. Den Typ des Modells determinieren
3. Die passende Software wählen

### Wieso ist die Konvexität einer Funktion eine gute Eigenschaft für Optimierung?
Weil man dann weiss, dass man nicht in einem lokalen Minimum ist.

### Was ist ein Polyeder?
Eine Schnittmenge von halbräumen...

### Was ist eine Ecke?

### Wieso gibt es nicht immer einen kürzesten Weg bei einem gewichteten Graphen?
Wenn eine Kante negativ ist und es einen Zyklus gibt, dann kann der Weg unendlich klein sein.

### Wie funktioniert der Branch and Bound Algorithmus?

### Wie zwingt man ein TSP Algorithmus, von einem bestimmten Knoten zu einem anderen zu gehen?

### Wie vervollständigt man einen TSP Graphen zu einem vollständigen Graphen, so dass die Lösung immer noch für den unvollständigen, ursprünglichen Graphen gilt?

### Was ist ein Baum?
Ein zusammenhängender Graph ohne Zyklen

### Was ist ein Gerüst?
Ein Baum, welcher alle Knoten einer Menge umfasst. Nennt man auch einen Spannbaum.

### Wie ist das Vorgehen des Kruskal-Algorithmus?

### Was ist ein lineares Optimierungsproblem?
Besteht nur aus Funktionen und Nebenbedingungen, die linear sind. Linear = Additiv & Homogen

### Welche Lösungen kann es geben beim Simplexverfahren? Wie erkennt man das?
- 1 Lösung (alle parameter in z negativ/positiv)
- Unendlich Lösungen (lösung auf linie, Zielzeilenkoeffizient von 1 Nichtbasisvariable = 0)
- Nicht Lösbar (Keine Pivotspalte auswählbar, zielwert aber nicht 0)
- Unbeschränkt (Keine Pivotzeile auswählbar)


