
> [!quiz]- Was sind die beiden Regeln von De Morgan?
> ¬(A ∧ B) ⇔ ¬A ∨ ¬B ¬(A ∨ B) ⇔ ¬A ∧ ¬B

> [!quiz]- A ∧ (B ∨ C) ist mit dem Distributivgesetz auch...?
(A ∧ B) ∨ (A ∧ C)

> [!quiz]- Was besagt das Prinzip der Kontraposition?
A ⇒ B ist äquivalent zu ¬B ⇒ ¬A

> [!quiz]- Welche zwei "grundlegende" Quantoren gibt es?
∀: Allquantor und ∃: Existenzquantor

> [!quiz]- Was ist eine echte Teilmenge?
Eine echte Teilmenge der Menge M ist eine Teilmenge, die nicht gleich die Menge M selbst ist.

> [!quiz]- Wie sieht das zeichen für "... ist eine echte Teilmenge" aus?
⊊

> [!quiz]+ Was sind die 4 Quantorenregeln?
>
> > [!quiz]- a) Vertauschungsregel für unbeschränkte Quantoren
> > ∀x A(x) ⇔ ¬∃x ¬A(x) 
> 
> > [!quiz]- b) Vertauschungsregel für beschränkte Quantoren
> > ∀x ∈ K A(x) ⇔ ¬∃x ∈ K ¬A(x) 
>
> > [!quiz]- c) Beschränkter und unbeschränkter Allquantor
> > ∀x ∈ K A(x) ⇔ ∀x(x ∈ K ⇒ A(x))
>
> > [!quiz]- d) Beschränkter und unbeschränkter Existenzquantor
> > ∃x ∈ K A(x) ⇔ ∃x(x ∈ K ∧ A(x))
> > 

> [!toquiz]+ Es seien P (x) ein einstelliges und Q(y, z) ein zweistelliges Prädikat. Formalisieren Sie: 
> a) Es gibt genau ein x mit P (x). 
> 
> b) Es gibt mindestens zwei Dinge mit der Eigenschaft P . 
> 
> c) Es gibt höchstens ein x mit P (x). 
> 
> d) Wenn P (x) und P (y) gilt, dann gilt stets auch Q(x, y). 
> 
> e) Für kein x gilt Q(x, x)

> [!quiz]- Was gibt es für Beweistechniken?
> Implikation, Widerspruch, Gegenbeispiel, Kontraposition (¬B ⇒ ¬A), bei Äquivalenz: man muss sowohl A⇒B als auch B⇒A beweisen.

> [!quiz]- Was bedeutet surjektiv?
> Jedem Element der Zielmenge muss mindestens ein Element der Definitionsmenge zugeordnet sein.

> [!quiz]- Was bedeutet injektiv?
>  Jedes Element der Zielmenge darf höchstens einem Element der Definitionsmenge zugeordnet werden. (Es kann auch keines sein)

> [!quiz]- Was bedeutet bijektiv?
> Eine Abbildung ist bijektiv, wenn sie sowohl surjektiv als auch injektiv ist. D.h. jedes Element aus der einen Menge wird genau einem aus der anderen Menge zugeordnet.

> [!quiz]- Was bedeutet transitiv?
> Wenn für alle x, y, z ∈ X
> xRy ∧ yRz ⇒ xRz
> gilt.

> [!quiz]- Was bedeutet symmetrisch?
> Wenn für alle x, y ∈ X
> xRy ⇒ yRx
> gilt.

> [!quiz]- Was bedeutet antisymmetrisch?
> wenn für alle x, y ∈ X
> xRy ∧ yRx ⇒ x = y
> gilt.

> [!quiz]- Was bedeutet reflexiv?
> wenn für alle x ∈ X
> xRx
> gilt.

> [!quiz]- Welche Eigenschaften hat eine Äquivalenzklasse?
> Sie ist reflexiv, symmetrisch und transitiv.

> [!quiz]- Was zeichnet eine Präordung aus?
> Sie ist reflexiv und transitiv.

> [!quiz]- Was zeichnet eine Halbordung aus?
> Sie ist reflexiv, antisymmetrisch und transitiv.

> [!quiz]- Was ist eine totale oder lineare Ordung?
> Sie ist eine Halbordung (reflexiv, antisymmetrisch & transitiv) und es gibt keine unvergleichbaren Elemente.

> [!quiz]- Was ist eine Wohlordnung?
> Sie ist eine totale Ordnung und jede Teilmenge hat mindestens ein minimales Element.

> [!quiz]- Für was sind Wohlordungen wichtig?
> Damit weiss man, ob man eine Rekursion machen kann.

> [!quiz]- Was für eine Ordnung ist "kleiner gleich" 1. auf N und 2. auf Z?
> Sie ist eine totale Ordung auf beide Mengen, aber keine Wohlordnung auf Z.

> [!quiz]- Was für eine Ordung ist die Teilerrelation/Teilbarkeitsrelation?
> Sie ist eine Halbordung, aber keine totale Ordung.

