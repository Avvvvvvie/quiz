/* ----------------------------------------------------------------------------
 * --  _____       ______  _____                                              -
 * -- |_   _|     |  ____|/ ____|                                             -
 * --   | |  _ __ | |__  | (___    Institute of Embedded Systems              -
 * --   | | | '_ \|  __|  \___ \   Zuercher Hochschule Winterthur             -
 * --  _| |_| | | | |____ ____) |  (University of Applied Sciences)           -
 * -- |_____|_| |_|______|_____/   8401 Winterthur, Switzerland               -
 * ----------------------------------------------------------------------------
 */
/**
 * @file
 * @brief Test suite for the given package.
 */
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <time.h>
#include <assert.h>
#include <CUnit/Basic.h>
#include "test_utils.h"

#include "../src/person.h"
#include "../src/list.h"

#ifndef TARGET // must be given by the make file --> see test target
#error missing TARGET define
#endif

/// @brief alias for EXIT_SUCCESS
#define OK   EXIT_SUCCESS
/// @brief alias for EXIT_FAILURE
#define FAIL EXIT_FAILURE

/// @brief The name of the STDOUT text file.
#define OUTFILE "stdout.txt"
/// @brief The name of the STDERR text file.
#define ERRFILE "stderr.txt"

#define TRACE_INDENT "\n                " ///< allow for better stdout formatting in case of error

// setup & cleanup
static int setup(void)
{
    remove_file_if_exists(OUTFILE);
    remove_file_if_exists(ERRFILE);
    return 0; // success
}

static int teardown(void)
{
    // Do nothing.
    // Especially: do not remove result files - they are removed in int setup(void) *before* running a test.
    return 0; // success
}

// tests
static void test_person_compare(void)
{
	// BEGIN-STUDENTS-TO-ADD-CODE
	// arrange
	person_t p1;
	strcpy(p1.name, "Zaugg");
	strcpy(p1.first_name, "Valentin");
	p1.age = 26;


	person_t p2;
	strcpy(p2.name, "Zaugg");
	strcpy(p2.first_name, "Valentin");
	p2.age = 26;


	person_t p3;
	strcpy(p3.name, "A");
	strcpy(p3.first_name, "A");
	p3.age = 1;

	person_t p4;
	strcpy(p4.name, "B");
	strcpy(p4.first_name, "B");
	p4.age = 10;

	// act
    int same = person_compare(&p1, &p2);
    int smaller = person_compare(&p3, &p4);
    int bigger = person_compare(&p4, &p3);

    // assert
    CU_ASSERT_EQUAL(same, 0);
   	CU_ASSERT_TRUE(smaller < 0)
    CU_ASSERT_TRUE(bigger > 0)
	// END-STUDENTS-TO-ADD-CODE
}

static void test_list_insert(void)
{
	// BEGIN-STUDENTS-TO-ADD-CODE
	person_t p1;
    strcpy(p1.name, "C");
    strcpy(p1.first_name, "C");
    p1.age = 1;

    person_t p2;
    strcpy(p2.name, "A");
    strcpy(p2.first_name, "A");
    p2.age = 2;

    person_t p3;
    strcpy(p3.name, "B");
    strcpy(p3.first_name, "B");
    p3.age = 3;

	// assert
    node_t *act1 = list_insert(&p1);
    node_t *act2 = list_insert(&p2);
    node_t *act3 = list_insert(&p3);


	CU_ASSERT_EQUAL(act2->next, act3);
    CU_ASSERT_EQUAL(act3->next, act1);
    CU_ASSERT_EQUAL(act1->next, NULL);
	// END-STUDENTS-TO-ADD-CODE
}

static void test_list_remove(void)
{
// BEGIN-STUDENTS-TO-ADD-CODE
	person_t p1;
    strcpy(p1.name, "A");
    strcpy(p1.first_name, "A");
    p1.age = 35;

    person_t p2;
    strcpy(p2.name, "B");
    strcpy(p2.first_name, "B");
    p2.age = 35;

    person_t p3;
    strcpy(p3.name, "C");
    strcpy(p3.first_name, "C");
    p3.age = 35;

    list_clear();

    node_t *act1 = list_insert(&p1);
    node_t *act2 = list_insert(&p2);
    node_t *act3 = list_insert(&p3);

//    CU_ASSERT_EQUAL(act3, NULL);

    list_remove(&p3);
    CU_ASSERT_EQUAL(act2->next, NULL);
    list_remove(&p2);
    CU_ASSERT_EQUAL(act1->next, NULL);
    list_remove(&p1);
	
	// END-STUDENTS-TO-ADD-CODE
}

static void test_list_clear(void)
{
	// BEGIN-STUDENTS-TO-ADD-CODE
	person_t p1;
    strcpy(p1.name, "A");
    strcpy(p1.first_name, "A");
    p1.age = 35;

    person_t p2;
    strcpy(p2.name, "B");
    strcpy(p2.first_name, "B");
    p2.age = 35;

    person_t p3;
    strcpy(p3.name, "C");
    strcpy(p3.first_name, "C");
    p3.age = 35;

    list_clear();
    // act
    node_t *act1 = list_insert(&p1);
    node_t *act2 = list_insert(&p2);
    node_t *act3 = list_insert(&p3);

    list_clear();

    // assert
    CU_ASSERT_EQUAL(act2->next, NULL);
    CU_ASSERT_EQUAL(act1->next, NULL);
	// END-STUDENTS-TO-ADD-CODE
}

/**
 * @brief Registers and runs the tests.
 * @returns success (0) or one of the CU_ErrorCode (>0)
 */
int main(void)
{
    // setup, run, teardown
    TestMainBasic("lab test", setup, teardown
                  , test_person_compare
                  , test_list_insert
                  , test_list_remove
                  , test_list_clear
                  );
}
