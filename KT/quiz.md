... ethernet kabel -access point:  -signal zu geräten in raum
tracert nippon.jp


### Was ist der Unterschied von hard und soft real time?
Bei soft real time Übertragung ist es nicht schlimm, wenn die Daten nicht erfolgreich übertragen werden konnten, wie z.B. bei einem Anruf. Bei der Bremse eines Zuges wäre es schlimm, wenn die Bremse nicht innerhalb eines gewissen Zeitraums reagiert. Die Übertragung vom Bremsknopf zur Bremse muss also eine hard real time Übertragung sein.

### Was sind die 7 Schichten des OSI-Modells?
(7) Application Layer

(6) Presentation Layer

(5) Session Layer

(4) Transport Layer

(3) Network Layer

(2) Data Link Layer

(1) Physical Layer

### Zu welchem Layer gehören TCP und UDP?
Transport Layer

### Zu welchem Layer gehört HTTP?
Application Layer

### Zu welchem Layer gehört die IP?
Network Layer

### Zu welchem Layer gehört DNS?
Application Layer

### Für was steht SAP?
Service Access Point

### Was ist das Schichtenmodell?
- Eine Schicht N bietet einen Dienst and die Schicht N+1 und bezieht den Dienst N-1
- Die Schicht N kommuniziert *logisch* (nicht physisch) mit anderen Instanzen in dieser Schicht über ein Protokoll.

### Gib ein Beispiel für einen zuverlässigen und einen unzuverlässigen Dienst.
Zuverlässig: File Transfer

Unzuverlässig: Telefonie

### Gib ein Gerätebeispiel für jede Schicht.
- Application: Webbrowser
- Transport: Firewall, NAT
- Network: Router
- Data Link: Bridge, Switch
- Physical: Hub, Repeater
- Media: Kabel, Light Pulses

### Auf welchem Layer arbeitet der Repeater?
Auf Layer 1, dem Physical Layer

### Was ist der Unterschied von einem Interface, einem Dienst, einem Protokoll und einem SAP?
Die Daten werden mit dem SAP der höchsten Schicht übergeben, ein Dienst ist zwischen zwei tieferen Schichten. Das Interface sind die konkreten Funktionen des Dienstes. Das Protokoll regelt die Kommunikation innerhalb einer Schicht zwischen zwei Instanzen der Schicht.

### Was macht das Physical Layer?
Die Daten werden auf physikalische Signale codiert und als Bit-Strom übertragen. Das Kabel ist *formal* nicht Teil dieses Layers.

### Was macht das Data Link Layer?
- Frames werden erkannt und gebildet (0x7E)
- Fehler werden erkannt und korrigiert
- Flow Control gegen Überlastung

Wenn es mehrere Teilnehmer gibt (Bus-Struktur):
- Addressierung der Teilnehmer durch MAC-Adresse (6 Bytes)
- Media Access: Koordination des Zugriffs (= Wer darf wann senden?)

### Was macht das Network Layer?
Es vermittelt Leitungen oder Pakete über unterschiedliche Kommunikationsstrecken an ein Ziel über Knoten. Ein Port verbindet einen Knoten zum nächsten.

### Zwischen welchen Schichten ist das Socket Interface?
Zwischen den Transportschichten und den Anwendungsschichten, beziehungsweise zwischen der Transportschicht und der Kommunikationsschicht.

### Was sind die Unterschiede von Leitungsvermittlung und Paketvermittlung?
Paketvermittlung:
- Senden an beliebige Knoten
- Reihenfolge der Pakete bleibt nicht erhalten
- Keine Ressourcen nötig für Verbindung

Leitungsvermittlung: 
- Vor dem Senden von Daten muss eine Leitung aufgebaut werden
- Reihenfolge der Daten bleibt erhalten
- Ermöglicht Quality of Service
- Weiterleitungsentscheid ist effizienter

### Was macht das Transport-Layer?
Das Transport Layer schickt Pakete mit verschiedenen Protokollen.
- User Data Protocol (UDP): verbindungsloser, unzuverlässiger Dienst im Internet
- Transmission Control Protocol (TCP): verbindungsorientierter, zuverlässiger Dienst im Internet

### Wie unterscheiden sich ein verbindungsorientierter und ein verbindungsloser Dienst?
Verbindungsorientiert:
- 3 Kommunikationsphasen zum Verbindungs auf-/abbau und zum Datenaustausch
- Es können Optionen ausgehandelt werden
- Die Reihenfolge der Daten bleibt erhalten

Verbindungslos:
- Die Reihenfolge bleibt nicht erhalten
- Zustandslos
- Sehr viel weniger aufwändig umzusetzen

### Was macht das Application Layer (Anwendungs- / Verarbeitungsschicht)?
- Bindeglied zur eigentlichen Anwendung, bestimmt die Protokolle der verschiedenen Anwendungen
- z.B. File Transfer, E-Mail, WWW, Namensauflösung (DNS) etc.

### Was macht das Presentation Layer (Darstellungsschicht)?
- Umwandlung der Darstellung von Daten
- Konvertierung von ASCII, ISO und Unicode
- Konvertierung zwischen verschiedenen Arten der Zahlendarstellung

### Was macht das Session Layer (Sitzungsschicht)?
- Auf- und Abbau einer Session
- Wird die Transportverbindung unterbrochen, so kann der Session Layer eine neue Verbindung aufsetzen, ohne dass die höheren Schichten etwas merken

### Wie sieht das OSI Modell in der Realität wirklich aus?
Gewisse Protokolle des OSI MOddels sind zu teuer/inefizient/komplex. Ausserdem gibt es heute noch weitere Themen wie Sicherheit.
- Application, Session und Session Layer -Eine Anwendungschicht mit vielen Protokollen
- Transport Layer -TCP und UDP
- Network Layer -IP
- Data Link und Physical Layer -Network Access, hat keine Protokolle

### In welcher Grössenordnung breiten sich Signale in einem Übertragungsmedium im Vakuum aus?
~ 200'000'000 m/s

### Ein CAT7-Kabel hat bei der Frequenz 10MHz eine Dämpfung von 5dB pro 100m. Wie hoch ist die Dämpfung nach 500m?
25dB

### Wie beeinflusst die Bandbreite (Hz) die Datenrate und die Dämpfung?
Je grösser die Bandbreite, desto höhere Datenraten (bit/s). Höhere Bandbreite heisst aber auch mehr Dämpfung (je nach Kabel anders).

### Wie berechnet man die Ausbreitungsgeschwindigkeit?
$c_"Material" = c_0 / "Brechungsindex"$

### Wie berechnet man die Signaldämpfung in Dezibel?
$A = 10 * log (P_1 / P_2) = 20 * log (U_1 / U_2)$

### Was ist die SNR?
SNR = Signal-Noise Ratio = $10 * log (P_"Signal" / P_"Störung") dB$

### Was sind 4 Kabelarten und was sind ihre Vorteile?
- Koaxialkabel
	- Gut für hochfrequente Signale
	- Unempfindlich gegenüber elektromagnetischen Störungen
	- Mechanisch heikel im Umgang
- Paarsymmetrische Kabel (Twisted Pair)
	- Häufg benutzt
	- Gut für breitbandige Datenübertragung
	- Anfälliger auf Störungen
	- Kann geschirmt sein für weniger Störung
- Twinaxial-Kabel
	- 2 Koxialkabel in einem
	- Bessere Schirmung
	- Einsatz bei hohen Datenraten
