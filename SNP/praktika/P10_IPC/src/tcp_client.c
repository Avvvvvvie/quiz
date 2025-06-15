#include <sys/types.h>
#include <sys/socket.h>
#include <sys/un.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "snp_error_handler.h"
#include "tcp_client.h"

#define RECEIVE_TIMEOUT 0
#define SEND_TIMEOUT 0


int client_connect(const char* ServerName, const char* PortNumber)
{
   // BEGIN-STUDENTS-TO-ADD-CODE
   
   

   struct addrinfo hints, *server_info, *p;
   
   

   memset(&hints, 0, sizeof(hints));

   
   hints.ai_family = AF_INET;
   hints.ai_socktype = SOCK_STREAM;

   

   int status = getaddrinfo(ServerName, PortNumber, &hints, &server_info);
   if (status != 0) {
      ExitOnError(status, "getaddrinfo");
   }

   int sockfd;
   for (p = server_info; p != NULL; p = p->ai_next) {
      if ((sockfd = socket(p->ai_family, p->ai_socktype, p->ai_protocol)) == -1) {
         ExitOnError(-2, "socket error");
         continue;
      }

      if (connect(sockfd, p->ai_addr, p->ai_addrlen) == -1) {
         close(sockfd);
         ExitOnError(-3, "connect error");
         continue;
      }

      break; // wenn erfolgreich verbunden, aus der Schleife ausbrechen
   }

    if (p == NULL) {
        fprintf(stderr, "Could not connect to server\n");
        return -1;
    }

    return sockfd;

   // END-STUDENTS-TO-ADD-CODE
}

int receiveResponse(int communicationSocket, char* buffer, int len)
{
   // BEGIN-STUDENTS-TO-ADD-CODE
   
   int totalReceived = 0;

   while (totalReceived < len) {
      int bytesReceived = recv(
         communicationSocket,
         buffer + totalReceived,
         len - totalReceived, 
         RECEIVE_TIMEOUT
      );
      if (bytesReceived == -1) {
         perror("error in recv");
         break;
      }

      totalReceived += bytesReceived;
   }

   return totalReceived;
   // END-STUDENTS-TO-ADD-CODE
}

void sendRequest(int communicationSocket, char* buffer, int len)
{
   // BEGIN-STUDENTS-TO-ADD-CODE
   // Request an den Server senden

   int totalSent = 0;

   while (totalSent < len) {
      int bytesSent = send(
         communicationSocket,
         buffer + totalSent,
         len - totalSent,
         SEND_TIMEOUT);

      if (bytesSent == -1) {
         perror ("Error in send");
         break;
      }
      totalSent += bytesSent;

   }
   // END-STUDENTS-TO-ADD-CODE
}

