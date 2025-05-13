
> [!quiz]- Was ist der Unterschied der Hamming-Distanz und dem Hamming-Gewicht?
> Hamming-Gewicht: Distanz zu 000
> 
> Hamming Distanz: Distanz zu beliebigem Code (Erhältlich durch Hamminggewicht von codeword XOR codewort)

> [!quiz]- Wann ist ein Code systematisch?
> Wenn man etwas abhacken kann um die Informationsbits zu erhalten. (Kann auch in der Mitte 2x abgehackt werden)

> [!quiz]- Wann ist ein Code linear?
> Wenn man einen Code XOR  it einem anderen Code macht, erhält man einen neuen Code. Der Code 000 muss auch existieren.

> [!quiz]- Wann ist ein Code zyklisch?
> Wenn man den Code um 1 dreht, erhält man einen neuen Code

> [!quiz]- Wann ist ein Code perfekt?
> Hamming-Distanz ist immer gleich.

> [!toquiz]- Was ist die Fehlerwahrscheinlichkeit?

> [!quiz]- Was ist die Restfehlerwahrscheinlichkeit?
> Die Fehlerwahrscheinlichkeit, die dennoch besteht, nachdem man die Fehlerwahrscheinlichkeit gesenkt hat durch Paritätsbits.

> [!quiz]- Was ist die Coderate, wie wird sie berechnet?
> K/N, Informationsbit pro Codebit

> [!quiz]- Was ist die Kanalkapazität, wie wird sie berechnet?
> 1 - Hb(e) = 1 - Entropie der Störquelle (e & 1- e). 1 = ursprüngliche Kanalkapazität.
> 
> Wenn die Entropie 1 ist, dann hat man 0 Kanalkapazität. Und e ist in diesem Fall = 0.5

> [!quiz]- Wie macht man die Restfehlerwahrscheinlichkeit beliebig klein?
> Mehr Paritätsbits hinzufügen.

> [!quiz]- Wie weiss man, was der Betrag der Hamming-Distanz ist?
> Man zählt die Anzahl einsen im Codewort

> [!quiz]- Ist es bei parity wichtig, wie gross der 2D-Block ist?
> Nein.

> [!quiz]- Warum ist die Prüfsumme besser als Parität?
> Weil man mehr Fehler in einer Reihe (4, 5, 6...) Erkennen kann.

> [!quiz]- Wie rechnet man GF2 Plus, Minus und Mal?
> XOR, XOR und AND

> [!quiz]- Rechne (z^2 + z + 1)(z^2+z) auf zwei Wege
> z^4 + z
> 
> 10010 = z^4 + z

> [!quiz]- Was ist CRC?
> Cyclic Redundancy Check: Möglichst viele Fehler sollen erkennt werden können, mit Modulo-2-Polynomdivision. Es gibt ein Generator-Polynom, mit dem man den Bitstrom dividiert. Den Rest hängt man am Schluss an. Die Hammingdistanz hängt vom Generator-Polynom ab.

> [!quiz]- Wie ist ein CRC4 in der Hardware implementiert?
> Man braucht eine Clock und für jede Stelle ein Flip-Flop. Überall, wo das Teilerpolynom eine 1 hat, braucht es ein XOR. Ganz links, wo die höchste Stelle des Polynoms ist, braucht es dies nicht. Diese Stelle wird an den anderen Eingang aller XORs verknüpft. Erst wenn hier eine 1 steht, wird also "geteilt". Ansonsten werden die Bits durch die Clock weitergeschoben. Dadurch wird zB nicht 00101 geteilt sondern erst 10100. Am Ende wird geschaut, ob 0 übrig bleibt.

> [!quiz]- Wie viele Fehler kann CRC-XY mindestens erkennen und welche kann es nicht erkennen?
> Es kann keine vielfachen des Polynoms erkennen. Aber die Hamming-Distanz ist auch von der Länge der Daten abhängig und man kann es nur durch viele Tests herausfinden. 

> [!quiz]- "B1D" in binär?
> 101100011110

> [!quiz]- Wie kommt man auf die freie Distanz eines Faltungscodes?
> Man sucht den Code mit den wenigsten Einsen, aber mindestens eine.

> [!quiz]- Was sind OFDs?
> Optimum Free Distance Codes erreichen Dfree.

> [!toquiz]- Wie würde ein HW-Encoder-Schema für (1101b;1111b) aussehen?

