//******************************************************************************
// Course:  BSy
// File:    main.c
// Author:  M. Thaler, ZHAW
// Purpose: locking mechanisms
// Version: v.fs20
//******************************************************************************

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#include "banking.h"
#include "mtimer.h"
#include "mrandom.h"

//******************************************************************************
// constant values

#define MAX_THREADS  16
#define NUM_THREADS   4
// Original run times:
// - 1 Thread:  1.34s
// - 2 Threads: 0.71s
// - 4 Threads: 0.40s

// With bank lock and account lock per sugguestion
// - 1 Thread:  1.54s
// - 2 Threads: program stuck after reading out balance
// - 4 Threads: program stuck after reading out balance

// With bank lock always first
// - 1 Thread:  1.54s
// - 2 Threads: 1.15s
// - 4 Threads: 1.14s

// With account lock always first  -> Why? I don't understand why this is faster than if you lock the bank first. Logically locking the bank first makes more sense to me.
// - 1 Thread:  1.55s
// - 2 Threads: 1.04s
// - 4 Threads: 0.82s

#define TRANSFERS (16*1024*1024)
#define ACCOUNTS  (2048)
#define BRANCHES  (128)

//******************************************************************************
// globals

int nThreads;

//******************************************************************************
// pusher

void *pusher(void *arg) {
    int idx = (int)(long)(arg);
    mrand_t rand;
    unsigned int seed = 17*idx;
    mrandInit(seed, &rand);
    int account, from, to, val;
    int count = TRANSFERS / nThreads;
    for (int i = 0; i < count; i++) {
        account = (int)(mrandUInt(&rand) % ACCOUNTS);
        from    = (int)(mrandUInt(&rand) % BRANCHES);
        to      = (int)(mrandUInt(&rand) % BRANCHES);
        val     = (int)(mrandRange(1000, 100000, &rand));
        val     = withdraw(from, account, val);
        deposit(to, account, val);
    }
}

//******************************************************************************
// main program

int main(int argc, char *argv[]) {

    gtimer_t timer;
    mrand_t  ranvar; 
    long     assets;

    // thread id's
    pthread_t th[MAX_THREADS];

    // get number of threads or default
    if (argc > 1)
        nThreads = atoi(argv[1]);
    else
        nThreads = NUM_THREADS;
    nThreads = (nThreads > MAX_THREADS) ? MAX_THREADS : nThreads; 

    mrandInit((MAX_THREADS + 1)*333, &ranvar);

    printf("\nRunning %d threads\n", nThreads);
    makeBank(BRANCHES, ACCOUNTS);
    for (int i = 0; i < ACCOUNTS; i++)
        deposit(0, i, mrandRange(10, 1000*1000, &ranvar));
    checkAssets();

    startGTimer(timer);
    // create threads and pass thread number
    for (long i = 0; i < nThreads; i++)
        pthread_create(&th[i], NULL, pusher, (void *)i);
    // wait for threads to terminate    
    for (int i = 0; i < nThreads; i++)
        pthread_join(th[i], NULL);
    stopGTimer(timer);

    checkAssets();
    printGTime(timer);
}

//******************************************************************************