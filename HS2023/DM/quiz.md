
> [!info]- Was sind die beiden Regeln von De Morgan?
> ¬(A ∧ B) ⇔ ¬A ∨ ¬B ¬(A ∨ B) ⇔ ¬A ∧ ¬B

> [!info]- A ∧ (B ∨ C) ist mit dem Distributivgesetz auch...?
> (A ∧ B) ∨ (A ∧ C)

> [!info]- Was besagt das Prinzip der Kontraposition?
> A ⇒ B ist äquivalent zu ¬B ⇒ ¬A

> [!info]- Welche zwei "grundlegende" Quantoren gibt es?
> ∀: Allquantor und ∃: Existenzquantor

> [!info]- Was ist eine echte Teilmenge?
> Eine echte Teilmenge der Menge M ist eine Teilmenge, die nicht gleich die Menge M selbst ist.

> [!info]- Wie sieht das zeichen für "... ist eine echte Teilmenge" aus?
> ⊊

> [!info]- Was sind die 4 Quantorenregeln?
> 1. Vertauschungsregel für unbeschränkte Quantoren: ∀x A(x) ⇔ ¬∃x ¬A(x) 
> 2. Vertauschungsregel für beschränkte Quantoren: ∀x ∈ K A(x) ⇔ ¬∃x ∈ K ¬A(x) 
> 3. Beschränkter und unbeschränkter Allquantor: ∀x ∈ K A(x) ⇔ ∀x(x ∈ K ⇒ A(x))
> 4. Beschränkter und unbeschränkter Existenzquantor: ∃x ∈ K A(x) ⇔ ∃x(x ∈ K ∧ A(x))

> [!question]- Es seien P (x) ein einstelliges und Q(y, z) ein zweistelliges Prädikat. Formalisieren Sie: (a) Es gibt genau ein x mit P (x). (b) Es gibt mindestens zwei Dinge mit der Eigenschaft P . (c) Es gibt höchstens ein x mit P (x). (d) Wenn P (x) und P (y) gilt, dann gilt stets auch Q(x, y). (e) Für kein x gilt Q(x, x)

> [!info]- Was gibt es für Beweistechniken?
> Implikation, Widerspruch, Gegenbeispiel, Kontraposition (¬B ⇒ ¬A), bei Äquivalenz: man muss sowohl A⇒B als auch B⇒A beweisen.

> [!info]- Was bedeutet surjektiv?
> Jedem Element der Zielmenge muss mindestens ein Element der Definitionsmenge zugeordnet sein.

> [!info]- Was bedeutet injektiv?
>  Jedes Element der Zielmenge darf höchstens einem Element der Definitionsmenge zugeordnet werden. (Es kann auch keines sein)

> [!info]- Was bedeutet bijektiv?
> Eine Abbildung ist bijektiv, wenn sie sowohl surjektiv als auch injektiv ist. D.h. jedes Element aus der einen Menge wird genau einem aus der anderen Menge zugeordnet.

> [!info]- Was bedeutet transitiv?
> Wenn für alle x, y, z ∈ X
> xRy ∧ yRz ⇒ xRz
> gilt.

> [!info]- Was bedeutet symmetrisch?
> Wenn für alle x, y ∈ X
> xRy ⇒ yRx
> gilt.

> [!info]- Was bedeutet antisymmetrisch?
> wenn für alle x, y ∈ X
> xRy ∧ yRx ⇒ x = y
> gilt.

> [!info]- Was bedeutet reflexiv?
> wenn für alle x ∈ X
> xRx
> gilt.

> [!info]- Welche Eigenschaften hat eine Äquivalenzklasse?
> Sie ist reflexiv, symmetrisch und transitiv.

> [!info]- Was zeichnet eine Präordung aus?
> Sie ist reflexiv und transitiv.

> [!info]- Was zeichnet eine Halbordung aus?
> Sie ist reflexiv, antisymmetrisch und transitiv.

> [!info]- Was ist eine totale oder lineare Ordung?
> Sie ist eine Halbordung (reflexiv, antisymmetrisch & transitiv) und es gibt keine unvergleichbaren Elemente.

> [!info]- Was ist eine Wohlordnung?
> Sie ist eine totale Ordnung und jede Teilmenge hat mindestens ein minimales Element.

> [!info]- Für was sind Wohlordungen wichtig?
> Damit weiss man, ob man eine Rekursion machen kann.

> [!info]- Was für eine Ordnung ist "kleiner gleich" 1. auf N und 2. auf Z?
> Sie ist eine totale Ordung auf beide Mengen, aber keine Wohlordnung auf Z.

> [!info]- Was für eine Ordung ist die Teilerrelation/Teilbarkeitsrelation?
> Sie ist eine Halbordung, aber keine totale Ordung.