- Glasfaserkabel
	- Hohe Bandbreite -grosse Datenraten
	- Geringe Dämpfung -grosse Übertragungsstrecken
	- Resistent gegen elektromagnetische Einflüsse

### Was sind 3 Ursachen von Signalstörungen?
- Übersprechen zwischen den Leitungen
- Rauschen des Empfängers
- Einstreuungen durch andere Geräte / Anlagen (Motoren etc.)

### Wie sieht das ISO Bezeichungsschema für Twisted Pair Kabel aus?
xx/yTP

xx = Gesamtschirmung
- U = ungeschirmt
- F = Folienschirm
- S = Geflechtschirm
- SF = Beides

y = Adapterpaarschirmung
- U = ungeschirmt
- F = Folienschirm
- S = Geflechtschirm

### Welche 3 Vorgehen gibt es, um Störungen auszuheben?
- Zusäztliches Komplementäres Signal minimiert Störungen. Der Empfänger subtrahiert die beiden Signale.
- Elektrisch leitender Schirm leitet kapazitive Störung ab (Der Schirm muss gut geerdet sein)
- Verdrillte Aderpaare hebt induktive Störungen auf

### Was gibt es für Glasfasertypen und was sind ihre Unterschiede?
- Multimode: dick, billig -Signalverschmierung und Moden-Dispersion
- Gradientenfasern: weniger Moden-Dispersion
- Singlemode: dünn, teuer -keine Moden-Dispersion

### Wie werden TP Kabel in Kategorien eingeteilt?
Cat 1-4: Billigkabel für analoge Sprachübertragung

Cat 5: Frequenzen bis 100 MHz; z.B. für 100 Mb/s oder 1 Gb/s Ethernet bis 100 m

Cat 6: 250 MHz, 1 Gb/s Ethernet und 10 Gb/s Ethernet (bis 55 m)

Cat 7: 600 MHz, z.B. für 10 Gb/s Ethernet (bis 100 m)

etc.

### Was bedeutet Insertion Loss?
So bezeichent man die Signaldämpfung auf Englisch.

### Was ist Cross-Talk?
Bei Leitungen, die parallel geführt werden, kann es ein Übersprechen geben. Das führt zu einer Verschlechterung der SNR. Bei hohen Frequenzen genügen schon sehr kurze Strecken. Höhere Frequenz = Mehr Cross-Talk

### Wie funktioniert ein Glasfaserkabel?
Im Zentrum ist ein Glas mit hoher optischer Dichte. Aussen ist ein Mantelglas mit geringerer Dichte. Lichtstrahlen breiten sich innen aus, werden aber vom Mantelglas reflektiert (Totalreflexion). So breiten sich die Lichtwellen nur entlang des Kabels aus.

### Was sind die Grundlagen der Totalreflexion?
Eine Welle im Material A ändert beim Übergang in ein weniger Dichtes Material B den Winkel. Die Totalreflexion tritt ein wennn der Austrittswinkel $beta$ 90°. 90° wäre genau entlang der Grenze der Materialien. Der Winkel kann folgendermassen berechnet werden:

$beta = sin^-1(sin(alpha) n_A / n_B)$

### Was ist die Moden-Dispersion?
Moden = Die verscheidenen Ausbreitungswege der Lichtstrahlen im Glas.

Moden-Dispersion = Es gibt viele verscheidene Wellen (weil es viel Platz im Glas hat)

### Wie funktioniert die asynchrone Übertragung mit Framing?
- Stehen keine Daten zur Übertragung an, so wird nichts gesendet (Ruhezustand)
- Der Beginn eines Frames wird mit einem Start-Bit angezeigt; mit der Frame-Grenze ist auch die Byte-Grenze gegeben

### Wie funktioniert die synchrone Übertragung mit Framing?
- Frames werden ohne Unterbruch gesendet
- Stehen keine Daten an, werden Flags gesendet, damit der Empfänger seinen Takt synchron halten kann
- Frames werden durch ein Start-Flag und ein End-Flag begrenzt
- Flag ist meist 01111110 / Ox7E

### Was sind parallele und serielle Übertragung?
Parallele Übertragung: mehrere Bits gleichzeitig über mehrere Leitungen

Serielle Übertragung (dominierend): einzelne Bits zeitlich gestaffelt

### Was sind synchrone und asynchrone Übertragung?
Bei der synchronen Pbertragung gibt es einen Takt, zu welchem immer je ein Bit übertragen wird. Dieser Takt kann in einer separaten Taktleitung oder in die Daten codiert sein.

Bei asynchroner Übertragung gibt es ein Start Bit, auf welches immer n Daten-Bits folgen. Diese n Bits werden in umgekehrter Reihenfolge gesendet. Am Ende folgt noch ein Stop-Bit. Der Empfänger tastet das Start und Stop Bit öfter ab, und tastet danach die n Bits im Takt ab. 

### Du empfängst seriell die Bits 0100111001 (ohne parity). Welcher Wert wird Übertragen? Was würdest du mit parity empfangen?
Wert: 00111001

Übertragung mit Parity: 010011100**0**1

### Was ist Bitstopfen?
Nach 5 Bits fügt man eine 0 ein in allen Daten. So entsteht das Flag nicht 01111110 nicht. (Dieses Flag wird bei synchronen Frameübertragung zwischen den Frames geschickt)

### Bei einer seriellen Übertragung werden immer 8 Bit zusammen geschickt. Wie sehr darf sich der Takt des Empfänger höchstens von dem des Senders Unterscheiden?
Es müssen 9.5T des Senders abgetastet werden. Beim Stop-Bit darf man nicht mehr als 0.5T abweichen. Der Takt des Empfängers darf also nicht um mehr als 0.5/9.5T abweichen.

### Wieso sollen Leitungen gleichspannungsfrei sein?
 Um Sender und Empfänger mit Übertragern (Signaltransformatoren, Magnetics) galvanisch trennen zu können. (Man kann aber auch einfach Glasfaser benutzen)

### Wie wird Gleichspannungsfreiheit erzielt?
- Bei AMI wird jedes zweite +1 auf -1 codiert.
- Bei der PAM3 Kanalcodierung werden 4 Bits auf 3 Ternäre Symbole codiert (-,0,+)

### Was ist Taktrückgewinnung?
Wenn der Takt in die übertragenen Daten codiert wird, kann es sein, dass der Takt verloren geht. Bevor der Takt des Empfängers zu stark abweicht, wird also der Takt korrigiert anhand der Empfangenen Daten. Z.B. Wenn die Flanke des Empfangenen Bits nur ganz wenig abweicht von der Clock, dann wird die Clock korrigiert.

### ![](assets/Pasted%20image%2020250516091912.png)

### Wann ist die Bitrate nominell gleich der Symbolrate?
Wenn der Informationsgehalt eines Symbols ein Bit ist. In diesem Fall ist $ld(N) = 1$, was bedeutet, dass jedes Bit ein Symbol ist.

### Was bedeutet $ld(N)$?
Es ist der Informationsgehalt in Bit (pro Symbol). Wenn es insgesamt N=4 Symble gibt, ist der Informationsgehalt 2 Bit.

### Was ist die Baudrate?
Leitungs-Symbole pro Sekunde. Wenn in 1ms 1 Symbol geschickt wurde, dann ist die Baudrate 1kBaud.

### Es gibt 4 Symbole, die je in 1 ms geschickt werden können. Was betragen die Baudrate, die Bitrate und die Bits/Symbol?
Baudrate: $f_s$ = 1 kBaud

Bitrate: $R$ = 2 kBits/s

Bits/Symbol: 2

