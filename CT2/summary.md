Microcontroller = CPU with integrated peripherals and memory
### Peripherals
 - Configurable hardware block of a microcontroller.
 - Can be interface to outside world.
 - Has control, status and data registers. Can be mapped to memory
### Bus
- Synchronous = shared clock on the bus2
- Address lines (32 bit/lines)
- Data lines (32 bit/lines) (bidirectional)
- Control lines: Clock, NE = Not Enable, NWE = Not Write Enable, NOE = Not Output Enable, NBL = Not Byte Line
- Full/partial address decoding + cylce counter
- Slow Slaves -> Individual wait states can be programmed at a bus interface unit OR Slave tells bus interface unit when it is ready

![](/assets/Pasted%20image%2020260228094420.png)

```C
volatile uint32_t *p_reg;
p_reg = (volatile uint32_t *) (0x60000100);
*p_reg = 0xAA55AA55;

#define LED31_0_REG (*((volatile uint32_t *)(0x60000100)))
LED31_0_REG = 0xBBCCDDEE;
```

### GPIO
Register address GPIOx_yy = Base address x + Offset y

Port to Pin number:
![](/assets/Pasted%20image%2020260228102548.png)

Configuring GPIO

I/O
GPIOx_MODER - GPIOx_OTYPER - GPIOx_OSPEEDR - GPIOx_PUPDR

Output: GPIOx_ODR or GPIOx_BSRR

Input: GPIOx_IDR

Direction GPIOx_MODER
- 00: Input - 01: General purpose output mode - 10: Alternate function mode - 11: Analog mode

Output Type GPIOx_OTYPER
- 0: Output push-pull - 1: Output open-drain

Pull-up / Pull-down GPIOx_PUPDR
- 00: No pull-up, no pull-down - 01: Pull-up - 10: Pull-down - 11: Reserved

Speed GPIOx_OSPEEDR
- 00: Low speed - 01: Medium speed - 10: High speed - 11: Very High speed

Port bit set/reset register GPIOx_BSRR

![](assets/Pasted%20image%2020260302194847.png)

### SPI (Serial peripheral interface)
Lines
- SCLK (System Clock set by master)
- MOSI (Master Out Slave In)
- MISO (Master In Slave Out)
- SS (Slave Select, 1 per slave)

Configurations in SPI_CR1
- CPOL 0/1 = idle level low/high
- CPHA 0/1 = sampling edge away/towards polarity

Sync in SPI_SR
- TXE -> SPI_DR can be written to
- RXNE -> SPI_DR can be read from

### UART
![](/assets/Pasted%20image%2020260321174842.png)

T = 1/baud

Max deviation: +-0.5T
% Rate deviation: 100% * (Max deviation) / 7.5

UART_SR: TXE, TC, RXNE
Config: BRR, CR1, CR2, CR3

### I2C Bus
![](/assets/Pasted%20image%2020260321175409.png)

Write = 1, ACK = 0

I2C_SR1 -> TXE, RXNE


| UART                              | SPI                                | I2C                                      |
| --------------------------------- | ---------------------------------- | ---------------------------------------- |
| serial ports (RS-232)             | 4-wire bus                         | 2-wire bus                               |
| TX, RX opt. control signals       | point-to-multipoint                | SCL, SDA                                 |
| point-to-point                    | point-to-multipoint                | (multi-) point-to-multi-point            |
| full-duplex                       | full-duplex                        | half-duplex                              |
| asynchronous                      | synchronous                        | synchronous                              |
| only higher layer addressing      | slave selection through SS signal  | 7/10-bit slave address                   |
| parity bit possible               | no error detection                 | no error detection                       |
| chip-to-chip, PC terminal program | chip-to-chip, on-board connections | chip-to-chip, board-to-board connections |

### Counter

Upcounting: From 0 to ARR. Compare clears on Equal. Overflow Event

Downcounting: From ARR to 0. Restarts from ARR. Underflow Event

Source: x Hz. Every s seconds = 1/x Hz f. ARR = x/f if this fits else calculate for x/max_fit

![](/assets/Pasted%20image%2020260411173315.png)

**Timer Configuration:**
What timer to use: TIMXEN = 1
TIMX_PSC = Prescale - 1
Use CK_INT: TIM3_SMCR [SMS] = 0b000
TIMX_ARR = ARR
TIMX_DIER->UIE = 1 -> Update interrupt enable
TIMX_CR1->CMS = 0 = No Center Align
TIMX_CR1->DIR = 0 = Up
TIMX_CR1->CEN = 1 = Enable Counter at the end

**Capture / Compare Configuration:**
‍TIM2->CCR1 = Duty Cycle Percentage * 100
TIM2->CCMR1 = PWM Mode
Capture/Compare 1 output enable: TIM2->CCER = 1

### ACD / DAC

$"LSB" = F_"ref" / 2^N$, $"FSR" = V_"ref" - 1 "LSB"$

has $2^N$ possible Levels
