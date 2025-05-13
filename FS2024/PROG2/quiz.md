>[!quiz]- Was gibt es für Strategien für Cores?
> - Non-Preemptive→Process releases core voluntarily (first come first served, shortest process next)
> - Preemptive→Scheduler can interrupt a process
> - Real-Time→Very tight timing requirements? (Deadline scheduling)

> [!quiz]- Was ist der Unterschied von Programm, Prozess, Threads?
> - Programm: Abfolge von Anweisungen
> - Prozess: Objekt in System mit dem ein oder mehrere Threads und Code assoziiert sind. Wenn alle Threads geschlossen sind, wird der Prozess beendet. Ein Prozess beansprucht einen Memory abschnitt
> - Thread: Benutzt die gleiche Memory wie der Prozess, zu dem er gehört.

> [!quiz]- Wieso benutzt man lieber Prozesse oder lieber Threads?
> Es ist einfacher, zwischen threads zu wechseln, als zwischen Prozessen, da zum Thread nur das Stack etc. gehört.

> [!quiz]- Was muss man Speichern pro Thread?
> - Program Counter
> - Gespeicherte Register
> - Stack (Pointer dahin)
> - Thread Metadaten

> [!quiz]- Was ist der Program Counter?
> Dieser zeigt auf die Stelle, wo das Programm im Code ist.

Was passiert wenn man ein objekt als referenz einer methode in einem stack weiter gibt
stack->referenz heep->objekt

Auf was hat der Thread alles Zugriff?

Wie läuft der Life-Cycle eines Threads ab?

Was machen yield, sleep, suspend, resume, interrupt, resume, stop, join?

Was kann ein Thread für einen Staus haben?
new, runnable...

Wie soll man einen Thread beenden?
doContinue auf false setzen + interrupt aufrufen um gleich an das ende der run funktion zu gelangen.

Wie kann man einen ExecutorService benutzen?

Wieso würde ein Thread vom Executor Service sterben?

Wie funktioniert ein Thread Pool?
(je nach dem x threads pro core am besten zb pro virtueller core 1, vlt weniger wenn man noch anderes macht gerade. io => mehr ok, weil die warten vorallem. da ist speicher die grenze eher)

Wann benutzt man am Besten welchen Typ von Thread-Pool?
- SingleThreadExecutor
- Fixed
- Cached: passt anzahl dynamisch an abhängig von tasks, maximum (cached, weil threads behalten wird für eine gewisse zeit)

Was wenn scheduler mit x threads nicht genug threads?
Was gibt es für nested Klassen un dwas sind die unterschiede?
static nested
inner >
	member: definition einfach innerhalb, hat zugriff auf (instatanz-)variablen&methoden in äusserer klasse
	local: in methode, zugriff auf lokale variablen
	anonymous: keinen namen, nur 1 instanz

2 gründe für nested class: kontext, sie gehört dazu. oder man will sie nur in der klasse nutzen

Wie ist eine JavaFX Applikation strukturiert?

Welche Container nutzt man fpr was?

Event handlch

platform agnosticg = unabhängig von plattform
javafk nicht immer plattformagnostisch => andere teile / packages werden heruntergeladen

`<?extends class xy` vs xy


observer changed wnn neues objekt aber equals?

produzent ruft produzent -> dieser sieht noch nicht konsumiert -> wait()

was sind deadlocks konditionen und lösungen

io abstract cls why

![[Pasted image 20240422101740.png]]

mitte byte die anderen pro linie+utf
why close io
decorator pattern adds responsibilit yto obj
printf ist deko
append to file with random acc f
was nicht serializable


x.class vs this.getclass
getresourceasstream gut

lambda braucht functional interface mit 1 methode, diese ist nicht statisch, default oder überschrieben von object
dann wird instanz anonymer klasse erstellt (mit dem ->)

was kann lambda spezzielles?
man kann den ausdruck einer variable zuweisen und funktionen übergeben

Wie funktioniert Optional?


> [!quiz]- Wann benutzt man ein Optional und wann eine Exception?
> Optional
> - es ist nichts enthalten (z.B in datenbankabfrage)
> - programm geht weiter
> - ergebnis ist vorhanden
> 
> Exception
> - wenn fehler/problem
> - stoppt programmfluss
> - es gibt keinen rückgabewert

> [!quiz]- Was sind die Unterschiede von prozeduralem vs funktionalem vs Objekt-orientiertem Programmieren?
> Prozedural
> - y = f(x)
> - Status ist global gespeichert
> 
> Funktional
> - y = O(f,x) resp. y = x.O(f)
> - Status wird von Funktion zu Funktion weitergegeben
> 
> OOP
> - y = object.f(x)
> - Status ist in Objektinstanzen gespeichert

> [!quiz]- Was ist eine pure Funktion?
> Sie hat keine Nebeneffekte = nichts wird anderswo verändert, man verwendet nur die gegebenen Variablen. Soll man vermeiden wenn nicht nötig. Aber natürlich gewollt wenn man z.B etwas in der Konsole ausgibt oder in eine Datenbank schreibt. Aber nicht wenn man einfach ein Resultat abspeichert wenn man es zurückgeben könnte.

Wie sieht der Lebenszyklus einer Stream-Pipeline aus?
source -> source  operation -> (intermediate operations) -> terminal operation -> result

Was sind die Vorteile der Streams & der terminalen Operationen?
- Paralelle Ausführung
- Unnötige Operationen eliminieren
- Operationen mergen
- Lazy evaluation = stream wird erst bearbeitet, wenn benötigt. Nur die, die benötigt sind werden weiterverarbeitet.

Warum braucht man einen accumulator und einer combiner bei stream.reduce?
Wenn man einen parallelen Stream hat muss man die einzelnen Zwischenresultate noch kombinieren.

MVC
Model kann nie direkt auf UI zugreifen sondern nur indirekt durch events. view registriert sich und macht dann selber