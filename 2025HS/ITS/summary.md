1Essential Security Requirements: Confidentiality, Integrity, Availability, Accoutability, Authentcity

Ways to Harm: Fraud, Espionage, Resource Misuse, Outage, Sabotage, Data Loss, Reputation Loss, Brand Misuse

Actors: State, Insider, Private Sector, Hacktivist

Targets: Hardware, Software, Data, Network

CIS = Security Framework for Guidance

DevSecOps Lifecycle: Plan, Develop, Build, Test, Release, Deliver, Deploy, Operate, Monitor, Feedback

The 7 Kingdoms in Software: Input Validation and Representation, API Abuse, Bad Security Features, Errors, Code Quality, Encapsulation, Deployment Environment

Not Memory Safe: C, C++, ASM
Fuzz Testing = Random Input
Pen Testing = simulated broad automated attacks
Red Team = Deep attack, tests defense of blue team

MITRES
- CWE (Common Weakness Enumeration)
- CVE (Common Vulnerabilities and Exposures)

| Principle                   | Description                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
| Least Privilege             | Users and systems are granted only the minimum rights necessary          |
| Defense in Depth            | Multiple, layered security mechanisms provide redundancy                 |
| Zero Trust                  | Every request must be verified                                           |
| Psychological Acceptability | Security measures must be user-friendly and practical                    |
| Failsafe/Secure Defaults    | Stay secure in case of failure, use secure default settings              |
| Modularity                  | Security functions = independent, interchangeable components             |
| Separation of Privilege     | Critical actions require multiple independent authorizations or factors. |
| Least Astonishment          | Systems behave in a way that users can reasonably expect                 |
| Open Design                 | Security does not rely on obscurity but on robust mechanisms             |
| Detection of Compromise     | Systems should be able to detect attacks and breaches                    |
| Minimization of Impact      | Limit the scope and consequences of an attack                            |

| Threat                           | Description                                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ransom Demand                    | Attacker encrypts your data and only provides decryption key for money.                                                                                 |
| Side Channel Attack              | The attacker observes the implementation of the crypto system and learns from it.                                                                       |
| Chosen-ciphertext attack         | The attacker can choose plaintexts that they want the system to encrypt and can draw conclusions using the result                                       |
| DNS amplification                | Request to an open DNS server with a spoofed IP address (the IP address of the victim), the target IP address then receives a response from the server. |
| SYN flood                        | sending a target a large number of TCP “Initial Connection Request” SYN packets with spoofed source IP addresses                                        |
| HTTP flood                       | large numbers of HTTP requests flood the serve                                                                                                          |
| ARP cache poisoning              | Keep sending ip x is at mac y where y is the wrong address                                                                                              |
| offline Password Cracking Attack | Attacker owns passwrd hash list. pwds can be hashed and tested                                                                                          |
| Man-In-The Middle Attack         | Can be done with ARP Spoofing if in same net                                                                                                            |
| Netflix Attack                   | Dataset X is anonymized, but individuals in it are also in dataset B, which is not anonymized.                                                          |

work factor = avg # attempts until correct key

wf 2^n = wf of n bits. secure: 128+ ((2n + 1) / 2)

one-time pad = perfect secrecy but with many constraints

Secure Hash Functions: Work Factor in bits = “output length in bits” / 2

MD5 len = 128, SHA-1 = 160, SHA-2 = 224-512, SHA-3 = 224-512

block cypher = apply key to block. stream cypher = xor each bit with pseudorandom generator that uses key

Quantum Computers could reduce the work factor of secret key algs by a factor of 2

mac = message authentication code = hash of unencrypted text

Secure Key Algs: AES, RC5, Blowfish, ChaCha
Unsecure: DES, 3DES, RC4

AES Modes: ECB, CBC, CTR, CCM, GCM

Public Key Algorithms
- Classical: 4096 bits = 128 bit work factor
- Eliptic Curve: 256 bits = 128 bits, 512 bits = 256 bits 
- could be broken by quantum mechanics

Perfect Forward Secrecy = cant find session keys with master key

