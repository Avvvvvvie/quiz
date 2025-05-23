
> [!info]- Nenne ein Beispiel für eine Vor- und Nachbedingung.
> Beispiel: {x=1} x++ {x=2}
> 
> Beispiel: {x>=0} x = x + 1 {x>=1 und x1 > x0}

> [!info]- Was ist ADT?
> = Abstrakte Datentyp
> 
> Hat Schnittstelle und Implementation
> 
> In Java: Interface und Klasse

> [!info]- Was kann ein Stack?
> First in First out
> 
> Gut implementiert mit LinkedList:
> - push
> - pop
> - isEmpty

> [!info]-  Was kann eine Liste?
> - add (am ende oder pos)
> - get
> - remove
> - size
> - isEmpty
> - LinkedList: ListNode head

> [!info]-  Was ist eine Queue, wie kann man sie implementieren und was hat sie für Methoden?
> First in Last out
> Gut implementiert mit Array: OutIndx, InIndx. oder LinkedList
> - enqueue
> - dequeue
> - isEmpty

> [!info]-  Was ist der Unterschied zwischen einer Queue und einem Stack?
> Queue: First in First out
> 
> Stack: First in Last out

> [!info]-  Wie funktioniert die ArrayQueue
> von outIndex bis inIndex
> 
> wenn bei array.size dann wraparound

> [!info]- Was hat die Klasse Iterator für Methoden?
> - hasNext
> - next
> - remove

> [!info]-  Was sind 4 Vorteile vom Iterator?
> - Hiding-Prinzip wird nicht verletzt
> - Mehrere gleichzeitig iterierbar
> - Verwaltet aktuelle Position
> - foreach tut dies

> [!info]-  Wann benutzt man ArrayList, wann List?
> arraylist -> oft zugreifen
> 
> list -> oft verändern

> [!info]-  Wie entfernt man ein Element der LinkedList
> a.next = a.next.next

> [!info]-  Wie fügt man eine Element zu LinkedList hinzu?
> newnode.next = listnode1.next
> 
> listnode1.next = newnode

> [!info]-  Laufzeit Einfügen an der ersten/i-ten Position in einer einfach verketteten Liste?
> O(1) und O(n)

> [!info]-  Was ist das Prinzip der Doppelt verketteten Liste?
> Hat head und Tail. Jeder Knoten zeigt auf den vorherigen und den nächsten.

> [!info]-  Wie sieht der Code von Add aus bei einer doppelt verketteten Liste
> newNode.next = current;
> 
> newNode.prev = current.prev;
> 
> current.prev.next = newNode;
> 
> current.prev = newNode;

> [!info]-  Wie funktioniert die Zirkulär verkettete Liste?
> Wenn leer: Head zeigt zwei mal auf Head (Dummy Anfangsknoten)
> 
> Braucht nur Head zu speichern und kein Tail

> [!info]-  Wie funktioniert die Sortierte Liste?
> Insert fügt das ELement an richtiger Stelle ein:
> 
> while (p.next.data < n.data) p = p.next;
> 
> z.B. PriorityQueue (mit int priority)
> 
> Benutzt Comparable Interface

> [!info]- Welche Resultate kann es bei x.compareTo(y) geben?
> x < y -> negativ
> 
> x = y -> 0
> 
> x > y -> positiv

> [!info]- Was ist der Unterschied von einem Array und einer Liste?
> Array: get() effizient
> 
> Liste: add, remove, etc effizient
> 
> (ArrayList ist schlussendlich Array, aber die Anzahl der Elemente ist variabel)

> [!info]- Welche Methoden besitzt Collections?
> - add
> - remove
> - removeAll
> - toArray
> - iterator
> - size
> - isEmpty
> - Viele Statische Methden in Collections, z.B. swap, synchronisedList, unmodifiableList
> - Unvollständig, deshalb UnsupportedOperationException
> - List und Set sind Collection

> [!info]- Welche Methoden besitzt Set?
> - contains
> - get
> - add
> - remove
> - Mengenoperationen
> - sehr effizient, zb HashSet

> [!info]- Was sind die Vorteile von Java Generics?
> - erhöht die Effizienz von Collections, macht sie vielseitiger einsetzbar
> - macht deren Einsatz komfortabler, sicherer und aussagekräftiger
> - senkt die Gefahr von Fehlern bei Typprüfungen zur Laufzeit

> [!info]- Wie sieht ein Generic Wildcard aus?
> Upper Bounded: `List<? extends Figure>` (Gut als Rückgabewert)
> 
> Lower Bounded: `List<? super RoundedRectangle>` (Kann auch RoundedRectangle sein)

> [!info]-  Wieso verwendet man Bounded?
> ZB für Liste von verschiedenen Unterklassen. Nützlich in Kombination von anderer generischen Klasse: T und ? extends T

