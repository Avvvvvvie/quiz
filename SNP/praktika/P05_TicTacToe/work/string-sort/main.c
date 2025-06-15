 /* ----------------------------------------------------------------------------
 * --  _____       ______  _____                                              -
 * -- |_   _|     |  ____|/ ____|                                             -
 * --   | |  _ __ | |__  | (___    Institute of Embedded Systems              -
 * --   | | | '_ \|  __|  \___ \   Zuercher Hochschule Winterthur             -
 * --  _| |_| | | | |____ ____) |  (University of Applied Sciences)           -
 * -- |_____|_| |_|______|_____/   8401 Winterthur, Switzerland               -
 * ----------------------------------------------------------------------------
 */
/**
 * @file
 * @brief Lab P05 A1 String Sort
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

enum Errors
{
    SUCCESS = 1,
    EVALUATE = -1,
    INVALID_LENGTH = -2
};
const int MAX_WORD_COUNT = 10;
const int MAX_STRING_SHOULD = 20;

// ARRAY Description in Memory

// A1 | A2 | A3 | A4
// All strings end with the String terminator \0
// If A1 is 20 characters long and you copy a exact 20 CHARACTER long string into it
// it is in reality 21 characters long, if this is ignored, and you count the string length
// it is returned 20, as the array is default initialized to 0
;// BUT: if A2 is set, the length will be 20 + strlen(A2)


// String terminator (\0) must be used
// otherwise the string doesn't have an end
const int MAX_STRING_LENGTH = MAX_STRING_SHOULD +1;

#define ABORT_STR "ZZZ\0"

int read_string(char * into_this);
void sort(char words[MAX_WORD_COUNT][MAX_STRING_LENGTH], int word_count);
void print_words(char words[MAX_WORD_COUNT][MAX_STRING_LENGTH], int word_count);

void evaulate(char words[MAX_WORD_COUNT][MAX_STRING_LENGTH], int word_count);


/**
 * @brief   main function
 * @param   argc [in] number of entries in argv
 * @param   argv [in] program name plus command line arguments
 * @returns returns success if valid date is given, failure otherwise
 */
int main(int argc, const char *argv[])
{

    int word_count = 0;
    char words[MAX_WORD_COUNT][MAX_STRING_LENGTH];

    while (word_count < MAX_WORD_COUNT) {
        int status = read_string(words[word_count]);

        switch (status)
        {
            case SUCCESS: {
                word_count++;
                break;
            }
            
            case EVALUATE:
            {
                evaulate(words, word_count);
                return 0;
            }
            case INVALID_LENGTH:
            {
                printf("Das eingegebene Wort ist länger als die maximale Länge: %d\n", MAX_STRING_LENGTH-1);
                break;
            }
        }
    }
    evaulate(words, word_count);

    return 0;
}


int read_string(char into_this[MAX_STRING_LENGTH])
{
    char buffer[MAX_STRING_LENGTH + 2];
    int len = 0;
    
    printf("Gib dein nächstes Wort ein: ");
    fgets(buffer, MAX_STRING_LENGTH +2, stdin);

    len = strlen(buffer);

    if (len > MAX_STRING_LENGTH) {
        return INVALID_LENGTH;
    }

    if (strcmp(buffer, ABORT_STR) == 0) {
        return EVALUATE;
    }

    strcpy(into_this, buffer);

    return SUCCESS;
}

void sort(char words[MAX_WORD_COUNT][MAX_STRING_LENGTH], int word_count) {
    for (int i=0; i < word_count; i++) {
        for (int j=i+1; j < word_count; j++) {

            if (strcmp(words[i], words[j]) > 0) {
                char temp[MAX_STRING_LENGTH];

                strcpy(temp, words[i]);
                strcpy(words[i], words[j]);
                strcpy(words[j], temp);
                break;
            }
        }
    }
}

void print_words(char words[MAX_WORD_COUNT][MAX_STRING_LENGTH], int word_count)
{
    for (int i=0; i < word_count; i++) {
        printf("%d. %s\n", i+1 ,words[i]);
    }
}

void evaulate(char words[MAX_WORD_COUNT][MAX_STRING_LENGTH], int word_count)
{
    sort(words, word_count);
    print_words(words, word_count);
}