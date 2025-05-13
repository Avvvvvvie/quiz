... ethernet kabel -> access point:  -> signal zu geräten in raum
tracert nippon.jp


> [!quiz]- Was ist der Unterschied von hard und soft real time?
> Bei soft real time Übertragung ist es nicht schlimm, wenn die Daten nicht erfolgreich übertragen werden konnten, wie z.B. bei einem Anruf. Bei der Bremse eines Zuges wäre es schlimm, wenn die Bremse nicht innerhalb eines gewissen Zeitraums reagiert.

> [!quiz]- Was sind die 7 Schichten des OSI-Modells?
> 1. Application Layer
> 2. Presentation Layer
> 3. Session Layer
> 4. Transport Layer
> 5. Network Layer
> 6. Data Link Layer
> 7. Physical Layer

> [!quiz]- Zu welchem Layer gehören TCP und UDP?
> Transport Layer

> [!quiz]- Zu welchem Layer gehört HTTP?
> Application Layer

> [!quiz]- Zu welchem Layer gehört die IP?
> Network Layer

> [!quiz]- Zu welchem Layer gehört DNS?
> Application Layer

> [!quiz]- Für was steht SAP?
> Service Access Point

> [!quiz]- Was ist das Schichtenmodell?
> - Eine Schicht N bietet einen Dienst and die Schicht N+1 und bezieht den Dienst N-1
> - Die Schicht N kommuniziert *logisch* (nicht physisch) mit anderen Instanzen in dieser Schicht über ein Protokoll.

> [!toquiz]- Gerätebeispiele für jede Schicht

> [!quiz]- Was ist der Unterschied von einem Interface, einem Dienst, einem Protokoll und einem SAP?
> Die Daten werden mit dem SAP der höchter Schicht übergeben, ein Dienst ist zwischen zwei tieferen Schichten. Das Interface sind die konkreten Funktionen des Dienstes. Das Protokoll regelt die Kommunikation innerhalb einer Schicht zwischen zwei Instanzen der Schicht.

> [!quiz]- Was macht das Physical Layer?
> Die Daten werden auf physikalische Signale codiert. Das Kabel ist *formal* nicht Teil dieses Layers.

> [!quiz]- Was macht das Data Link Layer?
> - Frames werden erkannt (0x7E)
> - Fehler werden erkannt und korrigiert
> - Flow Control gegen Überlastung
> 
> Wenn es mehrere Teilnehmer gibt (Bus-Struktur):
> - Addressierung der Teilnehmer durch MAC-Adresse (6 Bytes)
> - Media Access: Koordination des Zugriffs (= Wer darf wann senden?)

> [!quiz]- Was macht das Network Layer?
> Es vermittelt Leitungen oder Pakete über unterschiedliche Kommunikationsstrecken an ein Ziel über Knoten. Ein Port verbindet einen Knoten zum nächsten.

> [!toquiz]- Was sind die Unterschiede von Leitungsvermittlung und Paketvermittlung?

> [!toquiz]- Was macht das Transport-Layer?

> [!toquiz]- TCP VS UDP

> [!toquiz]- Was machen die 3 Anwendungslayer?

> [!toquiz]- Wie berechnet man die Ausbreitungsgeschwindigkeit?

> [!toquiz]- Wie berechnet man die Signaldämpfung in Dezibel?

> [!toquiz]- Was ist RTT?

> [!toquiz]- Wie berechnet man die SNR?

> [!toquiz]- Was sind 5 Kabelarten und was sind ihre Vorteile?

> [!toquiz]- Was sind 3 Ursachen von Signalstörungen?

> [!toquiz]- Wie sieht das ISO Bezeichungsschema für Kabel aus?

> [!toquiz]- Wieso sind TP anfälliger auf Störungen?

> [!toquiz]- Welche 3 Vorgehen gibt es, um Storungen auszuheben?

> [!toquiz]- Was gibt es für Glasfasertypen und was sind ihre Unterschiede?

