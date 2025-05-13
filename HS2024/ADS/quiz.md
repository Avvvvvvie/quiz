
> [!quiz]- Beispiel Vor/Nachbedingung
> Teilweise mit Vor- und Nachbedingung nachweisbar
> Beispiel: {x=1} x++ {x=2}
> Beispiel: {x>=0} x = x + 1 {x>=1 und x1 > x0}

> [!quiz]- Was ist ADT
= Abstrakte Datentyp
> Hat Schnittstelle und Implementation
> In Java Interface und Klasse

> [!quiz]- Was kann ein Stack
> First in First out
> Gut implementiert mit LinkedList
> - push
> - pop
> - isEmpty

> [!quiz]-  Was kann eine Liste
> - add (am ende oder pos)
> - get
> - remove
> - size
> - isEmpty
> - LinkedList: ListNode head

> [!quiz]-  Queue
> First in Last out
> Gut implementiert mit Array: OutIndx, InIndx. oder LinkedList
> - enqueue
> - dequeue
> - isEmpty

> [!quiz]-  Was ist der Unterschied zwischen einer Queue und einem Stack?
> Queue: First in First out
> Stack: First in Last out

> [!quiz]-  ArrayQueue
> von outIndex bis inIndex
> wenn bei array.size dann wraparound

> [!quiz]- Iterator
> - hasNext
> - next
> - remove

> [!quiz]-  Vorteil Iterator
> - Hiding-Prinzip wird nicht verletzt
> - Mehrere gleichzeitig iterierbar
> - Verwaltet aktuelle Position
> - foreach tut dies

> [!quiz]-  Wann benutzt man ArrayList, wann List?
> arraylist -> oft zugreifen
> list -> oft verändern

> [!quiz]-  Wie entfernt man ein Element der LinkedList
> a.next = a.next.next

> [!quiz]-  Wie fügt man eine Element zu LinkedList hinzu?
> newnode.next = listnode1.next
> listnode1.next = newnode

> [!quiz]-  Laufzeit Einfügen an der ersten/i-ten Position in einer einfach verketteten Liste?
> O(1) und O(n)

> [!quiz]-  Doppelt verkettete Liste
> Hat head und Tail
> add? remove?

> [!quiz]-  Add bei doppelt verketteter Liste
> newNode.next = current;
> newNode.prev = current.prev;
> current.prev.next = newNode;
> current.prev = newNode;

> [!quiz]-  Zirkulär verkettete Liste
> Wenn leer: Head zeigt zwei mal auf Head (Dummy Anfangsknoten)
> Braucht nur Head zu speichern und kein Tail

> [!quiz]-  Sortierte Liste
> Insert fügt das ELement an richtiger Stelle ein:
> while (p.next.data < n.data) p = p.next;
> z.B. PriorityQueue (mit int priority)
> Benutzt Comparable Interface

> [!quiz]- Resultate von x.compareTo(y)
> x < y -> negativ
> x = y -> 0
> x > y -> positiv

> [!quiz]- Array VS Liste
> Array: get() effizient
> Liste: add, remove, etc effizient
> (ArrayList ist schlussendlich Array, aber die Anzahl der Elemente ist variabel)

> [!quiz]- Collections
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

> [!quiz]- Set
> - contains
> - get
> - add
> - remove
> - Mengenoperationen
> - sehr effizient, zb HashSet

> [!quiz]- Vorteile Java Generics
> - erhöht die Effizienz von Collections, macht sie vielseitiger einsetzbar
> - macht deren Einsatz komfortabler, sicherer und aussagekräftiger
> - senkt die Gefahr von Fehlern bei Typprüfungen zur Laufzeit

> [!quiz]- Generic Wildcard
> Upper Bounded: `List<? extends Figure>` (Gut als Rückgabewert)
> Lower Bounded: `List<? super RoundedRectangle>` (Kann auch RoundedRectangle sein)

> [!quiz]-  Wieso verwendet man Bounded?
> ZB für Liste von verschiedenen Unterklassen. Nützlich in Kombination von anderer generischen Klasse: T und ? extends T

