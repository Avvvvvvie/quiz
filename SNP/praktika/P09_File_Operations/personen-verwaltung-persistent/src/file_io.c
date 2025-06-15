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
 * @brief Lab implementation
 */
#include <stdio.h>
#include <stdlib.h>

#include "file_io.h"
#include "person.h"
#include "list.h"

void perror_and_exit(const char *context) { perror(context); exit(EXIT_FAILURE); } // das muss noch an einen anderen Ort, scia

// May divide your code in further functions
// BEGIN-STUDENTS-TO-ADD-CODE

// END-STUDENTS-TO-ADD-CODE

void store_person_list(void)
{
	// BEGIN-STUDENTS-TO-ADD-CODE
    FILE *fp;
    char filename[] = "person_list.csv";
    fp = fopen(filename, "w");
    if (fp == NULL) {
        perror_and_exit("fopen");
    }
    person_t* person = list_getFirst();

    for(int i = 0; i < list_size(); i++) {
        char s[128];
        if(person_to_csv_string(person, s)){
            fprintf(fp, "%s\n", s);
        }
        person = list_getNext();
    }
    fclose(fp);
	// END-STUDENTS-TO-ADD-CODE
}

void load_person_list(void)
{
	// BEGIN-STUDENTS-TO-ADD-CODE
    FILE *fp;
    char filename[] = "person_list.csv";
    fp = fopen(filename, "r");
    if (fp == NULL) {
        return;
    }
    char s[128];
    list_init();
    while(fgets(s, 128, fp) != NULL) {
        person_t* person = malloc(sizeof(person_t));
        person_from_csv_string(person, s);
        list_insert(person);
    }
    fclose(fp);
	// END-STUDENTS-TO-ADD-CODE
}