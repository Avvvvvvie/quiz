[stm reference manual](https://www.st.com/resource/en/reference_manual/dm00031020-stm32f405-415-stm32f407-417-stm32f427-437-and-stm32f429-439-advanced-arm-based-32-bit-mcus-stmicroelectronics.pdf)

[Universal Content Viewer](https://learning.oreilly.com/library/view/the-definitive-guide/9780123854773/B9780123854773100011.xhtml)

I/O Port  A Pin 0 = GPIOA_xx
basisadresse: 0x4002 000

 I/O Port G Pin 13 = GPIOG_xx
basisadresse: 0x4002 1800

### What is a peripheal?

### Which things belong to a system bus specification?

### How many addresses are there on the CT board?
2^32

### What is the "throughput" of the CT board bus lines?
32 bit

### What are all the bus lines on a synchronous bus?
- Address lines (32 bit/lines)
- Data lines (32 bit/lines) (bidirectional)
- 4 Control lines: Clock, NE = Not Enable, NWE = Not Write Enable, NOE = Not Output Enable

### What does the NE / Not Enable bus line do?
It indicates the start and end of a cycle. If its low, then a new cycle has begun, for example a read instruction is coming.

### How does `STR R0,[R1]` look like on the system bus?

### Why is a CMOS Tri-State Inverter needed?
 To be able to send nothing instead of 0 or 1, so that other devices can write on the line during this time.

### The CPU sends the request to write a value over the bus. How will it be writen to the correct destinaton?
It will be only written to where the address decoder matches the address. At this location, write_enable will be true, and as soon as the cycle counters are true aswell, the data lines will be copied onto that register.

### What are the 4 control lines on a bus?
Clock, NE = Not Enable, NWE = Not Write Enable, NOE = Not Output Enable

### How can we get an individual bus cycle time for each slave?

### How does a slave know, that it is the target of an access?

### How can we get an individual bus cycle time for each slave?
Wait states are inserted depending on the address of an access.

### The 2 possible ways to implement this are:
- Individual wait states can be programmed at a bus interface unit (eg. if address x, wait y cycles longer)
- Slave tells bus interface unit when it is ready (additional control signal back)

### What is ST discovery?

### Why would you have an internal and an external bus?

### What is a die?

### Explain fork-join

### What is a process?

### What are the pro and cons of using the parallel bus vs a serial conection?

### What are the advantages of UART?

### What are the disadvantages of UART?

### What is the difference between a preemptive and a non-preemptive scheduler?
Preemptive: the task is interrupted by the scheduler

### What is the difference between multi-processing and multitasiking?
Multi-processing: Single task running at one time, Job-control of batch tasks

Multitasking: Multiple tasks running, interactive tasks possible, scheduler needed

### How does round robin task scheduling work?
Each time runs for a timeslice called quantum. After running, a tasks gets put at the end of the queue again (if the queue isnt empty). New tasks come at the end of the queue, before the one that just had a turn.

### What are the advantages of round robin?
No starvation
Simple to implement

### What is preemtive and what is cooperative multiprocessing?