### Was ist die maximale Symbolrate und wie ermittelt man sie?
$f_s = 2 * "Bandbreite"$

### Wie berechnet man die maximale Bit-Rate?
$R = 2B * ld(M)$ 

M = $1 + A/(Delta V)$ = Unterscheidbare Signalzustände pro Symbole

### Wie berechnet man die Kanalkapazität?
$C_s = B * ld(1 + S/N)$

$S/N$ = Signal to Noise Ratio

### Wie unterscheiden sich synchrone und asynchrone Übertragung?
Asynchron:
- Stehen keine Daten zur Übertragung an, so wird nichts gesendet (Ruhezustand)
- Der Beginn eines Frames wird mit einem Start-Bit angezeigt; mit der Frame-Grenze ist auch die Byte-Grenze gegeben

Synchron:
- Frames werden ohne Unterbruch gesendet
- Stehen keine Daten an, werden Flags gesendet
- Flag häufig 01111110

### Was ist der Unterschied von BER, Bitfehlerrate, FER und RER?
- BER: Anteil fehlerhafter Bis
- Bitfehlerrate: Bitfehler pro Zeit
- FER: Anteil fehlerhafter Frames
- RER: Anteil unentdeckter fehlerhafter Bits

### Wie berechnet man die FER (Anteil fehlerhafter Frames)?
$1 - (1 - p_e)^N$, wobei N die Anzahl Bits in einem Frame ist. Annäherung: $N * p_e$ für $p_e << 1$

### Was sind Vor und Nachteile langer Frames?
Kleinere Frames = tiefere Fehlerwahrscheinlichkeit.

Grössere Frames = Grösserer Anteil an Nutzdaten insgesamt. Datenverlust bei einem Fehler ist grösser.

Deshalb wird das Optimum in der Mitte genommen für möglichst hoher Nettobitrate und möglichst tiefe BER.

### Was ist die Hammingdistanz?
Die Hamming-Distanz ist die minimale Anzahl Bits, in denen sich zwei beliebige gültige Codewörter eines Codes unterscheiden.

### Was ist Backward und Forward Error Correction?
Backward: Wenn die Nachricht Fehlerhaft ist, wird erneut geschickt. Nachteil: Warten auf Quittung und auf Timeout

Forward: Der Empfänger versucht, den Fehler zu korrigieren.

### Wie wird die Restfehlerwahrscheinlichkeit berechnet?
Für die Wahrscheinlichkeit, dass maximal F Fehler bei einer Übertragung von N= Bits auftreten, bilden wir die Summe aller Fälle mit 0..N Fehlern:

$P_(<=F,N) = Sigma_(t=0)^F (N;t) * epsi^t * (1 - epsi)^(N - t)$

### Wie wird die Wahrscheinlichkeit für fehlerhafte Frames berechnet?
$P_"Fehler,Frame" ~= N * p_e$

### Was bedeutet eine Hamming-Distanz von 1?
- Jedes Codewort ist gültig
- Jeder Fehler führt zu einem gültigen Codewort
- Es ist keine Fehlererkennung möglich
 
### Wie viele Fehler können bei einer Hammingdistanz von 5 erkannt werden?
2 kann man korrigieren, 4 detektieren.

### Wie viele Fehler kann man mit Längs- und Querparity erkennen?
1 Fehler kann korrigiert werden, mind. 3 Fehler können erkannt werden.

### Was ist das Leader-Follower Verfahren?
Mehrere Systeme verwenden dasselbe Verfahren. Der Zentrale Knoten koordiniert den Zugriff.

### Was ist das Leader-Follower Verfahren und dessen Vor- und Nachteile?
Der Zugriff auf das gemeinsame Kommunikationsmedium wird vom Leader gesteuert.

Vorteil: Keine Konflikte

Nachteil: Ausfall des Leaders

### Was ist das Token Verfahren?
- Die Sendeberechtigung wird in einer festgelegten Reihenfolge weitergereicht
- Knoten senden nur, wenn sie ein Token halten
- Variation: Es wird ein Frame weitergereicht, in welches jeder nacheinander seine Daten einfügt. Am Ende wird alles wieder zurück zum 1. Knoten geschickt.

### Was sind Vor- und Nachteile des Token Verfahren?
Vorteil: Deterministisch (man weiss, wann man dran kommt)

Nachteil: Aufwändig (Startup, Token Verlust, etc.)

### Was sind Vor- und Nachteile von zeitgesteuertem Zugriff?
Vorteil: Optimierung möglich (nach Auslastung, Durchsatz, Reisezeit etc.)

Nachteile: Planung und genaue Zeit in allen Knotepunkten erforderlich und Konflikte mit unplanbarem Verkehr

### Wie kann man einen neuen Token-Halter definieren, wenn das Token verloren geht?
Alle fangen an Tokens zu generieren, welche ihre MAC-Adreese beinhält. Das tiefste Token gewinnt.

### Was ist Carrier Sense Multiple Access?
Ein Knoten schaut, ob das Medium frei ist. Wenn nicht, wartet er, sonst schickt er. Falls es doch eine Kollision gibt:

Collision Detection: Es wird abgebrochen.

Collision Resolution: Wenn eine 1 und eine 0 gleichzeitig geschickt werden, wird nur die 0 genommen.

Collision Avoidance: Nach "Request to send" erwartet man "Clear to send" mit erwarteter Sendedauer. Ansonsten weiss man, dass es eine Kollision oder ein anderes Problem gab.

### Was ist das Hidden Node Problem?
Bei WLAN kann ein Sender in der Reichweite des Empfängers, aber nicht in der Reichweite eines anderen Senders sein. Deshalb kann ein Sender alleine keine Kollisionen vermeiden. Deshalb wird bei WLAN immer auf ACK gewartet nach dem Senden. Wenn es kein ACK gibt, wird erneut gesendet.

### Auf welche 2 Arten kann man Flow-Control machen?
1. **Explizite Start-Stop Signalisierung**: Damit kann der Empfänger dem Sender mitteilen, zu stoppen oder zu starten. Nötig, wenn der Empfänger eine langsame Verarbeitung hat und den weiteren Verkehr noch nicht speichern kann. Oder um die Überlastung des ganzen Netzwerk zu verhindern.
2. **Implizit mit Stop & Wait - Protokoll**: Sender wartet auf Quittung. Empfänger verzögert seine Quittierung und stoppt damit die Übertragung.

### Was zeichnet die Bus-Topologie aus?
- Alle Stationen
	- sind passiv angeschlossen
	- horchen Leitung permanent ab
	- werden aktiv, wenn sie etwas senden wollen
- Es gibt keine festgelegte Ausbreitungsrichtung
- Der Empfänger erkennt anhand einer Adresse, ob die Daten für ihn relevant sind

### Was zeichnet die Linien-Topologie aus?
- Punkt-zu-Punkt Verbindungen zwischen benachbarten Knoten
- Alle Stationen müssen
	- Daten empfangen
	- Daten regenerieren
	- falls nötig weiterleiten
- Der Ausfall einer Station führt zur Segmentierung des LAN in zwei Teile

### Was muss man bei der Ring-Topologie beachten?
Man benötigt ein Verfahren zur Verhinderung von "endlosem Kreisverkehr".

### Was sind die Vor- und Nachteile eines Netzes mit vermaschter Topologie?
Vorteil: Ausfall einer oder eventuell auch mehrerer Stationen oder Verbindungen kann toleriert werden.

Nachteil: Zusätzliche Kosten und Aufwand, um mehrfache Lieferung von Daten zu verhindern .