> [!info]- Was ist Type Erasure?
> Aus `Box<T>` wird zur Laufzeit `Box<Object>`
> - instanceof nicht möglich bei Wildcard
> - new e() nicht möglich
> deshalb: `Class<T> clazz -> (T)clazz.newInstance()` um Klasse herauszufinden

> [!info]- Gib ein Code Beispiel für die Nutzung der Klasse Predicate?
> predicate = x -> x > 1
> 
> predicate.test(5)

> [!info]- Was ist der Ablauf beim Nutzen von Streams?
> - Erzeuge Stream
> - Verarbeite Stream (Intermediate Operations)
> - Konsumierte Stream (Terminate)
> - Kaskadiert und Parallel

> [!info]- Wie sieht der Code zur Fakultät rekursiv aus?
> ```
> int fak(int n) {
>    if (n == 0) return 1;
>    else return n* fak(n-1);
> }
> ```

> [!info]- Wie sieht der Code für Fibanocci rekursiv aus?
> ```
> int fib(int n) {
>    if (n == 0 || n == 1) return 1;
>    else return fib(n-1) + fib(n-2);
> }
> ```

> [!info]- Was ist die Laufzeit von Fibonacci?
> O(1.6^n)

> [!info]- Was ist die Definition von Rekursion?
> Ein Algorithmus/Datenstruktur heisst rekursiv definiert, wenn er/sie sich selbst als Teil enthält oder mit Hilfe von sich selbst definiert ist.
> 
> Es gibt immer einen Basisfall/Verankerung und einen Induktionsschritt.

> [!info]- Wie ist einer Liste rekursiv definiert?
> Liste = leer
> 
> Liste = ListNode (Liste)?

> [!info]- Wie sieht der Code für traverse() einer Liste rekursiv aus?
> ```
> if p !== null {
>    print(p.value)
>    traverse(p.next)
> }
> ```

> [!info]- Nenne zwei Implementierungen von Listen in Java
> ArrayList, LinkedList

> [!info]- Was ist der Unterschied von direkter und indirekter Rekursion?
> Direkt: p() enthält p()
> 
> Indirekt: p() enthält q(), q() enthält p()

> [!info]- Was bedeutet endrekursiv?
> Programme, bei denen der rekursive Aufruf die letzte Aktion im Else-Zweig bzw. allgemeinen Fall ist werden endrekursiv bezeichnet. 
> 
> `if n = 1 return 1 else return p(n-1)`
>
> Nicht Endrekursiv:
> 
> `return n + p(n-1)`
> 
> Kann aber umgwandelt werden:
> 
> `return p(n-1, n)`
> 
> Endrekursive Programme lassen sich einfach in iterative Form überführen und umgekehrt.
> 
> `while n > 0 res = res * n; n--`
> 
> Jedes Rekursives Programm kann in ein Nicht-Rekursives umgeschrieben werden, indem man das Stack selbst macht.

> [!info]- Nennen Sie ein Beispiel rekursiver Programmierung aus der Vorlesung.
> Fibonacci, isPrime, Fakultät, Liste/Baum traversieren 

> [!info]- Schreiben Sie einen Algorithmus in Pseudo-Code, der überprüft, ob eine Zahl eine Primzahl ist.
> Iterativ:
> ```
> for i=n, i>1,i--
> 	if n%i = 0 return false
> return true
> ```
> Rekursiv
> ```
> if i <= 1 return false
> if n%i = 0 return true
> return isPrime(n, i-1)
> ```

> [!info]- Nennen Sie einige typische Komplexitätsklassen
> - O(1) konstanter Aufwand
> - O(log n) logarithmischer Aufwand
> - O(n) linearer Aufwand
> - O(n * log n)
> - O(n^2) quadratischer Aufwand
> - O(n^k) für konstantes k > 1 polynomialer Aufwand
> - O(2^n) exponentieller Aufwand

> [!info]- Was hält die O-Notation fest?
Wie die Zeit, welche ein Algorithmus höchstens benötigt, sich verändert, in Abhängigkeit vom Input. Egal wie lange der Rechner für Operationen wirklich braucht.

> [!info]- Was hält die Omega-Notation fest?
> Wie lange der Algorithmus mindestens braucht in ABhängigkeit des Inputs.

> [!info]- Was hält die Theta-Notation fest?
> Exakte Wachstumsrate (statt Best/Worst Case). x^2 ist auch O(x^3) aber nicht Theta(x^3)

> [!info]- Laufzeit folgendes Codes: `while i < N: i = i*2`
> log(n)

> [!info]- Laufzeit folgendes Codes: `for i = 1 .. n; for j = 1 .. n`
> O(n^2)

