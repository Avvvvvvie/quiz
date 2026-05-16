[Build your own React](https://pomb.us/build-your-own-react/)

### Was ist der Unterschied von Internet und World Wide Web?
Internet = das weltweite Netzwerk aus Computern und Leitungen, also die Infrastruktur.

World Wide Web = ein Dienst, der über das Internet läuft, bei dem Inhalte über Webseiten mit Browsern abgerufen werden.

### Wie sieht das Schema für URLs aus?
`"http://" [user[:password]@] host [:port] path [ "?" query ] [ "#" fragment ]`

### Was ist der Unterschied, wenn man die Funktion mit function xy() {} oder mit const xy = () => {} deklariert?
- Eine mit const deklarierte funktion kann nicht mehr überschrieben werden.
- Eine mit function deklarierte Funktion kann auch erst später im code deklariert werden.
- Eine Arrow-Funktion übernimmt den die umgebende Scope (mit this)
- Eine Arrow-Funktion hat keine arguments-Variable.

### Was macht der strict mode?

### Was ist typeof null?

### Was ist typeof undefined?

### Was gibt {} === {} zurück?

### Was gibt 1 == '1' zurück?

### Wieso sollte man async aus Dateien lesen?
Weil File-Operationen lange dauern können. Es kommt natürlich auf den Use-Case an, aber oft ist das lange Blockieren des gesamten Programmes unerwünscht.

### Was ist ein Callback?
Ein Callback ist eine Funktion, welche als Argument einer anderen Funktion übergeben wird und erst später aufgerufen wird, wenn ein Ereignis eingetreten ist.

### Was ist ein Event Loop?
Wenn der Call Stack leer ist, wird der Event Loop abgearbeitet. Dies ist eine Ablage von allen Callbacks. 
### Warum sollte man den Event Loop nicht blockieren?
Weil dann die UI auch blockiert wird und der Benutzer nichts mehr tun kann.

### Was sind die Vor und Nachteile, wenn man nur 1 Thread nutzt für ganz Node.js?
Vorteil: Keine Concurrency Probleme

Nachteil: Man könnte andere Dinge im Thread Blockieren


### In welcher Reihenfolge werden die Nachrichten ausgegeben? ![](assets/Pasted%20image%2020251013181431.png)

1. nexttick
2. immediate
3. timeout

### In welcher Reihenfolge werden die Nachrichten ausgegeben? ![](assets/Pasted%20image%2020251013181518.png)

1. next tick
2. promise resolved
3. set timeout
4. set immediate

### Was ist ein Event-Emmiter?
- Verwaltet Liste von Listeners zu bestimmten Events
- Listener für das Event können hinzugefügt oder entfernt werden
- Event kann ausgelöst werden → Listener werden informiert
- Normalerweise werden alle Listener synchron aufgerufen, in der definierten Reihenfolge
- Es können Argumente übergeben werden

### Was sind die 4 Phasen im Event Loop in der richtigen Reihenfolge?
1. Timer (setTimeout, setInterval)
2. IO Phase & internal Operations
3. Check Phase (setImmediate)
4. Close Phase (closeEvents)

### Welche 3 Zustände kann eine Promise haben?
Pending, Fulfilled, Rejected

### Was ist die Ausgabe von diesem Code? ![](/assets/Pasted%20image%2020251013182913.png)
Fail

### Was ist die Ausgabe von diesem Code? ![](/assets/Pasted%20image%2020251013183037.png)
1. catch 1
2. step 3
3. step 4

### Was macht await?
Mit await kann man auf eine Promise warten. Dies funktioniert aber nur in als async deklarierten Funktionen.

### Was ist eine Promise?
Ein Platzhalter für einen Wert, der erst später voraussichtlich verfügbar sein wird. Wenn der Wert verfügbar ist oder wenn ein Fehler auftritt, kann weiterer Code ausgeführt werden.

### Welche speziellen Queues/Ausnahmen gibt es beim Event-Loop?
- nextTickQueue
- Promises / microTaskQueue

Diese werden immer gleich ausgeführt, egal wo man im Loop ist. In neueren Node Versionen werden sie auch zwischen Elementen anderer Phasen ausgeführt. Zum Beispiel zwischen zwei Timeouts.

### Was gibt typeof array zurück?
'Object'

### Wie werden in Javascript Zahlen gespeichert?

### Inwiefern hat javascript ein dynamisches Typenkonzept?

### Sind Wertentypen in Javascript veänderlich?
Nein

### Was sind Beispiele für Referenzdatentypen?
Object, Function, Array, Date und RegExp 

### Was ist der Typ von null und undefined?
typeof null = 'Object'

typeof undefined = 'undefined'

### Was sind Beispiele für Wertetypen in Javascript?
Zahlen, Strings und Booleans

### Was ist der Unterschied von `for item of array` und `for (let i = 0; i<array.length;i++)`?


### Was passiert, wenn man bei einer Variablendeklaration var/let/const vergisst?
Sie werden der globalen Scope zuegwiesen

### Was passiert, wenn man ausserhalb eines Blocks eine Variable mit var/let/const definiert?
Bezüglich der Gültigkeit sind alle 3 Fälle global sichtbar. Es gibt in diesem Fall also keinen merkbaren Unterschied zwischen let und var.

### Was ist die Sichtbarkeit einer mit `let` definierten Variable?
Block Scope

### Was ist die Sichtbarkeit einer mit `const` definierten Variable?
Block Scope

### Was ist die Sichtbarkeit einer mit `var` definierten Variable?
Global

### Wahr oder Falsch: Der Zugriff von einzelnen Zeichen in einem String kann mit `str.charAt()` oder `str[]` erfolgen.
wahr

### Sind String-Methoden im String-Prototypen definiert?
Ja

### Es ist folgender Code gegeben: `obj = { a: 1, b: 2, c: 3, d: 4}; let { a, ...b } = obj` Welchen Wert hat die Variable b?
`{b: 2, c: 3, d: 4}`

### Was gibt `1 == "1"` zurück?
true

### Was gibt `"AB" === "A" + "B"` zurück?
true

### Was gibt `null === undefined` zurück?
false

### Was gibt `{} == {}` zurück?
false

### Was macht `"use strict";` ?

### Was ist der unterschied von any und unknown in TypeScript?
Mit unknown muss ein typecast gemacht werden.

Beispiel:

```
let a: unknown = "a"
let b = a as number
b = 2
```

### Auf welche 2 Arten kann man ein type cast machen in TypeScript?
`var as mytype` oder `<mytype>var`

### Wie definiert man ein Tupel in Typescript?
`a: [number, boolean, string]` oder `b: [x: number, y: number]`

### Wie nutzt man generische Funktionen in Typescript?
Deklaration: `function f<S, T>(x: number) { ... }`

Verwendung: `f<number, number>(x)`

### Typescript: Was gibt keyof zurück?
Ein Union Type bestehend aus den Typen aller Keys eines Objektes

### Was ist der Unterschied von ! und ? (Coalsce Operator)?
! erlaubt kein null oder undefined. Falls es trotzdem null oder undefined wäre, würde es nicht ignoriert werden und es könnte zu einem Fehler führen.

? geht nur weiter wenn kein null oder undefined. Null und undefined werden ignoriert.

### Was bedeutet es dynamisch/statisch vs. stark/schwach typisiert zu sein?
stark/schwach: Wie leicht lässt sich das Typensystem umgehen?

dynamisch/statisch: Ist der Typ bereits zur Übersetzungszeit definiert?

### Was sind die Vorteile des statischen Typensystems?
- bestimmte Fehler werden bereits beim Übersetzen erkannt
- mehr Unterstützung durch IDEs möglich
- meist performanter

### Was sind die Vorteile des dynamischen Typensystems?
- meist schnellere Entwicklung
- meist kompaktere Programme

### Was sind die Vorteile von Typescript?
- Statisches Typenkonzept: Fehler werden früher und zuverlässiger erkannt 
- Zusätzliche Features im Vergleich zu JavaScript
- Open Source, Entwicklung und Support durch Microso
- Umfassende IDE-Unterstützung

### Was sind die Nachteile von Typescript?
- Lernkurve
- Kompilierzeit
- Kleineres Ökosystem (Bibliotheken etc.)
- Mehr Code und in manchen Fällen weniger Übersichtlichkeit

### Was bedeutet q=0.8 im HTTP Language Header?

### Was ist der Unterschied von einer Library und einem Framework?

### Was ist das globale Objekt in Node/im Browser und welches ist in beiden verfügbar?
- Node.js: global
- Browser: window
- In beiden Umgebungen: globalThis

### Wie kann man ein Array-ähnliches Objekt in ein Array konvertieren?
Mit Array.from

### Was ist der Unterschied von e.target und e.currentTarget?
e.target: Hier wurde das Event ursprünglich ausgelöst

e.currentTarget: Hier wurde das Event registriert (möglicherweise ist das Event vom e.target hier hin gebubbled)

### Was macht useEffects in React?