> [!quiz]- Type Erasure
> Aus `Box<T>` wird zur Laufzeit `Box<Object>`
> - instanceof nicht möglich bei Wildcard
> - new e() nicht möglich
> deshalb: `Class<T> clazz -> (T)clazz.newInstance()` um Klasse herauszufinden

> [!quiz]- Predicate Beispiel
> predicate = x -> x > 1
> predicate.test(5)

> [!quiz]- Streams
> - Erzeuge Stream
> - Verarbeite Stream (Intermediate Operations)
> - Konsumierte Stream (Terminate)
> - Kaskadiert und Parallel

> [!quiz]- Fakultät rekursiv
> ```
> int fak(int n) {
>    if (n == 0) return 1;
>    else return n* fak(n-1);
> }
> ```

> [!quiz]- Fibanocci rekursiv
> ```
> int fib(int n) {
>    if (n == 0 || n == 1) return 1;
>    else return fib(n-1) + fib(n-2);
> }
> ```

> [!quiz]- Laufzeit Fibonacci
> O(1.6^n)

> [!quiz]- Definition Rekursion
> Ein Algorithmus/Datenstruktur heisst rekursiv definiert, wenn er/sie sich selbst als Teil enthält oder mit Hilfe von sich selbst definiert ist.
> Es gibt immer einen Basisfall/Verankerung und einen Induktionsschritt.

> [!quiz]- Liste rekursiv definiert
> Liste = leer
> Liste = ListNode (Liste)?

> [!quiz]- traverse() einer Liste rekursiv
> ```
> if p !== null {
>    print(p.value)
>    traverse(p.next)
> }
> ```

> [!quiz]- Nennen Sie zwei Implementierungen von Listen in Java
> ArrayList, LinkedList

> [!quiz]- Direkte/Indirekte Rekursion
> Direkt: p() enthält p()
> Indirekt: p() enthält q(), q() enthält p()

> [!quiz]- Endrekursion
> Programme, bei denen der rekursive Aufruf die letzte Aktion im Else-Zweig bzw. allgemeinen Fall ist werden endrekursiv bezeichnet. 
> `if n = 1 return 1 else return p(n-1)`
> Nicht Endrekursiv:
> `return n + p(n-1)`
> Kann aber umgwandelt werden:
> `return p(n-1, n)`
> Endrekursive Programme lassen sich einfach in iterative Form überführen und umgekehrt.
> `while n > 0 res = res * n; n--`
> Jedes Rekursives Programm kann in ein Nicht-Rekursives umgeschrieben werden, indem man das Stack selbst macht.

> [!quiz]- Nennen Sie ein Beispiel rekursiver Programmierung aus der Vorlesung.
> Fibonacci, isPrime, Fakultät, Liste/Baum traversieren 

> [!quiz]- Schreiben Sie einen Algorithmus in Pseudo-Code, der überprüft, ob eine Zahl eine Primzahl ist.
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

> [!quiz]- Nennen Sie einige typische Komplexitätsklassen
> - O(1) konstanter Aufwand
> - O(log n) logarithmischer Aufwand
> - O(n) linearer Aufwand
> - O(n * log n)
> - O(n^2) quadratischer Aufwand
> - O(n^k) für konstantes k > 1 polynomialer Aufwand
> - O(2^n) exponentieller Aufwand

> [!quiz]- Was hält die O-Notation fest?
Wie die Zeit, welche ein Algorithmus höchstens benötigt, sich verändert, in Abhängigkeit vom Input. Egal wie lange der Rechner für Operationen wirklich braucht.

> [!quiz]- Was hält die Omega-Notation fest?
> Wie lange der Algorithmus mindestens braucht in ABhängigkeit des Inputs.

> [!quiz]- Was hält die Theta-Notation fest?
> Exakte Wachstumsrate (statt Best/Worst Case). x^2 ist auch O(x^3) aber nicht Theta(x^3)