> [!info]- Laufzeit folgendes Codes: `for i = 1..n; for j = 1..i for k = 1..j`
> for 1..n -> n
> 
> for 1..i -> (n+1)/2
> 
> for 1..j -> (((n+1)/2)+1)/2
> 
> -> O(n^3)

> [!info]- Laufzeit folgendes Codes: `for i = 1..n; binarySearch(i in F)`
> n log(n)

> [!info]- Laufzeit folgendes Codes: `for i = 1..n for j = 1..m for k = 1..m`
> O(n * m^2)

> [!info]- Was ist der Unterschied zwischen Average und Worst Case Laufzeit?
> Average: Wie lange es im Durchschnitt benötigt, wenn man zufällige Werte übergibt bzw alle möglichen Werte.
> 
> Worst Case: Wie lange es höchstens geht.

> [!info]- Falls immer f(x) < g(x) ist, ist dann f = O(g)?
> Ja, weil laut Definition f(x) O(g(x)) ist wenn ab einem gewissen Wert f(x) <= c * g(x) gilt.

> [!info]- Warum sind iterative Algorithmen oft schneller als ihre rekursiven Varianten?
> Overhead beim Methodenaufruf

> [!info]- Was ist die Komplexität von Turm von Hanoi und wie könnte der Code aussehen?
> Komplexität: 2^n weil je n: 1 + 2(n-1)
> 
> Rekursionstiefe: n
> 
> Pseudocode
> ```
> void hanoi (int n, char from, char to, char help) {
> 	if (n > 0) {
> 		// bewege Stapel n-1 von from auf help
> 		// bewege von from nach to
> 		// bewege Stapel n-1 von help auf to
> 	}
> }
> ```
> Java
> ```
> void hanoi (int n, char from, char to, char help) {
> 	if (n > 0) {
> 		// bewege Stapel n-1 von from auf help
> 		hanoi(n-1,from,help,to);
> 		// bewege von from nach to
> 		System.out.println("bewege " + from + " nach " + to);
> 		// bewege Stapel n-1 von help auf to
> 		hanoi(n-1,help,to,from);
> 	}
> }
> ```

> [!info]- Was ist ein binaerer Suchbaum? Was ist ein binärer Baum?
> Ein Baum besteht aus Knoten. Von einem Knoten aus gibt es Kanten zu den Nachfolgerknoten. Nur die Wurzel ist kein Nachfolger. Ein Binärer Baum hat höchstens 2 Nachfolger pro Knoten.

> [!info]- Wie ist ein Binärer Baum rekursiv definiert?
> Baum = leer
> 
> Baum = Knoten (Baum Baum)

> [!info]- Welche Traversierungsarten bei Bäumen kennen Sie?
> Preorder: n, A, B
> 
> Inorder: A, n, B
> 
> Postorder: A, B, n
> 
> Levelorder: n, A, B für jedes Tiefenlevel

> [!info]- Pre-/In-/Postorder Implementation mit Rekursion
> ```
> if node != null
> 	visit node
> 	preorder(left);
> 	preorder(right);
> ```

> [!info]- Pre-/In-/Postorder Implementation mit Stack
> ```
> enqueue root
> while stack is not empty
> 	node = pop
> 	visit node
> 	enqueue left
> 	enqueue right
> ```

> [!info]- Wie sieht eine Levelorder Implementation aus?
> ```
> enqueue root
> while queue is not empty
> 	node = dequeue
> 	visit node
> 	enqueue left
> 	enqueue right
> ```

> [!info]- Was passiert, wenn Sie die Knoten eines binaeren Suchbaums inorder ausgeben?
> Die Elemente werden geordnet ausgegeben.

> [!info]- Gegeben sei ein Baum, bei dem die inneren Knoten Operationen sind wie + - * / und die Blaetter Zahlen. Was erhalten Sie bei Inorder,Preorder Postorder?
> Inorder: a + b
> 
> Preorder: + a b
> 
> Postorder: a b +

> [!info]- Fügen Sie die Zahlen 10, 1, 9, 2, 8, 3, 7, 4 der Reihe nach in einen binaeren Suchbaum ein. Was erkennen Sie? 
> Zickzack

> [!info]- In einem bin. Suchbaum mit ungerade vielen Elementen (n = 2k+1) steht an jedem Knoten, wieviele Knoten der gesamte Teilbaum hat. Wie kann man mit dieser Information den Median finden?
> Baum traversieren und Knoten finden, bei welchem gleich viele Knoten links und rechts sind.

> [!info]- Wo findet man in einem binären Suchbaum den grössten Knoten?
> Ganz rechts

> [!info]- Wie hoch ist ein binaerer Baum mit n Elementen?
> mindestens log2(n + 1)
> 
> höchstens n

> [!info]- Wie viele Knoten kann ein Baum der Höhe k haben?
> 2^k - 1

