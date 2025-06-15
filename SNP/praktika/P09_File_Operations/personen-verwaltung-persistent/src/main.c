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

#define S_(x) #x
#define S(X) S_(X)

person_t *scan_person();


void end_this(int *running) {
    store_person_list();
    //printf("Program terminated");
    *running = 0;
}

/**
 * @brief Main entry point.
 * @param[in] argc  The size of the argv array.
 * @param[in] argv  The command line arguments...
 * @returns Returns EXIT_SUCCESS (=0) on success, EXIT_FAILURE (=1) there is an expression syntax error.
 */
int main(int argc, char* argv[])
{
	
	// BEGIN-STUDENTS-TO-ADD-CODE
	list_init();
	// person_t *person;
	// node_t *anchor = malloc(sizeof(node_t));
	// anchor->next = anchor;

	
	
	load_person_list();
	int running = 1;
	char command;
	
	do{  
		printf("Personenverwaltung\n");
		printf("I(nsert), R(emove), S(how), C(lear), E(nd): \n");
		
		command = getchar();
		command = command & '_';
		
		switch (command)
		{
			case 'I':{
				
				printf("-----------------------\n");
				printf("Insert person into list\n");
				person_t *person = malloc(sizeof(person_t));
				person_read(person);
				list_insert(person);
				store_person_list();
				break;
			}
			case 'R':{
				if (list_size == 0){
					printf("List is empty, nothing to remove.\n\n");
					break;
				}
				printf("-----------------------\n");
				printf("Remove person into list\n");				
				person_t *person = malloc(sizeof(person_t));
				person_read(person);
				list_remove(person);
				store_person_list();
				break;
			}
			case 'S':{
				list_show();
				break;
			}
			case 'C':{
				list_clear();
				break;
			}
			case 'E':{
				end_this(&running);
				break;
			}
		}
	} while (running);

	// END-STUDENTS-TO-ADD-CODE
    return EXIT_SUCCESS;
}
/* 
person_t *scan_person() {
	person_t *person = malloc(sizeof(person_t));
	
	printf("Name: ");
	scanf("%" S(NAME_LEN) "s", person->name);
	printf("Firstname: ");
	scanf("%" S(NAME_LEN) "s", person->first_name);
	printf("Age: ");
	scanf("%u", &person->age);
	
	return person;
}
 */