> [!toquiz]- Wie werden TP Kabel in Kategorien eingeteilt?

> [!toquiz]- Was bedeutet Insertion Loss?

> [!toquiz]- Was ist Cross-Talk?

> [!toquiz]- Wie funktioniert ein Glasfaserkabel?

> [!toquiz]- Was ist die Moden-Dispersion?

> [!quiz]- Wie funktioniert die asynchrone Übertragung mit Framing?
> - Stehen keine Daten zur Übertragung an, so wird nichts gesendet (Ruhezustand)
> - Der Beginn eines Frames wird mit einem Start-Bit angezeigt; mit der Frame-Grenze ist auch die Byte-Grenze gegeben

> [!quiz]- Wie funktioniert die synchrone Übertragung mit Framing?
> - Frames werden ohne Unterbruch gesendet
> - Stehen keine Daten an, werden Flags gesendet, damit der Empfänger seinen Takt synchron halten kann
> - Frames werden durch ein Start-Flag und ein End-Flag begrenzt
> - Flag ist meist 01111110 / Ox7E

> [!quiz]- Was ist Bitstopfen?
> Nach 5 Bits fügt man eine 0 ein in allen Daten. So entsteht das flag nicht, welches 6 Einsen nacheinander hat.

> [!quiz]- Was ist der Unterschied von BER, Bitfehlerrate, FER und RER?
> - BER: Anteil fehlerhafter Bis
> - Bitfehlerrate: Bitfehler pro Zeit
> - FER: Anteil fehlerhafter Frames
> - RER: Anteil unentdeckter fehlerhafter Bits

> [!quiz]- Wie berechnet man die FER?
> $1 - (1 - p_e)^N$, wobei N die Anzahl Bits in einem Frame ist. Annäherung: $N * p_e$ für $p_e << 1$

> [!quiz]- Was sind Vor und Nachteile langer Frames?
> - Höhere Fehlerwahrscheinlichkeit.
> - Grösserer Anteil an Nutzdaten.

> [!toquiz]- Wie berechnet man die Restfehlerwahrscheinlichkeit?

> [!quiz]- Was ist die Hammingdistanz?
> Die Hamming-Distanz ist die minimale Anzahl Bits, in denen sich zwei beliebige gültige Codewörter eines Codes unterscheiden

> [!quiz]- Was ist Backward und Forward Error Correction?
> - Backward: Fehler geht verloren, wird erneut geschickt. Nachteil: Warten auf Quittung und auf Timeout
> - Forward: Am wahrscheinlichste Nachricht wird geschätzt.

> [!quiz]- Wie viele Fehler können bei einer Hammingdistanz von 5 erkannt werden?
> 2 kann man korrigieren, 4 detektieren.

> [!quiz]- Wie viele Fehler kann man mit Längs- und Querparity erkennen?
> 1 Fehler kann korrigiert werden, mind. 3 Fehler können erkannt werden.

> [!quiz]- Was ist das Leader-Follower Verfahren?
> Mehrere Systeme verwenden dasselbe Verfahren. Der Zentrale Knoten koordiniert den Zugriff.

> [!quiz]- Was sind Vor- und Nachteile des Leader-Follower Verfahren?
> Vorteil: Keine Konflikte
> Nachteil: Ausfall des Leaders

> [!quiz]- Was ist das Token Verfahren?
> - Die Sendeberechtigung wird in einer festgelegten Reihenfolge weitergereicht
> - Knoten senden nur, wenn sie ein Token halten
> - Variation: Jeder fügt seine Daten in ein Frame. Am Ende wird alles wieder zurück zum 1. Knoten geschickt.

> [!quiz]- Was sind Vor- und Nachteile des Token Verfahren?
> Vorteil: Deterministisch (man weiss, wann man dran kommt)
> Nachteil: Aufwändig (Startup, Token Verlust, etc.)