> [!info]- Skizzieren Sie einen vollständig gefüllten, binären Suchbaum der Höhe 3 und löschen Sie anschliessend den gezeigten Knoten aus dem Baum. Kann man aus der Pre- und Postorder-Reihenfolge einen Baum immer eindeutig wiederherstellen?
> Nein. Nur wenn man auch Inorder hat. Auch Inorder+Pre ohne Post

> [!info]- Wie kann man einen Node einfügen unsortiert? (insertAt)
> ```
> insertAt(node, x) {
> 	if node = null
> 		return new TreeNode(x)
> 	else
> 		right = insertAt(right, x)
> 		return node
> } 
> ```

> [!info]- Wie kann man einen Node einfügen sortiert (insertAt)
> ```
> insertAt(node, x) {
> 	if node == null
> 		return new TreeNode(x)
> 	else
> 		if (x.compareTo(element) <= 0)
> 			left = insertAt(left, x)
> 		else
> 			right = insertAt(right, x)
> 		return node
>  }
> ```

> [!info]- Wie ist die Worst-Case-Laufzeit von binärer Suche? Wieso?
> O(n), wenn die Elemente sortiert eingefügt wurden.

> [!info]- Erklären Sie wie binäre Suche funktioniert.
> Wenn das gesuchte Element kleiner als der aktuelle Knoten ist, sucht man rechts weiter, sonst links.

> [!info]- Welche Laufzeit hat die Suche in einer unsortierten LinkedList? Was ist, wenn die Liste sortiert ist?
> Beides O(n)

> [!info]- Wie läuft das Löschen eines Teilbaums aus?
> - Wenn keine Nachfolger: Einfach Löschen
> - Wenn 1 Nachfolger: Nachfolger ersetzt diesen
> - Wenn 2 Nachfolger: Der linkeste rechte / rechteste linke ersetzt diesen und erbt rest des rechten Teilbaum
> ```
> findRepAt(node, rep) { 
> 	if (right != null)
> 		right = findRepAt(right,rep)
> 	else
> 		rep.elements = node.elements // ersetzen
> 		node = left // falls links einer
> 	return node
> }
> ```

> [!info]- Was ist die AVL Bedingung?
> - Tiefe von 2 Teilbäumen maximal 1 Unterschied = AVL-Balanciert
> - Super Balanciert *wäre* Gewicht max 1 Unterschied

> [!info]- Wa sind die Vor- und Nachteile von AVL
> - Schnelle Suche O(log n)
> - Wird nicht zu Liste
> - Mehr Aufwand

> [!info]- In welchem Fall gibt es welche AVL Rotation?
> Einzelrotation: Wenn L tiefer: L wird oben, obenlinks = Lrechts
> 
> Doppelrotation: Wenn mitte links tiefer->LR

> [!info]- Ein AVL-Baum sei durch Einfügen eines Elements aus der Balance geraten. Wie kann man erkennen, ob eine einfache oder eine doppelte Rotation gebraucht wird, um die Balance wiederherzustellen?
> Wenn der Linke vom Linken / Rechte vom Rechten schwerer dann Einzelrotation. Sosnt, wenn der "innere" Teil schwerer ist, Doppelrotation

> [!info]- Was ist ein B-Baum?
> - In einem B-Baum der Ordnung n enthält jeder Knoten ausser der Wurzel mindestens n/2 und höchstens n-1 Schlüssel. Nachfolger = Anz Schlüssel+1
> - Die Schlüssel sind sortiert. Die Nachfolger sind die Werte zwischen/um den Schlüsseln, also gibt es 1 Nachfolger mehr als Schlüssel.
> - Wenn Knoten Voll: Nachfolger in der Mitte Nach oben und zwei Nachfolger mit dem Rest. Wenn dies zur Wurzel propagiert: Baum erhlt neue Höhe.
> - Löschen: Nachfolger können zusammengefasst werden oder 1 Nachfolger wird die neue Mitte.
> - Im Hauptspeicher: Ordunung 2-4
> - Tiefe: log_n(Anzahl elemente)
> - Annahme: Viele Schlüssel, geringe Tiefe

> [!info]- Was sind die Vorteile von einem B-Baum?
> - Optimiert für Massenspeicherzugriff
> - Weniger Zugriffe weil ausgeglichener Baum
> - Profitiert von Cache weil Information in Blöcken
> - Gut auf Disk/DBIndex, Binärbaum nicht

> [!info]- Wie unterscheiden sich B-Baum und AVL?
> B-Baum etwas weniger Aufwand zum einfügen. Kein grosser Unterschied

> [!info]- Was sind Rot-Schwarz Bäume?
> - Innerhalb B-Baum Knoten gibt es Binärbaum. Dessen kanten sind "rot" markiert. Auf rot folgt nie rot in 2-3-4-Baum
> - Einfachheit von Binärbäumen und Ausgeglichenheit von B-Bäumen

