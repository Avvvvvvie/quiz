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

### Was bedeutet inode?

### Was macht reguläre files aus?

### Was bedeutet everything is a file für unix?

### Wie funktionieren links (hard und soft)
Beispiel soft link bbb referenziert aaa: `ln -s aaa bbb`

Der soft link hat eine neue ino, und man hat alle berechtigungen darauf. Wenn aaa gelöscht dann referenziert bbb auf nichts, weil über namen referenziert wird. dann kann man bbb nicht mehr öffnen. wenn aaa wieder erzeugt wird dann geht es wieder.

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

### Was sind die aufgaben der Memory?
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
