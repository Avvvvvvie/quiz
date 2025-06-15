```
#ifndef __LIST_H__
#define __LIST_H__

#include "person.h"

enum ListErrors {
  SUCCESS = 0,
  CONTENT_ALREADY_EXISTS,
  FAILED_TO_ALLOC_MEMORY,
  CONTENT_DOES_NOT_EXIST
};

typedef struct node {
  person_t     content;        // in diesem Knoten gespeicherte Person
  struct node *next;           // Pointer auf den nächsten Knoten in der Liste
} node_t;

node_t* list_insert(person_t * person);

node_t* list_remove(person_t * person);


int list_clear();
void list_show();


#endif //! __LIST_H__
```