> [!info]- Wieviele Knoten hat ein B-Baum der Ordnung k und Höhe h höchstens?
> k^(h-1) + (k-1)

> [!info]- Wieviele Kanten hat ein vollständiger (kompletter) ungerichteter Graph mit n Knoten?
> n^2

> [!info]- Was ist der Unterschied zwischen einem dichten und einem dünnem Graph?
> Dicht: Viele Kanten
> Dünn: Wenige Kanten

> [!info]- Wie kann man einen ungerichteten Graphen als gerichteten Graphen repräsentieren?
> Jede Kante in beide Richtungen ziehen.

> [!info]- Was ist eine Adjazenzmatrix
> Booleanmatrix NxN von allen Kombinationen der N Knoten. True = Kante existiert. Gewichtet -> integer statt boolean
> 
> Gut: zugriffszeit effizient
> 
> Schlecht: platzineffizient O(n^2). Für ungerichtete Graphen symmetrisch = Platzverschwendung
> 
> Platz für Adjazenzliste = O(n+m)

> [!info]- Wie sieht der Code für Breitensuche aus?
> ```
> mark startNode
> stack.push(startNode)
> while !stack.empty()
> 	currentNode = stack.pop()
> 	print currentNode
> 	for all nodes n adjacent to currentNode
> 		if !(marked(n)
> 			mark n
> 			stack.push(n)
> ```

> [!info]- Wie sieht der Code für Tiefensuche aus?
> ```
> mark startNode
> queue.enqueue(startNode)
> while !q.empty()
> 	currentNode = q.dequeue()
> 	print currentNode
> 	for all nodes n adjacent to currentNode
> 		if !(marked(n)
> 			mark n
> 			q.enqueue(n)
> ```

> [!info]- Wie findet man den Kürzester Pfad?
> Bei Nachfolger Distanz und von wo notieren. Wenn durch andere Strecke kürzerer Weg, wird überschrieben. Dann rückwärts zurück.

> [!info]- Wie funktioniert der Dijkstra-Algorithmus? Wie sieht der Code aus?
> - Distanz von Start wird notiert/überschrieben
> - Mit PriorityQueue oder selbst kürzester Weg finden
> - Immer beim kürzesten bekannten Weg weitersuchen.
> ```
> q.enqueue(startNode,0)
> while !q.empty()
> 	current = q.dequeue()
> 	mark current
> 	if (current == goal) return
> 	for all edges e of current
> 		n = e.node
> 		if !marked(n)
> 			dist = e.dist + current.dist
> 			if (n.prev == null) || (dist < n.dist)
> 				q.remove(n)
> 				n.dist = dist
> 				n.prev = current
> 				q.enqueue(n,n.dist)
> ```

> [!info]- Wie lautet die Definition eines ungerichteten (gerichteten, gewichteten) Graphen?
> Allgemein: Es gibt eine endlihe Anzahl Knoten und Kanten. Eine Kante verbindet zwei Knoten. Ungerichtet: Für jede Kante (1, 2) gibt es die Kante (2, 1). D.h. alle Knotenrelationen sind symmetrisch. Gewichtet = Es gibt zusätzlich eine Funktion Kante -> Zahl

> [!info]- Was ist ein Spannbaum?
> Ein Spannbaum enthält alle Knoten einer Menge.
> 
> Prim-Jarnik: Min Spanning Tree -> Summe der Kanten haben die kleinste mögliche Gewichtung

> [!info]- Was ist ein Gieriger Algorithmus?
> Nimmt immer den zum Zeitpunkt der Wahl bessere Ergebnis durch eine Lokale Bewertungsfunktion.

> [!info]- Was sind die Vor- und Nachteile eines gierigen Algorithmus?
> + schnell
> - bleibt stecken in lokalen Maxima/Minima
> Dijkstra hat keine lokale Minima wenn keine negativen Strecken

> [!info]- Wie geht man vor beim Topologisches Sortieren?
> 1. Man zählt, wieviele Kanteneingänge jeder Knoten hat.
> 2. Man nimmt alle Knoten mit 0 Eingängen weg.
> 3. Man zählt erneut.

> [!info]- WIe geht man vor beim berechnen des maximalen Flusses?
> Pfad finden und dessen Gewichtung löschen/abziehen, aber in anderen Graph kopieren. Solange bis keine Eingänge beim Ziel. Dan Eingänge beim Ziel zählen.

> [!info]- Sind minimale Spannbaeume eindeutig bestimmt? Begruendung/Gegenbeispiel
> Nein. Wenn zwei Wege gleich lang die zwei Teilbäume verbinden würde an anderen Orten.

