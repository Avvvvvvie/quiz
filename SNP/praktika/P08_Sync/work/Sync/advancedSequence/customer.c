/*******************************************************************************
* File:     customer.c
* Purpose:  simple sequence with semaphores
* Course:   bsy
* Author:   M. Thaler, 2011
* Revision: 5/2012, 7/2013
* Version:  v.fs20
*******************************************************************************/

#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

#include <sys/mman.h>
#include <fcntl.h>
#include <semaphore.h>

#include "commonDefs.h"

//******************************************************************************

int main(int argc, char *argv[]) {

    int      i, myID;
    sem_t    *myTurn, *coin, *coffee, *ready;

    if (argc > 1)
        myID = atoi(argv[1]);
    else
        myID = 0;

    // set up a semaphore
    myTurn = sem_open(MYTURN_SEMAPHOR, 0);
    coin   = sem_open(COIN_SEMAPHOR,   0);
    coffee = sem_open(COFFEE_SEMAPHOR, 0);
    ready  = sem_open(READY_SEMAPHOR,  0);

    // start customer
    printf("Customer starting (%d)\n", myID);

    // now check the sum 
    for (i = 0; i < ITERS; i++) {
        printf("customer(%d) waiting for myTurn\n", myID);
        sem_wait(myTurn);

        printf("customer(%d) waiting for ready\n", myID);
        sem_wait(ready);
        for(int j = 0; j < NUM_COIN; j++) {
            printf("\t\t\t\tcustomer(%d) put coin %d\n", myID, i);
            sem_post(coin);
        }
        printf("\t\t\t\tcustomer(%d) waiting for coffee %d\n", myID, i);
        sem_wait(coffee);
        printf("\t\t\t\tcustomer(%d) got coffee %d\n\n", myID, i);
        sem_post(myTurn);
        drinkingCoffee(myID);
    }
}

//******************************************************************************
