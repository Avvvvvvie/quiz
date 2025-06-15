#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#include "list.h"

node_t headElement;
node_t * head = &headElement;


void list_delete(node_t * node);
node_t* list_find(person_t* person);

node_t* list_insert(person_t * person)
{
    node_t *pos = list_find(person);
    if (pos == NULL)
        return NULL;

    node_t *oldNext = pos->next;
    pos->next = (node_t *) malloc(sizeof(node_t));
    if (pos->next == NULL)
        return NULL;

    pos->next->content = *person;
    pos->next->next = oldNext;

    return pos->next;
}

node_t* list_remove(person_t * person)
{
    node_t *curr = head;
    node_t *prev;
    while (curr != NULL && curr->next != NULL) {
        if (person_compare(&curr->content, person) == 0) {
            break;
        }
        prev = curr;
        curr = curr->next;
    }
    if (curr == NULL || person_compare(&curr->content, person) != 0)
        return;

    prev->next = curr->next;
    list_delete(curr);
}


int list_clear()
{
    node_t *curr = head->next;
    while (curr != NULL) {
        node_t *next = curr->next;
        list_delete(curr);
        curr = next;
    }
    head->next = NULL;
}


void list_show() {
    node_t *curr = head->next;
    while (curr != NULL) {
        printf("%20s  |  %20s  |   %2u\n", curr->content.name, curr->content.first_name, curr->content.age);
        curr = curr->next;
    }
}

node_t* list_find(person_t* person)
{
    if (head->next == NULL) {
        return head;
    }

    node_t * prev = head;
    node_t * curr = head->next;

    while (curr != NULL) {
        int comparison = person_compare(&curr->content, person);

        if (comparison == 0) {
            return NULL;
        }

        if (comparison > 0) {
            return prev;
        }

        prev = curr;
        curr = curr-> next;
    }

    if (curr == NULL) {
        return prev;
    }

    if (person_compare(&curr->content, person) == 0) {
        return NULL;
    }

    return curr;
}

void list_delete(node_t * node) {
    node->next = NULL;
    node = NULL;
    free(node);
}