> [!info]- Angenommen es gibt in einem Graphen genau eine Kante minimalen Gewichts. Muss die in einem minimalen Spannbaum vorhanden sein? Begruendung 
> Ja. Hat man einen anderen Spannbaum und nimmt den kleinste Kante dazu, gibt es einen Zyklus. Man kann dann den Zyklus aufheben, indem man eine schwerere Kante in dem Zyklus entfernt.

> [!info]- Gegeben ist ein Spannbaum eines ungerichteten Graphen. Nun verbinden Sie zwei bisher nicht verbundene Knoten. Ist das Resultat immer noch ein Spannbaum?
> Nein. Dadurch entsteht ein Zyklus und dadurch ist es kein Baum mehr.

> [!info]- Welche Graphenrepräsentation würden Sie verwenden, um einen Graphen als Textfile zu speichern?
> Adjazenzliste wenn mehr Knoten oder Matrix wenn mehr Kanten und gewichtet

> [!info]- Sind Spannbäume eindeutig bestimmt? Wenn ja, begründen Sie, wenn nein geben Sie ein Gegenbeispiel.
> Nein, wenn es Pfade gibt mit der gleichen Gewichtung.

> [!info]- Sie haben einen unger. Graphen mit den vorgegebenen Kanten. Finden Sie eine geschlossene Tour (Anfangsknoten = Zielknoten), bei der jede Kante genau einmal genommen wird, oder begruenden Sie, warum es keine solche Tour geben kann.
> Es geht nicht, wenn ein Knoten eine ungerade Anzahl Kanten hat. Wo man hingeht muss man nämlich wieder weggehen können.

> [!info]- Traveling Salesman Problem: Was ist das Problem und was ist die Laufzeit?
> Kürzester Weg für alle Routen
> 
> Alle Kombinationen: O(n!)
> 
> Algorithmen: O(a^n)

> [!info]- Was ist Backtracking?
> = Versuchspfade werden ausprobiert und wenn sie fehlschlagen rückgängig gemacht.

> [!info]- Wie sieht rekursive Suche im Labyrinth aus?
> Nutzt Backtracking
> ```
> boolean search (Node currentNode) {
> 	mark currentNode;
> 	if currentNode == goal return true
> 	else
> 		for all nodes n adjacent to currentNode
> 			if !marked(n)
> 				if search(n) return true
> 	unmark currentNode
> 	return false
> }
> ```

> [!info]- Wie löst man das Springerproblem?
> Springer soll alle Felder besuchen
> 
> Rekursiv: Man versucht einen Zug (Es gibt 8 Möglichkeiten pro Rekursionsaufruf). Wenn es ein gültiger Zug ist, markiert man das Feld als besucht und ruft die Funktion rekursiv auf. Wenn man in der Rekursion nxn Züge gezählt hat, ist das Ganze erfolgreich. Wenn der Zug ungültig ist, gibt man false zurück und setzt die position als unbesucht.

> [!info]- Wie löst man das 8 Damenproblem?
> 8 Damen müssen auf dem Schachfeld positioniert werden ohne sich schlagen zu können.
> 
> Ein Schachfeld ist 8 Hoch, also versucht man für jede y position eine gültige x position auszuwählen.
> 
> Rekursiv:
> 
> In der Rekursion zählt man, wieviele schon platziert wurden.
> Man iteriert die 8 x positionen. Wenn sie gültig ist, ruft man die Funktion rekursiv auf. Wenn 8 platziert wurden, gibt man true zurück. Wenn die position ungüktig ist, false und man gibt das Feld frei.

> [!info]- Wie löst man das Rucksackproblem?
> Es gibt K Gegenstände mit Wert und Volumen. Der Rucksack hat die Grösse M. Der Wert im Rucksack soll maximiert werden.
> 
> Aufwand: O(2^n)
> 
> Rekursiv:
> 
> Man testet zuerst rekursiv ohne den Gegenstand k. Dann fügt man den gegenstand hinzu (falls es geht). Wenn es ein neues Maximum ist, speichert man das als Maximum. Dann testet man rekursiv weiter mit dem Gegenstand k.

> [!info]- Was ist erschöpfende Suche?
> = alle Möglichkeiten werden ausprobiert

> [!info]- Warum benutzt man eine Zielfunktion und wie funktioniert sie?
> So umgeht man die Kombinatorische Explosion
> - Man wählt nur die Lösung aus, die zum Ziel führt
> - Man berechnet zu jedem Knoten im Entscheidungsbaum den Zielwert, den man über diesen Knoten erreichen kann
> - Geschätzte obere Schranke schätzt dies weil sonst muss man das Problem ja gelöst haben
> - Cutoff/Pruning = Ab einem gewissen Punkt ignoriert man schlechte Pfade
> - Lower Bound: Zb kürzeste Strecke in A* kann nicht tiefer sein als Luftlinie (man geht zu optimistisch vor) Schach nimmt optimistische obere Schranke aber wegen Gegner braucht es Minimax Algorithmus. Man bricht aber iwann ab -> Horizont Effekt, es könnte bessere Wege geben