> [!quiz]- Laufzeit folgendes Codes: `while i < N: i = i*2`
> log(n)

> [!quiz]- Laufzeit folgendes Codes: `for i = 1 .. n; for j = 1 .. n`
> O(n^2)

> [!quiz]- Laufzeit folgendes Codes: `for i = 1..n; for j = 1..i for k = 1..j`
> for 1..n -> n
> for 1..i -> (n+1)/2
> for 1..j -> (((n+1)/2)+1)/2
> -> O(n^3)

> [!quiz]- Laufzeit folgendes Codes: `for i = 1..n; binarySearch(i in F)`
> n log(n)

> [!quiz]- Laufzeit folgendes Codes: `for i = 1..n for j = 1..m for k = 1..m`
> O(n * m^2)

> [!quiz]- Was ist der Unterschied zwischen Average und Worst Case Laufzeit?
> Average: Wie lange es im Durchschnitt benötigt, wenn man zufällige Werte übergibt bzw alle möglichen Werte.
> Worst Case: Wie lange es höchstens geht.

> [!quiz]- Falls immer f(x) < g(x) ist, ist dann f = O(g)?
> Ja, weil laut Definition f(x) O(g(x)) ist wenn ab einem gewissen Wert f(x) <= c * g(x) gilt.

> [!quiz]- Warum sind iterative Algorithmen oft schneller als ihre rekursiven Varianten?
> Overhead beim Methodenaufruf

> [!quiz]- Turm von Hanoi
> Komplexität: 2^n weil je n: 1 + 2(n-1)
> Rekursionstiefe: n
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

> [!quiz]- Was ist ein binaerer Suchbaum? Was ist ein binärer Baum?
> Ein Baum besteht aus Knoten. Von einem Knoten aus gibt es Kanten zu den Nachfolgerknoten. Nur die Wurzel ist kein Nachfolger. Ein Binärer Baum hat höchstens 2 Nachfolger pro Knoten.

> [!quiz]- Binärer Baum rekursiv
> Baum = leer
> Baum = Knoten (Baum Baum)

> [!quiz]- Welche Traversierungsarten bei Bäumen kennen Sie?
> Preorder: n, A, B
> Inorder: A, n, B
> Postorder: A, B, n
> Levelorder: n, A, B für jedes Tiefenlevel

> [!quiz]- Pre-/In-/Postorder Implementation mit Rekursion
> ```
> if node != null
> 	visit node
> 	preorder(left);
> 	preorder(right);
> ```

> [!quiz]- Pre-/In-/Postorder Implementation mit Stack
> ```
> enqueue root
> while stack is not empty
> 	node = pop
> 	visit node
> 	enqueue left
> 	enqueue right
> ```

> [!quiz]- Levelorder Implementation
> ```
> enqueue root
> while queue is not empty
> 	node = dequeue
> 	visit node
> 	enqueue left
> 	enqueue right
> ```

> [!quiz]- Was passiert, wenn Sie die Knoten eines binaeren Suchbaums inorder ausgeben?
> Die Elemente werden geordnet ausgegeben.

> [!quiz]- Gegeben sei ein Baum, bei dem die inneren Knoten Operationen sind wie + - * / und die Blaetter Zahlen. Was erhalten Sie bei Inorder,Preorder Postorder?
> Inorder: a + b
> Preorder: + a b
> Postorder: a b +

> [!quiz]- Fügen Sie die Zahlen 10, 1, 9, 2, 8, 3, 7, 4 der Reihe nach in einen binaeren Suchbaum ein. Was erkennen Sie? 
> Zickzack

> [!quiz]- In einem bin. Suchbaum mit ungerade vielen Elementen (n = 2k+1) steht an jedem Knoten, wieviele Knoten der gesamte Teilbaum hat. Wie kann man mit dieser Information den Median finden?
> Baum traversieren und Knoten finden, bei welchem gleich viele Knoten links und rechts sind.

> [!quiz]- Wo findet man in einem binären Suchbaum den grössten Knoten?
> Ganz rechts

