


> [!quiz]- Kann man bei einer Linearen Gleichung immer eine eindeutige Lösung finden?
> Nicht wenn a) a = 0 oder b) es gibt mehrere Unbekannte.

> [!quiz]- Wie multipliziert man die Matrix MxN mit der Matrix OxP?
> Man nimmt das Skalarprodukt der i. Zeile M und der j. Spalte P um den Wert in der i. Zeile und j. Spalte zu erhalten. Dadurch wird die neue Matrix MxP gross und die Multiplikation ist nur möglich, wenn N = O.

> [!quiz]- Wie transponiert man eine Matrix?
> Die Zeilen der Matrix (von oben nach unten) werden zu den Spalten der Matrix (von links nach rechts). Wenn man die Matrix um 90 Grad im Uhrzeigersinn dreht, dann ist es nicht richtig. Man muss die Matrix dann noch spiegeln.

> [!quiz]- Wie sieht eine Zeilenstufenmatrix aus?
> Jede Zeile fängt mit einer 1 an oder besteht nur aus Nullen. Die oberste Zeile hat die 1 am weitesten links die 2. als 2. etc. Jede Spalte, in der so eine führende 1 steht, hat unter der 1 nur Nullen.

> [!quiz]- Wann hat eine Zeilenstufenmatrix 0,1 oder $oo$ Lösungen?
> Wenn es eine Zeile gibt, mit nur Nullen, dann gibt es $oo$ Lösungen. Wenn es eine Zeile gibt, mit links nur Nullen, rechts aber keine Null, dann gibt es keine Lösung. In diesem Fall ist der Rang der erwiterten Matrix ungleich dem Rang der Matrix auf der linken Seite. Sonst gibt es 1 Lösung. Wenn mit Äquivalenzklassen gerechnet wird, kann es sein, dass es doch keine Lösung gibt, wenn das multiplikative Inverse nicht existiert.

> [!quiz]- Wieso ist die Menge der Polynome von Grad 3 kein Vektorraum?
> Weil man z.B ein solches Polynom ovn einem anderes addieren kann, so, dass ein Polnom kleineren Grades herauskommt.

Wenn es nicht det(2x2) gibt ist es dann nie invertierbar?

Was sind die 6 wichtigen Eigenschaften des Kreuzprodukts?

![[Pasted image 20240325090355.png]]



![[Pasted image 20240415170116.png]]


Gegeben sind die Menge M, die Operation $ast$ und $a, b, c in M$
(M, $ast$) ist ... wenn gilt ...
-> abgeschlossen: $a ast b in M$ -> algebarische Struktur
-> assoziativ: $(a ast b) ast c = a ast (b ast c)$ -> halbgruppe
-> neutrales element $e ast a = a ast e = a$ -> monoid 
-> inverses element $a^-1 ast a = e$ -> gruppe
-> kommutativ $a ast b = b ast a$ -> abelsche/kommutative gruppe

Vektorraum: (V, +) und auch (V, $*$) bilden abelsche Gruppe

Wieso ist in einem Vektorraum der Polynome von Grad <= 3 das neutralelement 0 + 0x + 0x^2... ? dieses mal etwas anderes gibt ja nicht dieses andere sondern 0. (die regel ist doch, dass a * e = e * a = a und normalerweise nicht mit +)

> [!quiz]- Welche Regeln gelten für einen Vektorraum?
> (1) Assoziativgesetz
> 
> (2) neutrales Element
> 
> (3) inverses Element
> 
> (4) Kommuattivgesetz
> 
> Ausserdem:
> ![|500](Pasted%20image%2020240418180214.png)

> [!quiz]- Wann ist eine Teilmenge eines Vektorraums ein Unterraum?
> (1) Für beliebige Elemente a, b in U ist a + b in U.
> 
> (2) Für jeden Skalar $lambda in bbb R$ und jeden Vektor $a in bbb U$ ist $lambda * a in bbb U$.
>
> Deshalb muss auch das Neutralelement im Unterraum existieren. (weil $0 * a = e$).

> [!quiz]- Ist ${vec 0}$ ein Unterraum von einem Vektorraum V?
> Ja: 0 + 0 = 0, lambda mal 0 = 0

> [!quiz]- Wann ist eine Matrix ein Vektorraum?
> Auch hier muss gelten:
> 
> (1) $A + B$ muss eine $nxxn$ Matrix sein
> 
> (2) $lambda * A$ muss eine $nxxn$ Matrix sein
> 
> (3) Es existiert ein neutrales Element, die Nullmatrix


welche konditionen  dass vektormenge kordinatensydtem für vektorraum? (2)
- spann der vecs in menge = V. wie prüft man dies?

was ist linearer spann

wenn rg(A) < n dann unendlich lösungen

wenn rg kleiner dann nicht lösbar (0 = xy)


- dim
- span
- det
- erzeugendenraum
- linear abhängig
- basis
- vektorraum
- unterraum
- kordinatensystem für x


Wann ist etwas eine lineare Abbildung?
Wenn die Reihenfolge von
- Multiplikation
- die Abbildung
- Skalieren
keine Rolle spielt. Bzw
$f(x) + f(y) = f(x + y)$ und $lambda * f(x) = f(lambda * x)$
Das bedeutet dass Objekte in ihrer Form bleiben (drehen, projezieren aber nicht krümmen) in beliebigen Dimensionen.

Wie transformiert man in eine andere Basis?
Man löst das Gleichungssystem $(vdots,vdots,vdots|x_1;b_1,b_2,b_n|x_2;vdots,vdots,vdots|x_n)$
wobei b1-n die Basisvekltoren der neuen Basis und x1-n der zu transformierende Vektor ist.

Was ist die einzige lineare abb von R nach R

Wie erhält man eine Abbildungsmatrix?
Man nimmt die Ergebnisse von $f(e_n)$ und jeder Ergebnisvektor ist dann eine Spalte der Abbildungsmatrix $(vdots,vdots,vdots;f(e_1),f(e_...),f(e_n);vdots,vdots,vdots)$
Statt e kann man jede Beliebige Basis nehmen und erhält dann die Abbildungsmatrix in derjenigen Matrix.

Wie erhält man die Abbildungsmatrix von V->W wenn V und W in verschiedenen Basen sind?
1. Man nimmt die Abbildungsmatrix in der 1. Basis. 
2. Man transformiert dessen Spaltenvektoren.
(Dadurch kann man einen Vektor mit Basis V direkt transformieren und in W erhalten $_WA_V * x_V = y_W$)








