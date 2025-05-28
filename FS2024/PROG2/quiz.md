### Was gibt es für Strategien für Cores?
- Non-Preemptive→Process releases core voluntarily (first come first served, shortest process next)
- Preemptive→Scheduler can interrupt a process
- Real-Time→Very tight timing requirements? (Deadline scheduling)

### Was ist der Unterschied von Programm, Prozess, Threads?
- Programm: Abfolge von Anweisungen
- Prozess: Objekt in System mit dem ein oder mehrere Threads und Code assoziiert sind. Wenn alle Threads geschlossen sind, wird der Prozess beendet. Ein Prozess beansprucht einen Memory abschnitt
- Thread: Benutzt die gleiche Memory wie der Prozess, zu dem er gehört.

### Wieso benutzt man lieber Prozesse oder lieber Threads?
Es ist einfacher, zwischen threads zu wechseln, als zwischen Prozessen, da zum Thread nur das Stack etc. gehört.

### Was muss man Speichern pro Thread?
- Program Counter
- Gespeicherte Register
- Stack (Pointer dahin)
- Thread Metadaten

### Was ist der Program Counter?
Dieser zeigt auf die Stelle, wo das Programm im Code ist.

### Was passiert wenn man ein objekt als referenz einer methode in einem stack weiter gibt
stack->referenz heep->objekt

### Auf was hat der Thread alles Zugriff?

### Wie läuft der Life-Cycle eines Threads ab?

### Was machen yield, sleep, suspend, resume, interrupt, resume, stop, join?

### Was kann ein Thread für einen Staus haben?
new, runnable...

### Wie soll man einen Thread beenden?
doContinue auf false setzen + interrupt aufrufen um gleich an das ende der run funktion zu gelangen.

### Wie kann man einen ExecutorService benutzen?

### Wieso würde ein Thread vom Executor Service sterben?

### Wie funktioniert ein Thread Pool?
(je nach dem x threads pro core am besten zb pro virtueller core 1, vlt weniger wenn man noch anderes macht gerade. io =mehr ok, weil die warten vorallem. da ist speicher die grenze eher)

### Wann benutzt man am Besten welchen Typ von Thread-Pool?
- SingleThreadExecutor
- Fixed
- Cached: passt anzahl dynamisch an abhängig von tasks, maximum (cached, weil threads behalten wird für eine gewisse zeit)

### Was wenn scheduler mit x threads nicht genug threads?

### Was gibt es für nested Klassen und was sind die Unterschiede?

### Wieso benutzt man nested Klassen?
2 gründe für nested class:
- Sie gehört zum Kontext / sie gehört dazu.
- Man will sie ausschliesslich in dieser Klasse nutzen

### Wie ist eine JavaFX Applikation strukturiert?

### Welche javaFX-Container nutzt man für was?

### Was ist Event handling?

### Wieso ist JavaFX nicht immer plattformagnostisch?
javafk nicht immer plattformagnostisch =andere teile / packages werden heruntergeladen
### Was bedeutet `<?extends class xy`?

### Wieso muss man ein io am Ende schliessen?

### Was macht die Klasse Optional?

### Wann benutzt man ein Optional und wann eine Exception?
Optional
- es ist nichts enthalten (z.B in datenbankabfrage)
- programm geht weiter
- ergebnis ist vorhanden

Exception
- wenn fehler/problem
- stoppt programmfluss
- es gibt keinen rückgabewert

### Was sind die Unterschiede von prozeduralem vs funktionalem vs Objekt-orientiertem Programmieren?
Prozedural
- y = f(x)
- Status ist global gespeichert

Funktional
- y = O(f,x) resp. y = x.O(f)
- Status wird von Funktion zu Funktion weitergegeben

OOP
- y = object.f(x)
- Status ist in Objektinstanzen gespeichert

### Was ist eine pure Funktion?
Sie hat keine Nebeneffekte = nichts wird anderswo verändert, man verwendet nur die gegebenen Variablen. Soll man vermeiden wenn nicht nötig. Aber natürlich gewollt wenn man z.B etwas in der Konsole ausgibt oder in eine Datenbank schreibt. Aber nicht wenn man einfach ein Resultat abspeichert wenn man es zurückgeben könnte.

### Wie sieht der Lebenszyklus einer Stream-Pipeline aus?
source -source  operation -(intermediate operations) -terminal operation -result

### Was sind die Vorteile der Streams & der terminalen Operationen?
- Paralelle Ausführung
- Unnötige Operationen eliminieren
- Operationen mergen
- Lazy evaluation = stream wird erst bearbeitet, wenn benötigt. Nur die, die benötigt sind werden weiterverarbeitet.

### Warum braucht man einen accumulator und einer combiner bei stream.reduce?
Wenn man einen parallelen Stream hat muss man die einzelnen Zwischenresultate jedes Threads wieder kombinieren können.

### Was ist der Grundsatz von MVC?
Model kann nie direkt auf UI zugreifen sondern nur indirekt durch events. view registriert sich und macht dann selber