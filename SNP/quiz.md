[SNP Laboratories — SNP Labs documentation](https://github.zhaw.ch/pages/SNP/snp_students/build/html/index.html)

virtueller speicher dies ist alles in der memory
stack (wächst)
heap (dynamische daten)
daten (static, global...)
programm

was ist ein system call
systemschnittstelle
function provided by the kernel

prozesse...

Beispiel soft link bbb referenziert aaa: `ln -s aaa bbb`

Der soft link hat eine neue ino, und man hat alle berechtigungen darauf. Wenn aaa gelöscht dann referenziert bbb auf nichts, weil über namen referenziert wird. dann kann man bbb nicht mehr öffnen. wenn aaa wieder erzeugt wird dann geht es wieder.

### Welchen Wert haben EXIT_SUCCESS und EXIT_FAILURE?
EXIT_SUCCESS = 0

EXIT_FAILURE =/= 0 (meist 1)

### Was ist die Sichtbarkeit einer globalen statischen Variable?
DIe Variable ist nur innerhalb der Datei bis zum Programmende sichtbar. Wenn die Variable im Header deklariert wurde (schlecht), dann ist sie bei jedem Import in eine Datei eine andere Variable.

### Was ist die Sichtbarkeit einer globalen Variable?
Die Variable ist sichtbar in allen Dateien bis zum Programmende.

### Was ist die Sichtbarkeit einer lokalen statischen Variable?
Die Variable ist bis zum Programmende in der Funktion sichtbar.

### Wie kann dieser Code mit "void" verbessert werden? `int helloWorld() { printf("Hello World);}`

```
int helloWorld(void) {
	(void) printf("Hello World);
}
```

### Wie iniziiert man einen String "ZHAW" und welche Grösse hat der String?

```
char myString[] = "ZHAW"
```

Der String hat die Grösse von 5 chars, da das letzte Zeichen \0 das Ende des Strings markieren muss.

### Was ist inode?

### Was macht reguläre files aus?

### Was bedeutet everything is a file für unix?

### Wie funktionieren Links (hard und soft)?
Hard link:
- Verweist direkt auf denselben inode.
- Beide Dateinamen sind gleichwertig (es gibt keine "Originaldatei" mehr)
- Wenn du eine der Dateien löschst, bleibt die andere bestehen, solange noch mindestens ein Hard Link existiert.

Soft link:
- Verweist auf Pfad der Datei
- Wenn die Zieldatei gelöscht wurde, zeigt der Link ins leere

### Wie funktionieren Pfade?
~ = benutzer heimverzeichis

./ = momentaner ordner

../ = ein ordner weiter oben

### Was gibt es für spezielle files?
- character devices
- block devices
- named pipes
- sockets
- kann auch virtuelles file sein
- /dev -hier sind alle devices
- tty -terminals für ein programm
- sda -festplatten
- null -input verschwindet
- etc

### Wie funktioniert Mounting?

### Was sind Streams?

### Was ist ein file descriptor?

### Wie kann man buffern und warum?

### Was ist blocking oder non blocking i/o?
blocking io = programm wartet auf io input, nichts anderes passiert im programm währenddessen.

nonblocking = programm fährt weiter, während input gegeben werden kann
### Was ist ein seekable file?
### Wie sieht das Schichtenmodell aus?
1. Kernel
2. Übergang: System Calls
3. Programme, User Libraries, System Library

### Was sind die Aufgaben der CPU?
- Programmausführung (Control Unit & Logic)
- Datenverarbeitung (Data Path -Register, ALU)
- Bus Interface

### Was sind die Aufgaben der Memory?
- Memory Zellen werden über Systembus-Adressen angesprochen
- Entgegennehmen von Daten zur Speicherung
- Liefern von gespeicherten Daten 

### Was sind die Aufgaben vom i/o?
- Anbindung des zentralen Computersystems and die Aussenwelt
- Lese- und Schreibschnittstelle für verscheidene externe Hardware

### Was macht der Systembus?
- Verbindet die zentralen Komponenten des Computersytems
- Die CPU signalisiert über den Systembus die gewünschten Zugriffe

### Was ist der Unterschied von RAM und ROM?
- RAM ist random access memory und behält Daten, solange es Srom gibt
- ROM ist read only memory und ist unabhängigt von der Stromversorgung. Daten werden zur Produktionszeit definiert.

### Was sind die Aufgaben des Betriebssystems?
- Verwalten von Hardwareressourcen (CPU, IO, Memory)
- Abstrahieren von Hardwareressourcen über OS-Konzepte (Tasks, Filesystem)
- Hardwarebeschleunigung und Entlastung (Cache)

### Was ist der Unterscheid von einem Prozess und einem Task?
Task: Aufgabe, die von der CPU bearbeiutet wird

Ein Prozess ist ein Task und ein Programm in Ausführung

Thread: Separater Kontrollfluss/Stack in einem Prozess

### Auf welche Weisen kann man quasi multitasken?
- Kontext-Switch: Schnell hin und her wechseln
- Kooperativ: Jedes Task gibt selbst ab
- Präemptiv: Task wird unterbrochen
- Scheduler: Bestimmt, welches Task dran ist

### Wie werden erlaubte Operationen eingeschränkt?
Die CPU hat Operations-Modi
- Kernel Mode: Alles erlaubt
- User Mode: Nicht alles erlaubt, kein direkter Zugriff auf die Hardware
