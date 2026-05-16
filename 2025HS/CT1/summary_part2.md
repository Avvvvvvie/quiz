##### Exceptions
- Address Names: SETENA, CLRENA, SETPEND, CLRPEND
- 0 = IRQ0 – IRQ31, 1 = IRQ32-IRQ63
```
; enable irq 28:
SETENA0 EQU 0xE000E100
LDR R0, =SETENA0
LDR R1, =0x10000000
STR [R0], R1

MOVS R1,#1  ; alternative to get R1
LSLS R1,#28

CPSID ; disable primask / __disable_irq()
CPSIE ; enable primask / __enable_irq()
```

Before Entry to interrupt:
- Pushes xPSR, PC, LR, R12, R0 – R3
- Loads handler adress in PC and from EXC_RETURN in LR

![|500x0](/assets/Pasted%20image%2020251210183158.png)
##### Linker
- References = imported symbols, Global = exported Symbols
- RW_ZI = zero initialized. ER_RW = nicht zero init.
- .lst-File after compiler by assembler. not done. area size known
- .map: maps symol to address like shown in debugger

```
EXPORT asmsquare ; export to c
asmsquare PROC
IMPORT csquare ; import from c
```

File section #1: code section, at base address 0x00000000
```
0x00000014: 00000000 .... DCD 0 ; a
```

File section #4: data section, at base address 0x00000000
```
0x00000000: 00000005 a = 5
```

File section #5: symbol table
```
# Symbol Name Value Bind Sec Type Vis Size
1 square 0x00000001 Gb 1 Code Hi 0x8
```

File Section #6: symbols
```
# Symbol Name Value Bind Sec Type Vis Size
7  a     0x00000000 Lc   4   Data De  0x4 
8  b     0x00000004 Lc   4   Data De  0x4
11 main  0x00000001 Gb   1   Code Hi  0x14
12 squar 0x00000000 Gb Ref   Code Hi
```

File section #7: relocation table
```
# Offset     Relocation Type           Wrt Symbol
0 0x00000006 10         R_ARM_THM_CALL 12  square ; BL call
1 0x00000014 2          R_ARM_ABS32    7   a      ; set abs value
2 0x00000018 2          R_ARM_ABS32    8   b
```

Steps taken:
1. Merge code/data sections by adding the values
2. Resolve symbols by merging symbol table sections
3. Merge relocation tables (save origin)
4. Relocate symbol usage
5. new value = global base + merge offset + module relative offset


literal pool beim kompilieren (im obj file) -> linker