> [!info]- Wie findet man den besten Zug in Tic-Tac-Toe?
> Man versucht eine Möglichkeit (aus 3x3 Moves). Wenn das Resultat besser ist als der PC oder schlechter als der Gegner, versucht man rekursiv mehr Moves. Wenn der Move ungültig ist, bricht diese Rekursion ab und löscht die Moves. Besser heisst, man hat einen Weg gefunden, in welchem man gewinnt.

> [!info]- Wie könnte man Binäre Suche implementieren?
> - m = (l + r) / 2
> - Falls a[m] < S -> l = m
> - Falls a[m] > S -> r = m
> - Falls a[m] == S -> gefunden
> - Falls l+1 >= r -> keine Elemente mehr zwischen l und r -> nicht gefunden

> [!info]- Was ist der Aufwand der Suche in 2 sortierten Arrays und wie geht man bei der Implementierung vor?
> Aufwand: O(n)
> 
> solange a[i] nicht b[j]
> 
> wenn a[i] < b[i] i++
> 
> wenn a[i] > b[i] j++

> [!info]- Was ist Hashing?
> Grosse Menge wird auf kleinere Abgebildet
> 
> ZB X modulo tableSize
> 
> Kollision muss aufgelöst werden

> [!info]-  Was muss man in Java beachten wenn man selber hashen möchte?
> Immer equals, compareTo und hashCode zusammen überschreiben
> 
> Weil derselbe hashCode -> equals=true
> 
> Mit Primzahlen arbeiten: obj.a + 13 * obj.b

> [!info]- Wann gibt es viele Kollisionen?
> Wenn der Load-Faktor lambda > 0.8 dann gibt es viele Kollisionen

> [!info]- Was gibt es für Methoden zur Kollisionsauflösung beim Hashing?
> Separate Chaining: Pro Hashwert gibt es eine Überlaufsliste
> - gut bei hohem load level
> - overhead
> 
> Open Addressing: Wert wird irgendwo anders in der Tabelle abgelegt.
> - Lineares Sondieren: In nächster freier Zelle mit Wraparound
> - Quadratisches Sondieren: In F+1, F+4, F+9 mit Wraparound
> - Wenn ein Element gelöscht wird muss man rehashen oder Zelle als gelöscht markieren.

> [!info]- Was sind die Vor- und Nachteile von Hashing?
> - suchen, einfügen effizient
> - alles mit ordnung, bereichen ineffizient

> [!info]- Platz in Hashtabelle reicht nicht mehr was tun?
> - Rehashen in grössere Tabelle
> - Extendible Hashing: Buckets (zB letzte zwei Bits -> 4 Buckets). Wenn auf 8 erweitert: je zwei neue indexe zeigen auf 1 alten Bucket

> [!info]- Welche Methoden haben Map und HashMap?
> - put
> - get
> - remove
> - size
> - clear
> - containsKey/containsValue
> - values, keySet

> [!info]- Wie unterscheiden sich Bruteforce und KMP?
> O(n * m) VS O(n + m)
> 
> KMP konstruiert Automat, damit man nur vorwärt lesen muss, also keinen Zeiger zurücksetzen muss. (Wenn x zum ersten mal vorkommt und danach nicht passt kann man die vorherigen für diese Stelle überspringen)

> [!info]- Welche Schritte braucht es für Map Reduce?
> - Split: in subtasks aufteilen
> - Map: zu menge mappen
> - Shuffle: hashKey bestimmen und nach diesem gruppieren
> - Reduce: alles zusammen in einen index

> [!info]- Was sind die Vor- und Nachteile von Parallelisierung?
> - Overhead
> - bessere Performance wenn viele Daten oder Operationen
> - ausser falls Memory Lokalität wichtiger

> [!info]- Was ist die Levenshtein Distanz?
> Die Anzahl Editieroperationen die minimal nötig sind, um einen String in einen anderen überzuführen.
> - ersetzen
> - einfügen
> - löschen
> Implementation: 2d Matrix (n+1)(m+1)
> - behalten: diagonal 0
> - ersetzen: diagonal 1
> - löschen: vertikal 1
> - einfügen: horizontal 1

> [!info]- Was ist die Trigram Suche?
> Index für jedes Wort in 3 Buchstaben Gruppen
> 
> Ist schnell weil man den Index im Vorhinein aufbaut.

> [!info]- Was ist die Phonetische Suche?
> Jede Gruppe von Buchstaben (die ähnlich tönen) hat Zahl
> 
> Manche werden ignoriert je nach Sprache anders