> [!quiz]- Was sind Vor- und Nachteile von zeitgesteuertem Zugriff?
> Vorteil: Optimierung möglich (nach Auslastung, Durchsatz, «Reisezeit» etc.)
> Nachteile: Planung und genaue Zeit in allen Knotepunkten erforderlich und Konflikte mit unplanbarem Verkehr (SBB Cargo)

> [!quiz]- Wie kann man einen neuen Token-Halter definieren, wenn das Token verloren geht?
> Alle fangen an Tokens zu generieren, welche ihre MAC-Adreese beinhält. Das tiefste Token gewinnt.

> [!quiz]- Was ist Carrier Sense Multiple Access?
> Ein Knoten schaut, ob das Medium frei ist. Wenn nicht, wartet er, sonst schickt er. Falls es doch eine Kollision gibt:
> Collision Detection: Es wird abgebrochen.
> Collision Resolution: Wenn eine 1 und eine 0 gleichzeitig geschickt werden, wird nur die 0 genommen.
> Collision Avoidance: Nach "Request to send" erwartet man "Clear to send" mit erwarteter Sendedauer. Ansonsten weiss man, dass es eine Kollision oder ein anderes Problem gab.

> [!quiz]- Quellen von Zufall
> - MAC Adresse
> - Tick (wird nach dem Aufbooten hochgezählt)

> [!quiz]- Was ist Flow-Control?
> 1. **Explizite Start-Stop Signalisierung**: Damit kann der Empfänger dem Sender mitteilen, zu stoppen oder zu starten. Nötig, wenn der Empfänger eine langsame Verarbeitung hat und den weiteren Verkehr noch nicht speichern kann. Oder um die Überlastung des ganzen Netzwerk zu verhindern.
> 2. **Implizit mit Stop & Wait - Protokoll**: Sender wartet auf Quittung • Empfänger verzögert seine Quittierung und stoppt damit die Übertragung.

> [!quiz]- Was ist Hysterese?
> Wenn man direkt über der Limite stoppt und direkt unter der Limite wieder startet, so dass man schon wieder über der Limite ist und deshalb die ganze Zeit starten und stoppen muss.

> [!quiz]- Was gibt es für LAN Topologien?
> - Bus: Alle Stationen sind passiv angeschlossen, horchen die Leitung permanent ab und werden aktiv, wenn sie etwas senden wollen. Es gibt keine feste Richtung
> - Linie: Verbindungen zwischen Knoten zu Knoten in einer Linie
> - Ring
> - Doppelring
> - Vermascht
> - Stern: Verteilerknoten in der Mitte
> - Baum: Mehrere Verteiler, die einen Baum bilden mit Knoten als Blätter

> [!quiz]- Was gibt es für Übertragungsarten?
> - Unicast: Ein Empfänger
> - Multicast: Mehrere Empfänger
> - Broadcast: Alle Empfänger der Gruppe (Jeder muss es anschauen)
> - Anycast: DNS

> [!quiz]- Wie ist die MAC-Adresse aufgebaut?
> Erste 3 Bytes: Hersteller
> Andere 3: Laufnummer
> Letzte 2 Bits des ersten Byte: 0/1 für individual/group address und universally/locally administered address

> [!toquiz]- Wie sieht das Ethernet Package aus?

> [!toquiz]- Wie sieht das Ethernet Frame aus?

> [!toquiz]- Welche Begriffe gibt es für verscheidene Teile des Ethernet Frames?

> [!quiz]- Was ist die Filtering Database?
> In der FIltering Database steht, welche Adresse hinter welchem Port ist. Der Switch erhält Frames mit Absender und Empfänger und sendet sie zu den Ports mit dem Empfänger. Wenn der Empfänger hinter dem Input-Ports ist, wird das Frame verworfen. Wenn der Port des Empfängers unbekannt ist, wird das Frame an alle Output-Ports gesendet.

> [!toquiz]- Was ist ARP?

> [!quiz]- Was ist ein unknown unicast frame?
> Dieses Frame ist nicht in der Filtering Database und wird deshalb an alle Output-Ports geschickt. Allerdings hat das Frame nur einen Empfänger.

