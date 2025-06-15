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
#include <signal.h>

#include "list.h"
#include "person.h"

#define EXIT_CHAR 'e'
#define INSERT_CHAR 'i'
#define REMOVE_CHAR 'r'
#define SHOW_CHAR 's'
#define CLEAR_CHAR 'c'


void do_insert();
void do_remove();
void do_show();
void do_clear();

void flushStdin();
void scan_person(person_t *person);

static volatile int keepRunning = 1;

void intHandler(int dummy) {
    keepRunning = 0;
}


/**
 * @brief Main entry point.
 * @param[in] argc  The size of the argv array.
 * @param[in] argv  The command line arguments...
 * @returns Returns EXIT_SUCCESS (=0) on success, EXIT_FAILURE (=1) there is an expression syntax error.
 */
int main(int argc, char* argv[])
{
	signal(SIGINT, intHandler);

	// BEGIN-STUDENTS-TO-ADD-CODE
    printf("Personenverwaltung\n");
    printf("------------------\n");
    printf("Press: I(nsert), R(emove), S(how), C(lear), E(xit)\n");

	int pressedKey;

	while ((pressedKey = getchar())) {

		if (pressedKey == EXIT_CHAR) {
			return EXIT_SUCCESS;
		}

		//printf(pressedKey);

		switch (pressedKey) {
			case EXIT_CHAR: {
				return EXIT_SUCCESS;
			}
			case INSERT_CHAR: {
				do_insert();
				break;
			}
			case REMOVE_CHAR: {
				do_remove();
				break;
			}

			case CLEAR_CHAR: {
				do_clear();
				break;
			}
			case SHOW_CHAR: {
				do_show();
				break;
			}

		}

		printf("Personenverwaltung\n");
        printf("------------------\n");
        printf("Press key for I(nsert), R(emove), S(how), C(lear), E(xit)\n");
	}
	// END-STUDENTS-TO-ADD-CODE
    return EXIT_SUCCESS;
}


void flushStdin() {
    int c;
    while ((c = fgetc(stdin)) != '\n' && c != EOF);
}


void do_insert() {

	printf("Insert new person.\n");
	printf("-----------------------\n");

	person_t * person = (person_t*)malloc(sizeof(person_t));
	scan_person(person);
	node_t* status = list_insert(person);
	if (status == NULL) {
		printf("Duplicate entry!\n");
	}

}
void do_remove() {
	printf("Delete an existing person.\n");
	printf("-----------------------\n");

	person_t  person;
	scan_person(&person);
	list_remove(&person);
}
void do_show() {
	list_show();
	printf("\n");
}
void do_clear() {
	list_clear();
}


void scan_person(person_t *person) {
    printf("Name: ");
    scanf("%20s", person->name);
    flushStdin();
    printf("Firstname: ");
    scanf("%20s", person->first_name);
    flushStdin();
    printf("Age: ");
    scanf("%u", &person->age);
    flushStdin();
}