### Wie werden Geräte im LAN adressiert?
Durch die fixe MAC Adresse des Interfaces des Geräts.

### Was gibt es für LAN Topologien?
- Bus: Alle Stationen sind passiv angeschlossen, horchen die Leitung permanent ab und werden aktiv, wenn sie etwas senden wollen. Es gibt keine feste Richtung
- Linie: Verbindungen zwischen Knoten zu Knoten in einer Linie
- Ring
- Doppelring
- Vermascht
- Stern: Verteilerknoten in der Mitte
- Baum: Mehrere Verteiler, die einen Baum bilden mit Knoten als Blätter

### Was gibt es für Übertragungsarten?
- Unicast: Ein Empfänger
- Multicast: Mehrere Empfänger
- Broadcast: Alle Empfänger der Gruppe (Jeder muss es anschauen)
- Anycast: DNS

### Wie ist die MAC-Adresse aufgebaut?
Erste 3 Bytes: Hersteller

Andere 3: Laufnummer

Letzte 2 Bits des ersten Byte: 0/1 für individual/group address und universally/locally administered address

### Wie sieht das Ethernet Packet aus?
7 Byte Preamble und 1 Byte SFD

Dieses kommt vor dem Ethernet Frame

### Wie sieht das Ethernet Frame aus?
Ohne die Daten sind es 18 Byte
- 6 Byte Destination Address
- 6 Byte Source Address
- 2 Byte Length/Type
- 46 - 1500 Byte Daten
- 4 Byte Frame Check Sequence
- (12 Byte Interframe Gap)

### Welche Kategorisierungen gibt es für verscheidene Teile des Ethernet Frames?
Frame Packet: Preamble und SFD + Ethernet Frame

Ethernet Frame Size: Alles ausser Frame Packet und Interframe Gap

MAC Overhead: Ethernet Frame Size ohne Daten

Sendedauer: Alles ausser Interframe Gap

Dauer der Leitungsbelegung: Mit Interframe Gap

### Du erhälst folgenes Ethernet Frame: 0101010 10101010 10101010 10101010 10101010 10101010 10101010 10101011 00010000 00000000 01011010 11100011 10011111 10000110... Wie lauten der Empfänger?
Präambel 7x 10101010

SFD 10101011

Destination Address 00001000 00000000 01011010 11000111 11111001 01100001

### Deine MAC-Adresse ist 08-00-5A-C7-F9-61. Woran erkennst du deinen Hersteller?
08-00-5A

### Deine MAC-Adresse ist 04-0A-E0–13–14-26. Was kannst du aus dem ersten Byte (04) herauslesen?
04 = 00000100

Aus dem zweitletzten Bit dieses Bytes kann man herauslesen: 0 = universally administrated address

Aus dem letzten Bit kann man herauslesen: 0 = individual address

### Was ist die Filtering Database?
In der Filtering Database steht, welche Adresse hinter welchem Port ist. Der Switch erhält Frames mit Absender und Empfänger und sendet sie zu den Ports mit dem Empfänger. Wenn der Empfänger hinter dem Input-Ports ist, wird das Frame verworfen. Wenn der Port des Empfängers unbekannt ist, wird das Frame an alle Output-Ports gesendet.

### Was machen Repeater / Hubs?
- Verstärken ankommende Signale auf einem Port und leiteen sie "in bester Qualität" weiter
- Keine Fehlererkennung

### Was macht ein Switch?
- Prüft die Checksum von Frames
- Merkt sich Sender und schickt Pakete an diesen Sender zum richtigen Port

### Auf welchem Layer arbeitet der Switch?
Auf Layer 2, dem Data Link Layer

### Was ist ein unknown unicast frame?
Dieses Frame ist nicht in der Filtering Database und wird deshalb an alle Output-Ports geschickt. Allerdings hat das Frame nur einen Empfänger.

### Was ist Address Learning?
- Aufbau und Update der Filtering Database durch Verkehrsbeobachtung (Absenderadresse)
- Alte Einträge werden gelöscht, wenn kein Verkehr vom Absender mehr beobachtet wird (5-10min)

### Was ist die Switch-Matrix oder die Switch-Fabric?
Die Weiterleitungen zwischen allen Input- und Output-Ports. Wenn zwei Einträge gleichzeitig kommen (aus verscheidenen Input-Ports zum gleichen Output-Port), gibt es eine Queue.

### Wie berechnet man die Gesamtübertragunszeit?
$"Latenz" = t_"frame" + t_"transfer"$

$t_"transfer" = "Distanz" / (200000"km"/s)$

### Wie sind die Verzögerungen von Repeater und Switch im Vergleich?
Der Repeater kann schon mit dem Weitersenden beginnen, bevor das gesamte Frame eingelesen wurde. Der Switch speichert das Frame zuerst ab um es dann zu verarbeiten.

### Was sind die Schritte des Spanning Tree Algorithmus?
1. Initialisierung
	- Alle Ports für Nutzdaten blockiert
	- Annahme: "Ich bin Root"
	- Austausch BPDUs (Bridge Protocol Data Units) mit Nachbarn
	- Die tiefste Adresse wird Root
2. Aufbau des Spanning Tree
	- Aufdatieren der Info zu Root (kleinste ID) und Pfadkosten zu dieser
	- Austausch aufdatierter BPDUs bis Konvergenz
	- Die kürzesten Wege werden gewählt
	- Wenn es zwei Wege gibt, dann gewinnt der Weg, bei dem der nächste Knoten die tiefere Adresse hat.
3. Setzen der Port Roles
	- Freigeben für Nutzdaten von Root-Ports (diese führen zum Root) und Designated-Ports (diese führen vom Root weg)
	- Alle anderen Ports bleiben blockiert (Discarding)

### Welche Informationen enthält eien Bridge Protocol Data Unit?
- Root-ID (aus lokaler Sicht): 8 Byte
- Root-Cost (aus lokaler Sicht): 2 Byte
- Bridge-ID ("Ich"): 8 Byte
- Port-ID (Sende-Port): 2 Byte

### Wie funktioniert VLAN?
Mit VLAN können mehrere LANS auf der selben Hardware sein. Wenn ein Frame das Netz betritt, fügt ein Switch einen Tag in das Frame ein. Dieser Tag markiert, zu welchem der VLANs dieses Frame gehört. Bevor das Frame das Netz verlässt, wird der Tag wieder entfernt. Der Tag wird vor dem Type/Length Feld eingefügt. Er besteht aus 2 Bytes 0x8100 = getagged und 2 Bytes VLAN-ID.

### Wie priorisieren gewisse Switches Frames?
Es ist möglich, Frames zu priorisieren, indem ein PCP Wert gesetzt wird. Dieser Wert befindet sich im VLAN-Tag am Anfang der VLAN-ID. Der Wert ist eine Zahl von 0-7, wobei 7 am wichtigsten ist. Jede Prio hat dann eine eigene Queue im Switch. Zum Beispiel kann man so Voice&Video höher priorisieren.

### Was gibt es für Architekturen beim Switch?
- **Store-and-Forward**: Frame wird komplett empfangen und dann weitergeleitet
- **Cut-Through**: Frame wird schon nach Decodierung der Zieladresse weitergeleitet Leitet auch korrupte Frames weiter, in der Regel aber kein Problem
- **Adaptive Cut-Through**: Schaltet bei hoher Fehlerrate automatisch auf Store-and-Forward um

