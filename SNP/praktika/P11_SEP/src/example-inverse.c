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

void inverse(char* const pc) {
    char t;
    int l = strlen(pc);

    printf("\nl = %i", l);

    for(int i = 0; i < l/2; i++) {
        t = pc[i];
        pc[i] = pc[l - i - 1];
        pc[l - i - 1] = t;
    }
}

void example_inverse(){
    printf("\n>>> [START] Beispiel Inverse:\n");

    char c[] = "SEPFS16";
    char *p = c;
    inverse (p);
    printf ("\np = %s", p);

    printf("\n>>> [END] Beispiel Inverse.\n");
}