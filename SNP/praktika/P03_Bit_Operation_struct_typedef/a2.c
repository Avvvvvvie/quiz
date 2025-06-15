#include <stdlib.h>
#include <stdio.h>

int main(){
  int a = 3;
  int b = 4;
  printf("a: %d; b: %d\n", a, b);
  
  //
  // a = (a^b) 0011 ^ 0100 = 0111
  // b = (a^b) ^ b = 0111 ^ 0100 = 0011 (a!!)
  // a = (a^b) = 0111 ^ 0111 = 0100 


  a = a ^ b;        
  b = a ^ b; 
  a = a ^ b;
  
  printf("a: %d; b: %d\n", a, b);
  return EXIT_SUCCESS;
}