### Was gibt es für Konfigurierbarkeitet beim Switch
- Unmanaged (keine Möglichkeit z.B. VLANs einzurichten)
- Managed (via Konsole oder Web Interface)

### Welche Optionen gibt es für Switched Lan Monitoring?
- **Hub / Multiport Repeater**, zu welchem alle Ports gehen
- **Tap / Probe**, der überall dazwischengehängt werden kann.
- **Port-Mirroring** leitet Daten zusätzlich auf einen anderen Port um

### Wie sieht das Ethernet Bezeichnungs-Schema aus?
Bitrate + BASE oder BROAD + Codierung

Codierungen Z.B:
- T, TX, T1: Twisted Pair
- SR, DR, LR: optisch
- C: Twinax
- K: Backplane

### Was sind typische Topologie von Twisted-Pair-Ethernet?
- Stern-Topologie mit mehreren Stationen an einem Ethernet Switch
- Mehrere Switches erweitern Topologie zu einem Baum
- Allenfalls vermascht für Redundanz
- Maximale Segmentlänge 100m

### Wie wird die effektiv verwendete Konfiguration zwischen zwei Ethernet Stationen vereinbart?
Man nimmt das schlechtere, also alles was beide können.

### Wie kommunizieren Ethernet Anschlüsse untereinander was sie können?
Es werden folgende Informationen bei der Autonegation gesendet: 10000 = Message Type Ethernet und die weiteren Bits stehen je für was der Anschluss kann. Mit Fast Link Pulses wird die Clock angegeben. Zwischen zwei Pulsen ist ein Bit Information. Pro Normal Link Pulse können viele Fast Link Pulses mit Infos gesendet. Manche Anschlüsse können aber nur Normal Link Pulses senden.

### Warum setzt man nicht gerne Cross-Over-Kabel ein?
Für eine Kabelstrecke aus mehreren Teilstrecken braucht es gerade UND X-over Kabel

### Welche Aspekte sind bei einer Vervielfachung der Datenrate zu beachten?
1. Baudrate / Signalfrequenz
	- Höhere Datenrate bedeutet auch höhere Baudrate bzw. Bandbreite
	- Dämpfung nimmt mit steigender Signalfrequenz zu
	- Übersprechen (Crosstalk) nimmt mit steigender Frequenz zu
2. Kompatibilität und Unterstützung von Systemen mit heterogenen Datenraten
	- Möglichst keine Konfiguration
	- Systemrelevante Parameter beibehalten

### Was wird hier gesendet? ![](assets/Pasted%20image%2020250517105150.png)
Es werden Fast Link Pulses gesendet. Zwischen den Clock Pulsen steht folgende Information:

10000 = Message Type Ethernet

11110000001 = Was kann die Station und was nicht

### Wieso möchte man einen ununterbrochenen Bitstrom?
Um Taktrückgewinnng zu ermöglichen.

### Wie erreicht die 100Base-TX Leitungscodierung einen ununterbrochenen Bitstrom?
- 4 Bits werden zu 5 Bits Codiert
- Start-of-Stream Delimiter (J/K) ersetzt erstes Byte der Preamble
- End-of-Stream Delimiter (T/R) folgt nach dem Frame
- Idle (I) füllt die Leitung ununterbrochen zwischen Frames

### Was ist bei 1000BASE-T anders als bei 100BASE-TX? 
- 4 statt 2 Aderpaare, diese werden alle gleichzeitig in beide Richtungen verwendet
- 5-wertiger Leitungscode
- "Next Page" Mechanismen bei FLPs

### Wie wird die Kompatibilität von Ethernet-Technologien aufrechterhalten?
- Beibehaltung von Frame Format und Schnittstelle zwischen PHY und MAC
- Autonegotiation mittels FLP bursts / NLP

### Was bedeutet PHY und MAC?
PHY = Ethernet Packet (beinhaltet Ethernet Frame)

MAC = Ethernet Frame

### Was macht der Vollduplex Betrieb mittels Gabelschaltung?
Es ermöglicht, dass gleichzeitig in beide Richtungen gesendet werden kann.

### Was ist neu bei 10GBASE-T?
- 16-wertiger Leitungscode
- Forward Error Correction, Scrambling
- neue Kabelkategorien CAT 6 bis 8

### Wie gross ist die Netzlast auf dem Port-Mirror, wenn Knoten A und B je mit 51% der nominellen Bitrate des Links Daten austauschen? Was ist die Konsequenz?
Der Mirror-Port wird überlastet, dadurch werden Pakete verworfen. Von den 102%, die in den Mirror-Port sollen, geht 2% verloren.

### Was ist das Grundprinzip von Internetworking?
Die Netzwerkschicht verbindet verschiedene Netze und verbirgt die Besonderheiten der einzelnen Netze. Konkret werden die Netze durch Router verbunden.

### Was sind die vier Grundsätze des Internets?
1. Jedes Netzwerk soll für sich selbst funktionsfähig sein und für den Anschluss ans Internet soll keine netzinterne Anpassung nötig sein
2. Die Kommunikation basiert auf best effort: Schafft es ein Paket nicht bis zum Ziel, so soll es (falls notwendig) nach kurzer Zeit von der Quelle nochmals übertragen werden
3. Die Verbindung der Netze erfolgt durch Black Boxes (später als Router bezeichnet). In diesen Black Boxes soll über die einzelnen Paketflüsse keine Information gesammelt werden.Dadurch können sie einfach gehalten werden und sich rasch von irgendwelchen Fehlerzuständen erholen
4. Es soll keine zentrale Funktionssteuerung benötigt werden

### Was ist der Aufbau von IP-Adressen?
Es gibt 4 Bytes. Der erste Teil ist die Netzadresse, der 2. Teil die Interfaceadresse (früher Host). Die Subnetzmaske bestimmt die Grenze. (Alle Bits, welche in der Maske eine 1 haben gehören zur Netzadresse)
- Netzadresse: 2 Bytes + 2 Bytes Nullen
- Broadcastadresse: 2 Bytes + 2 Bytes Einsen. Invertierte Maske

### Was ist der Unterschied von Forwarding und Routing?
Forwarding ist die Weiterleitung von Daten aufgrund der Routingtabelle und Routing ist das Aufbauen dieser Tabellen, statisch oder dynamisch. Die Routingtabelle enthält Netzadresse und Subnetzmaske und über welches Interface diese verfügbar sind. Routing ist sozusagen der Austausch von Routeninformationen.

### Was ist ein Gateway?
Gateway ist der alte Name für Router. Neu nennt man etwas, das alle OSI Schichten umfasst Gateway. ZB Mail oder Fax Gateway

### Was macht ein Router?
Der Router verbindet verschiedene Netze und versteht dafür viele Protokolle. Für ein Netz ist der Router einfach ein Knoten es Netzes. Ein Router kann 1. Netze verbinden, ZB LAN und Internet, 2. Netze segmentieren um die Broadcast Domain zu limitieren oder 3. Netze mit einer Firewall voneinander schützen. Die Router versuchen, Pakete möglichst optimal weiterzuleiten. Man kann die Topologie in kleinen Fällen konfigurieren oder in grossen Fällen ermitteln lassen.

### Auf welchem Layer arbeitet der Router?
Auf Layer 3, dem Network Layer.

### Was gibt es für Routing Protokoll Arten?
- Interior Gateway Protocols (IGP)
- Exterior Gateway Protocols (EGP)

### Was ist ein Host?
Ein Host ist ein Empfänger oder ein Sender von TCP/IP. Jeder Host hat mindestens eine Adresse. Multi-Homed Hosts haben mehrere IP-Adressen. Die IP-Adresse identifiziert das Host-Interface.

