#!/bin/bash
make

if [ $? -eq 0 ]; then
    echo "Executing ./bin/snp:"
    ./bin/snp
    if [ $? -ne 0 ]; then
        echo "Debugging ./bin/snp:"
        gdb -ex run -ex backtrace -ex="set confirm off" -ex quit ./bin/snp
    fi
fi