> [!quiz]- Wie hoch ist ein binaerer Baum mit n Elementen?
> mindestens log2(n + 1)
> höchstens n

> [!quiz]- Wie viele Knoten kann ein Baum der Höhe k haben?
> 2^k - 1

> [!quiz]- Skizzieren Sie einen vollständig gefüllten, binären Suchbaum der Höhe 3 und löschen Sie anschliessend den gezeigten Knoten aus dem Baum. Kann man aus der Pre- und Postorder-Reihenfolge einen Baum immer eindeutig wiederherstellen?
> Nein. Nur wenn man auch Inorder hat. Auch Inorder+Pre ohne Post

> [!quiz]- Node einfügen unsortiert
> ```
> insertAt(node, x) {
> 	if node = null
> 		return new TreeNode(x)
> 	else
> 		right = insertAt(right, x)
> 		return node
> } 
> ```

> [!quiz]- Node einfügen sortiert
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

> [!quiz]- Wie ist die Worst-Case-Laufzeit von binärer Suche? Wieso?
> O(n), wenn die Elemente sortiert eingefügt wurden.

> [!quiz]- Erklären Sie wie binäre Suche funktioniert.
> Wenn das gesuchte Element kleiner als der aktuelle Knoten ist, sucht man rechts weiter, sonst links.

> [!quiz]- Welche Laufzeit hat die Suche in einer unsortierten LinkedList? Was ist, wenn die Liste sortiert ist?
> Beides O(n)

> [!quiz]- Löschen eines Teilbaums
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

> [!quiz]- AVL Bedingung
> - Tiefe von 2 Teilbäumen maximal 1 Unterschied = AVL-Balanciert
> - Super Balanciert *wäre* Gewicht max 1 Unterschied

> [!quiz]- AVL Vor- und Nachteile
> - Schnelle Suche O(log n)
> - Wird nicht zu Liste
> - Mehr Aufwand

> [!quiz]- Rotationen
> Einzelrotation: Wenn L tiefer: L wird oben, obenlinks = Lrechts
> Doppelrotation: Wenn mitte links tiefer->LR

> [!quiz]- Ein AVL-Baum sei durch Einfügen eines Elements aus der Balance geraten. Wie kann man erkennen, ob eine einfache oder eine doppelte Rotation gebraucht wird, um die Balance wiederherzustellen?
> Wenn der Linke vom Linken / Rechte vom Rechten schwerer dann Einzelrotation. Sosnt, wenn der "innere" Teil schwerer ist, Doppelrotation

> [!quiz]- B-Baum
> - In einem B-Baum der Ordnung n enthält jeder Knoten ausser der Wurzel mindestens n/2 und höchstens n-1 Schlüssel. Nachfolger = Anz Schlüssel+1
> - Die Schlüssel sind sortiert. Die Nachfolger sind die Werte zwischen/um den Schlüsseln, also gibt es 1 Nachfolger mehr als Schlüssel.
> - Wenn Knoten Voll: Nachfolger in der Mitte Nach oben und zwei Nachfolger mit dem Rest. Wenn dies zur Wurzel propagiert: Baum erhlt neue Höhe.
> - Löschen: Nachfolger können zusammengefasst werden oder 1 Nachfolger wird die neue Mitte.
> - Im Hauptspeicher: Ordunung 2-4
> - Tiefe: log_n(Anzahl elemente)
> - Annahme: Viele Schlüssel, geringe Tiefe

> [!quiz]- B-Baum Vorteile
> - Optimiert für Massenspeicherzugriff
> - Weniger Zugriffe weil ausgeglichener Baum
> - Profitiert von Cache weil Information in Blöcken
> - Gut auf Disk/DBIndex, Binärbaum nicht

> [!quiz]- B-Baum VS AVL
> B-Baum etwas weniger Aufwand zum einfügen. Kein grosser Unterschied