### ![](assets/Pasted%20image%2020250514091633.png)
(a) --, --, 17.8.0.0, 17.8.255.255, 65'536

(b) --, 255.255.224.0 /19, --, 11.7.191.255, 8'192

(c) --, 255.255.192.0 /18, 144.3.128.0, --, 16384

(d) --, 255.255.255.248 /29, 31.4.2.160, 31.4.2.167 , --

### Was ist der Unterschied von flachem und hierarchischem Routing?
Flaches Routing
- Router kennt jedes Ziel
- Redundanz da Ziele mehrmals gespeichert
- Grosse Tabelle

Hierarchisches Routing
- Router kennt direkt angeschlossene Netze und einen weiteren Router
- Wird nur am Rand genutzt
- Kleine Tabelle

### Was wird in der Routingtabelle gespeichert?
Netzadresse, Netzmaske, Port, Gateway

### ![](assets/Pasted%20image%2020250514091658.png)
(a) Es wird nach gemäss dem 4. Eintrag der Routingtabelle von Router B an p0 weitergeleitet.

(b) Es wird gemäss Eintrag 5 in der Routingtabelle von Router B an p2 weitergeleitet.

(c) Router C kann das IP Paket nicht weiterleiten, das IP-Paket erreicht den Empfänger nicht. Das Paket wird verworfen.

### ![](assets/Pasted%20image%2020250514091723.png)
| Wert            | alternative | interfaces |
| --------------- | --- | ---------- |
| 255 (1111’1111) | /24 | 256 - 2    |
| 254 (1111’1110)  | /23 | 512 - 2    |
| 252 (1111’1100) | /22 | 1'024 – 2  |
| 248 (1111’1000) | /21 | 2'048 - 2  |
| 240 (1111’0000) | /20 | 4'096 - 2  |
| 224 (1110’0000) | /19 | 8'192 - 2  |
| 192 (1100’0000) | /18 | 16'384 - 2 |
| 128 (1000’0000) | /17 | 32'768 – 2 |
| 0 (0000’0000)   | /16 | 65'536 – 2 |

### Was ist Classful Routing?
Die ersten 4 Adress Bits werden genutzt, um die Klasse anzugeben. Die D Klasse ist für Multiclass-Adressen und die E Klasse reserviert für zukünftige Nutzung. Dies wird nicht mehr zur Vergabe von Blöcken benutzt. Die Klassen haben eine fixe Anzahl Maskenbits (8, 16, 24) Die Klassen haben einen präfixfreien Präfix.

### ![](assets/Pasted%20image%2020250514091746.png)
Gelb: 30.0.x.x = Klasse B (/16) 

Grün: 133.0.x.x = Klasse B (/16)

Blau: 22.x.x.x = Klasse A (/8)

Rot: 192.0.0.x = Klasse C (/24)

### Was ist das Problem von Classful Routing?
Die A Klasse ist zu gross, die C Klasse ist zu klein für Unternehmen. Es gibt aber nicht genug B Klassen Netze. Eine Klasseneinteilung an sich ist unflexibel.

### Was ist CIDR?
Classless Inter-Domain Routing führt folgendes ein:
- Abschaffung der Netzklassen
- Flexible Verwendung von Netzmasken beliebiger Länge
- Aufteilung grosser Netze in kleinere Subnetze, Zusammenfassen mehrerer kleiner Netze zu einem gemeinsamen grösseren Netz

### Was ist Supernetting?
Hiermit können kleine Netze zusammengefügt werden. Z.B. 4 C Klassen Netze 198.51.100.0-198.51.103.0 -198.51.100.0

### Was ist Subnetting?
Hiermit wird ein grosses Netz in mehrere kleine aufgeteilt. ZB Um das Netz in 8 kleinere aufzuteilen, fügt man der Netzmaske 3 Einsen hinzu.

### ![](assets/Pasted%20image%2020250514091810.png)
 160.85.128.0 / 255.255.224.0 oder 160.85.128.0 /19

### Was gibt es für spezielle IP-Adressen?
- Loopback-Adressen: Das Netz 127.0.0.0/8 wird and emuliertes Loopback-Gerät geschickt (braucht kein Netz)
- Private Adressbereiche: Werden nicht weitergeleitet: 10.0.0.0 /8, 172.16.0.0 – 172.31.0.0 /16, 192.168.0.0 – 192.168.255.0 /24
- Autoconfig-Adressen: 169.254.0.0 /16

### Wie werden IP-Adressen verwaltet?
IANA verwaltet und delegiert Adressen und delegiert die Verwaltung an Regional Internet Registries (RIR). Diese delegieren an Local/National Internet Registries (LIR, NIR), welche wiederum an Internet Service Provider (ISP) wie z.B. Switch oder Swisscom delegieren. ISPs vergeben Blöcke dank Supernetting.

### Wieso benutzt man nicht überall Bridges statt Router?
Weil Netz soll nicht zu gross sein soll, Broadcast soll nicht so weit gehen.

### Wie lautet die Default Netzadresse?
0.0.0.0 mit Maske 0.0.0.0

### Wieviele Bytes hat die MAC-Adresse?
6

### Für was benutzt man Multicast-Adressen?
ZB Streaming / Fernsehen wie Bluewin TV. Da der gleiche Content and viele Nutzer nicht individuell geschickt werden muss.

### Wie sieht ein IPv4 Paket aus?
Insgesamt 20 Bytes:
- **Version (4 Bits)**: 4
- **Internet Header Length (IHL) (4 Bits)**: Maximale Länge = Länge * 4
- **Differentiated Services (DS) (1 Byte)**: Erlaubt Priorisierung, Delay, Jitter von IP-Datenpaketen. Der Wert ist eine Qualitätsklasse. 
- **Total Length (2 Bytes)**
- **Time to Live (TTL) (1 Byte)**: Dekrementierender Hop-Counter
- **Protocol (1 Byte)**: ZB 1 ICMP, 6 TCP, 17 UDP
- **Header Checksum (2 Bytes)**: Schützt nur den IP-Header selbst, In jedem Router neu berechnet, wegen TTL etc.
- **Source Address (4 Bytes)**
- **Destination Address (4 Bytes)**
- **Options / Padding (variabel)**: muss immer ein vielfaches von 4 sein
	- Identification Number (2 Bytes)
	- Flags (3 Bits): 1 = Do/Dont Fragment, 2 = Last/More Fragments
	- Fragment Offset (13 Bits): Gibt an, wo in einem fragmentierten IP-Paket ein Fragment hingehört

### Was ist der Nutzen von IP-Fragmentierung?
Der Sender teilt die Nutzdaten auf mehrere Frames auf um die Maximum Transfer Unit (MTU) des Netzes nicht zu überschreiten. Diese Aufgabe wird vom Sender getan um Router zu entlasten. Die Daten werden auch erst beim Empfänger reassembliert, weil die Pakete verscheidene Routen nehmen könnten.

### Was ist die MTU eines IP-Pakets in einem Ethernet Frame?
1500 Bytes

### Wie funktioniert Ethernet-Encapsulation?
- Das IP-Paket wird direkt im Nutzdatenteil des Ethernet Frames übertragen
- Das Type Feld des Ethernet Frames enthält den Wert 0800 (hex)
- Die MTU ist damit 1500 Bytes. Ohne Optionen können dann 1500 - 20 Bytes Daten übertragen werden.

### Wie funktioniert ARP?
ARP = Address Resolution Protocol

