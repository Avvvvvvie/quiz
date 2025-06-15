SNP_TESTLIB   := $(if $(SNP_TESTLIB), $(SNP_TESTLIB), ../testlib)
SNP_DOXYFILE  := $(if $(SNP_DOXYFILE), $(SNP_DOXYFILE), ../Doxyfile)
SNP_SHARED_MAKEFILE := $(if $(SNP_SHARED_MAKEFILE), $(SNP_SHARED_MAKEFILE),../shared.mk)

TARGET     := bin/snp
SOURCES    := src/main.c src/example-fork.c src/example-inverse.c
# TSTSOURCES := tests/tests.c

include $(SNP_SHARED_MAKEFILE)