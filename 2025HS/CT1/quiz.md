https://ennis.zhaw.ch
[Control Structures - Mentimeter](https://www.mentimeter.com/app/presentation/albjidpmdkracs3ouykuou471cgb99zu/view?utm_source=govote&utm_medium=button&question=hkd6eoqwxg9n)

### Wie werden Anweisungen ausgeführt?

### Was ist Pipelining?

### Was ist ein Computersystem?
Ein Gerät, welches Input verarbeitet, darauf basierend Entscheidungen trifft und die verarbeiteten Informationen zurückgibt.

### Was ist John von Neumanns Idee eines Computers? (Neumann-Maschine)
Ein PC nach von-Neumann muss in ein Rechenwerk, ein Leit-, bzw. Steuerwerk und ein Ein- und ein Ausgabewerk gegliedert sein. Diese sind miteinander verbunden.

Unterschied Heute: Rechenwerk und Control Unit sind beide in der CPU, Ein und Ausgabe beides in IO.

### Was sieht die Grundarchitektur eines Comupters aus?
Es gibt CPU, Memory und IO. Diese werden durch einen Bus verbunden. In der CPU werden Berechnungen gemacht und Instruktionen ausgeführt. In der Memory sind Daten und Instruktionen. Die CPU kann auf Memory und IO lesen und schreiben. Der System Bus besteht aus 3 Verbindungslinien: 1 für Kontrollsignale, eine für Adressen und eine für Daten.

### Was ist der Datapath?
Datapath ist Teil der CPU und besteht aus 2 Dingen: Der ALU und Register für Zwischenresultate. Mit der ALU können arithmetische Berechnungen ausgeführt werden.

### Was macht die Control Unit?
Die Control Unit hat eine Finite State Machine. In ihrem ersten Zustand wird sie resetted. Anschliessend wird in einer Schleife andauernd eine neue Instruktion geholt und ausgeführt. Die Control Unit kann Daten zwischen den Registern und der Memory bewegen, die ALU für Operationen nutzen und in den Instruktionen springen.

### Was ist Memory?
Die Memory hat 2^N Bit-Adressen auf welche gelesen oder geschrieben werden kann. Auf RAM (Random Access Memory) kann beides gemacht werden, auf ROM (Read Only Memory) nur gelesen. In der Memory gibt es sRAM (static), DRAM (dynamic), ROM und flash Speicher. 

### Wie funktioniert der Bus eines Computers?

### Was gibt es für Memory-Arten? Welche Eigenschaften kann Memory haben?
RAM: volatil, flüchtig, schneller Zugriff, statisch oder dynamisch

ROM: Nicht flüchtig, read only

Hard Disk, CD, etc.: Nicht flüchtig, langsamer Zugriff

### Wie Unterscheiden sich die Main Memory und Secondary Storage typischerweise?

### Wer kann von wem schreiben/lesen? (CPU, Memory und IO)

### Nenne 3 Beispiele für IO Komponenten.
USB, Grafik Adapter, Disk Controller, Netzwerkadapter, A/D Converter, Leitungsklappenregler, Serielles Interface

### Welche Komponenten sind in der CPU enthalten?
- Core Registers (Zwischenspeicher für die Instruktionen)
- 32-bit ALU (Recheneinheit)
- Flags (werden durch ALU gesetzt wenn gewollt)
- Control Unit mit Instruction Register (Instruktionen werden hier hineingeladen)
- Bus Interface (Um instruktionen und andere Werte zu holen)

### Welche 3 speziellen Register findet man im Core Register der CPU?
- Program Counter = Adresse der nächsten Instruktion
- Link Register = Return Adresse von Prozessen
- Stack Pointer

### Was ist das Link Register?
Das Link Register ist ein Core Register der CPU und beinhaltet die Return Adresse von Prozessen.

### Was nützen die Flags in der CPU?
Wenn eine Operation von der ALU ausgeführt werden soll, kann man angeben, dass sie auch die Flags setzen soll. Die Flags bieten zusätzliche Infos zum Ergebnis, nämlich Negative, Zero, Carry und Overflow. Auch bei anderen Operationen wie beim zuweisen einer Variable können solche Flags gesetzt werden.

### Was bedeutet das S in ADDS, MOVS...
Dass Flags gesetzt werden sollten, es steht für "status register". MOVS geht auch nur für die low registers.

### Wie ist der Ablauf beim Ausführen einer Operation in der CPU?
1. Der Wert auf der Adresse im Program Counter wird über den Data Bus geholt und in das Instruction Register geladen
2. Der Program Counter wird um die Länge der Instruktion erhöht
3. Die Operation die jetzt im Instruction Register steht wird ausgeführt. (ZB Schreiben eines Wertes in ein Core Register)
4. Wieder von vorne

### Was ist der Unterschied von int und uintX_t in C?
Int kann je nach Plattform eine andere Grösse haben.

### Kann jeder C Variablentyp auf jede Adresse geschrieben werden?
Ein Typ mit der grösse N kann nur auf durch N teilbare Adressen geschrieben werden. (Hängt aber auch vom System ab)

### Gehören Code, Data und Stack typischerweise auf RAM oder ROM?
Code -> RAM oder ROM

Data und Stack -> ROM

### Wohin würden C globale Variablen, globale Konstanten, lokale Variablen und literals gepeichert in Assembly?
Globale Variablen: Readwrite Memory Sektion im Data Segment

Globale Konstanten: Readonly Memory Sektion im Data Segment

lokale Variablen: Register oder Stack

literals: Readonly Memory Sektion im Code Segment

### Was ist der Arbeitsspeicher auf Englisch?
Random Access Memory

### Was sind die Schritte, die nötig sind um ein Textfile mit C-Programmcode in ein Executable Program zu übersetzen?
1. Preprocessor
2. Compiler
3. Assembler
4. Linker

### Was macht der Preprocessor?
Er führt vor dem eigentlichen Übersetzen Vorverarbeitungen am Quellcode durch (z. B. Einfügen von Header-Dateien, Makroersetzungen, bedingte Kompilierung).

### Was macht der Compiler?
Er übersetzt den (vorverarbeiteten) Quellcode in Assembler- oder Maschinensprache.

### Was macht der Assembler?
Er wandelt den Assemblercode in reinen Maschinencode (Objektdateien, meist .o oder .obj) um, den der Prozessor direkt versteht.

### Was macht der Linker?
Er verknüpft mehrere Objektdateien sowie Bibliotheken zu einem ausführbaren Programm und löst dabei symbolische Referenzen (z. B. Funktionsaufrufe) auf.
- Code,Data Sektionen mergen
- Symbol resolution
- Adress relocation
### Wie würde 0x1234 mit little endian VS big endian abgespeichert werden?
little endian: 34 | 12

big endian: 12 | 34

### Was ist der Unterschied von load und store? (im ARM Cortex-M)

### Was ist der Unterschied von Load/Store Architecture und Register Memory Architecture?

### Was macht EQU?

### Mit welchem Code würdest du 0x100 in R8 laden?

### Was kommt eine Variable in die DATA oder CODE Area?

### Was sind die 4 Data Transfer Typen?

### Was ist der Unterschied von LDR R5 mylita und LDR R5 =mylita?

### Wie viel Byte lädt LDR?

### Mit LDRSB wird von 0b10101110010100110 die untersten 8 Bit in ein Register geladen. Was steht jetzt im Register?
0b11111111110100110

### Mit LDRSB wird von 0b10101110000100110 die untersten 8 Bit in ein Register geladen. Was steht jetzt im Register?
0b0...00000000000100110

### Wie lädt man mit LDR den Wert 0x012 in das Register R2?
LDR R2, =0x012

### Wo wird eine statische C-Variable gespeichert?
In der Data Section

### Wie kann man einen Wert von einem Register zum anderen schreiben in Assembly?
MOV/MOVS

### Was sind die 3 Adressing Modes?

### Was bedeutet volatile in C?
Dies sagt dem C Compiler, dass er nicht erwarten sollte, dass der wert der Variable gleich bleibt (zb wenn es ein LED wert ist, der sich von aussen ändern kann)

### Vervollständige den Code: ![|400x0](/assets/Pasted%20image%2020251008171228.png)
Mögliche Antworten:
- LDR R1,=0x6000200
- LDR R1,=ADDR_DIPSW
- LDR R1,addr_dipsw_var

Falsche Antworten:
- MOVS R1,#0x6000200
- LDR R1,0x6000200
- LDR R1,ADDR_DIPSW
- LDR R1,=addr_dipsw_var

### Vervollständige den Code: ![|400x0](/assets/Pasted%20image%2020251008172356.png)
Mögliche Antworten:
- STRB R0,[R1]
- STRB R0,[R1, #0]

Falsche Antworten:
- STR R0,[R1]
- STR R0,[R1, #0]
- STRB R0,[R1, #3]

### Was macht das "=" in Assembly?
Es sagt dem Assembler, dass der Wert in den Literal-Pool geschrieben werden soll um dann relativ zum PC geladen werden können.

### Was bedeuten die 4 Flags N Z C und V?
Negative, Zero, Carry und Overflow

### Was ist APSR?
Das special Register in welchem die Flags sind. (Application Program Status Register)

### Wie viele Bits hat ein Core-Register auf unserem CT Board?
32

### Was ist 1010 signed?
-6

### Was ist der Unterschied von Carry und Overflow?
Carry: Man springt von allen Bits auf 1 zu allen Bits auf 0. 

Overflow: Das vorderste Bit springt von 0 auf 1. Bei signed Werten entspricht dies einem Sprung von positiven zu negativen Zahlen

### Was ist 0x81 signed und unsigned?

### Welche Flags kann man bei signed Werten ignorieren?
Carry

### Welche Flags kann man bei unsigned Werten ignorieren?
Overflow, Negative

### Was ist Reverse Substract?

### Was ist 2' complement?

### Wie erkennt man mit APSR Flags, dass es ein Borrow gab?

### In welchem Fall gibt es ein Borrow?
Wenn man von einer unsigned Zahl eine grössere Zahl abzieht.

### Wie macht man sign extension?
Unsigned: Mit Nullen auffüllen

Signed: Mit MSB auffüllen

### In welchen Fällen gibt es ein Overflow?
Wenn zwei grosse positive Zahlen oder zwei grosse negative Zahlen addiert werden. (Nur bei signed Zahlen)

### In einer 8-Bit arithmetik wird 0xFF zu 0x01 hinzuaddiert. Welche Flags werden gesetzt?
Carry und Zero

### In einer 8-Bit arithmetik wird 0xFF zu 0xFF hinzuaddiert. Welche Flags werden gesetzt?
Carry und Negative

### Was ist das 2' Complement von 0b10101010?
0x01010110

### Was ist 250 + 10 in 8-Bit unsigned?
4

### Wie kann man mit einer simplen Operation "x mod 16" rechnen?
Mit truncate auf ein Byte (mit LSRS / casting)

### Was wird ausgegeben? ![](/assets/5a9b141d-2381-405d-8767-ad7479ddc8e6.avif)
a = 255, b = -1

### Sind a und b positiv oder negativ? ![](/assets/8b08f16f-924a-40fd-acc1-10fbe4c35d8c.avif)
a ist negativ, b ist positiv

### Was wird für d ausgegeben? -1, 255 oder 4294967295? ![](/assets/4eceedb8-3cbd-44e2-b479-1ef482a8cb40.avif)
a = 255

b = -1

c = -1

d = 4294967295

### Was ist ein Bit clear?
Alle Bits die in a auf 1 sind werden in b auf 0 gesetzt.

### Welche Flags werden bei Bitmanipulation (ANDS, BICS, EORS, ...) gesetzt?
Negative und Zero

### Wie kann man mit Bitmanipulation an gewünschten Stellen Bits setzen?
Mit OR

### Wie kann man mit Bitmanipulation an gewünschten Stellen die Bits invertieren?
Mit XOR

### Welche Flags werden bei Shift/Rotate Befehlen gesetzt?
Negative, Zero, Carry

### 0xE3 wird um 3 nach links geshiftet. Was ist der neue Wert?
1110 0011 => 0111 0001 1000 = 0x718 (In 32 Bit Arithmetik)

### 0xCCCCCCCC wird arithmetisch um 3 nach rechts geshiftet. Was ist das Ergebnis?
1100 1100 ... 1100 => 1111 1001 1001 ... 1001 = 0xF9999999

### Was gibt 0x2F AND 0xF2?
0x22

### Die folgende Instruktion wird ausgeführt: MVNS R1,R1 wobei R1 = 0x0000'00FF. Welche Flags werden dabei auf was gesetzt?
Negative = 1, Zero = 0

### Die folgende Instruktion wird ausgeführt: EORS R1, R1, R2 wobei R1 = 0x22, R2 = 0x66. Was ist das Ergebnis?
0x44

### Die folgende Instruktion wird ausgeführt: LSLS R1, R1 #2 wobei R1 = 0x44. Was ist das Ergebnis?
0x110

### Wie prüft man in Assembly, ob x gleich -y?

### Wie prüft man in Assembly, ob ein einzelnes Bit gesetzt ist?

### Wie springt man zu "myLabel", wenn der Wert im Register R0 unsigned höher als der Wert in R1 ist?
```
CMP R0, R1

BHI myLabel
```

### Wie springt man zu dem Label "myLabel" ohne Kondition?
B myLabel

### Was steht am Ende in R0? ![](/assets/025c1c6e-c206-46c3-b1ad-e81fc08530f3.avif)
4

### Was steht in R0 nach dem Loop? ![](/assets/a9a06a99-4880-434f-9632-398590bd168b.avif)
0

### Wie sieht ein if-then-else Statement in Assembly Pseudocode aus?
```
if(not x) move to "else"
code when condition is met
move to end
label else: code when condition is not met
label end: ...
```

oder

```
if(x) go to "if"
code when condition is not met
go to end
label if: code when condition is met
label end: ...
```

### Wie sieht ein do-while Statement in Assembly Pseudocode aus?
```
label loop: loop code...
cmp ...
if x go to loop
```

### Wie sieht ein while Statement in Assembly Pseudocode aus?
```
go to test
label loop: loop code...
label test: cmp ...
if x go to loop
```

### Welche der 3 ASM-Jump-Tables kann für dieses C Switch-Statement genutzt werden? ![|500x0](/assets/Pasted%20image%2020251105171158.png)
Variante 1

### Was für eine Art Kontrolstruktur ist hier gezeigt? ![](/assets/Pasted%20image%2020251105171537.png)
While Loop

### Was macht dieses Programm wenn alle 4 Buttons (T0 bis T4) gedrückt sind? ![](/assets/Pasted%20image%2020251105172113.png)
Die LEDS spiegeln die DIP-Switches

### Was ist der Unterschied von Routine, Prozedur und Funktion?
Eine Prozedur ist eine Routine ohne Rückgabewert, eine Funktion ist eine Routine mit Rückgabewert. 

### Wie ruft man eine Subroutine auf und wie kehrt man von ihr wieder zurück?
```
BL label ; oder auch BLX <Register mit Adresse vom Label>
...
label
...
BX LR
```


### Wieso kann man nicht immer mit BX von der Subroutine zurückspringen?
Wenn man in der Subroutine noch weitere Subroutinen hat, würde die ursprüngliche Rücksprungadresse überschrieben werden.

### Wie speichert man R0, R1 und R2 auf den Stack?
`PUSH {R0-R2}` oder `PUSH {R0, R1, R2}`

### Wie kehrt man von einer Subroutine zurück mithilfe von Stack-Operationen? (Zuvor wurde PUSH {LR} ausgeführt)
`POP {PC}`

### Um wie viel verändert sich der Wert des Stack-Pointers, nachdem "PUSH {R0 - R2}" ausgeführt wurde?
SP = SP - 12

### Wie kann man das letzte Word lesen, ohne den Stack-Pointer zu verändern?
`LDR R0, [SP]`

### Wie geschieht Parameter Passing über das STACK?
Der Caller schreibt den Wert auf das Stack. Der Callee lädt den Wert ohne ihn vom Stack zu poppen (`LDR <Rt>,[SP]`). Dies tut anschliessend der Caller.

### Welche Register werden als Parameter benutzt im ARM Procedure Call Standard?
R0 - R3

### Wie gibt man am besten ein uint32_t von einer Subroutine zurück in Assembly?
Mit dem Register R0

### Welche Register muss ich speichern wenn ich keine Werte verlieren möchte und eine Subroutine aufruf?
R0 - R3

### Was muss ich tun wenn ich in einer Subroutine R4 nutzen möchte?
Am Anfang R4 auf den Stack pushen und am ende poppen.

### Was muss man tun wenn man von einer Subroutine eine andere aufrufen möchte?
R0 - R3 und LR auf den Stack speichern.

### Was ist der Vorteil von Modularem Programmieren?
- Komplexität managen
- Gemeinsames Arbeiten am Projekt
- Gibt dem Projekt eine Struktur
- Wiederverwendbarkeit
- Tests für einzelne Module möglich
- Mehrere Programmiersprachen je nach Modul möglich
- Nur einzelne Module muss kompiliert werden anstatt des ganzen Projekts bei einer Änderung

### Was ist der Unterschied von Deklaration und Definition in C?
Deklaration kann mehrmas gemacht werden und hat keinen Body mit Implementierung.

### Was sind external, internal und no linkage?
External Linkage: Globale Variablen/Funktionen die in anderen Modulen verfügbar sind

Internal Linkage: Globale Variablen/Funktionen, die nur im C File verfügbar sind. -> static

No Linkage: Variablen, die nicht global sind (sondern lokal)

### Wie unterscheiden sich statische und dynamische Libraries?
Statisch: Der Code der Library wird in das kompilierte Resultat gepackt. Die Datei ist so grösser, self-contained und die Library kann nicht unabhängig geupdated werden.

Dynamisch/Shared: Die Library wird nicht vom Linker gelinkt. Während der Laufzeit wird die Library z.B. durch das OS verlinkt. Nachteil: Versionierung

### Was sind die generellen Guidelines für modulares Programmieren?
- Low coupling
- High cohesion
- Divide and conquer
- Reuse

### Welche der Symbole haben einen externen Linkage? ![](/assets/Pasted%20image%2020251203165726.png)
b und main (externer Linkage = man könnte von einem anderen File aus darauf zugreifen)

### Welche der Symbole haben einen internen Linkage? ![](/assets/Pasted%20image%2020251203165726.png)
double und a

### Wenn ein executable self contained sein soll, sollten die Libraries statisch oder dynamisch sein?
Statisch

### Was sind die Vor- und Nachteile von Polling?
+ Simpel, keine Interruptionslogik benötigt
+ Deterministisch (Immer die selbe Reihenfolge)
- Verschwendet CPU Zeit und Throughput
- Lange Reaktionszeiten

### Was sind die Vor- und Nachteie von Interrupt-Driven I/O?
+ Keine unnötige verschwendung der CPU Zeit
+ Schnelle Reaktionszeit
- Keine Synchronisation zum Hauptprogramm
- Schwer zu debuggen

### Welche Register dürfen wir in einer Interrupt Service Routine überschreiben?
R0-R3, R12, LR, PC, xPSR (Flags)

### Welches sind die 4 Exception States?
- Inactive
- Pending
- Active
- Active and Pending (Passiert wenn eine zweite Exception eingegangen ist)

### Wo ist die Vector Table auf dem Cortex-M3/M4?
0x00000000 (relativ / start von flash) 0x08000000 (absolut)

### Interrupt A (PL = 0x01) und Interrupt B (PL=0x02) kommen gleichzeitig an. Welcher wird zuerst abgearbeitet?
A (tieferer Prioritätswert)

### Wie kann man IRQ 46 enablen?
SETENA1 = 0x01 << 14 (46 / 32 = 1, 46 mod 32 = 14)

### Wie kann man den pending IQR 129 clearen?
CLRPEND4 = 0x2 (129 / 32 = 4, 129 mod 32 = 1)
### Was passiert wenn der Reset-Button gedrückt wird, aber die PRIMASK auf 1 gesetzt ist?
Normales Reset Verhalten

### Was ist die Exception Nummer von IRQ8?
24 (8 + 16)

### Was macht dieses Code snippet? ![](/assets/Pasted%20image%2020251210181933.png)
Enable IRQ 32

### Wie disabled man IRQ20?
CLRENA0 = (1 << 20)

### Was passiert, wenn IRQ2 ankommt und PRIMASK = 1?
IRQ2 wird bearbeitet sobald die PRIMASK = 0

### Können mehrere Interrupts aktiv sein?
Ja, wenn ein Interrupt unterbrochen wird.
### Was ist der Hauptnutzen von der Primask?
_Temporäres_ Deaktivieren _aller_ maskierbaren Interrupts.

### Fülle die leeren Felder aus. ![](/assets/Pasted%20image%2020251210183105.png)

![](/assets/Pasted%20image%2020251210183158.png)

### Wahr oder Falsch: Bei BLX muss der Offset zur aufrufenden Funktion kleiner als 2^14 sein.
Falsch

### Wahr oder Falsch: Mit BX wird das Link-Register verändert.
Falsch

### Wahr oder Falsch: Der Befehl BL verlangt ein Label als Argument.
Wahr

### Wahr oder Falsch: Mit BLX kann weiter gesprungen werden, als mit BX.
Falsch

### Wahr oder Falsch: Mit BLX können Subroutinen mit beliebigen Offset aufgerufen werden
Wahr

### Wahr oder Falsch: Bei BLX kann die Zieladresse in einem High-Register stehen.
Falsch

### Wan ist eine Branch Instruction absolut und wann relativ?
Branch Instruction mit Label -> _Relatives_ Offset zu Label wird berechnet beim compilieren

Branch Instruction mit Register -> _Absulte_ Adresse im Register wird genommen