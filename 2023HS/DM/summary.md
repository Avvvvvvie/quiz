**Präodnung**: reflexiv, transitiv

**Halbordnung**: reflexiv, antisymmetrisch, transitiv

**total/linear**: Halbordung & keine unvergleichbaren Elemente

**Wohlordnung**: total & jede teilmenge hat ein minimales Element

**Äquivalenzrelation**: reflexiv, symmetrisch, transitiv

Quantorenregeln:
- ∀x A(x) ⇔ ¬∃x ¬A(x) 
- ∀x ∈ K A(x) ⇔ ¬∃x ∈ K ¬A(x) 
- ∀x ∈ K A(x) ⇔ ∀x(x ∈ K ⇒ A(x))
- ∃x ∈ K A(x) ⇔ ∃x(x ∈ K ∧ A(x))

Distributivgesetz: A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C)

De Morgan: ¬(F ∧ G) ≡ ¬F ∨ ¬G

DNF: (A ∧ B) ∨ (C ∧ D)

KNF: (A ∨ B) ∧ (C ∨ D)

NNF: kein → und kein !(...) (alle Negationen kommen in Literalen vor)

**Injektiv**: Eine Funktion f ist genau dann injektiv, wenn die Relation f −1 = {(y, x) | (x, y) ∈ f } eine Funktion ist. Ist f : A → B eine injektive Funktion, dann nennt man f −1 : Im(f ) → A die Umkehrfunktion oder inverse Funktion von f. = Elemente der Zielmenge werden höchstens einmal getroffen.

**Surjektiv**: Eine Funktion f : A → B heisst surjektiv auf B, wenn B = Im(f ). = Elemente der Zielmenge werden mindestens einmal getroffen.

**Bijektiv**: surjektiv + injektiv

Die Menge aller Funktionswerte Im(f ) := {f (x) | x ∈ A} wird als Bild(menge) von f bezeichnet.

Prädikative Schreibweise: {z ∈ X | E(z)} oder mit {z | z ∈ X ∧ E(z)}
Ersetzungsschreibweise: {F (x) | x ∈ X} := {y | ∃x ∈ X (y = F (x))}

- Sind X und Y Mengen, dann ist X ∪ Y := {x | x ∈ X ∨ x ∈ Y } die Vereinigung von X mit Y . 
- Die Schnittmenge von X und Y ist durch X ∩ Y := {x ∈ X | x ∈ Y } = {x ∈ Y | x ∈ X} = {x | x ∈ X ∧ x ∈ Y } gegeben.
- Ist I eine Menge so, dass für alle Elemente i ∈ I auch Ai eine Menge ist, dann wird ⋃(i∈I) Ai := {x | ∃i ∈ I (x ∈ Ai)}. die Vereinigung von {Ai | i ∈ I} genannt. 
- Analog dazu, ist die Schnittmenge durch ⋂ i∈I Ai := {x | ∀i ∈ I (x ∈ Ai)} gegeben, falls I nicht = ∅ ist.

Es sei R eine (binäre) Relation.
- Als transitiven Abschluss von R bezeichnet man die kleinste (bezüglich ⊆) transitive Relation, die R als Teilmenge enthält, sie wird mit R+ notiert. 
- Die kleinste Relation, die R+ enthält und reflexiv ist, nennt man den reflexiv-transitiven Abschluss von R, sie wird mit R∗ bezeichnet.
- Ein Element x ∈ X einer Teilmenge X ⊆ M von M heisst R-minimal in X, falls es kein anderes Element y ∈ X mit yRx gibt. 
- Ein Element x ∈ X einer Teilmenge X ⊆ M von M heisst R-maximal in X, falls es kein anderes Element y ∈ X mit xRy gibt.

**Transitiv**: Wenn für alle x, y, z ∈ X. xRy ∧ yRz ⇒ xRz gilt.

**Symmetrisch**: Wenn für alle x, y ∈ X. xRy ⇒ yRx gilt.

**Antisymmetrisch**: Wenn für alle x, y ∈ X. xRy ∧ yRx ⇒ x = y gilt.

**Reflexiv**: Wenn für alle x ∈ X. xRx gilt.

**Linear**: Für alle x,y xRy oder yRx

- ggt(n,m) = ggt(n, m - n) = ggt(m, n - m) für 0 < n < m
- partition: nichtleer, paarweise disjunkt
- paarweise disjunkt: ∀i, j ∈ I (i =/= j ⇒ Xi ∩ Xj = ∅).
- multiplikatives inverses: a x m = 1 (mod n) => **a**xm + bxn = 1 suchen
- äquivalenzklasse [x] = klasse k in der x drin ist, k bildet äq.relation
- paarweise vergleichbar: aRb, aRc, aRd...
- 𝑃(𝑃(𝑎)) = {∅, {∅}, {𝑎}, {∅, {𝑎}}
- N,Z,Q: abzählbar
- DAG = gerichteter zyklenfreier Graph G(Menge,Relation)

Peano axiome:
1. 0 ∈ ℕ  
2. ∀n(n ∈ ℕ ⇒ n' ∈ ℕ)  
3. ∀n(n ∈ ℕ ⇒ n' ≠ 0)  
4. ∀n, m(n, m ∈ ℕ ⇒ (m' = n' ⇒ m = n))  
5. ∀X(0 ∈ X ∧ ∀n(n ∈ ℕ ⇒ (n ∈ X n' ∈ X)) ⇒ ℕ ⊆ X)

9 mod 4 = 1.
-9 mod 4 = 3.
-9 mod -4 = -1.
9 mod -4 = -3.