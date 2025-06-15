```
#include <string.h>

#include "person.h"



int person_compare(const person_t *a, const person_t *b)
{
    int result = strcmp(a->name, b->name);

    if (result != 0) {
        return result;
    }

    result = strcmp(a->first_name, b->first_name);

    if (result != 0) {
        return result;
    }

    return a->age - b->age;

}

```