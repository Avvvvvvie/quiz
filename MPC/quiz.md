[MPC/mpc_students: Repository for student laboratories](https://github.zhaw.ch/MPC/mpc_students)

[oeztuumu/mcp_labs](https://github.zhaw.ch/oeztuumu/mcp_labs)

te 514

Jetson Nano: gpu = computation device. unit of execution = collection of kernels. task = loop

io bound vs cpu bound

x = n/2
y = n mod 2
### Where would a square root be calculated?

### What is the difference between a control flow graph and a call graph?
CFG: Displays all possible execution paths of a program

CG: Displays actual execution paths of a program

### What are the advantages of threads over processes?
cheaper creation, can have shared memory, can be pooled

### What is sequential equivalence?
A program that has sequential equivalence produces the same result no matter if its serial or parallel.

### What is the distributed array pattern?

### Why can load balancing vary depending on the geometry used?

### Why is a block cyclic strategy viable for load balancing?
It gives the program more time to get the next chunk of data ready and more flexibility is given to cpu. The disadvantage is more data has to be moved.

### What is the SPMD pattern?
SPMD means single program multiple data. This means that all chunks of data go through the same program/code, all threads use the same code.
GPU: SPMT

### What are SISD, SIMD, MISD and MIMD?
- Single Instruction Single Data (SISD) -> single core, one thread on one pipeline using 1 ALU
- Single Instruction Multiple Data Streams (SIMD) -> CPU: 1 thread in 2 pipelines with 1 alu or simd arithmetic units. GPU: Single Instruction Multiple Threads: n threads in lockstep on n pipelines&alus. can be done with vectorization
- Multiple Instructions Single Data Stream (MISD)
- Multiple Instructions Multiple Data Streams (MIMD)