Diffie-Hellman
- each public key = base g^secret mod prime p
- shared secret = other public^secret mod p = g^ab mod p
- man in the middle: does what each side would send to both sides

RSA
- e: public key exponent, usually set to 65537
- d: private key exponent
- n: Modulus, large prime number, key length
- Public key (e,n)
- Private key (d,n)
- Encryption: c = p^e mod n
- Decryption: p = c^d mod n
- Signature generation: s = p^d mod n
- Signature verification: p = s^e mod n
- no elliptic curves possible

Types of Certificates: Domain/Organization/Extended Validation (non-commercial/webshop/banking)

X.509 Certificate: body with Issuer+Subject Name, PK. signature with algo

Obtaining a Domain Validation Certificate
1. Agent: initiation domain validation process
2. Let’s Encrypt: pose challenges (sign this with A, send key A)
3. Agent: implement challenges
4. Let’s Encrypt: validates challenges => Agent has authorized key pair

Certificate Signing Request
1. Agent: Generates Key pair, signs with A
2. LE: Verifies and creates Certificate

Checking a certificate: Locate the issuer (by name) and their certificate. Either higher in the chain or preinstalled root cert. Its public key is used to verify the signature in the prev cert(using given algo). check for time(NotBefore, NotAfter) and revocation. now if the owner signs, we can decrypt it using the pub key

TLS: authenticated, integrity-protected, confidential, replay and deletion secure. has cypher suites eg: TLS_AES_128_GCM_SHA256. uses TCP. Handshake->connection->teardown. between apps

TLS Handshake:
1. Client and server Negotiate crypto algorithms
2. Client and server perform Diffie-Hellman
3. Client and server generate Handshake keys
4. Server Authenticates to client
5. Client and server prove to one another that no one has Tampered with the previous messages
6. Client and server generate Data keys

DTLS: explicit sequence number, reliability functions, replay detection

QUIC: UDP. TLS for negotioation. Multistreaming. Congestion Control & Recovery (from TCP)

Access Control Components: Identification, Authentication, Authorization, Audit Trail

Authentication Methods: Know, Possess, Be

Precompiled Dictionary Attacks: No need to compute hashes

Key stretching: Apply hash multiple times to make it expensive

Accuracy = 1 - (False Match Rate + False Nonmatch Rate)

FIDO2: Passwordless Authentication with Public Key Cryptography: biometric -> authenticator -> CTP to user -> TLS Webauth -> web server <- metadata service <- authenticator vendor

OAuth 2.0
- The client sends an authorization request to the resource owner.
- The resource owner grants authorization.
- The client requests an access token from the authorization server.
- The authorization server creates the access token (cryptographically protected).
- The client sends the access token to the resource server.
- The resource server sends the requested resource to the client.
![|400x0](assets/Pasted%20image%2020251222104532.png)

Kerboros
- unique identity = principal. these have master key = common secret with Key Distribution Center. KDC = Auth Service + Ticket Granting Service. all parties = realm
- master keys are derived from users password
- (1) send msg encrypted with A to KDC (2) KDC sends key encrypted with A and ticket containing key encryted with B back. send ticket to Bs owner. alwyas send timestamps. cache old requests. first get ticket granting ticket, then ticket to actual service
- federated: ticket for tgs A (AS_REQ) -> ticket for tgs B from tgs A (TGS_REQ) -> ticket for x at B from tgs B

SAML
- client = Service Provider (SP). resoruce owner = User. Auth Server = Identity Provider (IdP). Access token = SAML assertion/token
- web only, enterprise focussed

OpenID Connect:
- Web, REST, OAuth, https. mobile, apis
- client = Relying Party. resource owner = End-User. Auth Server = OpenID Provider. Access Token = ID & Access Token. user data = claim
- (1) RP sends «login» request to OP (2) OP authenticates End-User and obtains authorization to send data to RP (3) OP responds with ID and Access Token to RP (4) RP asks OP for user profile information (5) OP replies with claims containing user profile information
- User can choose which attributes to give

Shibboleth: For unis, Similar to Kerberos but
- Tokens only reflect attributes
- Different basic technology (public key crypto, HTTPS, SAML)

