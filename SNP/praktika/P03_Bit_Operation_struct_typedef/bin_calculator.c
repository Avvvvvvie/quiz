#include <stdlib.h>
#include <stdio.h>

#define OPERAND_BUFFER_SIZE 10

typedef struct {
    /* 
    Students: The Expression struct should hold the two operands and
    the operation (use a char for the operation)
    */


    unsigned int OperandA;
    unsigned int OperandB;
    char Operation;
} Expression;

int bits_per_int() {
    return sizeof(unsigned int) * 8;
}

unsigned int parse_operand(char operand_str[]) {
    unsigned int operand;
    if (operand_str[0] == '0' && operand_str[1] == 'x') {
        sscanf(&operand_str[2], "%x", &operand);
    } else if (operand_str[0] == '0') {
        sscanf(&operand_str[1], "%o", &operand);
    } else {
        sscanf(operand_str, "%u", &operand);
    }
    return operand;
}

void print_binary(unsigned int value, int print_new_line) {
    // Students: Print a single number as a binary string
    int bits = sizeof(value) * 8 -1;
    

    for (int i=bits; i >= 0; i--) {
        int is_set = ((value >> i) & 0x01) == 0x01;
        
        printf ("%d", is_set >= 1 ? 1 : 0);
        
        if (i%8 == 0 && i > 0) {
            printf("'");
        }
    }

    if (print_new_line) {
        printf("\n");
    }
    
}

void print_bit_operation_bin(Expression expression, unsigned int result) {


    printf("Bin:\n");
    print_binary(expression.OperandA, 1);
    print_binary(expression.OperandB, 0);
    printf(" %c\n", expression.Operation);
    printf("-----------------------------------\n");
    print_binary(result, 1);
}




void print_bit_operation_hex(Expression expression, unsigned int result) {

    printf("Hex:\n");
    printf("0x%X %c 0x%X", expression.OperandA, expression.Operation, expression.OperandB);
    printf("= 0x%X\n", result);
}

void print_bit_operation_dec(Expression expression, unsigned int result) {
    

    printf("Dec:\n");
    printf("%d %c %d", expression.OperandA, expression.Operation, expression.OperandB);
    printf("= %d\n", result);
}

unsigned int bit_operation(Expression expression) {
    // Students: Do the actual bit operation and return the result

    switch (expression.Operation) {
        case '&': return expression.OperandA & expression.OperandB;
        case '^': return expression.OperandA ^ expression.OperandB;
        case '|': return expression.OperandA | expression.OperandB;
        case '<': return expression.OperandA << expression.OperandB;
        case '>': return expression.OperandA >> expression.OperandB;
    }

    return 0;
}

int main(){
    char operand1_str[10];
    char operand2_str[10];
    char operation;

    unsigned int operand1, operand2;

    do {
        printf("Geben sie die Bit-Operation ein:\n");

        scanf("%s %c %s", operand1_str, &operation, operand2_str);
        
        operand1 = parse_operand(operand1_str);
        operand2 = parse_operand(operand2_str);

        Expression expression = {
            operand1,
            operand2,
            operation
        };   // Students: Create an expression

        unsigned int result = bit_operation(expression);
        print_bit_operation_bin(expression, result);
        print_bit_operation_hex(expression, result);
        print_bit_operation_dec(expression, result);

        while(getchar() != '\n');
        printf("\nMöchten sie weiter machen oder abbrechen? [(n)ext|(q)uit] ");

    } while(getchar() == 'n');

    printf("Byebye..\n");
    return EXIT_SUCCESS;
}



// Setting bit 3
// x |= (1 << 3);

// Clearing bit 3
// x &= ~(1 << 3);  //shift x bit (and invert therefore the bit will be set to zero)
//
//      x = 1101
//      (1 << 3) = 1000
//      ~(1 << 3) = 0111
//      1101 &
//      0111
//      0101


// Toggle bit (^)
//      x = 1101
//