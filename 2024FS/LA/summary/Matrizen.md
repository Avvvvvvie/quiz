#### Matrizenmultiplikation
Nicht Kommutativ: $A*B != B*A$
$(a,b;c,d) * (e,f;g,h) = (a*e + b * g, a * f + b * h; c * e + d*f,c*g+d*h)$
#### Transposition
$(a,b;c,d)^T = (a,c;b,d)$

#### Gauss-Verfahren
Vorgehen:
1. Erste Zeile führende 1 erzeugen
2. Erste Zeile bei den anderen abziehen, so dass unter der ersten Zeile nur noch Nullen stehen.
3. Das Gleiche für die weiteren Zeilen und ihre darunterstehenden Zeilen tun.
Erweitertes Verfahren: 
4. Von unten herauf über den führenden Einsen Nullen erzeugen.

#### Gleichungssysteme
- Homogen -> nur Nullen auf der rechten Seite 
- linear -> Unbekannten kommen nur in der ersten Potenz vor
- Rang eines Gleichungssystem: Gesamtanzahl Zeilen – Anzahl Nullzeilen
- Lösbarkeit:
	- RG(A) = RG(A|c) -> lösbar
	- RG(A) = n -> genau 1 (triviale) Lösung
	- RG(A) < n -> unendlich viele Lösungen
	- In Restklassen kann es sein, dass doch keine lösung existiert, wenn es kein mutiplikatives Inverses gibt.