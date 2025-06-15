```
/**
 *  P02 Praktikum
 *
 *  Das Programm liest einen Monat (1-12) und ein Jahr (1600-2400) ein und
 *  gibt die Anzahl der Tage dieses Monats aus.
 *
 *  @author Gerrit Burkert, Adaptation bazz
 *  @version 15-FEB-2013, 16-OCT-2017, 17-OCT-2019, 16-FEB-2022
 */

#include <stdio.h>
#include <stdlib.h>

#define ERROR_IN_MONTH 1
#define ERROR_IN_YEAR 2

///// Student Code


#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Enum zur besseren Lesbarkeit der Monate
typedef enum {
    JAN = 1, FEB, MAR, APR, MAI, JUN, JUL, AUG, SEP, OKT, NOV, DEZ
} month_t;

// Funktion zum Einlesen eines Integer-Wertes mit Bereichsprüfung
int gibIntWert(const char *text, int min, int max) {
    int wert;
    char eingabe[100];
    
    while (1) {
        (void) printf("Bitte geben Sie %s ein (%d-%d): ", text, min, max);
        fgets(eingabe, sizeof(eingabe), stdin);
        
        // Umwandlung in Integer
        wert = atoi(eingabe);
        
        // Bereichsprüfung
        if (wert >= min && wert <= max) {
            return wert;
        }
        (void) printf("Ungültige Eingabe. Bitte erneut versuchen.\n");
    }
}

// Funktion zur Bestimmung, ob ein Jahr ein Schaltjahr ists
int istSchaltjahr(int jahr) {
    if ((jahr % 4 == 0 && jahr % 100 != 0) || (jahr % 400 == 0)) {
        return EXIT_SUCCESS;
    }
    return EXIT_FAILURE;
}

// Funktion zur Bestimmung der Tage pro Monat
int tageProMonat(int jahr, int monat) {
    switch (monat) {
        case JAN: case MAR: case MAI: case JUL: case AUG: case OKT: case DEZ:
            return 31;
        case APR: case JUN: case SEP: case NOV:
            return 30;
        case FEB:
            return istSchaltjahr(jahr) ? 29 : 28;
        default:
            return EXIT_FAILURE; // Sollte nie auftreten, da Bereichsprüfung vorher erfolgt
    }
}


///// END Student Code


int main (int argc, char *argv[]) {
    
    int monat, jahr;
     
    //  Monat einlesen und Bereich ueberpruefen
    monat = gibIntWert("Monat", 1, 12);
    jahr  = gibIntWert("Jahr", 1600, 9999);
	
    //  Ausgabe zum Test
    (void) printf("Monat: %d, Jahr: %d \n", monat, jahr);    
    
    //  Ausgabe zum Test (hier mit dem ternaeren Operator "?:")
    (void) printf("%d ist %s Schaltjahr\n", jahr, istSchaltjahr(jahr) ? "ein" : "kein");

    // Ausgabe
    (void) printf("Der Monat %02d-%d hat %d Tage.\n", monat, jahr, tageProMonat(jahr, monat));
   
    return EXIT_SUCCESS;
}
```