Self-Sovereign Identity (SSI)
- Attributes are stored in a wallet of the user
- Applications do not have to talk to the issuer
- Uses: Decentralized Identifiers, Verifiable Credentials, Verifiable Presentation, Wallet. VP/VC are signed and can be verified at the Verifiable Data Registry. VP is stored in wallet

Access Management Process: Requesting access, Verification, Providing rights, Monitoring identity status, Logging and tracking access, Removing or restricting access rights

Discretionary Access Control / DAC
- owner sets rights. except root bypass/admin additional privileges
- access matrix: user -(orw)-> file. Linked List = Access Control List
- rwx = 421 = 7. 777 = owner group others
- windows 13 different permissions, inheritance
- Capability = unforgeable tokenm, contains the permissions for object

Mandatory Access Control / MAC
- system wide policy by admin
- windows MIC: Integrity Levels. higher or same gets access

Role-Based Access Control / RBAC
- users -> roles -> files
- combine with Attribute-Based Access Control
- transitive, additive

Network protection
- package filtering firewall before all points
- microsegmentation: eg. DMZ segmented in email, dns, webshop
- zero trust solution
- Endpoint Detection and Response (protection,monitoring,investigation,resp) to clients and server + tool for admin
- (Web) Application Level Firewalls: before DMZ
- Secure Web Gateway before internet fw (url filter, data leakage prevention, tls inspection)
- Cloud Access Security Broker  in internet (Shadow IT discovery, Cloud usage Control, Data leakage prevention, Anomaly detection)
- Network Detection (and Response) (Monitoring anomalies to baseline in packets/log, changing firewall config, isolating infected device) in admin
- Security Information and Event Management (Correlation of events, dashboard, reports)
- Security Orchestration, Automation and Response (automates SIEM response with analysis and playbooks) in admin

Firewall Rule Management Processes: Submission, Approval, Design, Testing, Deployment, Validation, Reports, Monitoring, Audits, Decommissioning, Recertification

Next Generation Firewall: Updated by Threat Intelligence. Deep Packet Inspection, Intrusion Prevention, Application Awareness, Antivirus, Sandboxing

Zero trust levels
- traditional=minimal.initial=int&external traffic.advanced=key management.optimal=leat privilege
- single point iof failure, misused credentials. lack of network visibility, misuse of agents, access of monitoring data

WAF Architecture: client -> https -> firewall to data center -> tls termination ->  filtering, load balancing -> sever

Typically prevented: Server, Industrial Plants -> Internet. Guest -> Industrial Plants. DMZ -> Clients