> [!quiz]- Was ist Address Learning?
> - Aufbau und Update der Filtering Database durch Verkehrsbeobachtung (Absenderadresse)
> - Alte Einträge werden gelöscht, wenn kein Verkehr vom Absender mehr beobachtet wird (5-10min)

> [!quiz]- Was ist die Switch-Matrix oder die Switch-Fabric?
> Die Weiterleitungen zwischen allen Input- und Output-Ports. Wenn zwei Einträge gleichzeitig kommen (aus verscheidenen Input-Ports zum gleichen Output-Port), gibt es eine Queue

> [!quiz]- Wie berechnet man die Gesamtübertragunszeit?
> $"Latenz" = t_"frame" + t_"transfer"$
> $t_"transfer" = d / (200000"km"/s)$

> [!quiz]- Wie sind die Verzögerungen von Repeater und Switch im Vergleich?
> Der Repeater kann schon mit dem Weitersenden beginnen, bevor das gesamte Frame eingelesen wurde. Der Switch speichert das Frame zuerst ab um es dann zu verarbeiten.

> [!toquiz]- Was sind die Schritte des Spanning Tree Algorithmus?

> [!toquiz]- Wie funktioniert VLAN?

> [!toquiz]- Wie priorisieren gewisse Switches Frames?

> [!quiz]- Was gibt es für Architekturen beim Switch?
> - **Store-and-Forward**: Frame wird komplett empfangen und dann weitergeleitet
> - **Cut-Through**: Frame wird schon nach Decodierung der Zieladresse weitergeleitet Leitet auch korrupte Frames weiter, in der Regel aber kein Problem
> - **Adaptive Cut-Through**: Schaltet bei hoher Fehlerrate automatisch auf Store-and-Forward um

> [!quiz]- Was gibt es für Konfigurierbarkeitet beim Switch
> - Unmanaged (keine Möglichkeit z.B. VLANs einzurichten)
> - Managed (via Konsole oder Web Interface)

> [!quiz]- Welche Optionen gibt es für Switched Lan Monitoring?
> - **Hub / Multiport Repeater**, zu welchem alle Ports gehen
> - **Tap / Probe**, der überall dazwischengehängt werden kann.
> - **Port-Mirroring** leitet Daten zusätzlich auf einen anderen Port um

> [!toquiz]- Wie sieht das Ethernet Bezeichnungs-Schema aus?

> [!toquiz]- Was sind typische Topologie von Twisted-Pair-Ethernet?

> [!toquiz]- Wie wird die effektiv verwendete Konfiguration zwischen den Stationen vereinbart?
> Man nimmt das schlechtere, also alles was beide können.

> [!quiz]- Wie kommunizieren Ethernet Anschlüssen?
> Über ein Protokoll wird kommuniziert. 10000 = Message Type Ethernet Und die weiteren Bits stehen je für was der Anschluss kann. Mit Fast Link Pulses wird die Clock angegeben. Zwischen zwei Pulsen ist ein Bit Information. Bei einem Normal Link Pulse werden viele Fast Link Pulses mit Infos gesendet. Manche Anschlüsse können nur Normal Link Pulses senden.

> [!quiz]- Warum setzt man nicht gerne Cross-Over-Kabel ein?
> Für eine Kabelstrecke aus mehreren Teilstrecken braucht es gerade UND X-over Kabel

> [!quiz]- Welche Aspekte sind bei einer Vervielfachung der Datenrate zu beachten?
> 1. Baudrate / Signalfrequenz
> 	- Höhere Datenrate bedeutet auch höhere Baudrate bzw. Bandbreite
> 	- Dämpfung nimmt mit steigender Signalfrequenz zu
> 	- Übersprechen (Crosstalk) nimmt mit steigender Frequenz zu!
> 1. Kompatibilität und Unterstützung von Systemen mit heterogenen Datenraten
> 	- Möglichst keine Konfiguration
> 	- Systemrelevante Parameter beibehalten

