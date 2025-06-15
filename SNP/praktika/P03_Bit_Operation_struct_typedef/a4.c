#include <stdio.h>
#include <stdlib.h>


int is_power_of_two(int value) {
    int bits = sizeof(value) * 4;
  
  int set = 0;
  for (int i=0; i < bits; i++) {
      int mask = (0x01<<i);
      
      if ((value&mask) == mask) {
          
          set ++;
      }
      
      if (set > 1) {
          
          return 0;
      }
  }
  
  return 1;
}

int main(){
  int a = 16; // any positive number
  
  if(a > 0 && is_power_of_two(a) == 1){
    printf("%d is a power of 2", a);
  }

  return EXIT_SUCCESS;
}