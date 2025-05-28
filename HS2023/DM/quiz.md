
### Was sind die beiden Regeln von De Morgan?
¬(A ∧ B) ⇔ ¬A ∨ ¬B

¬(A ∨ B) ⇔ ¬A ∧ ¬B

### A ∧ (B ∨ C) ist mit dem Distributivgesetz auch...?
(A ∧ B) ∨ (A ∧ C)

### Was besagt das Prinzip der Kontraposition?
A ⇒ B ist äquivalent zu ¬B ⇒ ¬A

### Welche zwei "grundlegende" Quantoren gibt es?
∀: Allquantor und ∃: Existenzquantor

### Was ist eine echte Teilmenge?
Eine echte Teilmenge der Menge M ist eine Teilmenge, die nicht gleich die Menge M selbst ist.

### Wie sieht das zeichen für "... ist eine echte Teilmenge" aus?
⊊

### Was sind die 4 Quantorenregeln?
1. Vertauschungsregel für unbeschränkte Quantoren: ∀x A(x) ⇔ ¬∃x ¬A(x) 
2. Vertauschungsregel für beschränkte Quantoren: ∀x ∈ K A(x) ⇔ ¬∃x ∈ K ¬A(x) 
3. Beschränkter und unbeschränkter Allquantor: ∀x ∈ K A(x) ⇔ ∀x(x ∈ K ⇒ A(x))
4. Beschränkter und unbeschränkter Existenzquantor: ∃x ∈ K A(x) ⇔ ∃x(x ∈ K ∧ A(x))

### Es seien P (x) ein einstelliges und Q(y, z) ein zweistelliges Prädikat. Formalisieren Sie: (a) Es gibt genau ein x mit P (x). (b) Es gibt mindestens zwei Dinge mit der Eigenschaft P . (c) Es gibt höchstens ein x mit P (x). (d) Wenn P (x) und P (y) gilt, dann gilt stets auch Q(x, y). (e) Für kein x gilt Q(x, x)

### Was gibt es für Beweistechniken?
Implikation, Widerspruch, Gegenbeispiel, Kontraposition (¬B ⇒ ¬A), bei Äquivalenz: man muss sowohl A⇒B als auch B⇒A beweisen.

### Was bedeutet surjektiv?
Jedem Element der Zielmenge muss mindestens ein Element der Definitionsmenge zugeordnet sein.

### Was bedeutet injektiv?
 Jedes Element der Zielmenge darf höchstens einem Element der Definitionsmenge zugeordnet werden. (Es kann auch keines sein)

### Was bedeutet bijektiv?
Eine Abbildung ist bijektiv, wenn sie sowohl surjektiv als auch injektiv ist. D.h. jedes Element aus der einen Menge wird genau einem aus der anderen Menge zugeordnet.

### Was bedeutet transitiv?
Wenn für alle x, y, z ∈ X

xRy ∧ yRz ⇒ xRz

gilt.

### Was bedeutet symmetrisch?
Wenn für alle x, y ∈ X

xRy ⇒ yRx

gilt.

### Was bedeutet antisymmetrisch?
wenn für alle x, y ∈ X

xRy ∧ yRx ⇒ x = y

gilt.

### Was bedeutet reflexiv?
wenn für alle x ∈ X

xRx

gilt.

### Welche Eigenschaften hat eine Äquivalenzklasse?
Sie ist reflexiv, symmetrisch und transitiv.

### Was zeichnet eine Präordung aus?
Sie ist reflexiv und transitiv.

### Was zeichnet eine Halbordung aus?
Sie ist reflexiv, antisymmetrisch und transitiv.

### Was ist eine totale oder lineare Ordung?
Sie ist eine Halbordung (reflexiv, antisymmetrisch & transitiv) und es gibt keine unvergleichbaren Elemente.

### Was ist eine Wohlordnung?
Sie ist eine totale Ordnung und jede Teilmenge hat mindestens ein minimales Element.

### Für was sind Wohlordungen wichtig?
Damit weiss man, ob man eine Rekursion machen kann.

### Was für eine Ordnung ist "kleiner gleich" 1. auf N und 2. auf Z?
Sie ist eine totale Ordung auf beide Mengen, aber keine Wohlordnung auf Z.

### Was für eine Ordung ist die Teilerrelation/Teilbarkeitsrelation?
Sie ist eine Halbordung, aber keine totale Ordung.