nftables
- linux kernel hooks: ingress, prerouting, input to local proc, forward, output from lp, postrouting
- actions: acceot, drop, reject(tells sender), jump otherchain
- chain tcp-traffic { type filter; count accept;
- policy drop = unclassified packets will be dropped

DDoS: network bandwidthm system resources, app resources

DNS Amplification Attack Counter measures: Source IP verification at the ISP level. Configure DNS resolver to only serve trusted clients. Rate limiting at the DNS Resolver

SYN Flood Attack Counter Measures: Increase backlog queue. Recycle oldest half-open connection. Use SYN Cookies (ACK with cookie)

HTTP Flood Counter measures: Add challenge to be solved by requesting machine or user (e.g., CAPTCHA). Block known bad IP addresses. Static rate limiting. Use WAF to dynamically block many requests from same IP.

LLM: risks: Novel, easy to use, training data, Complex and large, Non-deterministic. responsible: Safety, Fairness, Sustainability, Transparency, Accuracy, Privacy. owasp top10: Prompt Injection, Sensitive Information DisclosureSupply Chain Vulnerabilities, Data and Model Poisoning, Improper Output Handling..

Trust boundaries for AI engineering: user interaction(bad input), wild training data(bias,poisoning), internal test and training data(sensitive infos), external services(data leaks),live  public data(prompt injection). add LLM tha tlooks for bad input/output

Prompting techniques: Root technique prompt, Refinement prompt, Decomposition Technique, Reasoning Technique Priming Technique

AI as support for cyber security: Secure coding, training, phishing detection, threat modelling, architecture, support security operation team

GDPR Protects EU residents, exempts anon data, by default, right to access+erasure+portability, technical measures: encryption, pseudonymization, access controls, management, action

Swiss Data Protection Act: lower fines, more time to act, individual is held liable, not mandatory, only for high risk profiling

fundamental: Data minimization, Automated data deletion, Data inventory, Access controls, Notice and Choice

PETS:
- Advanced Encryption: Homomorphic Encryption (compute on encrypted), Secure Multi-Party Computation (compute without showing secrets)
- Federated Learning: Local mlm with users stats. updates are shared. main server aggregates data from everyone.
- Obfuscation: Anonymization(differential privacy(noise,cache result tho,utility tradeoff/budget,no integrity)), Pseudonomization(k-anon, synth data hides real data)

The Security Concept: General Content: System Requirements, System Architecture, Data, Security Controls, Access Controls: Logging and Monitoring, Backup and Recovery, Encryption, Software Developement and Operation,, Threat and Risk Management
- classify: criticality, readwrite, access method, recovery time objective, recovery point objective(data), maximum acceptable outage, encryption types, probability&place of threats
- 3 2 1 1 Rule: 3 copies, 2 storage media, 1 off site, 1 readonly

M(X)DR: Managed eXtended Detection and Response. Detection Engineering: drive signal quality. Threat Intelligence: understand. Threat Hunting: search proactively. The “Long Tail” Problem: 30%automated.70%many unknown things

Agentic AI Design Principles: Reflection, Tool Use, Multi Agent, Planning

Virtual Private Networks VPN cases
- Private: user -> provider -> internet a -> t -> t -> b -> i
- subnet <-> subnet (hosts not aware) a -> a -> t -> t -> b -> b
- mobile -> company subnet virt.b -> gateway addr -> b
- single ip -> single ip for remote support (can be hacked/security not enforcable on thrid party) -> contract + security requirements
- gateway = endpoints of the secure channel

IPsec (with tunnel mode)
- Internet Key Exchange
- Implemented in Kernel Space / Changes the Network Stack
- Encapsulating Security Payload = puts new IP header
- doesnt work with NAT (but NAT-T)
- Path MTU can get exceeded

OpenVPN
- runs on top of UDP (or TCP) (to not stack tls) and ack for reliability of tls handshake
- TLS handshake protocol for mutual authentication and key exchange
- extracts from kernel space after IP layer, sends to openvpn app, encrypts there

OpenVPN Packet Format: Packet Length (2 bytes), Opcode (1 byte) eg P_ACK, Payload (n bytes)

Protection of Payload: seq no.+padding+encrypt+IV+HMAC

WireGuard: like openvpn but packet is not forwarded to user space but stays in kernel space. is bit less complex that ipsec

wired equivalent privacy / WEP
- shared preconfigured long-term key of 40 or 104 bits (often from 5 or 13 chars) encrypts individual frames.
- all clients use the same key
- IEEE 802.11 MAC Protocol Data Units are encrypted using an RC4 stream cipher
- CRC checksum does not work
- RC4 PRNG doesnt generate many keystreams (wait until the IVs are repeated. XOR-ing the same iv ciphertexts gives the XOR-ed plaintexts. derive text. ks = p xor c)
- knowing a small number of key bits allows to determine several bits of the keystream with probability > 50%

WiFi protected Access  / WPA
- Each Client uses its own key material
- Users cannot read the unicast data of other users (unlike WEP)
- Periodic re-keying, typically after one hour (avoid IV wrap around)
- Two encryption modes TKIP: backwards compatibility
- and CCMP: AES, WPA2,3
- for use with an 802.1X authentication server which distributes session keys to the WLAN client and the access point

CCMP
- packet no =48-bit, incremented each frame
- IV based on PN -> MAC. comput. is always freshly seeded
- AES(K) = AES used with 128-bit encryption/integrity key
- PL(x) based on PN and a block counter (x) -> encryption key is unique per frame/block 

WPA2 = IEEE 802.11i standard


Missing:
- nmap, etc
- agentic ai