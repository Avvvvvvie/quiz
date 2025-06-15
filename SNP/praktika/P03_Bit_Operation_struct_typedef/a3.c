#include <stdlib.h>
#include <stdio.h>


const char toLower(const char c) {
    // A = 65
    // a = 97

    // difference = 32 (1 << 5)
    // Set bit
    return c | (1 << 5);
}

const char toUpper(const char c) {
  return c & ~(1 << 5);
}

int main(){
  char word[8] = "sREedEv";
  char *wordptr = &word[0];

  while(wordptr < &word[7]) {
    printf("UPPERCASE: %c\n", toUpper(*wordptr));
    printf("LOWERCASE: %c\n", toLower(*wordptr));

    // '_' ist das Bit inverse von (1<<5)
    // ' ' ist (1<<5)
    wordptr++;
  }

  return EXIT_SUCCESS;
}