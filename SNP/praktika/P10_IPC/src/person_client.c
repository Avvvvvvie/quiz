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
#include <ctype.h>

#include "person.h"
#include "list.h"
#include "tcp_client.h"
#include <unistd.h>


int person_cmd(int commSock,char cmd, person_t* person)
{
    char request_buffer[MAX_LEN+1];
    request_buffer[0] = cmd;
    int len = person_to_csv_string(person,&request_buffer[2]);
    printf("person_cmd: &request_buffer[2]=%s, len+2=%d\n",&request_buffer[2], len+2);

    sendRequest(commSock, request_buffer, len+3);
    printf("Request sent: ");
    
    char retval = 0; 
    receiveResponse(commSock,&retval, 1);


    switch (retval)
    {
        case 1: printf("Success\n"); break;
        case 0: printf("Not found\n"); break;
        case 2: printf("Invalid data\n"); break;
        default: printf("Invalid response: %d\n", retval); break;
    }

    return retval;
}

void list_show_cmd(int commSock)
{
    char list_show_cmd = 'S';
	 
    sendRequest(commSock, &list_show_cmd,1);

	 char noOfRecords = 0;

	 receiveResponse(commSock, &noOfRecords, 1);
	 printf("list_show_cmd: noOfRecords=%d\n",noOfRecords);
	 for(char i = 1;i<=noOfRecords;i++)
	 {
		char noOfBytes =0;
		const unsigned char buflen =255;
		char buffer[buflen];
	   	int r1 = receiveResponse(commSock, &noOfBytes, 1);
	   	int r2 = receiveResponse(commSock, buffer    , noOfBytes);
		person_t person;
		person_from_csv_string(&person,buffer);
		printf("%20s %20s %u\n", person.name, person.first_name, person.age);
	 }
}

void list_clear_cmd(int commSock)
{
    char list_clear_cmd = 'C';
    sendRequest(commSock, &list_clear_cmd,1);
}
void server_terminate_cmd(int commSock)
{
    char list_clear_cmd = 'T';
    
    sendRequest(commSock, &list_clear_cmd,1);
}

void insert_cmd(int socket)
{
    person_t* person = malloc(sizeof(person_t));

    printf("INSERT\n");
    printf("Format: Firstname Lastname Age\n");
    while (person_read(person) == -1) {
        printf("Invalid format");
    }


    person_cmd(socket, 'I', person);
}

void remove_cmd(int socket)
{
    person_t* person = malloc(sizeof(person_t));

    printf("REMOVE\n");
    printf("Format: Firstname Lastname Age\n");
    while (person_read(person) == -1) {
        printf("Invalid format");
    }

    person_cmd(socket, 'R', person);
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
    int socket = client_connect("localhost", "5000");
    
    if (socket == -1) {
        return EXIT_FAILURE;
    }


    int isRunning = 1;
    char next = 0;

    printf("====================================\n");
    printf("Insert (I)\n");
    printf("Remove (R)\n");
    printf("Show (S)\n");
    printf("Clear (C)\n");
    printf("Terminate (T)\n");
    printf("====================================\n");

    while (isRunning) {
        

        scanf("%c", &next);

        switch (next)
        {
            case 'I':
            case 'i':
            {
                insert_cmd(socket);
                break;
            }
            case 'R':
            case 'r':
            {
                remove_cmd(socket);
                break;
            }
            case 'S':
            case 's':
            {
                list_show_cmd(socket);
                break;
            }
            case 'C':
            case 'c':
            {
                list_clear_cmd(socket);
                break;
            }
            case 'T':
            case 't':
            {
                server_terminate_cmd(socket);
                close(socket);
                return EXIT_SUCCESS;
            }
            default: 
            {
                if (next == 0xa) {
                    break;
                }
                printf("Unknown command: 0x%x\n", next);
                break;
            }
        }

    }

	// END-STUDENTS-TO-ADD-CODE
    return EXIT_SUCCESS;
}