> [!quiz]- Rot-Schwarz Bäume
> - Innerhalb B-Baum Knoten gibt es Binärbaum. Dessen kanten sind "rot" markiert. Auf rot folgt nie rot in 2-3-4-Baum
> - Einfachheit von Binärbäumen und Ausgeglichenheit von B-Bäumen

> [!quiz]- Wieviele Knoten hat ein B-Baum der Ordnung k und Höhe h höchstens?
> k^(h-1) + (k-1)

> [!quiz]- Wieviele Kanten hat ein vollständiger (kompletter) ungerichteter Graph mit n Knoten?
> n^2

> [!quiz]- Dichter/Dünner Graph
> Dicht: Viele Kanten
> Dünn: Wenige Kanten

> [!quiz]- Wie kann man einen ungerichteten Graphen als gerichteten Graphen repräsentieren?
> Jede Kante in beide Richtungen ziehen.

> [!quiz]- Was ist eine Adjazenzmatrix
> Booleanmatrix NxN von allen Kombinationen der N Knoten. True = Kante existiert. Gewichtet -> integer statt boolean
> Gut: zugriffszeit effizient
> Schlecht: platzineffizient O(n^2). Für ungerichtete Graphen symmetrisch = Platzverschwendung
> Platz für Adjazenzliste = O(n+m)

> [!quiz]- Breitensuche
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

> [!quiz]- Tiefensuche
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

> [!quiz]- Kürzester Pfad
> Bei Nachfolger Distanz und von wo notieren. Wenn durch andere Strecke kürzerer Weg, wird überschrieben. Dann rückwärts zurück.

> [!quiz]- Dijkstra
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

> [!quiz]- Wie lautet die Definition eines ungerichteten (gerichteten, gewichteten) Graphen?
> Allgemein: Es gibt eine endlihe Anzahl Knoten und Kanten. Eine Kante verbindet zwei Knoten. Ungerichtet: Für jede Kante (1, 2) gibt es die Kante (2, 1). D.h. alle Knotenrelationen sind symmetrisch. Gewichtet = Es gibt zusätzlich eine Funktion Kante -> Zahl

> [!quiz]- Was ist ein Spannbaum?
> enthält alle Knoten
> Prim-Jarnik: Min Spanning Tree -> Summe der Kanten haben die kleinste mögliche Gewichtung

> [!quiz]- Gieriger Algorithmus
> Nimmt immer den zum Zeitpunkt der Wahl bessere Ergebnis durch eine Lokale Bewertungsfunktion.

> [!quiz]- Gierige Algorithmen Pro Kontra
> + schnell
> - bleibt stecken in lokalen Maxima/Minima
> Dijkstra hat keine lokale Minima wenn keine negativen Strecken

> [!quiz]- Topologisches Sortieren Algorithmus
> 1. Man zählt, wieviele Kanteneingänge jeder Knoten hat.
> 2. Man nimmt alle Knoten mit 0 Eingängen weg.
> 3. Man zählt erneut.

> [!quiz]- Maximaler Fluss Algorithmus
> Pfad finden und dessen Gewichtung löschen/abziehen, aber in anderen Graph kopieren. Solange bis keine Eingänge beim Ziel. Dan Eingänge beim Ziel zählen.

> [!quiz]- Sind minimale Spannbaeume eindeutig bestimmt? Begruendung/Gegenbeispiel
> Nein. Wenn zwei Wege gleich lang die zwei Teilbäume verbinden würde an anderen Orten.

> [!quiz]- Angenommen es gibt in einem Graphen genau eine Kante minimalen Gewichts. Muss die in einem minimalen Spannbaum vorhanden sein? Begruendung 
> Ja. Hat man einen anderen Spannbaum und nimmt den kleinste Kante dazu, gibt es einen Zyklus. Man kann dann den Zyklus aufheben, indem man eine schwerere Kante in dem Zyklus entfernt.

> [!quiz]- Gegeben ist ein Spannbaum eines ungerichteten Graphen. Nun verbinden Sie zwei bisher nicht verbundene Knoten. Ist das Resultat immer noch ein Spannbaum?
> Nein. Dadurch entsteht ein Zyklus und dadurch ist es kein Baum mehr.

