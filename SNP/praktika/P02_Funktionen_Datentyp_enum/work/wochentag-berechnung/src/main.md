```
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
 * @brief Lab P02 weekday
 */
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

// Enums should be clear
// abbreviations suck
// therefore use full names
typedef enum month_t {
    JANUAR = 1,
    FEBRUAR = 2,
    MAERZ = 3,
    APRIL = 4,
    MAI = 5,
    JUNI = 6,
    JULI = 7,
    AUGUST = 8,
    SEPTEMBER = 9,
    OKTOBER = 10,
    NOVEMBER = 11,
    DEZEMBER = 12
} month_t;

// END-STUDENTS-TO-ADD-CODE



// *** TASK1: typedef struct for date_t ***
// BEGIN-STUDENTS-TO-ADD-CODE
typedef struct Point {
    int Year;
    int Month;
    int Day;
} date_t;

// END-STUDENTS-TO-ADD-CODE



// *** TASK2: typedef enum weekday_t (Sun=0, Mon, ...Sat) ***
// BEGIN-STUDENTS-TO-ADD-CODE
typedef enum weekday_t {
    Sunday = 0,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
} weekday_t;

#define BOOL int

static const int SCHALTJAHR_MOD = 4;
static const int SCHALTJAHR_JAHRHUNDERT_MOD = 400;
static const int JAHRHUNDERT = 100;
static const int ERR_INVALID_MONTH = 0;
static const date_t MIN_GREGORIAN_DATE = {1582, 10 , 15};

static const int FALSE = 0;
static const int TRUE = 1;



// *** TASK1: typedef enum types for month_t (Jan=1,...Dec} ***
// BEGIN-STUDENTS-TO-ADD-CODE



// END-STUDENTS-TO-ADD-CODE

/**
 * @brief   TASK1: Checks if the given date is a leap year.
 * @returns 0 = is not leap year, 1 = is leap year
 */
// BEGIN-STUDENTS-TO-ADD-CODE
int isLeapYear(const date_t date) {
    const int year = date.Year;
    int rest = 0;

    if (year % JAHRHUNDERT == 0) {
        rest =  year % SCHALTJAHR_JAHRHUNDERT_MOD;
    } else {
        rest = year % SCHALTJAHR_MOD;
    }
    
    if (rest == 0) {
        return 1;
    }

    return 0;
}

// END-STUDENTS-TO-ADD-CODE


/**
 * @brief   TASK1: Calculates the length of the month given by the data parameter
 * @returns 28, 29, 30, 31 if a valid month, else 0
 */
// BEGIN-STUDENTS-TO-ADD-CODE
int calcDaysInMonth(const date_t date) {
    const int month = date.Month;

    if (month < JANUAR || month > DEZEMBER) {
        return ERR_INVALID_MONTH;
    }

    if (month == FEBRUAR) {
        if (isLeapYear(date)) {
            return 29;
        }
        return 28;
    }

    switch (month) {
        case APRIL:
        case JUNI:
        case SEPTEMBER:
        case NOVEMBER:
        return 30;
    }
    
    return 31;
}

// END-STUDENTS-TO-ADD-CODE

/**
 * @brief   TASK1: Checks if the given date is in the gregorian date range
 * @returns 0 = no, 1 = yes
 */
// BEGIN-STUDENTS-TO-ADD-CODE
BOOL isGregorian(const date_t date) {

    if (date.Year > MIN_GREGORIAN_DATE.Year) {
        return TRUE;
    }

    if (MIN_GREGORIAN_DATE.Year > date.Year) {
        return FALSE;
    }

    if (date.Month > MIN_GREGORIAN_DATE.Month) {
        return TRUE;
    }
    if (MIN_GREGORIAN_DATE.Month > date.Month) {
        return FALSE;
    }

    return date.Day >= MIN_GREGORIAN_DATE.Day;
}

// END-STUDENTS-TO-ADD-CODE


/**
 * @brief   TASK1: Checks if the given date is a valid date.
 * @returns 0 = is not valid date, 1 = is valid date
 */
// BEGIN-STUDENTS-TO-ADD-CODE
BOOL isDateValid(const date_t date) {
    if (date.Year < 0 ) {
        return FALSE;
    }

    if (date.Month < JANUAR || date.Month >  DEZEMBER) {
        return FALSE;
    }

    if (date.Day < 0) {
        return FALSE;
    }

    int daysInMonth = calcDaysInMonth(date);

    if (date.Day > daysInMonth) {
        return FALSE;
    }

    return TRUE;
}


// END-STUDENTS-TO-ADD-CODE


/**
 * @brief   TASK2: calculated from a valid date the weekday
 * @returns returns a weekday in the range Sun...Sat
 */
// BEGIN-STUDENTS-TO-ADD-CODE
weekday_t getWeekday(const date_t date) {
    int y = date.Year;
    int m = date.Month;
    int d = date.Day;
    int weekday  = (d += m < 3 ? y-- : y - 2, 23*m/9 + d + 4 + y/4- y/100 + y/400)%7; 

    return (weekday_t)weekday;
}

// END-STUDENTS-TO-ADD-CODE

void getAbbreviation(const weekday_t day, char * abbrev) {
    switch (day) {
        
        case Sunday: strcpy(abbrev, "Sun"); break;
        case Monday: strcpy(abbrev, "Mon"); break;
        case Tuesday: strcpy(abbrev, "Tue"); break;
        case Wednesday: strcpy(abbrev, "Wed"); break;
        case Thursday: strcpy(abbrev, "Thu"); break;
        case Friday: strcpy(abbrev, "Fri"); break;
        case Saturday: strcpy(abbrev, "Sat"); break;
    }
    abbrev += '\0';
}

/**
 * @brief   TASK2: print weekday as 3-letter abreviated English day name
 */
// BEGIN-STUDENTS-TO-ADD-CODE
void printDay(const weekday_t day) {
    char abbrev[4];
    getAbbreviation(day, abbrev);

    printf("%s", abbrev);
}



// END-STUDENTS-TO-ADD-CODE

/**
 * @brief   main function
 * @param   argc [in] number of entries in argv
 * @param   argv [in] program name plus command line arguments
 * @returns returns success if valid date is given, failure otherwise
 */
int main(int argc, const char *argv[])
{
    date_t date;
    weekday_t weekday;
    char abbreviation[4];

    // TASK1: parse the mandatory argument into a date_t variable and check if the date is valid
    // BEGIN-STUDENTS-TO-ADD-CODE
    if (argc < 2) {
        fprintf(stderr, "Invalid arguments count, expected at least 1");
        return EXIT_FAILURE;
    }

    
    sscanf(argv[1], "%d-%d-%d", &date.Year, &date.Month, &date.Day);

    if (isDateValid(date) == FALSE) {
        fprintf(stderr, "Given date is invalid, out of range");
        return EXIT_FAILURE;
    }

    if (isGregorian(date) == FALSE) {
        fprintf(stderr, "The date given seems to be outside of the valid gregorian date range");
        return EXIT_FAILURE;
    }

    // END-STUDENTS-TO-ADD-CODE


    // TASK2: calculate the weekday and print it in this format: "%04d-%02d-%02d is a %s\n"
    // BEGIN-STUDENTS-TO-ADD-CODE

    weekday = getWeekday(date);
    getAbbreviation(weekday, &abbreviation[0]);

    //weekday_t weekday = getWeekday(date);
    //char abbrev[4];
    //
    printf("%04d-%02d-%02d is a %s\n", date.Year, date.Month, date.Day, abbreviation);


    // END-STUDENTS-TO-ADD-CODE

    return EXIT_SUCCESS;
}

```