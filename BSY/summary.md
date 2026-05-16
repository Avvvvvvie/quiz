
### Booting with BIOS
1. Basic IO System: 
	- Device discovery, initialization
	- Chooses boot device from list in CMOS
	- The first sector from the boot device (MBR: master boot record) is read into memory and executed
2. Bootloader selected by MBR
	- Needs to access the location of the OS (boot partition)
	- It loads the OS into memory and executes it
3. Initialization of the OS and Environment
	- Queries (the BIOS/bus system) to get HW information
	- Creates System Services
	- Spawns a (User) Interface (textual / graphical login, user oriented OSs)

### Booting in Linux
1. System Startup
2. GRUB
3. Kernel
4. INIT Process

### Booting with UEFI (Unified Extensible Firmware Interface)