> [!toquiz]- Wieso heisst der Faltungscode Faltungscode?

> [!quiz]- Wie heisst der Algorithmus, um den Faltungscode zu decodieren? Was macht er grob?
> Der Viterbi-Decoder.
> 1. Er ermittelt zur empfangenen Bitfolge c~ die am wahrscheinlichsten gesendete Bitfolge c^. (Die Folge, die am wenigsten Fehler hätte)
> 2. Durch Umkehrung der Encodierung berechnet er die zugehörige Info-Bitfolge u^. (Die Inputs, die die ermittelte Folge generieren)

> [!quiz]- Was für eine Qualität hat ein Faltungscode? (Adjektiv)
> Es ist ein linearer Code.

> [!quiz]- Wie ist UTF-8 codiert?
> UTF-8 kann verschiedene viele Anzahl Bytes haben. Im Anfang vom 1. Byte steht, wie viele Bytes zum Zeichen gehören. zB 110xxxxx => zwei Bytes. Die restlichen Bytes fangen mit 10 an. Es braucht immer eine 0 damit man weiss, dass jetzt die Infobits kommen.

> [!quiz]- Wie ist UTF-16 codiert?
> UTF-16 benutzt immer 2 oder 4 Bytes.

> [!quiz]- Wann ist ein Code präfixfrei?
> Wenn kein Codewort mit einem anderem Codewort anfängt / kein Präfix von einem anderen Code ist.

> [!quiz]- Wie sieht ein 1-Bit Halbaddierer & Volladdierer aus?
> ![[Pasted image 20231224100941.png]]

> [!quiz]- Wie notiert man diverse Logikgatter?
> ![[Pasted image 20231224100925.png]]

> [!quiz]- Wie werden üblicherweise negative Zahlen binär dargestellt?
> Das 1. Bit rechnet man nicht + sondern -. Das 1. Bit hat den grössten Wert von allen Bits der Zahl, also sind alle Zahlen, die mit einer 1 anfangen negativ. Z.B. 1001 = -8 + 1 = -7

> [!quiz]- Wie kann man binäre positive & negative Zahlen erweitern (in mehr Bits darstellen)?
> Bei positiven Zahlen fügt man Nullen vor die Zahl. Bei negativen Zahlen fügt man Einsen hinzu.

> [!quiz]- Was sind DMS und BMS?
> Discrete memoryless source und binary memoryless source.

> [!quiz]- Wie berechnet man den Informationsgehalt I eines Ereignisses?
> $$
> \log_{2}(P(n))
> $$

> [!quiz]- Wie berechnet man den mittleren Informationsgehalt = die Entropie H einer Quelle?
> $$
> \sum P(n)\cdot \log_{2}\left( \frac{1}{P(n)} \right)
> $$

> [!quiz]- Wie berechnet man die mittlere Länge L eines Codes?
> $$
> \sum P(n)\cdot l_{n}
> $$

> [!quiz]- Wie berechnet man die Redundanz R?
> L - H

> [!quiz]- Wie berechnet man die Coderate R?
> codierte bits / ursprünglich bits

> [!toquiz]- Wie funktioniert LZ77?

> [!toquiz]- Wie funktioniert LZW?

> [!toquiz]- Wieso beinhaltet die Generatormatirx die Codewörter?

> [!toquiz]- Wie kann man dFree beim Faltungscode herausfinden (Probeprüfung)?

> [!toquiz]- Was sind Redundanz, Coderate & Kompressionsrate?

> [!quiz]- Was ist clipping und wann passiert es?
> Wenn ein Wert beim Erstellen der Wav-Datei zu gross ist springt er runter ins negative. So geht die Sinuskurve eines Tones dann unten weiter. (anschauen in code)

> [!quiz]- Wie weiss man die Hamming-Distanz bei verschiedenen Codes?
> Linear => minimale Anzahl zeichen
> 
> sonst: zwischen allen codewörtern unterschied prüfen.
> 
> trellis: schauen wo es am wenigsten hoch geht/einsen hat
> 
> blockcode: ist linear
> 
> crc: sehr kompliziert, muss man simulieren, abhängig von anzahl infobits welche man schickt

> [!quiz]- Wie berechnet man die Anzahl Codewörter bei einem Blockcode?
> 2 hoch p (p = Breite der Paritätsmatrix)