> [!info]- Was ist Insertion Sort?
> Man nimmt nacheinander die Elemente auf und sortiert sie ein. 0-(k-1) sortiert. k wird einsortiert.

> [!info]- Was ist Selection Sort?
> Man nimmt das niedrigste Element und fügt es links an. Von 0-(k-1) sortiert. Man tauscht k mit einem i.

> [!info]- Was ist Bubble Sort?
> Man tauscht benachbarte Elemente so lange, bis sie sortiert sind. (Man tauscht die höheren nach oben / die tieferen nach unten)
> 
> `if a[i] > a[i+1] swap (a, i, i+1)`
> 
> Wenn man in einer Iteration nicht mehr swappen musste, kann man abbrechen.

> [!info]- Was ist Quicksort?
> Es gibt Zeiger l und r und ein Element W dazwischen.
> Man sucht ein Element links, welches rechts sein sollte und umgekehrt. Diese 2 tauscht man. Bis die Zeiger sich treffen. Dies tut man rekursiv dh in jeder Hälfte passiert das gleiche wieder.

> [!info]- Was ist Distribution-Sort?
> Benutzt keine Vergleiche sondern tut Elemente in Fächer

> [!info]- Wie funktioniert externes Sortieren?
> Wenn es keinen Platz im internen Speicher hat:
> 
> Man teilt die Menge auf und sortiert sie separat. Dann fügt man sie zusammen. Man fügt die Teile zusammen indem man zwei sortierte Blöcke sequenziel immer die 1. beiden dann die 2. beiden vergleicht. Dies muss man wiederholen bis vollständig sortiert.

> [!info]- Wann ist ein Sortieralgorithmus stabil?
> Zwei Elemente mit demselben Wert haben nach dem Sortiieren noch dieselbe Reihenfolge. Selection Sort und Quicksort sind instabil.

> [!info]- Vergleiche alle Sortieralgorithmen nach best/worst/avg Laufzeit. Welche benötigen mehr/weniger Swaps? Welche profitieren von einer Vorsortierung?
> - Bubble Sort: Best O(N), AVG+Worst O(N^2)
> - Selection Sort: O(N^2). weniger swaps, kein vorsortiert vorteil
> - Insertion Sort: O(N^2). weniger vergleiche. mehr swaps
> - Quicksort: AVG O(n log(n)), Worst O(n^2)
> - Merge Sort: O(n log(n))
> - Distribution Sort: O(n). muss aber an Menge angepasst werden + nur für kleine Mengen

> [!info]- Welchen Sortieralgorithmus soll man wann nutzen?
> - Wenige Daten:
> Möglichst einfachen nehmen
> - Vorsortierte Datenbestände:
> dann Insertion- oder Bubble-Sort
> - Viele ungeordnete Daten:
> Dann Quick-Sort bevorzugen
> - Viele Daten, ungeordnet, sehr oft zu sortieren:
> Distribution-Sort An das spezielle Problem anzupassen
> - Sehr viele Daten:
> Extern + schnelles intern
> - Auch möglich:
> Wenn kleine Menge insertion sort, sonst quick sort (ab threshhold)
> - Parallelisierung (mit Overhead/Threshhold)

> [!info]- Wie funktioniert die Speicherverwaltung?
> - Referenzen Zählen (geht nicht bei Zyklen)
> - Smart Pointers: Merken selber, wenn sie referenziert werden oder out of scope sind
> - Speicherverwalten traversiert Referenzketten: statoische vars, stack vars
> - Mark-Sweep GC: bei traversierung markieren (tiefensuche). sequenziell unmarkierte blöcke freigeben. nachteil fragmentierung, aufwand, stop the world für freigabe
> - Copying GC: 1 teil aktuelle daten, ein teil obsolet. kein platz mehr->rollen verden getausch, aktuelle rüberkopiert. nachteil 2x speicher
> - Generational GC: neue generationen werden häufiger durchsucht. aufpassen wenn man in andere generation kopiert dass kein dangling pointer
> - Weak References: Nutz man, wenn man etwas nicht mehr umbedingt braucht und sonst wieder kreieren kann.

> [!info]- Nennen Sie für vier Komplexitätsklassen (O-Notation) einen Algorithmus mit dieser Laufzeit
> - O(1): Array get()
> - O(n): List get()
> - O(log n): Binary Search AVL Baum
> - O(n log n): Quicksort

> [!info]- Wie lautet die Rekursionsgleichung für die maximale Anzahl Vergleiche bei binärer Suche?
> $T(n) = T(n/2) + 1$

> [!info]- Was sind die Vorteile und Nachteile eines static imports?
> - Bessere Lesbarkeit, Wartbarkeit
> - Namenskonflikte