- Für das Senden von Daten an einen durch seine IP-Adresse identifizierten Knoten im lokalen Netz wird dessen Hardwareadresse benötigt.
- Ist diese nicht bekannt, werden alle Knoten im Netz per Broadcast angefragt: "Who has 1.2.3.4"
- Der Knoten mit der angefragten IP-Adresse kennt seine eigene Hardwareadresse und sendet sie an den fragenden Knoten zurück: "1.2.3.4 is at 55.66.77.88.99.11".
- Die erhaltene IP-MAC Kombinationem wird in der ARP-Tabelle für eine gewisse Zeit gespeichert.

### Für was wird ARP verwendet, neben dem Ermitteln von Adressen?
- Erkennung von Adresskonflikten:
	- Nach einer Adresszuweisung (manuell oder per DHCP) wird ein ARP-Request an die eigene IP- Adresse gerichtet, um zu prüfen, ob kein anderer Host im LAN die Adresse verwendet
	- Falls eine Antwort kommt, liegt ein Adresskonflikt vor
- Erneuerung von Einträgen im ARP-cache
	- Linux Systeme senden in diesem Fall einen ARP-Request als Unicast
	- Reduziert Broadcast-Last im Netz

### Was passiert bei der Übertragung eines IP Paketes mit Encapsulation?
Beim betreten eines neuen Netzes wird das Paket in ein neues Ethernet Frame gesteckt. Der Empfänger des Frames wird mit einer ARP Request herausgefunden. Der Empfänger ist der Port zum nächsten Netz oder vom schlussendlichen Empfänger.

### Was ist ICMP?
Internet Control Message Protocol. Dieses Protokoll wird genutzt um  Fehlermeldungen oder Informationen auf dem Internet Layer auszutauschen. Die ICMP Meldungen werden in IP Paketen gekapselt

### Wie sieht ein ICMP Header aus?
- 1 Byte Type
- 1 Byte Code
- 2 Bytes Checksum
- Weitere Bytes abhängig vom Code

### Was gibt es für gebräuchliche IMCP Meldungstypen?
0 Echo Reply

3 Destination Unreachable

8 Echo

11 Time Exceeded

### Ein Router kennt keinen Weg und sendet diese Destination Unreachable Message zurück: 4500 0038 8038 0000 fd01 5bc0 a055 821e a055 1f03 0301 4bf7 0000 0000 4500 0028 8b10 0000 0711 a8a4 a055 1f03 a055 1d63 8b0d 829d 0014 a348. Wie erkennen Sie, dass es sich um eine ICMP Message handelt? Wie erkennen Sie den ICMP Typ?
Protocol: 01 (Octet 10)

Type: 03 (Octet 21)

Original Data (Octet 29 ff)

### Ein Host 160.85.31.3 versucht, das folgende Paket an Host 160.85.29.99 zu senden: 4500 0028 8b10 0000 0711 a8a4 a055 1f03 a055 1d63 8b0d 829d 0014 a348 030a 0000 7504 1137 407c 0800. Erkennen Sie in diesem Paket die IP Adressen von Sender und Destination?
Sender: a055 1f03

Destination a055 1d63 (Octets 13 – 20)

### Wie funktioniert Traceroute?
Traceroute erlaubt, den Weg zu einem beliebigen Host (oder einem fehlerhaft konfigurierten Router auf diesem Weg) zu finden. Dafür werden UDP Datagramme an eine hohe Destination Portnummer geschickt. Jedes Mal wird die TTL um 1 erhöht. Da der Zielport nicht erreichbar ist, kommt eine Destination Unreachable Nachricht zurück, jedes Mal vom nächsten Router.

### Wie sieht ein IPv6 Paket aus bzw. wie unterscheidet es sich von IPv4?
Insgesamt 40 Bytes statt 20:
- Version: 0.5 Byte
- Traffic Class:  1 Byte
- Flow Label: 2.5 Bytes
- Nutzdatenlänge: 2 Bytes
- Next Header: 1 Byte
- Hop Limit: 1 Byte
- Source Address: 16 Bytes
- Destination Address: 16 Bytes

### Was sind IPv6 Extension Headers?
- IPv6 verwendet einen minimalen Basic IPv6-Header und verfrachtet alle optionalen Erweiterungen in Extension Headers
- Extension Headers werden nur bei Bedarf hinzugefügt
- Extension Headers werden durch das "Next Header"-Feld deklariert. Dabei gibt jeder Extension Header den Typ des Next Headers und die eigene Länge an

### Warum darf in einer IPv6 Adresse :: nur einmal verwendet werden?
Weil sonst nicht eindeutig definiert ist, wie viele Nullen / Doppel-Bytes pro :: damit ersetzt wurden.

### Wie lange ist eine IPv6 Adresse?
IPv6 Adressen haben eine Länge von 16 Byte bzw. 128 Bit

### Die IPv6 Adresse 1023::1736:3:88a0:0 wurde in verkürzter Notation geschrieben. Wie lautet die volle Adresse?
1023:0000:0000:0000:1736:0003:88a0:0000

### Wie werden IPv6 Adressen in der Praxis aufgeteilt?
001 + 45 Bits Global Routing Index + 16 Bits Subnet ID + 64 Bits Interface ID

### Welche Protokolle benutzen UDP?
DNS, Time (NTP), DHCP

### Welche Protokolle benutzen TCP?
HTTP, Email(SMTP, POP/IMAP)

### Was ist NDP?
NDP ist das Address Resolution Protocol für IPv6. Anders als bei ARP werden
- Statt Broadcast nur einige Knoten per Multicast angefragt.
- Die IPv6-MAC Kombination wird in der "Neighbor Cache" abgespeichert.

### Wie sieht ein UDP Header aus?
Insgesamt  8 Bytes:
- 2 Bytes UDP Source Port
- 2 Bytes UDP Destination Port
- 2 Bytes UDP Message Length
- 2 Bytes Checksum

### Wie sieht ein TCP Header aus?
Insgesamt 20 Bytes ohne Optionen/Padding:
- 2 Bytes TCP Source Port
- 2 Bytes TCP Destination Port
- 4 Bytes Sequence number
- 4 Bytes Acknowledgement Number
- 4 Bits Header Length (Faktor 4 Bytes)
- 4 Bits unused
- 2 Bits ECN Flags
- 6 Bits Control Bits (URG,ACK,PSH,RST,SYN,FIN)
- 2 Bytes Window (Verfügbarer Puffer)
- 2 Bytes Checksum
- 2 Bytes Urgent Pointer: Falls URG, gibt Position von Urgent Data an
- 4n Bytes Options/Padding

### Was sind die Eigenschaften von TCP aus der Sicht einer Anwendung?
- **Verbindungsorientierte Übertragung**: Zuerst wird eine Verbindung zwischen Client- und Serveranwendung aufgebaut
- **Zuverlässiger Verbindungsaufbau**: Bevor eine TCP-Verbindung steht, muss dies von beiden Endpunkten aktiv bestätigt werden
- **Hohe Zuverlässigkeit**: Die Daten kommen ohne Datenverlust und in der richtigen Reihenfolge auf der anderen Seite an
- **Vollduplexübertragung**: Gleichzeitige, voneinander unabhängige, Übertragung in beiden Richtungen möglich
- **Stream-Schnittstelle**: Die Anwendung sendet/empfängt eine unstrukturierte Byte-Folge
- **Graceful Termination** (Verbindungsabbau): TCP gewährt die Zustellung aller Daten auch beim Verbindungsabbau
- **Punkt-zu-Punkt Kommunikation**: Zwei Applikationen tauschen Daten aus. Konzepte wie Multicast oder Broadcast existieren nicht.