> [!quiz]- Welche Graphenrepräsentation würden Sie verwenden, um einen Graphen als Textfile zu speichern?
> Adjazenzliste wenn mehr Knoten oder Matrix wenn mehr Kanten und gewichtet

> [!quiz]- Sind Spannbäume eindeutig bestimmt? Wenn ja, begründen Sie, wenn nein geben Sie ein Gegenbeispiel.
> Nein, wenn es Pfade gibt mit der gleichen Gewichtung.

> [!quiz]- Sie haben einen unger. Graphen mit den vorgegebenen Kanten. Finden Sie eine geschlossene Tour (Anfangsknoten = Zielknoten), bei der jede Kante genau einmal genommen wird, oder begruenden Sie, warum es keine solche Tour geben kann.
> Es geht nicht, wenn ein Knoten eine ungerade Anzahl Kanten hat. Wo man hingeht muss man nämlich wieder weggehen können.

> [!quiz]- Traveling Salesman Problem: Beschreibung und Laufzeit
> Kürzester Weg für alle Routen
> Alle Kombinationen: O(n!)
> Algorithmen: O(a^n)

> [!quiz]- Backtracking
> = Versuchspfade werden ausprobiert und wenn sie fehlschlagen rückgängig gemacht.

> [!quiz]- Rekursive Suche im Labyrinth
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

> [!quiz]- Springerproblem
> Springer soll alle Felder besuchen
> Rekursiv: Man versucht einen Zug (Es gibt 8 Möglichkeiten pro Rekursionsaufruf). Wenn es ein gültiger Zug ist, markiert man das Feld als besucht und ruft die Funktion rekursiv auf. Wenn man in der Rekursion nxn Züge gezählt hat, ist das Ganze erfolgreich. Wenn der Zug ungültig ist, gibt man false zurück und setzt die position als unbesucht.

> [!quiz]- 8 Damenproblem
> 8 Damen müssen auf dem Schachfeld positioniert werden ohne sich schlagen zu können.
> Ein Schachfeld ist 8 Hoch, also versucht man für jede y position eine gültige x position auszuwählen.
> Rekursiv:
> In der Rekursion zählt man, wieviele schon platziert wurden.
> Man iteriert die 8 x positionen. Wenn sie gültig ist, ruft man die Funktion rekursiv auf. Wenn 8 platziert wurden, gibt man true zurück. Wenn die position ungüktig ist, false und man gibt das Feld frei.

> [!quiz]- Rucksackproblem
> Es gibt K Gegenstände mit Wert und Volumen. Der Rucksack hat die Grösse M. Der Wert im Rucksack soll maximiert werden.
> Aufwand: O(2^n)
> Rekursiv:
> Man testet zuerst rekursiv ohne den Gegenstand k
> Dann fügt man den gegenstand hinzu (falls es geht)
> Wenn es ein neues Maximum ist, speichert man das als Maximum.
> Dann testet man rekursiv weiter mit dem Gegenstand k

> [!quiz]- Erschöpfende Suche
> = alle Möglichkeiten werden ausprobiert

> [!quiz]- Zielfunktion
> So umgeht man die Kombinatorische Explosion
> - Man wählt nur die Lösung aus, die zum Ziel führt
> - Man berechnet zu jedem Knoten im Entscheidungsbaum den Zielwert, den man über diesen Knoten erreichen kann
> - Geschätzte obere Schranke schätzt dies weil sonst muss man das Problem ja gelöst haben
> - Cutoff/Pruning = Ab einem gewissen Punkt ignoriert man schlechte Pfade
> - Lower Bound: Zb kürzeste Strecke in A* kann nicht tiefer sein als Luftlinie (man geht zu optimistisch vor) Schach nimmt optimistische obere Schranke aber wegen Gegner braucht es Minimax Algorithmus. Man bricht aber iwann ab -> Horizont Effekt, es könnte bessere Wege geben

