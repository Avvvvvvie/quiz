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



///// END Student Code



const int SCHALTJAHR_MOD = 4;
const int SCHALTJAHR_JAHRHUNDERT_MOD = 400;
const int JAHRHUNDERT = 100;


/** @brief Prueft ob ein Jahr ein Schaltjahr ist
*
* @param jahr Das zu pruefende Jahr
* @return 1 wenn ein Schaltjahr, sonst 0
*/
int istSchaltjahr(int jahr);


/**
 * @brief gibt die anzahl Tage pro Monat zurüeck
 * 
 * @param monat Monat für den die Tage berechnet werden sollen
 * @param jahr Jahr für den die Tage berechnet werden sollen
 * @return int Tage des Monates, -1 
 */
int tageProMonat(int monat, int jahr);

/**
 * @brief Fragt Nutzer nach einem Int wert
 * 
 * @param str Was gefrafgt werden soll
 * @param min  minimal wert
 * @param max maximal wert
 * @return int eingegebener wert gecappt
 */
int gibIntWert(char * str, int min, int max);


int main (int argc, char *argv[]) {
    
    int monat, jahr;
     
    //  Monat einlesen und Bereich ueberpruefen
    monat = gibIntWert("Monat", 1, 12);
    jahr  = gibIntWert("Jahr", 1600, 9999);
	
    //  Ausgabe zum Test
    printf("Monat: %d, Jahr: %d \n", monat, jahr);    
    
    //  Ausgabe zum Test (hier mit dem ternaeren Operator "?:")
    printf("%d ist %s Schaltjahr\n", jahr, istSchaltjahr(jahr) ? "ein" : "kein");

	// Ausgabe
	printf("Der Monat %02d-%d hat %d Tage.\n", monat, jahr, tageProMonat(jahr, monat));
   
    return 0;
}

// ACTUAL IMPLEMENTATION


int istSchaltjahr(int jahr) {
    int rest = 0;
    if (jahr % JAHRHUNDERT == 0) {
        rest =  jahr % SCHALTJAHR_JAHRHUNDERT_MOD;
    }
    rest = jahr % SCHALTJAHR_MOD;

    if (rest == 0) {
        return 1;
    }

    return 0;
}


int tageProMonat(int monat, int jahr) {
    if (jahr < 1599 || jahr > 10000) {
        return ERROR_IN_YEAR;
    }

    if (monat < 0 || monat > 12) {
        return ERROR_IN_MONTH;
    }

    if (monat == FEBRUAR) {
        if (istSchaltjahr(jahr)) {
            return 29;
        }
        return 28;
    }

    switch (monat) {
        case APRIL:
        case JUNI:
        case SEPTEMBER:
        case NOVEMBER:
        return 30;
    }
    
    return 31;
}


int gibIntWert(char * str, int min, int max) {
    int value;
    scanf("%s: %d", str, &value);

    if (min < value) {
        min = value;
    }

    if (value > max) {
        max = value;
    }

    return value;
}