> [!toquiz]- Wieso möchte man einen ununterbrochenen Bitstrom?

> [!toquiz]- Wie erreicht die 100Base-TX Leitungscodierung einen ununterbrochenen Bitstrom?

> [!toquiz]- Was ist Bitstuffing?

> [!toquiz]- Was kann 10BASE-T?

> [!toquiz]- Was ist neu bei 100BASE-TX?

> [!toquiz]- Was ist neu bei 1000BASE-T?

> [!toquiz]- Was macht der Vollduplex Betrieb mittels Gabelschaltung?

> [!toquiz]- Was ist neu bei 10GBASE-T?

> [!toquiz]- Wie gross ist die Netzlast auf dem Port-Mirror, wenn Knoten A und B je mit 51% der nominellen Bitrate des Links Daten austauschen? Was ist die Konsequenz?
> Von den 102% geht 2% verloren und können nicht gemirrored werden.

> [!toquiz]- Was ist das Grundprinzip von Internetworking?

> [!quiz]- Was ist der Aufbau von IP-Adressen?
> Es gibt 4 Bytes. Der erste Teil ist die Netzadresse, der 2. Teil die Interfaceadresse (früher Host). Die Subnetzmaske bestimmt die Grenze. (Alle Bits, welche in der Maske eine 1 haben gehören zur Netzadresse)
> - Netzadresse: 2 Bytes + 2 Bytes Nullen
> - Broadcastadresse: 2 Bytes + 2 Bytes Einsen. Invertierte Maske

> [!quiz]- Was ist der Unterschied von Forwarding und Routing?
> Forwarding ist die Weiterleitung von Daten aufgrund der Routingtabelle und Routing ist das Aufbauen dieser Tabellen, statisch oder dynamisch. Die Routingtabelle enthält Netzadresse und Subnetzmaske und über welches Interface diese verfügbar sind. Routing ist sozusagen der Austausch von Routeninformationen.

> [!quiz]- Was ist ein Gateway?
> Dies ist der alte Name von Router. Neu ist es etwas, das alle OSI Schichten umfasst. ZB Mail oder Fax Gateway

> [!quiz]- Was macht ein Router?
> Der Router verbindet verschiedene Netze und versteht dafür also viele Protokolle. Für ein Netz ist der Router einfach ein Knoten es Netzes. Ein Router kann Netze verbinden, ZB LAN->Internet, Netze segmentieren um die Broadcast Domain zu limitieren oder Netze mit einer Firewall voneinander schützen. Die Router versuchen, Pakete möglichst optimal weiterzuleiten. Man kann die Topologie in kleinen Fällen konfigurieren oder in grossen Fällen ermitteln lassen.

> [!quiz]- Was gibt es für Routing Protokolle?
> - Interior Gateway Protocols IGP
> - Exterior Gateway Protocols (EGP)

> [!quiz]- Was ist ein Host?
> Ein Host ist ein Empfänger von TCP/IP. Jeder Host hat mindestens eine Adresse. Multi-Homed Hosts haben mehrere IP-Adressen. Die IP-Adresse identifiziert das Host-Interface.

> [!quiz]- Wie berechnet man die IP als Zahl?
> A.B.C.D -> D * 0 + C * 256 + B * 256 * 256 + A * 256 * 256 * 256

> [!quiz]- [[6_internet_1.pdf#page=31&selection=94,27,94,68|Berechnen Sie die fehlenden Informationen]]
> a) 17.8.0.0, 17.8.255.255, 65'536
> b) 255.255.224.0 /19, 11.7.191.255, 8'192
> c) 255.255.192.0 /18, 144.3.128.0, 16384
> d) 255.255.255.248 /29, 31.4.2.160, 31.4.2.167 