> [!quiz]- Tic-Tac-Toe
> Man versucht eine Möglichkeit (aus 3x3 Moves). Wenn das Resultat besser ist als der PC oder schlechter als der Gegner, versucht man rekursiv mehr Moves. Wenn der Move ungültig ist, bricht diese Rekursion ab und löscht die Moves. Besser heisst, man hat einen Weg gefunden, in welchem man gewinnt.

> [!quiz]- Binäre Suche
> - m = (l + r) / 2
> - Falls a[m] < S -> l = m
> - Falls a[m] > S -> r = m
> - Falls a[m] == S -> gefunden
> - Falls l+1 >= r -> keine Elemente mehr zwischen l und r -> nicht gefunden

> [!quiz]- Suche in 2 sortierten Arrays
> Aufwand: O(n)
> solange a[i] nicht b[j]
> wenn a[i] < b[i] i++
> wenn a[i] > b[i] j++

> [!quiz]- Hashing
> Grosse Menge wird auf kleinere Abgebildet
> ZB X modulo tableSize
> Kollision muss aufgelöst werden

> [!quiz]- Selber hashen in Java was muss man beachten
> Immer equals, compareTo und hashCode zusammen überschreiben
> Weil derselbe hashCode -> equals=true
> Mit Primzahlen arbeiten: obj.a + 13 * obj.b

> [!quiz]- Wann gibt es viele Kollisionen?
> Wenn der Load-Faktor lambda > 0.8 dann gibt es viele Kollisionen

> [!quiz]- Kollisionsauflösungen
> Separate Chaining: Pro Hashwert gibt es eine Überlaufsliste
> - gut bei hohem load level
> - overhead
> 
> Open Addressing: Wert wird irgendwo anders in der Tabelle abgelegt.
> - Lineares Sondieren: In nächster freier Zelle mit Wraparound
> - Quadratisches Sondieren: In F+1, F+4, F+9 mit Wraparound
> - Wenn ein Element gelöscht wird muss man rehashen oder Zelle als gelöscht markieren.

> [!quiz]- Vor- und Nachteile von Hashing
> - suchen, einfügen effizient
> - alles mit ordnung, bereichen ineffizient

> [!quiz]- Platz in Hashtabelle reicht nicht mehr was tun?
> - Rehashen in grössere Tabelle
> - Extendible Hashing: Buckets (zB letzte zwei Bits -> 4 Buckets). Wenn auf 8 erweitert: je zwei neue indexe zeigen auf 1 alten Bucket

> [!quiz]- Map und HashMap
> - put
> - get
> - remove
> - size
> - clear
> - containsKey/containsValue
> - values, keySet

> [!quiz]- Bruteforce VS KMP
> O(n * m) VS O(n + m)
> KMP konstruiert Automat, damit man nur vorwärt lesen muss, also keinen Zeiger zurücksetzen muss. (Wenn x zum ersten mal vorkommt und danach nicht passt kann man die vorherigen für diese Stelle überspringen)

> [!quiz]- Map Reduce Schritte
> - Split: in subtasks aufteilen
> - Map: zu menge mappen
> - Shuffle: hashKey bestimmen und nach diesem gruppieren
> - Reduce: alles zusammen in einen index

> [!quiz]- Parallelisierung Pro Con
> - Overhead
> - bessere Performance wenn viele Daten oder Operationen
> - ausser falls Memory Lokalität wichtiger

> [!quiz]- Levenshtein Distanz
> Die Anzahl Editieroperationen die minimal nötig sind, um einen String in einen anderen überzuführen.
> - ersetzen
> - einfügen
> - löschen
> Implementation: 2d Matrix (n+1)(m+1)
> - behalten: diagonal 0
> - ersetzen: diagonal 1
> - löschen: vertikal 1
> - einfügen: horizontal 1

> [!quiz]- Trigram Suche
> Index für jedes Wort in 3 Buchstaben Gruppen
> Ist schnell weil man den Index im Vorhinein aufbaut.