> [!quiz]- Was ist eine Partition?
> Eine Partition P = {Pi | i ∈ I} einer Menge A, ist eine Menge von Teilmengen von A, die folgende beiden Voraussetzungen erfüllt: 
> - Die Elemente von P sind nichtleer und paarweise disjunkt. 
> - ⋃ i∈I Pi = A Die Elemente einer Partition werden Blöcke der Partition genannt.

> [!quiz]- Stimmt diese Aussage: ∀n ∈ N ∃k ∈ N (n = k + 10)?
> Nein

> [!quiz]- Stimmt diese Aussage: ∃n ∈ N ∀k ∈ N (n < k + 3)
> Ja

> [!quiz]- Wann ist eine Menge abzählbar?
> Wenn eine surjektive Funktion F : N → X existiert oder wenn X = ∅ gilt.

> [!quiz]- Wie nennt man eine Menge, die nicht abzählbar ist?
> Überabzählbar

> [!quiz]- Wie sieht die Menge P(A \ B) aus?
> {∅, {a},{b},{a,b}}

> [!quiz]- Es sei X \ Y abzählbar und X überabzählbar. Können Sie etwas über die Abzählbarkeit/Überabzählbarkeit von Y aussagen?
> Y muss auch überabzälbar sein. Wenn man etwas abzählbares von einer überabzählbaren Menge wegnehmen könnte, so, dass die Restmenge abzählbar ist, dann müsste man die überabzählbare Menge auch zählen können, was sie nicht mehr zu einer überabzählbaren Menge macht.

> [!quiz]- Was ist P({1,2})?
> {∅, {1}, {2}, {1,2}}

> [!quiz]- Was ist P({1,2,3}) x ∅?
> ∅

> [!quiz]- Wie sieht die DNF aus?
> (A ∧ B) ∨ (C ∧ D)

> [!quiz]- Wie sieht die KNF aus?
> (A ∨ B) ∧ (C ∨ D)

> [!quiz]- Wie sieht die NNF aus?
> kein → und kein !(...) kommen vor
> (alle Negationen kommen in Literalen vor)

> [!quiz]- Was bedeutet das Zeichen ≡?
> Sind F und G äquivalente Formeln, dann schreiben wir F ≡ G

> [!quiz]- Was bedeutet Im(f)?
> Die Menge aller Funktionswerte Im(f ) := {f (x) | x ∈ A} wird als Bild(menge) von f bezeichnet.

> [!quiz]- Was bedeutet Dom(f)?
> Eine Menge A nennen wir den Definitionsbereich von f und schreiben dafür auch Dom(f).

> [!quiz]- Wie sieht die prädikative Schreibweise aus? (Zum Beschrieben von Mengen)?
> {z ∈ X | E(z)} oder mit {z | z ∈ X ∧ E(z)}

> [!quiz]- Wie sieht die Ersetzungsschreibweise aus? (Zum Beschrieben von Mengen)?
> {F (x) | x ∈ X} := {y | ∃x ∈ X (y = F (x))}.

> [!quiz]- Was ist die Disjunktmenge?
> Zwei Mengen X und Y heissen disjunkt, falls sie keine gemeinsamen Elemente haben, d.h. falls X ∩ Y = ∅ gilt.
> Wir sagen eine Menge {Xi | i ∈ I} von Mengen bestehe aus paarweise disjunkten Mengen, wenn folgendes gilt: ∀i, j ∈ I (i /= j ⇒ Xi ∩ Xj = ∅).

> [!quiz]- Wie sieht X \ Y in der prädikativen Schreibweise aus?
> X \ Y := {x ∈ X | x /∈ Y }

> [!quiz]- Wie sehen verschiedene Operationen mit der leeren Menge aus: Potenzmenge, kartesisches Produkt, Schnittmenge?
> P(∅) = {∅}
> ∅ x A = ∅
> ∅ ∩ A = ∅

> [!quiz]- Was ist ein DAG?
> Ein gerichteter zyklenfreier Graph

> [!quiz]- Wenn man das Prinzip vom kleinsten Verbrecher nutzt, ist es nicht so, dass es nicht funktioniert, wenn die zu beweisende Aussage für alle Zahlen (-unendlich;x] gilt? dann gibt es kein minimum aber es trifft nicht für alle Zahlen zu.
> Ja, aber das Prinzip eignet sich für Mengen die nach unten Begrenzt sind, wie die Natürlichen Zahlen.

> [!quiz]- Was ist N(stern) ?
> N ohne 0 *oder* die kleinste Relation, die N+ enthält und reflexiv ist.

> [!quiz]- Was ist N+?
> Die kleinste transitive Relation, die N enthält.

> [!quiz]- Was gibt es so für ggT-Rechenregeln?
> - ggt(a,b + ac) = ggt(a,b)
> - ggt(n,m) = ggt(m,m-n) wenn m > n

