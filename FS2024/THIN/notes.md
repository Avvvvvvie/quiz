Was ist ein Alphabet?
endlich, nichtleer...

Was ist ein Wort?
Eine endliche Folge von Symbolen eines bestimmten Alphabets. Kann auch leer sein. leeres wort: $epsilon$ (epsilon)

Was gibt es für funktionen für Wörter?
- länge $|w|$
- spiegelung
- anzahl x in einem wort

Wann ist etwas ein Teilwort? Wann ein Präfix/Suffix?
echtes ^


Wie schreibt man die Menge aller Wörter...
- einer bestimmten Länge k? $Sigma^k$
- aller Wörter?  $Sigma^ast$

Wie sieht das Symbol für Verkettung aus?
$xy = x@y$

Was ist eine Sprache? Wie ist sie definiert?
Eine Teilmenge von einem Alpahbet $Sigma^ast$. Kann auch leer sein: ${avg}$ oder nur das leere Wort beinhalten: ${epsilon}$. SIe kann auch durch einen regulären Ausdruck definiert werden: L(R). Dafür gibt es 6 Regeln. L(a|b) = L(a) $nn$ L(b)

Was ist ein Entscheidungsproblem?
Die idee ist zu suchen, ob es einen algorithmus gibt, der sagen kann, ob etwas zur sprache gehört oder nicht...

A = regex => L(A) = alle möglichkeiten auf die regex zutrifft

regex regeln:
1. avg, epsilon sind regex
2. $Sigma sub RA_Sigma$ = jedes element vom alphabet ist regulärer ausdruck
4. (regex + stern) = regex
5. R, S sind regex => (RS) ist regex
6. R, S sind regex => (R | S) ist regex
weitere regeln
1. klammern kann man weglassen. 
2. $ast$ bindet stärker als $@$
3. $@$ bindet stärker als |

$R^(+) = R(R^ast )$ 
$R? = R|epsilon$
$[a,b,c,d]$ = a|b|c|d

L(R) = Sprache von regulärem Ausdruck R

Ist das leere Element teil jeder Sprache?
Nein.

Kann das leere Wort von einem Automaten akzeptiert werden?
Ja, man ist dann beim Anfangszustand

Was ist ein EA, DEA und NEA?
Endlicher Automat, deterministischer EA, nichtdeterministischer EA

Wann ist etwas nichtdeterministisch?
Der Automat kann also von einem Zustand in einen Zustand, mehrere  
Zustände oder auch in keinen Zustand übergehen. $delta$ gibt dann ein Element der Potenzmenge von Q (Menge aller Zustände) zurück. Wenn mindestens 1 der möglichen Berechnungen akzeptierend ist, dann ist die Eingabe akzeptiert.

Wie notiert man einen Automaten als Quintupel?
- $Q$ = Menge der Zustände
- $Sigma$ = EIngabealphabet
- $delta$ = Übergangsfunktion (bsp. $delta(q_0, a) = q_1$)
- $q_0$ = Startzustand
- $F$ = Akzeptierende Zustände

![[Pasted image 20240305102416.png]]
=> ein wort über einem alphabet = Eine Teilmenge $L ⊆ Σ^ast$


![[Pasted image 20240304075719.png]]
1^n = 1111.... nicht mathematisch 1

![[Pasted image 20240318105401.png]]
Es *beinhaltet* die 3-stelligen, neben den 1/2-stelligen

![[Pasted image 20240304075817.png]]
(ist doch richtig)

![[Pasted image 20240402142719.png]]
<=3 kann man hardcoden

Was sind KFG und NKA
?
Kontextfreie Grammatik und nichtdeterministischer Kellerautomat

Wie notiert man eine kontextfreie Grammatik als 4-Tupel?

Wie verhindert man mehrdeutigkiet von kontextfreier Grammatiken?
- klammern erzwingen (wäre andere sprache)
- vorrang definieren für gewisse produktionen
- sprache anpassen

Was heisst inhärent mehrdeutig?
Eine kontextfreie Grammatik nennen wir mehrdeutig, wenn es ein Wort  
gibt, das mehrere Ableitungsbäume besitzt. Eine kontextfreie Sprache, für die alle Grammatiken mehrdeutig sind, heisst inhärent mehrdeutig.

Wie lautet eine KFG für die Erkennung von if – else Blöcken, wenn else  
optional ist?

Wie schreibt man einen Kellerautomaten als 7-Tupel?
Wie schreibt man einen nichtdeterministischen Kellerautomaten als 7-Tupel?
Wie sieht eine Konfiguration eines Kellerautomaten aus?
${q, w, gamma}$ = zb {A, abcd, a$}


![[Pasted image 20240314203724.png]]


Wie sieht eine Konfiguration für einen DEA/NEA aus?

