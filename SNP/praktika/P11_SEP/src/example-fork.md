```
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <stddef.h>
#include <stdint.h>
#include <ctype.h>
#include <assert.h>
#include <errno.h>
#include <time.h>
#include <netinet/in.h>
#include <sys/time.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <sys/wait.h>
#include <signal.h>
#include <unistd.h>
#include <netdb.h>
#include <pthread.h>
#include <sched.h>

#define PERROR_AND_EXIT(M) do{perror(M);exit(EXIT_FAILURE);} while(0)

void example_fork(){
    printf("\n>>> [START] Beispiel Fork:\n");

    pid_t cpid = fork();

    if(cpid == -1) {
        PERROR_AND_EXIT("fork");
    }

    if (cpid > 0) {
        printf("\n%d: I am the parent!", cpid);
    } else {
        printf("\n%d: I am the child!", cpid);
        printf("\n>>> [END] Beispiel Fork.\n");
    }
}