> [!info]- Was ist eine Partition?
> Eine Partition P = {Pi | i ∈ I} einer Menge A, ist eine Menge von Teilmengen von A, die folgende beiden Voraussetzungen erfüllt: 
> - Die Elemente von P sind nichtleer und paarweise disjunkt. 
> - ⋃ i∈I Pi = A Die Elemente einer Partition werden Blöcke der Partition genannt.

> [!info]- Stimmt diese Aussage: ∀n ∈ N ∃k ∈ N (n = k + 10)?
> Nein

> [!info]- Stimmt diese Aussage: ∃n ∈ N ∀k ∈ N (n < k + 3)
> Ja

> [!info]- Wann ist eine Menge abzählbar?
> Wenn eine surjektive Funktion F : N → X existiert oder wenn X = ∅ gilt.

> [!info]- Wie nennt man eine Menge, die nicht abzählbar ist?
> Überabzählbar

> [!info]- Wie sieht die Menge P(A \ B) aus?
> {∅, {a},{b},{a,b}}

> [!info]- Es sei X \ Y abzählbar und X überabzählbar. Können Sie etwas über die Abzählbarkeit/Überabzählbarkeit von Y aussagen?
> Y muss auch überabzälbar sein. Wenn man etwas abzählbares von einer überabzählbaren Menge wegnehmen könnte, so, dass die Restmenge abzählbar ist, dann müsste man die überabzählbare Menge auch zählen können, was sie nicht mehr zu einer überabzählbaren Menge macht.

> [!info]- Was ist P({1,2})?
> {∅, {1}, {2}, {1,2}}

> [!info]- Was ist P({1,2,3}) x ∅?
> ∅

> [!info]- Wie sieht die DNF aus?
> (A ∧ B) ∨ (C ∧ D)

> [!info]- Wie sieht die KNF aus?
> (A ∨ B) ∧ (C ∨ D)

> [!info]- Wie sieht die NNF aus?
> kein → und kein !(...) kommen vor
> (alle Negationen kommen in Literalen vor)

> [!info]- Was bedeutet das Zeichen ≡?
> Sind F und G äquivalente Formeln, dann schreiben wir F ≡ G

> [!info]- Was bedeutet Im(f)?
> Die Menge aller Funktionswerte Im(f ) := {f (x) | x ∈ A} wird als Bild(menge) von f bezeichnet.

> [!info]- Was bedeutet Dom(f)?
> Eine Menge A nennen wir den Definitionsbereich von f und schreiben dafür auch Dom(f).

> [!info]- Wie sieht die prädikative Schreibweise aus? (Zum Beschrieben von Mengen)?
> {z ∈ X | E(z)} oder mit {z | z ∈ X ∧ E(z)}

> [!info]- Wie sieht die Ersetzungsschreibweise aus? (Zum Beschrieben von Mengen)?
> {F (x) | x ∈ X} := {y | ∃x ∈ X (y = F (x))}.

> [!info]- Was ist die Disjunktmenge?
> Zwei Mengen X und Y heissen disjunkt, falls sie keine gemeinsamen Elemente haben, d.h. falls X ∩ Y = ∅ gilt.
> Wir sagen eine Menge {Xi | i ∈ I} von Mengen bestehe aus paarweise disjunkten Mengen, wenn folgendes gilt: ∀i, j ∈ I (i /= j ⇒ Xi ∩ Xj = ∅).

> [!info]- Wie sieht X \ Y in der prädikativen Schreibweise aus?
> X \ Y := {x ∈ X | x /∈ Y }

> [!info]- Wie sehen verschiedene Operationen mit der leeren Menge aus: Potenzmenge, kartesisches Produkt, Schnittmenge?
> P(∅) = {∅}
> ∅ x A = ∅
> ∅ ∩ A = ∅

> [!info]- Was ist ein DAG?
> Ein gerichteter zyklenfreier Graph

> [!info]- Wenn man das Prinzip vom kleinsten Verbrecher nutzt, ist es nicht so, dass es nicht funktioniert, wenn die zu beweisende Aussage für alle Zahlen (-unendlich;x] gilt? dann gibt es kein minimum aber es trifft nicht für alle Zahlen zu.
> Ja, aber das Prinzip eignet sich für Mengen die nach unten Begrenzt sind, wie die Natürlichen Zahlen.

> [!info]- Was ist N(stern) ?
> N ohne 0 *oder* die kleinste Relation, die N+ enthält und reflexiv ist.

> [!info]- Was ist N+?
> Die kleinste transitive Relation, die N enthält.

> [!info]- Was gibt es so für ggT-Rechenregeln?
> - ggt(a,b + ac) = ggt(a,b)
> - ggt(n,m) = ggt(m,m-n) wenn m > n