Wie ist ein Berechnungsmodell aufgebaut?
Was sind die Vorteile von NEAs?
Was ist eine Teilmengenkostruktion, wie macht man dies fpr NEA und $epsilon$-NEA?
Wie konvertiert man Regex zu DEA und umgekehrt?
Wann ist eine Sprache nicht regulär?
Abschlusseigenschaften regulärer Sprachen
Wann ist KFG mehrdeutig?
Wie sieht die Konfiuration eines Kellerautomaten aus?


![[Pasted image 20240401165711.png]]

![[Pasted image 20240411203530.png]]

Fakultätsfunktion in WHILE/LOOP Programm?

Goto & while gleich mächtig (und turing complete), aber loop nicht, weil man nicht dowhile machen kann oder endlosschlaufen

loop entspricht primitiv rekursiven funktionen

was gibt es für grundfunktionen bei den primitiv rekursiven funktionen
wie funktioniert einsetzung, und wie primitive rekursion

![[Pasted image 20240418210304.png]]
![[Pasted image 20240418210251.png]]

totale funktionen?

wie konstruiert man grob eine unierselle turing mashcine? / zsf was ist was

was heisst total? überall definiert


was is t alles äquivalent (loop, rekursiv aber auch rekurs aufzählbar, semientscheidbar)

was sind die 3 halteprobleme?
H0 => ob T auf leerem Band hält, H => ob T auf beliebeigem Wort hält, HS => ob T auf \<T\> Hält.

![[Pasted image 20240615142132.png]]

![[Pasted image 20240615144816.png]]
(leeres wort ist kein element)

Berechnungsmodelle:

> [!quiz]- Church-Turing-These
> Jedes algorithmisch / intuitiv lösbare Berechnungsproblem kann von einer Turing-Maschine gelöst werden

> [!quiz]- Gandys These
> Alles, was jemals mit einer (endlichen) Maschine/physikalischen Apparatur berechnet werden kann, ist bereits von einer Turing-Maschine berechenbar.

> [!quiz]- Für eine turing-Berechenbare Funktion gilt:
> T(w) = f(w), falls f(w) definiert ist

> [!quiz]- Wie sieht eine Turing-Maschine, die Mod 3 von n berechnet aus?
> Lösung: [[7-Berechnungsmodelle_HO.pdf#page=17|7-Berechnungsmodelle_HO, p.15]]

> [!quiz]- LOOP-Programme
> - Variablen x0, x1, x2...
> - Konstanten 0, 1, 2...
> - Trennzeichen ;
> - Zuweisung mit =
> - Operationen + und -
> - Do, Loop, End: Loop für Xn-Mal
> - Ergebnis ist in x0

> [!quiz]- Wie sieht eine Bedingte Ausführung in einem LOOP-Programm aus?
> Lösung: [[7-Berechnungsmodelle_HO.pdf#page=24|7-Berechnungsmodelle_HO, p.20]]

> [!quiz]- WHILE-Programme
> - Wie LOOP aber statt 'Loop' gibt es 'While (Kondition)'
> - Kann mehr (Z.B nicht terminieren)

> [!quiz]- GOTO-Programme
> - Variablen: x0, x1, x2, ...
> - Konstanten: 0, 1, 2, 3, 4, ...
> - Marker: M1, M2, ...
> - Zuweisung: =
> - Trennzeichen: ;,:
> - Operationszeichen: + und -
> - Schlüsselwörter: Goto, If, Then, Halt
> - Ergebnis in x0

> [!quiz]- Welche dieser Programme sind äquivalent oder Turing-vollständig?
> WHILE und GOTO sind Turing-vollständig
> 
> LOOP und primitiv rekursive Funktionen sind äquivalent

> [!quiz]- Die 3 Grundfunktionen von primitiv rekursiven Funktionen
> 
> (1) Die konstante Funktion: 
>    $$c^n_k(x_1,x_2,...,x_n) = k$$
>
> (2) Die Nachfolgerfunktion: 
>    $$n(x) = x + 1$$
>    
> (3) Die n-stellige Projektion auf die k-te Komponente:
> 	   $$pi^n_k(x_1,x_2,...,x_n) = x_k$$
> 

> [!quiz]- Die 2 Operationen zur Konstruierung von neuen primitiv rekursiven Funktionen
> 
> (1) Einsetzung / Komposition: (mit $g: bbbN^n->bbbN$ und $f: bbbN^k->bbbN^q$)
>    $$h(vec x) = f(g_1(vec x), ..., g_k(vec x))$$
> 
> (2) Primitive Rekursion von h und g:
>    $${:f (0, x) = h(x) ; f(k + 1, x) = g(f(k, x), k, x):}$$

![[Pasted image 20240509160502.png|200]]