### Was ist eine Partition?
Eine Partition P = {Pi | i ∈ I} einer Menge A, ist eine Menge von Teilmengen von A, die folgende beiden Voraussetzungen erfüllt: 
- Die Elemente von P sind nichtleer und paarweise disjunkt. 
- ⋃ i∈I Pi = A Die Elemente einer Partition werden Blöcke der Partition genannt.

### Stimmt diese Aussage: ∀n ∈ N ∃k ∈ N (n = k + 10)?
Nein

### Stimmt diese Aussage: ∃n ∈ N ∀k ∈ N (n < k + 3)
Ja

### Wann ist eine Menge abzählbar?
Wenn eine surjektive Funktion F : N → X existiert oder wenn X = ∅ gilt.

### Wie nennt man eine Menge, die nicht abzählbar ist?
Überabzählbar

### Wie sieht die Menge P(A \ B) aus?
{∅, {a},{b},{a,b}}

### Es sei X \ Y abzählbar und X überabzählbar. Können Sie etwas über die Abzählbarkeit/Überabzählbarkeit von Y aussagen?
Y muss auch überabzälbar sein. Wenn man etwas abzählbares von einer überabzählbaren Menge wegnehmen könnte, so, dass die Restmenge abzählbar ist, dann müsste man die überabzählbare Menge auch zählen können, was sie nicht mehr zu einer überabzählbaren Menge macht.

### Was ist P({1,2})?
{∅, {1}, {2}, {1,2}}

### Was ist P({1,2,3}) x ∅?
∅

### Wie sieht die DNF aus?
(A ∧ B) ∨ (C ∧ D)

### Wie sieht die KNF aus?
(A ∨ B) ∧ (C ∨ D)

### Wie sieht die NNF aus?
kein → und kein !(...) kommen vor

(alle Negationen kommen in Literalen vor)

### Was bedeutet das Zeichen ≡?
Sind F und G äquivalente Formeln, dann schreiben wir F ≡ G

### Was bedeutet Im(f)?
Die Menge aller Funktionswerte Im(f ) := {f (x) | x ∈ A} wird als Bild(menge) von f bezeichnet.

### Was bedeutet Dom(f)?
Eine Menge A nennen wir den Definitionsbereich von f und schreiben dafür auch Dom(f).

### Wie sieht die prädikative Schreibweise aus? (Zum Beschrieben von Mengen)?
{z ∈ X | E(z)} oder mit {z | z ∈ X ∧ E(z)}

### Wie sieht die Ersetzungsschreibweise aus? (Zum Beschrieben von Mengen)?
{F (x) | x ∈ X} := {y | ∃x ∈ X (y = F (x))}.

### Was ist die Disjunktmenge?
Zwei Mengen X und Y heissen disjunkt, falls sie keine gemeinsamen Elemente haben, d.h. falls X ∩ Y = ∅ gilt.

Wir sagen eine Menge {Xi | i ∈ I} von Mengen bestehe aus paarweise disjunkten Mengen, wenn folgendes gilt: ∀i, j ∈ I (i /= j ⇒ Xi ∩ Xj = ∅).

### Wie sieht X \ Y in der prädikativen Schreibweise aus?
X \ Y := {x ∈ X | x /∈ Y }

### Wie sehen verschiedene Operationen mit der leeren Menge aus: Potenzmenge, kartesisches Produkt, Schnittmenge?
P(∅) = {∅}

∅ x A = ∅

∅ ∩ A = ∅

### Was ist ein DAG?
Ein gerichteter zyklenfreier Graph

### Wenn man das Prinzip vom kleinsten Verbrecher nutzt, ist es nicht so, dass es nicht funktioniert, wenn die zu beweisende Aussage für alle Zahlen (-unendlich;x] gilt? dann gibt es kein minimum aber es trifft nicht für alle Zahlen zu.
Ja, aber das Prinzip eignet sich für Mengen die nach unten Begrenzt sind, wie die Natürlichen Zahlen.

### Was ist N(stern) ?
N ohne 0 *oder* die kleinste Relation, die N+ enthält und reflexiv ist.

### Was ist N+?
Die kleinste transitive Relation, die N enthält.

### Was gibt es so für ggT-Rechenregeln? (Die in diesem Fach vorkamen)
- ggt(a,b + ac) = ggt(a,b)
- ggt(n,m) = ggt(m,m-n) wenn m n