> [!quiz]- Phonetische Suche
> Jede Gruppe von Buchstaben (die ähnlich tönen) hat Zahl
> Manche werden ignoriert je nach Sparache anders

> [!quiz]- Insertion Sort
> Man nimmt nacheinander die Elemente auf und sortiert sie ein. 0-(k-1) sortiert. k wird einsortiert.

> [!quiz]- Selection Sort
> Man nimmt das niedrigste Element und fügt es links an. Von 0-(k-1) sortiert. Man tauscht k mit einem i.

> [!quiz]- Bubble Sort
> Man tauscht benachbarte Elemente so lange, bis sie sortiert sind. (Man tauscht die höheren nach oben / die tieferen nach unten)
> `if a[i] > a[i+1] swap (a, i, i+1)`
> Wenn man in einer Iteration nicht mehr swappen musste, kann man abbrechen.

> [!quiz]- Quicksort
> Es gibt Zeiger l und r und ein Element W dazwischen.
> Man sucht ein Element links, welches rechts sein sollte und umgekehrt. Diese 2 tauscht man. Bis die Zeiger sich treffen. Dies tut man rekursiv dh in jeder Hälfte passiert das gleiche wieder.

> [!quiz]- Distribution-Sort
> Benutzt keine Vergleiche sondern tut Elemente in Fächer

> [!quiz]- Externes Sortieren
> Wenn es keinen Platz im internen Speicher hat:
> Man teilt die Menge auf und sortiert sie separat. Dann fügt man sie zusammen. Man fügt die Teile zusammen indem man zwei sortierte Blöcke sequenziel immer die 1. beiden dann die 2. beiden vergleicht. Dies muss man wiederholen bis vollständig sortiert.

> [!quiz]- Stabiler Sortieralgorithmus
> Zwei Elemente mit demselben Wert haben nach dem Sortiieren noch dieselbe Reihenfolge. Selection Sort und Quicksort sind instabil.

> [!quiz]- Sortieralgorithmen Vergleich
> - Bubble Sort: Best O(N), AVG+Worst O(N^2)
> - Selection Sort: O(N^2). weniger swaps, kein vorsortiert vorteil
> - Insertion Sort: O(N^2). weniger vergleiche. mehr swaps
> - Quicksort: AVG O(n log(n)), Worst O(n^2)
> - Merge Sort: O(n log(n))
> - Distribution Sort: O(n). muss aber an Menge angepasst werden + nur für kleine Mengen

> [!quiz]- Welchen Sortieralgorithmus soll man wann nutzen?
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

> [!quiz]- Speicherverwaltung
> - Referenzen Zählen (geht nicht bei Zyklen)
> - Smart Pointers: Merken selber, wenn sie referenziert werden oder out of scope sind
> - Speicherverwalten traversiert Referenzketten: statoische vars, stack vars
> - Mark-Sweep GC: bei traversierung markieren (tiefensuche). sequenziell unmarkierte blöcke freigeben. nachteil fragmentierung, aufwand, stop the world für freigabe
> - Copying GC: 1 teil aktuelle daten, ein teil obsolet. kein platz mehr->rollen verden getausch, aktuelle rüberkopiert. nachteil 2x speicher
> - Generational GC: neue generationen werden häufiger durchsucht. aufpassen wenn man in andere generation kopiert dass kein dangling pointer
> - Weak References: Nutz man, wenn man etwas nicht mehr umbedingt braucht und sonst wieder kreieren kann.

> [!quiz]- Nennen Sie für vier Komplexitätsklassen (O-Notation) einen Algorithmus mit dieser Laufzeit
> - O(1): Array get()
> - O(n): List get()
> - O(log n): Binary Search AVL Baum
> - O(n log n): Quicksort

> [!quiz]- Wie lautet die Rekursionsgleichung für die maximale Anzahl Vergleiche bei binärer Suche?
> $T(n) = T(n/2) + 1$

> [!quiz]- Was sind die Vorteile und Nachteile eines static imports?
> - Bessere Lesbarkeit, Wartbarkeit
> - Namenskonflikte
