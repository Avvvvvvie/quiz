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

Beispiel 



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

### Wie iniziiert man einen String "ZHAW" und welche Speichergrösse hat der String?

```
char myString[] = "ZHAW"
```

Der String hat die Speichergrösse von 5 chars, da das letzte Zeichen \0 das Ende des Strings markieren muss.

### Was bedeuten "Declare-Before-Used" und "One-Definition-Rule"?

Jeder Name (Variable, Funktion, ...) muss vor der Verwendung deklariert worden sein. Der Name einer Funktion kann mehrmals deklariert sein, aber nur ein Mal definiert.

### Welcher Typ ist nicht als Rückgabewert einer Funktion zugelassen?

Arrays

### Was macht der Präprozessor?

Er führt Textersetzungen im Quellcode durch. (`#include`, `#define`,...)

### Was macht der Compiler?

Er wandelt Quellcode in Objektdateien um. Die Objektdatei beinhaltet Maschinencode. Die externen Symbole, offene Aufrufe von Funktionen und globale Variablen aus anderen Quelldateien werden gelistet, aber noch nicht verlinkt.

### Wieso benötigt man einen Header Guard?

Damit ein Header nicht mehrmals includet wird.

### Wie sieht der Code für ein Header-Guard aus?
```
#ifndef NAME_H
#define NAME_H
... deklarationen...
#endif
```

### Was macht .PHONY in der Makefile?

Die mit .PHONY angegebenen Targets werden nicht als File interpretiert. Diese Targets sind z.B. default all clean test)

### Wie deklariert man einen Array von Pointern und wie einem Pointer auf einen Array?

Array von 5 Pointern:
```c
int *myArray[5];
```

Pointer auf Array von 5 Integer:
```c
int (*myPointer)[5]
```

### Was ist ein Void Pointer?
Ein Void Pointer zeigt nicht auf einen Bestimmten Datentyp, sondern kann auf alles zeigen.

```c
int i = 1;
void *vp = &i;
```

Es braucht kein Casting, um ihm den Wert eines anderen Pointers zuzuweisen oder umgekehrt. 

```c
int *ip = &i;
vp = ip;
ip = vp;
```

### Wie greift man von einem Struct Pointer auf die Werte des Struct zu?

```c
(*structpointer).datenfeld
```

oder

```c
structpointer->datenfeld
```

### Was ist der NULL-Wert?

Er ist eine spezifische Adresse. Wenn ein Pointer auf diese Adresse zeigt, hat dies die Bedeutung, dass er auf nichts zeigt.

### Welche Speicherorte für Daten gibt es?

- Globaler/Statischer Speicherbereich
- Heap (dynamisch mit malloc erzeugte Variablen)
- Stack (lokale Variablen und Parameterübergabe and Funktionen)

### Was sind Stack-Overflow und Buffer-Overflow?
Stack-Overflow: Es hat nicht mehr genügend Speicherplatz auf dem Stack.

Buffer-Overflow: Daten auf dem Stack werden überschrieben. Z.B. wenn man mit strcpy einen langen String auf einen kurzen String (=Buffer) kopiert.


### Was ist Inode?
Die Inode ist die Verwaltungseinheit eines Files. Die Inode ist mit der eindeutigen i-Nummer = ino assoziiert. In der Inode sind folgende Informationen:
- letzter Zugriffsueitpunkt
- Besitzer
- Länge (kann man manuell ändern)
- physikalischer Ort des Files

### Was macht reguläre files aus?

### Was bedeutet everything is a file für unix?
Nicht nur Files sind FIles sondern auch die Verwaltung der Files und Devices wie die Tastatur, Maus, etc.

### Was ist ein File Descriptor?
Die geöffneten Files werden anhand einer ID verwaltet. Dieser Wert ist der File-Descriptor und ist solange gültig, wie das File geöffnet ist.

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
In diesen Files kann die Lese-/Schreibposition beliebig verändert werden. Die Daten sind nicht nur seriell lesbar. Dies hängt ab von der Art der File.

### Wie sieht das Schichtenmodell aus?
1. Kernel
2. Übergang: System Calls
3. Programme, User Libraries, System Library

### Was sind die Aufgaben der CPU?
- Programmausführung (Control Unit & Logic)
- Datenverarbeitung (Data Path -Register, ALU)
- Master am Systembus

### Was macht die Control Unit?
- Sie macht die Programmausführung.
- Hat Program Counter, der angibt, wo im Memory die nächste Maschineninstruktion liegt.
- Hat Instruction Register mit der aktuell ausgeführten Instruktion.

### Was macht derdiedas Data Path?
- Rechnen mit Daten
- ALU -> Arithmetik
- Register -> Schneller Zwischenspeicher für Integer Daten

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

### Was ist der Unterscheid von einem Prozess, einem Thrad und einem Task?
Task: Aufgabe, die von der CPU bearbeitet wird.

Prozess: Ein Prozess ist ein Task und ein Programm in Ausführung. Ein Prozess hat ein eigenes Memory und ein Stack.

Thread: Separater Kontrollfluss/Stack innerhalb eines Prozesses. Teilt sich das Memory mit dem Prozess.

### Wann soll man einen Prozess und wann einen Thread nutzen?
Prozess: Bei schwergewichtigen Tasks, weil der Kontext Switch zwischen Prozessen teuer ist. 

Threads: Leichtgewichtige Tasks. Wenn es ok/gut ist, dass die Memory geteilt ist.

### Auf welche Weisen kann ein Computer quasi multitasken (nicht wirklich)?
- Kontext-Switch: Schnell hin und her wechseln
- Kooperativ: Jedes Task gibt selbst ab
- Präemptiv: Task wird unterbrochen
- Scheduler: Bestimmt, welches Task dran ist

### Durch welche Dinge wird die Leistungsfähigkeit der CPU erhöht?
- Cache (beschleunigter Zugriff zwischengespeicherter Daten)
- Pipeline (gestaffelte Verarbeitung)
- Arbeitsentlastung durch andere Einheiten (GPU, FPU, etc.)

### Wie werden erlaubte Operationen eingeschränkt?
Die CPU hat Operations-Modi
- Kernel Mode: Alles erlaubt
- User Mode: Nicht alles erlaubt, kein direkter Zugriff auf die Hardware
