#include <stdlib.h>
#include <stdio.h>
#include <math.h>

#define RED   "\x1B[31m"
#define GRN   "\x1B[32m"
#define YEL   "\x1B[33m"
#define WHT   "\x1B[37m"
#define RESET "\x1B[0m"

/* 
Students: Create a new type "Graphic" that can store:
- shape (OVAL, RECTANGLE) -> create a new enum for this type
- size
- color
*/
enum SHAPE {
    OVAL = 0,
    RECTANGLE
};

typedef struct {
    int shape;
    unsigned int size;
    char * color;
} Graphic;


void paint(Graphic graphic) {
    double radius = graphic.size / 2.0;
    int i,j;

    for (i = 0; i <= 2 * radius; i++){
        for (j = 0; j <= 2 * radius; j++){
            switch(graphic.shape) {
                case RECTANGLE: printf("%s*" RESET, graphic.color); break;
                case OVAL: {
                    double distance = sqrt((i - radius) * (i - radius) + (j - radius) * (j - radius));
                    if (distance > radius - 0.5 && distance < radius + 0.5) {
                        printf("%s*" RESET, graphic.color);
                    } else { 
                        printf(" ");
                    }
                } break;

            }
        }
        printf("\n");
    }
}

int main() {
    int input;
    Graphic graphic;

    do {
        do 
        {
            printf("Geben Sie die gewünschte Form an [OVAL=0 | RECTANGLE=1]:");
            scanf("%d", &input);
        } while (input > 1);
        
        graphic.shape = input;
        // Students: store the input in graphic


        printf("Geben Sie die gewünschte Grösse an:");
        scanf("%u", &input);
        graphic.size = input;
        // Students: store the input in graphic

        do
        {
            printf("Geben Sie die gewünschte Farbe an [RED=0 | GREEN=1 | YELLOW=2]:");
            scanf("%d", &input);
        } while (input > 2);
        
        
        switch (input) {
            case 0: graphic.color = RED; break;
            case 1: graphic.color = GRN; break;
            case 2: graphic.color = YEL; break;
        }

        
        // Students: store the input in graphic
        
        paint(graphic);
        
        while(getchar() != '\n'); // empty buffer
        printf("\nMöchten sie weiter machen oder abbrechen? [(n)ext|(q)uit] ");
    } while(getchar() == 'n');

    printf("Byebye..\n");
    return EXIT_SUCCESS;
}