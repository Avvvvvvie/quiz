[SNP Laboratories — SNP Labs documentation](https://github.zhaw.ch/pages/SNP/snp_students/build/html/index.html)

> [!quiz]- Wie sieht das Schichtenmodell aus?
> 1. Kernel
> 2. Übergang: System Calls
> 3. Programme, User Libraries, System Library

> [!quiz]- Was sind die Aufgaben der CPU?
> - Programmausführung (Control Unit & Logic)
> - Datenverarbeitung (Data Path -> Register, ALU)
> - Bus Interface

> [!quiz]- Was sind die aufgaben der Memory?
> Memory Zellen werden über Systembus-Adressen angesprochen
> Entgegennehmen von Daten zur Speicherung
> Liefern von gespeicherten Daten 

> [!quiz]- Was sind die Aufgaben vom i/o?
> - Anbindung des zentralen Computersystems and die Aussenwelt
> - Lese- und Schreibschnittstelle für verscheidene externe Hardware

> [!quiz]- Was macht der Systembus?
> - Verbindet die zentralen Komponenten des Computersytems
> - Die CPU signalisiert über den Systembus die gewünschten Zugriffe

> [!quiz]- Was ist der Unterschied von RAM und ROM?
> - RAM ist random access memory und behält Daten, solange es Srom gibt
> - ROM ist read only memory und ist unabhängigt von der Stromversorgung. Daten werden zur Produktionszeit definiert.

> [!quiz]- Was sind die Aufgaben des Betriebssystems?
> - Verwalten von Hardwareressourcen (CPU, IO, Memory)
> - Abstrahieren von Hardwareressourcen über OS-Konzepte (Tasks, Filesystem)
> - Hardwarebeschleunigung und Entlastung (Cache)

> [!quiz]- Was ist der Unterscheid von einem Prozess und einem Task?
> Task: Aufgabe, die von der CPU bearbeiutet wird
> Ein Prozess ist ein Task und ein Programm in Ausführung
> Thread: Separater Kontrollfluss/Stack in einem Prozess

> [!quiz]- Auf welche Weisen kann man quasi multitasken?
> - Kontext-Switch: Schnell hin und her wechseln
> - Kooperativ: Jedes Task gibt selbst ab
> - Präemptiv: Task wird unterbrochen
> - Scheduler: Bestimmt, welches Task dran ist

> [!quiz]- Wie werden erlaubte Operationen eingeschränkt?
> Die CPU hat Operations-Modi
> - Kernel Mode: Alles erlaubt
> - User Mode: Nicht alles erlaubt, kein direkter Zugriff auf die Hardware


virtueller speicher dies ist alles in der memory
stack (wächst)
heap (dynamische daten)
daten (static, global...)
programm

was ist ein system call
systemschnittstelle
function provided by the kernel

prozesse...

was ist inode

was macht reguläre files aus

was bedeutet everything is a file für unix

wie funktionieren links (hard und soft)
ln -s aaa bbb
soft hat neue ino, alle berechtigungen auf neue, wenn aaa gelöscht dann referenziert bbb auf nichts, weil über namen referenziert wird. dann kann man bbb nicht mer öffnen. wenn aaa wieder erzeugt wird dann geht es wieder

wie funktionieren pfade
~ benutzer heimverzeichis

was gibt es für spezielle files
character devices
block devices
named pipes
sockets
kann auch virtuelles file sein
/dev -> hier sind alle devices
tty -> terminals für ein programm
sda -> festplatten
null -> input verschwindet
etc

wie funktioniert mounting

was sind streams

was ist ein file descriptor

wie kann man buffern und warum

was ist blocking oder non blocking i/o
blocking io = programm wartet auf io input, nichts anderes passiert im programm währenddessen

was ist ein seekable file