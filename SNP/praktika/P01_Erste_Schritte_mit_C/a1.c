#include <stdio.h>

// Function Declarations
// Let the compiler know how to call these functions
// Yet the implementation is done further in the code
// Should be put into a header, if needed elsewhere
void A2 (void);
void A3 (void);
void A4 (void);

const int NUM_ROWS = 10;        // Type Safe (yeaah)
#define A3_CONV_STEP 200

int main(void) {
    // Call 
    A2();
    A3();
    A4();
}

// Function Definitions

void A2 (void) {
    // A1 simple printf
    printf("Hello world\n");
}

void A3 (void) {
    char c;
    double conversion_rate = 1; // Default value

    printf("Enter conversion rate (1.00 BTC -> CHF): ");
    scanf("%lf", &conversion_rate);

    // 1 BTC = x CHF (conversion_rate)
    // 1 CHF = 1 / conversion_rate
    // 200 CHF = 1 / conversion_rate * 200 = 200 / conversion_rate

    for (int i=1; i < NUM_ROWS+1; i++) {
        int chf = i * A3_CONV_STEP;

        // some fancy printout
        // %8d => right allign (fill 8 characters with empty) (int)
        // %10lf => rigth allign (fill 10 characters, with 4 decimals)
        printf("%8d CHF <--> %10.4lf BTC\n", chf, ((double)chf)/conversion_rate);
    }

    // who knew Scanf doesnt clear the input buffer
    while((c = getchar()) != '\n' && c != EOF)
    {}
}


void A4 (void) {

    // read from input
    int c = '\0';
    int total_words = 0;
    int total_characters = 0;
    int last_characters = 0;
    printf ("Let me count: ");
    
    // abort on newline
    while (c != '\n') {

        //
        c = getchar();
        
        if ( (c == '\t' || c == ' ' || c == '\n')) {
            if (last_characters > 0) {
                total_words ++;
            }
            last_characters = 0;
        }
        else {
            last_characters ++;
            total_characters++;
        }
        
    }
    
    printf("Words: %d\n", total_words);
    printf("Total Characters: %d\n", total_characters);
}