> [!quiz]- Was ist der Unterschied von flachem und hierarchischem Routing?
> Flaches Routing
> - Router kennt jedes Ziel
> - Redundanz da Ziele mehrmals gespeichert
> - Grosse Tabelle
> Hierarchisches Routing
> - Router kennt direkt angeschlossene Netze und einen weiteren Router
> - Wird nur am Rand genutzt
> - Kleine Tabelle

> [!quiz]- [[6_internet_1.pdf#page=40&selection=128,7,131,6|Was geschieht mit dem IP- Paket?]]
> a) Es wird nach gemäss dem 4. Eintrag der Routingtabelle von Router B an p0 weitergeleitet
> b) Es wird gemäss Eintrag 5 in der Routingtabelle von Router B an p2 weitergeleitet.
> c) Router C kann das IP Paket nicht weiterleiten, das IP-Paket erreicht den Empfänger nicht. Das Paket wird verworfen.

> [!quiz]- [[6_internet_1.pdf#page=43&selection=15,0,15,52|Welche Werte können in einer Subnetzmaske vorkommen?]]
> | Wert            | alternative | interfaces |
> | --------------- | --- | ---------- |
> | 255 (1111’1111) | /24 | 256 - 2    |
> | 254 (1111’1110)  | /23 | 512 - 2    |
> | 252 (1111’1100) | /22 | 1'024 – 2  |
> | 248 (1111’1000) | /21 | 2'048 - 2  |
> | 240 (1111’0000) | /20 | 4'096 - 2  |
> | 224 (1110’0000) | /19 | 8'192 - 2  |
> | 192 (1100’0000) | /18 | 16'384 - 2 |
> | 128 (1000’0000) | /17 | 32'768 – 2 |
> | 0 (0000’0000)   | /16 | 65'536 – 2 |

> [!quiz]- Was ist Classful Routing?
> Die ersten 4 Adress Bits werden genutzt, um die Klasse anzugeben. Die D Klasse ist für Multiclass-Adressen und die E Klasse reserviert für zukünftige Nutzung. Dies wird nicht mehr zur Vergabe von Blöcken benutzt. Die Klassen haben eine fixe Anzahl Maskenbits (8, 16, 24) Die Klassen haben einen präfixfreien Präfix.

> [!quiz]- [[6_internet_1.pdf#page=45&selection=22,7,24,16|Können Sie die Klassen der Netze bestimmen?]]
> Gelb: 30.0.x.x = Klasse B (/16) 
> Grün: 133.0.x.x = Klasse B (/16)
> Blau: 22.x.x.x = Klasse A (/8)
> Rot: 192.0.0.x = Klasse C (/24)

> [!quiz]- Was ist CIDR?
> Classless Inter-Domain Routing
> - Abschaffung der Klassen
> - Flexible Verwendung von Netzmasken beliebiger Länge
> - Aufteilung grosser Netze in kleinere Subnetze, Zusammenfassen mehrerer kleiner Netze zu einem gemeinsamen grösseren Netz

> [!quiz]- Was ist Supernetting?
> Hiermit können kleine Netze zusammengefügt werden. Z.B. 4 C Klassen Netze 198.51.100.0-198.51.103.0 -> 198.51.100.0

> [!quiz]- Was ist Subnetting?
> Hiermit wird ein grosses Netz in mehrere kleine aufgeteilt. ZB Um das Netz in 8 kleinere aufzuteilen, fügt man der Netzmaske 3 Einsen hinzu.

> [!quiz]- [[6_internet_1.pdf#page=49&selection=74,0,74,41|Wie würde das fünfte Netz gekennzeichnet?]]
>  160.85.128.0 / 255.255.224.0 oder 160.85.128.0 /19

> [!quiz]- Was gibt es für spezielle IP-Adressen?
> - Loopback-Adressen: Das Netz 127.0.0.0/8 wird and emuliertes Loopback-Gerät geschickt (braucht kein Netz)
> - Private Adressbereiche: Werden nicht weitergeleitet: 10.0.0.0 /8, 172.16.0.0 – 172.31.0.0 /16, 192.168.0.0 – 192.168.255.0 /24
> - Autoconfig-Adressen: 169.254.0.0 /16

> [!quiz]- Wie werden IP-Adressen verwaltet?
> IANA verwaltet und delegiert Adressen und delegiert die Verwaltung an Regional Internet Registries (RIR). Diese delegieren an Local/National Internet Registries (LIR, NIR), welche wiederum an Internet Service Provider (ISP) wie z.B. Switch oder Swisscom delegieren. ISPs vergeben Blöcke dank Supernetting.

> [!quiz]- Wieso benutzt man nicht überall Bridges statt Router?
> Weil Netz soll nicht zu gross sein soll, Broadcast soll nicht so weit gehen.

> [!quiz]- Wie lautet die Default Netzadresse?
> 0.0.0.0 mit Maske 0.0.0.0

> [!quiz]- Wieviele Bytes hat die MAC-Adresse?
> 6

> [!quiz]- Für was benutzt man Multicast-Adressen?
> ZB Streaming / Fernsehen wie Bluewin TV. Da der gleiche Content and viele Nutzer nicht individuell geschickt werden muss.

> [!quiz]- Wie sieht das IPv4-Header Format aus?
> - **Version (4 Bits)**: 4 oder 6
> - **Internet Header Length (IHL) (4 Bits)**: Maximale Länge = Länge * 4
> - **Differentiated Services (DS) (8 Bits)**: Erlaubt Priorisierung, Delay, Jitter von IP-Datenpaketen. Der Wert ist eine Qualitätsklasse. 
> - **Total Length (16 Bits)**
> - **Time to Live (TTL) (8 Bits)**: Dekrementierender Hop-Counter
> - **Protocol (8 Bits)**: ZB 1 ICMP, 6 TCP, 17 UDP
> - **Header Checksum (16 Bits)**: Schützt nur den IP-Header selbst, In jedem Router neu berechnet, wegen TTL etc.
> - **Source Address (32 Bits)**
> - **Destination Address (32 Bits)**
> - **Options / Padding (variabel)**
> - **Identification Number, Flags, Fragment Offset**
> 	- Identification Number (16 Bits)
> 	- Flags (3 Bits): 1 = Do/Dont Fragment, 2 = Last/More Fragments
> 	- Fragment Offset (13 Bits): Gibt an, wo in einem fragmentierten IP-Paket ein Fragment hingehört

> [!toquiz]- Wie funktioniert Ethernet-Encapsulation?
> - Das IP-Paket wird direkt im Nutzdatenteil des Frames übertragen
> - Das Type Feld des Ethernet Frames erhält den Wert 0800 (hex)
> - Die MTU ist damit 1500 Bytes

> [!quiz]- Wie funktioniert ARP?
> ARP = Address Resolution Protocol
> - Für das Senden von Daten an einen durch seine IP-Adresse identifizierten Knoten im lokalen Netz wird dessen Hardwareadresse benötigt.
> - Ist diese nicht bekannt, werden alle Knoten im Netz per Broadcast angefragt.
> - Der Knoten mit der angefragten IP-Adresse kennt seine eigene Hardwareadresse und sendet sie an den fragenden Knoten zurück.
> - Es gibt die ARP-Request "Who has 1.2.3.4" und die ARP-Response "1.2.3.4 is at 55.66.77.88.99.11" (IP zu MAC)
> - Die ARP-Tabelle speichert bekannte IP-MAC Kombinationen für eine gewisse Zeit

> [!quiz]- Wie wird ARP sonst noch verwendet?
> - Erkennung von Adresskonflikten:
> 	- Nach einer Adresszuweisung (manuell oder per DHCP) wird ein ARP-Request an die eigene IP- Adresse gerichtet, um zu prüfen, ob kein anderer Host im LAN die Adresse verwendet
> 	- Falls eine Antwort kommt, liegt ein Adresskonflikt vor
> - Erneuerung von Einträgen im ARP-cache
> 	- Linux Systeme senden in diesem Fall einen ARP-Request als Unicast
> 	- Reduziert Broadcast-Last im Netz

> [!toquiz]- Was ist ICMP?
> Internet Control Message Protocol. Hilfsprotokoll

> [!toquiz]- Was gibt es für IMCP Meldungstypen?

> [!toquiz]- Wie funktioniert TCP?
> - Flow Control
> 	- Verbindungsaufbau
> 		- Initialisierung von Sequenznummern
> 		- Aushandlen von Optionen
> 		- Initialisierung und Reservatiuon von Ressourcen
> 	- Nachrichtentausch (gleichzeitig möglich)
> 		- Sequence Numbers identifizieren jedes Byte des gesendeten Nutzdatenstroms
> 		- Acknowledge Numbers identifizieren bisher korrekt empfangene Bytes (der Gegenrichtung)
> 		- Flags steuern Verbindungsauf- und -abbau, signalisieren Gültigkeit von Informationen im Header und besondere Situationen. Beispiele: 
> 			- SYN/FIN: Verbindungsauf- und -abbau
> 			- ACK: Acknowledge Number im empfangenen Segment ist gültig
> 			- PSH: Daten sollen schnellstmöglich an Applikation weitergegeben werden
> 	- Verbindungsabbau
> 		- Sicherstellen des geordneten Austausches bis zum Ende
> 		- Freigabe der allozierten Ressourcen
> - Congestion Control
> - Error Control
v
> [!toquiz]- Wie funktioniert UDP?
> - 2 Bytes Source Port
> - 2 Bytes Destination Port
> - 2 Bytes Message Length
> - 2 Bytes Checksum

> [!quiz]- Welche Protokolle benutzen UDP?
> DNS, Time (NTP), DHCP

> [!quiz]- Welche Protokolle benutzen TCP?
> HTTP, Email(SMTP, POP/IMAP)

> [!toquiz]- Wie sehen IPv6 Adressen aus?

> [!toquiz]- Was ist NDP?

> [!toquiz]- Wie erkennt TCP verlorene Nachrichten?
> - **Stop & Wait**: Es wird die gesamte Round-Trip-Time lang gewartet.
> - **Sliding Window Protokoll**: Es wird mitgeteilt, wie viel Platz im Empfangsbuffer ist (Window=xyz). Solange noch Platz ist, wird geschickt. Wenn der Empfänger aus dem Buffer gelesen hat, schickt er ein Paket mit der neuen Window Grösse.

> [!toquiz]- Wie kann TCP den Datenfluss kontrollieren?

> [!toquiz]- Wie wird das Netz von Überlastung geschützt bei TCP?
> - Slow Start: Nicht direkt viele Pakete Schicken. Die Senderate wird mit der Zeit exponentiell erhöht bis zu einer Schwelle, dann linear erhöht. Wenn ein Problem auftritt wird die Senderate wieder zurückgesetzt und die Schwelle gesenkt.
> - Congestion Window

> [!toquiz]- Wie wählt man eine TCP-Puffergrösse?
> Bandwidth-Delay-Product = RTT * Bandbreite
> Bandbreite = Window Size / RTT
> Minimum Window Size = BPD / 8

> [!toquiz]- Wie wird das Timeout gewählt bei TCP?

> [!quiz]- [[08_transportlayer.pdf#page=31&selection=31,0,31,21|Übung Datenaustausch]]
> 1. +u+1 Sequenznummer
> 2. +v+1 Acknowledge, Nummer

> [!toquiz]- Wie sieht das TCP Zustandsdiagramm aus?

> [!toquiz]- Was ist ein Socket-Interface?

> [!toquiz]- Wie erkennt man dass der Port geschlossen ist?
> Es kommt zurück: Connection failed. In der Antwort ist ein Flag gesetzt, das daruaf hinweist, dass der Port geschlossen ist.

> [!toquiz]- Wie funktioniert DNS?

