#include "tcp_server.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <sys/types.h>
#include <sys/socket.h>

#include <netdb.h>
#include <unistd.h>


#include "snp_error_handler.h"
#include "stdbool.h"

#define RECEIVE_TIMEOUT 0
#define SEND_TIMEOUT 0
#define MAX_QUEUE 1

#define ExitOnError(S, MSG) printf(MSG); exit(S);


static int ListeningSocket = 0;
static int connectedSocket = 0; 

void server_init(char * portNumber){
   // BEGIN-STUDENTS-TO-ADD-CODE

   struct addrinfo hints, *server_info, *p;

   memset(&hints, 0, sizeof(hints));

   hints.ai_family = AF_INET;
   hints.ai_socktype = SOCK_STREAM;

   int status = getaddrinfo(NULL, portNumber, &hints, &server_info);
   if(status != 0){
      ExitOnError(status, "getaddrinfo");
   }

   int sockfd;
   for (p = server_info; p != NULL; p = p->ai_next) {
      if ((sockfd = socket(p->ai_family, p->ai_socktype, p->ai_protocol)) == -1) {
         perror("socket error");
         continue;
      }

      if (bind(sockfd, p->ai_addr, p->ai_addrlen) == -1) {
         close(sockfd);
         perror("connect error");
         continue;
      }

      break; // wenn erfolgreich verbunden, aus der Schleife ausbrechen
   }

   ListeningSocket = sockfd;

   listen(ListeningSocket, MAX_QUEUE);

   // END-STUDENTS-TO-ADD-CODE
}

int getRequest(char* requestBuffer, int max_len)
{
   // BEGIN-STUDENTS-TO-ADD-CODE
   int bytesReceived = recv(
      connectedSocket,
      requestBuffer,
      max_len -1,
      RECEIVE_TIMEOUT);
   requestBuffer[bytesReceived] = '\0';
   return bytesReceived;
   // END-STUDENTS-TO-ADD-CODE
}

void sendResponse(char* response, int resp_len)
{
   // BEGIN-STUDENTS-TO-ADD-CODE
   send(connectedSocket, response, resp_len, 0);
   // END-STUDENTS-TO-ADD-CODE
}

void server_close_connection(void)
{
   // BEGIN-STUDENTS-TO-ADD-CODE
   close(connectedSocket);
   // END-STUDENTS-TO-ADD-CODE
}


int wait_client(void) {
   connectedSocket = accept(ListeningSocket, 0, 0);
   printf("Client connected\n");
   return connectedSocket;
}