### Was sind die Aufgaben von TCP?
- Flow Control
	- Verbindungsaufbau
	- Nachrichtentausch (gleichzeitig möglich)
	- Verbindungsabbau
- Congestion Control
- Error Control

### Was nützt bei TCP der Verbindungsabbau?
- Sicherstellen des geordneten Austausches bis zum Ende
- Freigabe der allozierten Ressourcen

### Wie läuft der Verbindungsaufbau von TCP ab?
1. Der Server "horcht" (LISTEN) auf einer bestimmten Port Nummer
2. Der Client sendet SYN=1, ACK=0 und zufälliger initialer Sequenznummer SEQ=a (Bsp. 15'000)
3. Server bestätigt Sequenznummer mit ACK=a+1 (15'001), SYN=1 und wählt zufällige initiale Sequenznummer SEQ=b (Bsp. 42'300)
4. Client bestätigt b mit ACK=b+1 (42'301) und SEQ=a+1
5. Wenn nun vom Client bei SEQ=15001 1000 Bytes Daten gesendet werden, sendet der Server ACK=16001

### Wie läuft der Verbindungsabbau von TCP ab?
1. A sendet FIN
2. B sendet ACK=ack+1 um FIN zu bestätigen
3. Der Verbindungszustand wird als Half-Closed bezeichnet, B könnte also immer noch Daten schicken.
4. B sendet auch FIN
5. A sendet ACK=ack+1 um FIN zu bestätigen

### Wie erkennt TCP verlorene Nachrichten?
- **Stop & Wait**: Es wird die gesamte Round-Trip-Time lang gewartet und noch kein nächstes Paket gesendet. Wenn kein ACK kommt, wird es erneut gesendet. Erst wenn ein ACK kommt, werden die nächsten Daten gesendet.
- **Sliding Window Protokoll**: Es wird mitgeteilt, wie viel Platz im Empfangsbuffer ist (Window=xyz). Solange noch Platz ist, werden die nächsten Daten geschickt. Wenn der Empfänger aus dem Buffer gelesen hat, schickt er ein Paket mit der neuen Window Grösse.

### Was ist RTT?
RTT = Round Trip Time = Zeit eines Pakets um zum Empfänger und wieder zurück zu reisen. Diese wird von TCP gemessen, um das Retransmission Time-Out zu berechnen.

### Was ist das Bandwidth-Delay-Product?
BPD = RTT (s) * Bandbreite (bps)

Damin kann man das minimal benötigte TCP Fenster berechen:

BPD / 8

### Wie schützt TCP den Empfänger von Überlastung?
Mit dem Sliding Window Algorithmus und Advertized Window: Der EMpfänger sendet, wie viel Platz er hat und es darf nur so viel gesendet werden. Wenn das WIndow voll ist und der Empfänger z.B. 1000 Bytes daraus liest, dann schickt er eine Nachricht, dass nun wieder 1000 Bytes frei sind.

### Wie wird das Netz von Überlastung geschützt bei TCP?
- **Slow Start**: Es werden nicht sofort viele Pakete gechcikt. Die Senderate wird mit der Zeit exponentiell erhöht bis zu einer Schwelle, dann wird nur noch linear erhöht. Wenn ein Problem auftritt, wird die Senderate wieder auf 0 zurückgesetzt und die Schwelle gesenkt. Nun wird wieder exponentiell bis zu der neuen Schwelle erhöht etc.
- **Congestion Window**: Ein Überlastfenster limitiert zusätzlich die Grösse des Sendefensters. Dies ist eine lokale Variable

### Was machen die einzelnen Flags von TCP?
- URG Urgent-Pointer: Zeigt Position von wichtigen Daten
- ACK Acknowledgement Number: Bestätigt empfangene Bytes
- PSH Push: Empfänger soll Daten sofort ohne buffern an die Applikation weiterleiten z.B. bei interaktiven Anwendungen (SSH) od. der letzten TCP-Nachricht eines Web-Requests
- RST Reset: Verbindung rücksetzen oder um einen geschlossenen Port zu signalisieren
- SYN Synchronize: Verbindung aufbauen
- FIN Verbindung abbauen

### Wie wird das Retransmission Timeout gewählt bei TCP?
Es wird berechnet basierent auf allen gemessenen Round Trip Times.

### Wie funktioniert DNS?
Das DNS ist eine verteilte, hierarchische Verzeichnisstruktur (Baum). Es wird verteilt vertrieben. Ein Name Server ist meist für eine Zone verantwortlich = Ein Teil des Baumes. Es gibt mindestens zwei Name Server pro Zone. Eine Unterzone kann an einen weiteres Nameserver delegiert werden. Mit einem DNS Lookup kann man die IP eines Domain Namens herausfinden. Mit dem Reverse DNS Lookup kann man das umgekehrte herausfinden.

### Welche klassischen Top Level Domains gibt es?
 - Generische, weltweite Domains (gTLD): com, edu, net, org, int
 - Generische Domains in den USA: gov, mil
 - Landesspezifische Domains (country code TLD, ccTLD): ch, li, de, us, uk
 - thematische und markenspezifische TLDs: coop, info, museum

### Wie funktioniert Port-basiertes NAT?
Alle Hosts im privaten Netz 192.168.0.0/8 verwenden 192.168.0.1 als Default-Gateway.

NAPT-Gateway-Funktion:
- Er ersetzt im IP-Header der ausgehenden Pakete die lokale Source-Adresse 192.168.0.10 durch die globale Gateway- Adresse 160.85.17.11
- Er ersetzt im Transport-Layer-Header der ausgehenden Pakete das Source-Port 56777 durch eine eindeutige / freie Port- Nummer.
- Er legt die Verbindungsinformation dynamisch in einer Verbindungstabelle ab.
- Er sucht bei eingehenden Paketen die Verbindung in der Tabelle und setzt die ursprüngliche IP-Adresse/Port wieder ein

### Welches Problem löst NAT?
Das Ausgehen von IPv4 Adressen. Mit NAT haben nämlich alle Hosts in einem privaten Netz die selbe Adresse.

### Was ist DHCP?
Das Dynamic Host Configuration Protocol wird für die dynamische Zuweisung von IP-Adressen verwendet. Jedes Gerät kann so eine IP-Adresse erhalten, indem es mit DHCP-Servern kommuniziert.

### Wie läuft das Konfigurieren der IP eines Clients ab mit DHCP?
1. Ein Client sucht einen DHCP-Server mittels Broadcast (DHCP discover)
2. Ein oder mehrere DHCP-Server antworten (DHCP offer)
3. Der Client wählt einen Server und fordert eine Auswahl der angebotenen Parameter an (DHCP request)
4. Der Server bestätigt (DHCP acknowledge) mit einer Message, welche die endgültigen Parameter enthält
5. Vor Ablauf der Lease Time erneuert der Client mittels Unicast die Adresse

### Wie sieht ein DHCP Paket aus?
Insgesamt 20 Bytes:
- 1 Byte Operation
- 1 Byte Hardware Type
- 1 Byte Hardware Length
- 1 Byte Hop Count
- 4 Bytes Transaction Identification
- 2 Bytes Seconds (seit Start des Clients)
- 2 Bytes unused
- 4 Bytes Client IP Address (vom Client gesetzt für Renew ö.Ä.)
- 4 Bytes Your Client IP Address (vom Server gesetzt in Antwort)
