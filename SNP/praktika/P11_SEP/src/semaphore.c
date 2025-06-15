#include <sys/types.h>
#include <pthread.h>
#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <limits.h>
#include <semaphore.h>

#define FATAL(M) do { perror(M); exit(EXIT_FAILURE); } while(0)
#define CHECK(E,A,M) if((E)==(A));else fprintf(stderr,"ERROR: "M": exp=%d, act=%dn",E,A)

#define N 10000

volatile int array[N] = { 0 }; // shared variable: init in one thread, then use in both
sem_t sem;

void *min (void *arg) // initialize the data and calculate min value of all
{
    for(int i = 0; i < N; i++) array[i] = i - N/2; // init the shared data -N/2...N-1-N/2
    if (sem_post(&sem) == -1) FATAL("post");
    int value = INT_MAX;
    for(int i = 0; i < N; i++) if(value > array[i]) value = array[i];
    CHECK(-N/2, value, "wrong min value");
    return NULL;
}

void *max (void *arg) // calculate max value of already initialized data
{
    if (sem_wait(&sem) == -1) FATAL("wait");
    int value = INT_MIN;
    for(int i = 0; i < N; i++) if(value < array[i]) value = array[i];
    CHECK(N-1-N/2, value, "wrong max value");
    return NULL;
}

int main(void)
{
    if (sem_init(&sem, 0, 0) == -1) FATAL("sem");
    pthread_t th_max;
    pthread_t th_min;

    if (pthread_create(&th_max, NULL, max , NULL) != 0) FATAL("create");
    if (pthread_create(&th_min, NULL, min , NULL) != 0) FATAL("create");

    if (pthread_join(th_max, NULL) != 0) FATAL("join");
    if (pthread_join(th_min, NULL) != 0) FATAL("join");

}