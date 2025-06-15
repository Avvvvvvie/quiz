```
/* ----------------------------------------------------------------------------
 * --  _____       ______  _____                                              -
 * -- |_   _|     |  ____|/ ____|                                             -
 * --   | |  _ __ | |__  | (___    Institute of Embedded Systems              -
 * --   | | | '_ \|  __|  \___ \   Zuercher Hochschule Winterthur             -
 * --  _| |_| | | | |____ ____) |  (University of Applied Sciences)           -
 * -- |_____|_| |_|______|_____/   8401 Winterthur, Switzerland               -
 * ----------------------------------------------------------------------------
 */
#include <stdio.h>

#include "read.h"


const int ASCII_SPACE   = 32; // ' '
const int ASCII_DIGIT_0 = 48; // '0'
const int ASCII_DIGIT_9 = 57; // '9'

const int NO_POS = -1;
const int BUFFERSIZE = 10;
const int EOL = 10;

/**
 * @file
 * @brief Lab implementation
 */
// begin students to add code for task 4.1



int getInt(int maxResult)
{
    int result = 0;
    int bytes = 0;
    char input = getc(stdin);
    char buffer[BUFFERSIZE];

    while ( (input != EOL) && (input != EOF) ) {
        if (bytes < BUFFERSIZE) {
            buffer[bytes] = input;
            bytes++;
        } else {
            result = PARSE_ERROR;
        }
        input = getc(stdin);
    }

    if (input == EOF) {
        result = READ_ERROR;
    }

    // check for numbers: skip leading and trailing spaces
    // (i.e. this includes all control chars below the space ASCII code)
    int pos = 0;
    while((pos < bytes) && (buffer[pos] <= ASCII_SPACE)) pos++; // skip SP
    int posOfFirstDigit = pos;
    int posOfLastDigit = NO_POS;
    while ((pos < bytes)
            && (buffer[pos] >= ASCII_DIGIT_0)
            && (buffer[pos] <= ASCII_DIGIT_9))
    {
        posOfLastDigit = pos;
        pos++;
    }
    while((pos < bytes) && (buffer[pos] <= ASCII_SPACE)) pos++; // skip SP

    // produce return value
    if (result != 0) {
        // previously detected read or parse error given
    } else if ((pos != bytes) || (posOfLastDigit == NO_POS)) {
        result = PARSE_ERROR;
    } else { // convert number
        for(int i = posOfFirstDigit; i <= posOfLastDigit; i++) {
            result = result * 10 + (buffer[i] - ASCII_DIGIT_0);
            if (result > maxResult) {
                result = PARSE_ERROR;
                break;
            }
        }
    }
    return result;
}
// end students to add code
```