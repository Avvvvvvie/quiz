https://vdi.cloudlab.zhaw.ch
### What is a Ransom Demand?
The attacker encrypts your data and will only provide the decryption key if you pay money.

### What is the difference between Ransomware and Malware?
Malware is a broad umbrella term for _any_ software designed to harm, exploit, or disrupt systems, networks, or data. Ransomware is a _subset of malware_ that encrypts files or locks users out of their system and then demands a ransom to restore access.
### Name 4 Threat Actors
- **Nation-State**: Espionage, financial gain for the state, disruption of other countries, etc.
- **Insider (Employee)**: Offers hacking services for money.
- **Private Sector**: Develops and cooperates with governments, for example.
- **Hacktivist**: Seeks to influence politics and society, e.g., through DDoS attacks.

### What are the 5 Essential Security Requirements?
- **Confidentiality**: Protection against unauthorized access to information.
- **Integrity**: Ensuring that data remains accurate and unaltered.
- **Availability**: Systems and data are reliably and timely accessible.
- **Accountability**: Actions can be uniquely traced back to a user or system.
- **Authenticity**: Identities and data can be verified as originating from trusted sources.

### Name 3 Fundamental Design Principles
- **Least Privilege**: Users and systems are granted only the minimum rights necessary.
- **Defense in Depth**: Multiple, layered security mechanisms provide redundancy.
- **Zero Trust**: No implicit trust; every request must be verified.
- **Psychological Acceptability**: Security measures must be user-friendly and practical.
- **Fail-Safe / Secure Defaults**: Systems should remain secure in case of failure and operate with secure default settings.
- **Modularity**: Security functions are divided into independent, interchangeable components.
- **Separation of Privilege**: Critical actions require multiple independent authorizations or factors.
- **Principle of Least Astonishment**: Systems behave in a way that users can reasonably expect.
- **Open Design**: Security does not rely on obscurity but on robust mechanisms.
- **Detection of Compromise**: Systems should be able to detect attacks and breaches.
- **Minimization of Impact of Compromise**: Limit the scope and consequences of an attack through damage containment.

### What is the "Minimization of Impact of Compromise" design principle?
You should limit the scope and consequences of an attack through damage containment.
### What is the "open design" design principle?
Security should not rely on obscurity but on robust mechanisms.

### Why is defense in depth important?
Multiple, layered security mechanisms provide redundancy.

### What does zero trust mean in IT security?
Every request must be verified
### What is the "psychological acceptability" design principle?
Security measures must be user-friendly and practical.

### Why is modularity important for security?
- Individual parts that are simpler to understand than bigger systems. Simpler code is safer code.
- Least Privilege can be enforced onto each module
- Damage Containment

### What is the principle of least astonishment?
Systems should behave in a way that users can reasonably expect.

### Why is the principle of Least Privilege important?
If you give a user more right than needed, an attack done by someone who compromized their account could do more harm. This principle minimizes the potential damage by minimizing all rights as much as possible.

### What is the principle of least privilege?
Users and systems are granted only the minimum rights necessary.
### What is TLS?
It is a cryptographic protocol that ensures secure communication over networks such as the Internet, between applications. For example, it is used in HTTPS. It provides authenticated, integrity-protected and confidential data exchange that is also secure against replay and deletion of messages.

### Which are the 5 types of countermeasures to an attack?
- **Disaster Recovery**: Measures for restoring IT systems and data after failures or attacks.
- **Access Control**: Regulating who may access systems, data, and resources.
- **Physical Protection**: Safeguards such as locks, cameras, or access controls.
- **Training and Processes**: Raising user awareness and defining clear procedures to strengthen security.
- **Redundancy**: Multiple systems or resources in place to prevent downtime.

### In what ways could Data Availability be challenged?
Phyically: Natural disaster, Hardware failures or sabotage

Virtually: Misconfiguration, Software failure, Ransomware or DDos

### What is important in the Kingdom of Input Validation and Representation?
Never assume that user-provided data is safe or in the correct format.

### What are the goals of Cryptograhy?
- To protect information and communications from unauthorized access and manipulation.
- Store and transmit messages securely.

### What is the difference between secret key cryptography and public key cryptography?
Secret Key: Symmetrc, one shared key, key has to be shared in advance, which can be difficult

Public Key: Asymetric, Public/private key pair

### What is the work factor?
The average number of attempts until the correct key was found

### What is a cyphertext-only attack?
The attacker can draw conclusions about the plaintext or the key used from the ciphertext alone.
### What is a chosen-cyphertext attack?
The attacker can generate ciphertexts and have them decrypted by the system. The attacker either receives the plaintext corresponding to the selected ciphertext (and can potentially draw conclusions about the key used) or only receives partial information, such as "Decryption could/could not be performed."

### What is a known-plaintext attack?
The attacker knows both, the plaintext and the corresponding ciphertext (or at least parts of it). They can use this to draw conclusions about other plaintexts or even the key.

### What is a chosen-plaintext attack?
The attacker can choose plaintexts that they want the system to encrypt. They then receive the corresponding ciphertext and can draw conclusions about other plaintexts or even the key.

### What is a side channel attack?
The attacker uses additional info from the hardware to find out info about the key

### What is the difference between Block and Stream Cyphers?
Block Cypher:
- Encrypt data in fixed-size blocks
- Each block is processed using the same secret key, often with different modes of operation.

Stream Ciphers:
- Encrypt data one bit or byte at a time by generating a pseudorandom keystream.
- Plaintext is combined with the keystream (usually using XOR).

### How do you calculate the work factor for a secret key algorithm?
Work Factor for a key length of n bits = (2^n + 1) / 2

Approximation: 2^n

### What is an initialization vector?
An Initialization Vector is used to provide randomness as otherwise the encryption of identical plaintext blocks would lead to identical ciphertext blocks. (The IV is known by everyone)

### What is a MAC?
MAC stands for message authentication code. It is the hash of an unencrypted text and used to provide authenticity. Its principle works as follows:

The sender calculates the MAC for the message and sends it together with the encrypted message to the recipient. The recipient first decrypts the message and then calculates the MAC for it. If the received MAC matches the calculated MAC, the original plaintext also matches the received plaintext.

### How does public key cryptography work?
In public key cryptography, there are two keys. A message encrypted with one key (usually the public one) can be decrypted with the other.
### How can you have digital signatures with public key encryption?
Alice encrypts the data with her private key KA,priv and Bob decrypts it with KA,pub. Since KA,priv must only be known to Alice, Bob can be sure that the message originated from Alice and was not altered in transit if the decryption is successful. This only works if Bob is sure that the public key belongs to Alice.

### What is perfect forward secrecy?
Say you have a master key that generates session keys. Perfect forward secrecy refers to a procedure that makes it impossible to find the session keys using the master key.

### What is the TCP/IP Stack made of?

### How does the Diffie-Hellmann key exchange work?
1. A Large prime number p and a generator g are chosen
2. Each participant chooses a secret < p
3. Their public key = g^(secret) mod prime p
4. The shared secret = (other public key)^(secret) mod p = g^(s1 * s2) mod p
### What is a vulnerability of the Diffie-Hellmann key exchange?
It is vulnerable to a man in the middle attack who can act as the other participant into both directions. To solve this problem, the messages must still be signed, which must be done using a different algorithm.

### What is RSA?
RSA is a public key cryptography algorithm.

The following values are chosen:
- e: public key exponent
- d: private key exponent
- n: Modulus, large prime number

Then the keys can be calculated:
- Encryption: c = p^e mod n
- Decryption: p = c^d mod n
- Signature generation: s = p^d mod n
- Signature verification: p = s^e mod n

### What are the Benefits of low VS high protocol layers?
High Layers:
- Easier to deploy (often included in applications)
- Less generally applicable (often optimised for an application)

Low Layers:
- Difficult to deploy (may require adapting kernels, routers, switches,...)
- If done on layer 2, we only get hop-to-hop protection
- More generally applicable (protects all layers on top of it)

### What is the difference between DTLS, QUIC and TLS?
DTLS Is an improved version of TLS. QUIC uses TLS for negotiation but otherwise UDP

### What is public key infrastructure?
It is the infrastructure of certificate authorites and certificates. As each certificate relies on another certificate, there is a whole infrastructure.

### How does a TLS Handshake work?
1. Client and server Negotiate crypto algorithms
2. Client and server perform Diffie-Hellman
3. Client and server generate Handshake keys
4. Server Authenticates to client
5. Client and server prove to one another that no one has Tampered with the previous messages
6. Client and server generate Data keys

### What is a root CA?
Its certificates are self-signed, i.e., they are signed with the private key of the certificat authority itself.

### What are 4 Access Control Components?
Identification, Authentication, Authorization, Audit Trail(What the user has done)

### What are the 3 type of things a user can authenticate with?
- Something you know: Password
- Something you have: Token, Phone
- Something you are: Face, Voice

### Why might password authentication not be enough?
- Multiple use of the same password
- The password might be guessable
- The password could get phished/found in unprotected place
- The password might be on the Dark Net

### What is a dictionary attack?
A dictionary attack refers to the general technique of trying to guess some secret by running through a list of likely possibilities, often a list of words from a dictionary. It contrasts to a brute force attack in which all possibilities are tried. The attack works, because users often choose easy-to-guess passwords.

### What is key-stretching?
Here you apply hashing multiple times to make it expensive to compute. This is used to prevent dictionary attacks.

### What are salt and pepper?
They are added to the password before hashing it. They are used to prevent dictionary attacks. The salt is known by the attacker as it is stored with the password, but it is different for each password. Because of this, it cant be precompiled because you dont know the salt beforehand. The pepper is always the same but stored in a secure location on the server. If an attacker only gets hold of the hashes and not the pepper, they cant even do a unprecompiled dictionary attack.

### What is MFA Fatigue?
With this method, the attacker already knows the username and password and logs into the real system. This triggers an MFA request to the victim. The victim will probably not respond to this at first. However, if these requests come frequently, the victim will become annoyed and press the “accept” button or enter the requested code.

### Why is MFA not necesarily safe?
MFA does not prevent inline phishing attacks. This is when the attacker has a fake website that looks like the real one. When the users logs in on the fake site, the fake site does the same on the real side so that the user still gets a MFA request.

### What is the commonly implemented countermeasure to MFA fatigue?
A number is displayed on the login screen, which has to be typed in on the authentication app. This way, the user can't approve an MFA request that they didnt initiate.

### Why is MFA with a mobile phone not necesarily safe?
- Phone stolen
- Malware on phone
- SIM Swop (getting hold of your phone number)
- Fake site that asks for the same MFA

### What are the disadvantages of biometric authentication?
- more complex
- more expensive
- might not work for everyone
- non binary, varying accuracy
- victim impersonation
- not changeable if its compromized

### Which components are needed in a biometric system?
- Sensor
- Feature Extractor
- Database
- Feature Matcher

### What is the false match rate vs the false nonmatch rate?
FAR =  probability to assess two different people as the same person

FRR =  probability to assess two samples of the same person as different people

### How is the accuracy of a biometric authentication system calculated?
1 – (False Match Rate + False Nonmatch Rate)

### What is liveness detection?
Its the detection of impersonation of someone for biometric authentication. Examples: Movement or infrared detection.

### How is password-less authentication possible?
The user has an authenticator, that is certified. The user communicates over cryptography with the server. The server will only have the public key.

### What are the advantages of password-less authentication?
- Security
- User experience
- No password management needed, no need to securely store a password

### What are the disadvantages of password-less authentication?
- Challenging transition phase
- Dependent on working hardware

### What are magic links?
You get an email with a link, which authenticates you by clicking on it.

### What is Single Sign On?
With single sign on, you can use one identity (one login) for several applications.

### What are the drawbacks of single sign on?
- If credentials are stolen, they can be used for many applications.
- If the central authentication system breaks, users cannot log into any application
- Central authentication systems know all activities of the user

### What is Kerberos?
A single sign on protocol that works over LAN in a single company. It supports many different application. It is based on secret key cryptography.

### What is a potential weakness of Kerberos?
The master keys are based on the users password, which can be weak.

### What is SAML?
A single sign on protocol that works over the internet and between different companies. It can be used for Web Apps.

### What is OpenID Connect?
A single sign on protocol that works over the internet and between different companies. It can be used for Web Apps, Mobile Apps and APIs.

### What is OAuth (2.0)?
Its a framework for autharization. The goal is to allow authorization via APIs without sharing passwords.

### How does the OAuth 2.0 protocol work?
- The client sends an authorization request to the resource owner.
- The resource owner grants authorization.
- The client requests an access token from the authorization server.
- The authorization server creates the access token (cryptographically protected).
- The client sends the access token to the resource server.
- The resource server sends the requested resource to the client.

### What is the principle of Oauth?
The resource owner grants the client a ticket that gives it access to the resource on a server. 

### What is a OpenID Connect claim?
A claim specifies a property of the End-User. In other words, user profile information.

### What is the simple flow of a client trying to get data using the OpenID Connect protocol?
1. RP sends «login» request to OP
2. OP authenticates End-User and obtains authorization to send data to RP
3. OP responds with ID and Access Token to RP
4. RP asks OP for user profile information
5. OP replies with claims containing user profile information 

### What are functional differences of OpenID Connect and SAML?
OpenID Connect
- User can choose which attributes (claims) to give to the relying party
- Only asserts identity (no permissions)
- Supports web, mobile and API
- Encryption based on HTTPS connection 

SAML 
- Implementation decides which attributes are given to relying party
- Allows for permissions to be transferred from IdP to SP
- Supports web applications
- Encryption is part of SAML

### Why is the Kerberos key based on a time stamp?
It protects against replay attacks.

### What is Shibboleth?

### What is SSI?
In contrast to Centralized Identities, Self Issued Identities make it possible for application to not have to communicate with the issuer but only with the user. The data is also only stored in a wallet of the user, so that the user has full control over their data.

### What is the difference between an access control model, a security policy and a security mechanism?
An access control model is a conceptual framework dictating how subjects access objects.

A security policy defines who is allowed to do what on a system.

A security mechanism is the "actual method / data structure" that is used to implement the security policy.

### What are the characteristics of discretionary access control (DAC)?
The owner of the object controls which subjects have access to what degree. There is usually an administrator who can bypass the restriction.

### What are the characteristics of mandatory access control (MAC)?
A system-wide policy determines who is allowed to do what on the whole system. MAC is usually used in combination with DAC and based on security levels. A process can only access other processes with the same or lower securoty levels.

### What are the characteristics of role based access control RBAC?
Users are mapped to role and roles are mapped to resources with rights.

### What are the 3 drivers for security policies?
- business drivers: lowerd the cost of managing permissions
- security drivers: ensure security, integrity and availability
- regulatory drivers: forced upon enterprises to comply with regulations

### What is authorization creep?
Accumulation of access over time (eg., if you get a different role but dont loose the specific ones from your previous role)

### Which steps are needed in an access management process?
1. Requesting access
2. Verification
3. Providing rights
4. Monitoring identity status
5. Logging and tracking access
6. Removing or restricting access rights

### Linux root can bypass the DAC, while windows admins just have additional rights. What are the different concequences of each approach?
- Bypassers are never deniable and malicous use is not preventable.
- Admins with additional privileges can change the DAC but it will be logged. 
- Admins with additional privileges can be given just the right amount additional of privileges.

### How can an access matrix be stored efficiently?
- ACL (1 linked list per file or per user)
- Limit the amount of people (eg. user, group, others)
- Permission inheritance

### What is a capability? (Capabilities Security Mechanism)
A capability is an unforgeable token (ticket) owned by a subject that contains the permissions for specific objects. Because it is unforgeable, access can be granted without checking who the subject is, as long as they have the ticket.

### How are ACLs and Capabilities combined in Unix file descriptors?
- When opening a file with the open() call, the *ACL* is consulted to check whether the subject has the necessary permissions.
- If access is granted, the subject gets a file descriptor, which is nothing else than a *capability*.
- Upon read() / write() call, the OS looks at the file descriptor (capability) to determine whether type of access is allowed (no further ACL checks)

### What are the pros and cons of access control lists and capabilities?
ACL
+ Subjects (users, groups) are often associated with clearly identifiable entities and are therefore intuitive to use.
+ Determine who is allowed to do what with a specific resource is efficient.
+ Revocation is straightforward.
+ Determine what a specific subject is allowed to do is inefficient.
- Checking of ACLs can be complex.
- Confused deputy problem

Capabilities
 - Authorization is efficient (check token).
 - Tokens can’t be revoked.
 - Determine which subjects can access a specific object is difficult.
 - Auditing is difficult: No token-to-subject binding.

### What is the confused deputy problem?
A confused deputy is a computer program that is tricked by another program (with fewer privileges or less rights) into misusing its authority on the system.

### How does Mandatory Integrity Control work on Windows?
Processes and objects have Integrity Levels. The operating systems grants only access to objects to subjects that have an IL equivalent or higher as compared to the corresponding object. Example: Browsers can put their Tabs in a seperate Process with the lowest IL to protect against malware in the browser.

### What are the limitations of DAC and MAC when used as an authorization model in companies?
- If you use a DAC like a MAC (system wide policy but implemented with DAC) and decide to change your policy, you need to change it everywhere.
- DAC is error prone
- If MAC is used too losely (in a unfit use case), it doesnt actually help.

### What are the limitations of role based access control?
- Not supported by operating systems
- Might require many roles
- No possibility to add additional dimensions such as time, geo-location, age, etc.

### What is Attribute Based Access Control?
The privileges are given based on attributes of the users. (eg. age, location)

### What are the benefits and limitations of firewalls?
Benefits
- Blocks a lot of unwanted traffic before it enters the own environment.
- Control access from and to the outside at centralized points - this is much simpler than controlling this on each individual host.
- Can hide the internal network structure from outsiders.
 
Limitations
- No protection from attackers that are already in the network.
- Packet Filtering Firewalls do not protect from application specific attacks

### What are the goals of network segmentation?
- Increase operational performance with “hiding” traffic in different logical networks.
- Limit damage from cyber attacks to a single network segment.
- Protect vulnerable devices by moving them in a dedicated segment.
- Reduce the scope of compliance by combining regulated devices in a dedicated segment.
- Protect from insider attacks with limiting access-scope of individuals

### What does Microsegmentation do?
It makes (firewall seperated) segments as small as feasible. This might be as small as one machine or a "workload" in cloud setups.

### What are the 4 types of Zero Trust Solutions?
- **Traditional**: Encrypts minimal Traffic. Keys are managed in advance/manually
- **Initial**: ALL traffic to internal application is encrypted. Key management policies are used.
- **Advanced**: Internal and external traffic is encrypted. Keys are managed and rotated. There might be other security best practices
- **Optimal**: Additionally, least privilege principle is applied to key management.

### What threats are associated with Zero Trust Architectures?
- Single Point of Failure at the Policy Decision and Enforcement Point (Accidental or malicious misconfigurations and DDoS)
- Stolen or misused credentials (Phishing)
- Lack of network visibility due to encrypted traffic
- Access of monitoring data through attacker
- Misuse of agents (management accounts with more rights) through attacker.

### What is Endpoint Detection and Response?
It is a combination of several capabilities to secure endpoints. (Endopoints are only servers, clients and admin but not IoT or Industrial Plants.) These are the capabilities:
- **Protection**: Firewall, Antivirus, Antimalware...
- **Monitoring**: Anomaly detection, Vulnerability scanning, Integrity Checks...
- **Investigation** and Response: Isolation of devices, Logout of users, Collection of evidence, Rollback of changes

### What does an application level firewall do that packet firewalls dont? What does it require which other firewalls dont?
It looks into the packet content. So, it understands higher layer protocols (e.g., HTTP). But because of this, it requires unencrypted traffic (no TLS) The TLS can be terminated when the packet enters the firewall.

### What might an Application Level Firewall protect from?
- Cross-site-scripting (XSS)
- SQL injection

### What is a Secure Web Gateway?
It protects the user from accessing malicious sites on the internet:
- TLS Inspection
- URL Filtering: Block known malicious URLs
- Data Leakage Prevention (DLP)
	- Blocking of sending sensitive information
	- Requires tagged data or some other possibility to recognize sensitive information

### What might be capabilities of a Cloud Access Security Broker?
- Shadow IT discovery: Generation of reports of used cloud services
- Cloud usage Control: Set access rights to cloud services
- Data leakage prevention: Set policies for data sharing
- Anomaly detection: Alerts on unusual behavior

### How are services in the cloud made secure?
A cloud access security broker is placed between the clients and the cloud service. The CASB analyzes the network traffic and blocks it if necessary.  

If the client is located in the company network, this can be integrated architecturally in a similar way to an secure web gateway, whereby the CASB is typically located in the cloud and the SWG in the local network. However, if the client is not located in the local network, it must be configured to send all requests to the CASB first. As with the SWG, the CASB also needs access to the unencrypted data in order to be able to execute all capabilities. 

### What does Network Detection and Response do?
It is a tool that has an integrated solution to block malicious traffic directly. Configuration changes to firewalls, other security appliances, or even clients can be initiated directly from the NDR tool. In order to be able to react as quickly as possible, it is practical if these configuration changes are triggered automatically.

### When does Network Detection and Response not work well?
It only works well if the normal network traffic is really known and does not change too often. Otherwise, there is a high risk that legitimate network traffic would be blocked. In these cases, it makes more sense for the action to be carried out only after a security analyst has also concluded that an attack is taking place. 

### What is Security Information and Event Management?
It is a tool for security analysts that evaluates log files from various servers, security appliances, and other devices.
- Correlation of events provided by different log sources to find malicious activity.
- Consolidated view in a single dashboard.
- Generation of reports (also used for compliance)

### What is SOAR (Security Orchestration, Automation and Response)
SOAR tools are an extension of SIEMS that allow automated responses to be executed. In addition to the logs, other sources are also analyzed. These include vulnerability scans and threat intelligence data. A vulnerability scan examines whether your own infrastructure (often with a focus on websites) has any weaknesses. Threat intelligence refers to a collection of information that allows attacks to be detected (e.g., lists of malicious IP addresses or newly discovered vulnerabilities). 

### What is netfilter?
Netfilter is a mechanism that allows to access the packets in the network stack to analyze, modify, extract and delete them. It is part of Linux kernel.

### What is nftables?
Nftables is a packet classification and mangling framework that runs on rulesets that are applied to the packets. It is part of Linux kernel.
- Can be used to implement a packet-filtering firewall.
- Can be used to implement IPv4 and IPv6 network address translation

There are nftables rules that can be applied to packets: accept, drop, reject. Most often, unwanted packets will be dropped. Example Rule: Drop tcp-traffic, accept http-traffic

### What are 3 types of DDoS Attacks?
- Attack on network bandwidth: Send huge amount of network traffic
- Attack on system resources: Send specific types of packets that consume the resources or crash system.
- Attack on application resources: Send many valid requests that consume available resources.

### What is DNS amplification?
This is a DDoS attack on the network bandwidth. By making a request to an open DNS server with a spoofed IP address (the IP address of the victim), the target IP address then receives a response from the server.

While a few requests are not enough to take down network infrastructure, when this sequence is multiplied across multiple requests and DNS resolvers, the amplification of data the target receives can be substantial.

### What is SYN flood / SYN spoofing?
This is a DDoS attack on a system resource. This attack exploits the TCP handshake - the sequence of communications by which two computers initiate a network connection - by sending a target a large number of TCP “Initial Connection Request” SYN packets with spoofed source IP addresses. The target machine responds to each connection request and then waits for the final step in the handshake, which never occurs, exhausting the target’s resources in the process.

### What is HTTP flood?
This is a DDoS attack on an application resource. This attack is similar to pressing refresh in a web browser over and over on many different computers at once – large numbers of HTTP requests flood the server, resulting in denial-of-service. This type of attack ranges from simple to complex. Simpler implementations may access one URL with the same range of attacking IP addresses, referrers and user agents. Complex versions may use a large number of attacking IP addresses, and target random URLs using random referrers and user agents.


### What are countermeasures for a DNS amplification attack?
- Source IP verification at the ISP level.
- Configure DNS resolver to only serve trusted clients.
- Rate limiting at the DNS Resolver.

### What are countermeasures for a SYN flood attack?
- Increase backlog queue.
- Recycle oldest half-open connection.
- Use SYN Cookies
	- Don’t open port, but send SYN-Cookie.
	- Open port only, when receiving ACK with cookie.

### What are countermeasures for a HTTP flood?
- Add challenge to be solved by requesting machine or user (e.g., CAPTCHA).
- Block known bad IP addresses.
- Static rate limiting.
- Use WAF to dynamically block many requests from same IP

### Which vulnerabilities are found in WEP?
- Work factor of keys is too low
- 1 Key is shared for all users in a network. So one user can see the traffic of all the other
- users in tehir network
- The RC4 PRNG only generates 2^24 keystreams from that key anyways (each frame another keystream is used. the frames can be sniffed until the initialization vector repeats. you can xor two frames and derive the original text & keystream. do this for every keystream.)
- CR4 weakness that allows to guess part of the keystream using the IV
- CRC doesnt is not integrity protection. If the attacker knows the plaintext, they can know the keystream, modify the ciphertext and send it with a valid CRC.

### What is differen in WPA compared to WEP?
- Each user has its own key material
- Periodic re-keying
- Two encryption modes (one insecure one for backwards compatability)

### What are the 4 VPN use cases?
- Private Use: Change Geo-location of IP
- Connection of different company locations (2 subnets)
- Connection to company network for remote workers/mobile users.
- Remote Support for IT-Services, production facilities, etc. A single IP is connected to another IP (or potentially subnet).
### How does a VPN work?
- VPN gateways are the endpoints of a secure channel.
- The gateways apply and remove the cryptographic protection. Noone else can see what they are transmitting. Because of this, it is as if the two points are in the same net.

### How are TLS and VPN different?
TLS is on the transport layer and between two applications. VPN is on the IP layer and for all communication between two hosts. Applications are not aware of VPN.

### How does WEP work?
The AP and all clients share a preconfigured long-term key.
- This key is used to encrypt individual frames.
- Since all clients use the same key, every user (who knows this key) can read the traffic of every other user.

### How is a VPN used for private use?
The user connects to a public VPN provider to access the internet. The user and the VPN provider will be conntected over a Tunnel. The user will seem to be the VPN provider.

### What is a possible drawback of public VPN providers?
The provider can see who the user is talking to.

### How are two networks connected with VPN?
There has to be two VPN Gateways that are connected via tunnel. Each subnet will be connected to one of them.

### How can a mobile user connect to their company VPN?
The user can connect to the company VPN gateway. The gateway will give the user a virtual IP address (from a pool of addresses) over the VPN tunnel. This is because a mobile phone has a dynamic IP address depending on its location (home, outside). The address can also be of a company subnet.

### What is Split Tunneling?
With split tunneling, not all traffic goes over the VPN gateway. The traffic can go to the internet directly or to the network behind the VPN gateway. This is to not overload the network behind the gateway. What traffic will be redirected to the internet directly can be configured carefully.

### What has to be considered when connecting a third party to your network via VPN?


### How does OpenVPN work without needing to change the hosts Kernel?
There is be a Network adapter installed that will send all outgoing packets back to the OpenVPN application running, who will then encrypt it and send it to the real internet.

### Why does OpenVPN use UDP?
Because the packet it encrypts already uses TCP, so it already has TCP functionality. Additionally, all messages need to be confirmed because TLS needs reliability.

### Why is OpenVPN slower than other VPNS?
Because it needs to extract the packet from the kernel space back to the application space.

### What is pen testing?
It is short for penetration testing. Simulated automated attacks are used to broadly test the security of a system.

### What are some examples of prompting techniques for secure code?
- Root technique prompt: specify to prevent security weaknesses
- Refinement prompt: Ask to fix previous response
- Decomposition Technique: Ask to find problems and ask about each problem seperately
- Reasoning Technique: Ask to think through it step-by-step. Use the reasoning for the next prompt
- Priming Technique: You are a secure programming expert...

### What is the difference between Privacy and Data Protection?
Privacy is broader than data protection. Its about human rights, dignity and subjective, while data protection is more about specific technical measures. Privacy is about "what and why". Data Protection is about "how".

### What are 3 PET Categories?
(PETs = Privacy Enhancing Tools)
- Advanced Encryption -> controlling who sees data
- Federated Learning -> send less data to central model
- Obfuscation -> sharing data without revealing individuals

### What is Homomorphic Encryption?
Homomorphic encryption is a method of encryption that allows computations to be performed on encrypted data without decrypting it first. It's used in scenarios where a party needs to delegate computations to an untrusted environment, while ensuring the data and the results of the computation remain confidential.

### What is Secure Multi-Party Computation?
Secure Multi-Party Computation (SMPC) is a cryptographic protocol that allows multiple parties to jointly compute a function on their private inputs without revealing their individual data to one another. Its primary use is to enable collaborative analysis and data sharing among multiple entities while maintaining the confidentiality of their sensitive information.

### What is a Trusted Execution Environment?
A trusted execution environment is a hardware module for advanced encryption.

### What is Federated Learning?
Here, there are local models and a main model. The local models learn from their user. The main model will aggregate data and they will share updates. But since only the local model is specialized on its user, the users data will not be easily accessible to everyone.

### What is K-Anonymity?
It is a method that protects individuals in a dataset by making each person indistinguishable from at least k-1 others based on certain identifying attributes.

### What is Pseudonymization?
Pseudonymization means “almost anonymous but if an attacker tries, they can get individual information.”

### Why is synthetic data not enough for privacy?
It still gives some information. For example if the real part of the data changes over time.

### How is a certificate obtained from Lets Encrypt for domain validation?
1. Agent: initiation domain validation process
2. Let’s Encrypt: pose challenges
3. Agent: implement challenges
4. Let’s Encrypt: validates challenges => Agent has authorized key pair

Example Challenge: Sign something, put something at domain/xyz

Lets Encrypt will know at the end that some key A belongs to the Domain. This key will be used only for certificate signing request to Lets Encrypt. With the certificate signing request, a new key pair is generated and signed by A. Lets Encrypt sends you a certificate for it if both are valid.

### How does a certificate signing request to Lets Encrypt work?
Lets Encrypts already knows that a key A belongs to you (The one used for talking with Lets Encrypt only during domain validation). You generate a new key pair that you want to use and sign them with A. Lets encrypt can then verify both and give you a ceritficate.

### How do you check the Validity of a certificate?
Using the public key of the issuer. The issuer also has to be verified by its issuer etc.

### How is a root certificate authority certificate securly transmitted to a end user?
It is pre installed by the browser manufacturer

### Name a major issue in the area of certificate infrastructure.
- It is difficult to revoke stolen certificates
- Root CAs have to be trusted

### How is a certificate revoked?
WIth the Certificate Revocation List, which gets distributed over browser vendors in regular updates. Until the next update, there is a small window where an invaliud certificate will be considered valdid. Root certificates have to be deleted by browser manufacturers.

### What does the Swiss law say on cybersecurity that might affect a cyber security specialist?
- You are not allowed to break into a computer system or application
- Not even, when you do it “for the good of security”
- For penetration testing, ethical hacking, etc.: You always need a corresponding contract!
- The laws regarding confidentiality are very important and the reason we need to build secure systems.
- Some laws state the right to ask for deletion of data, but there are exceptions.

### What is key stretching?
The initial key is fed into an algorithm that, running on a given speed of processor, takes a known constant time to apply. The algorithm is constructed so that the delay introduced is acceptable to most users, say one second on a typical personal computer. This makes it computationally too expensive for a dictionary attacks

### Whats the difference between direct login, federated identity and self-sovereign identity?

### What is the difference between direct and indirect login?
Direct: the service you want to log into performs the authentication

Indirect: the service requests another service, which then takes over the verification of the users

### What are Decentralized Identifiers?
- Used as identifiers of holders and issuers in the SSI Eco-System
- Globally unique ID in form of an URI (Uniform Resource Identifier)
- Combines a set of existing unique names such as DNS, etc.
- Associated with a public/private key pair
- DID & Public Key pair stored in Verifiable Data Registry

### What is a Next Generation Firewall?
It is updated by threat intelligence and has a lot of features like: deep packet inspection, intrusion prevention, application awareness, antivirus, sandboxing

### What is deep packet inspection?
Not only the network header is analyzed, but also the payload. This often requires TLS inspection.

### What LLM features matter for security?
- **Novel**: We are still learning about safety and security of LLMs
- **Easy to use**: Anyone can build things with LLMs including bad actors or incompetent actors.
- **Training data**: Basically trained on the whole internet, including the bad parts. It can generate harmful and insecure code.
- **Complex and large**: Hard to interpret, lack of transparency about why a response was given. This makes it hard to prove that the model is working as intended.
- **Non-deterministic**: You can get a different output each time you run it. This makes it hard to predict and difficult to test vulnerabilities.

### What are the principles of trustworthy and responsible AI?
- Safety (to humans and infrastructure)
- Fairness (to language, race, sex, etc)
- Sustainability (there are trade offs with using data centers)
- Transparency
- Accuracy (hallucinations)
- Privacy

### What are the trust boundaries for AI engineering?
- User interaction (bad input)
- Wild training data (can be biased or poisoned)
- Internal test and training data (Could contain sensitive information from the company)
- External services (A data leak could happen)
- Live  public data (Can do indirect prompt injection and be biased/poisoned)

### What steps can be taken to reduce data poisoning?
- Check and sanitize input data
	- Track data origins and verify data legitimacy
	- Vet data vendors rigorously
	- Validate model outputs against trusted sources
	- Use data version control to track changes in datasets and detect manipulation
- Fine tune the model with your own clean data
- Monitor outputs

### What is the difference between the swiss pricacy regulation and the one in the EU?
The GDPR protects EU residents, exempts anonymous data, says privacy should be enabled by default and enforces the right to access, erasure and portability.

The Swiss Data Protection Act (nFADP) has lower fines, gives more time to act, an individual is held liable, it is not mandatory and only for high risk profiling.

### What is the difference between Privacy and Security?
Privacy is only about an identified or identifiable natural person, security is also about company data

### What are some fundamental privacy enhancing techniques?
- Data minimization
- Automated data deletion
- Data inventory
- Access controls
- Notice and Choice

### How does differential privacy protect the privacy of someone in a database?
With differential privacy, you add enough noise that you aren’t really sure if someone is in the dataset. The noise offers plausible deniability.

### Why would implementing data protection require more social engineering than software engineering?
Because it's hard to convince companies to actually delete their data or make their cookies rejectable, etc. Even if this is not the case withing the team, it may also need to be approved by different parts of an organization.

### Why does differential privacy annoy some security purists?
Differential Privacy deliberately breaks integrity. Instead of information staying the same and being certain if someone is in the database, now there is random noise. In the end, it depends on the use case which one is more important.

### What does RTO stand for?
Recovery Time Objective: defines the maximum tolerable downtime for a system or process after a disruption, setting a target for how quickly operations must be restored to avoid unacceptable business impact.

### What does RPO stand for?
Recovery Point Objective: the maximum amount of data an organization can afford to lose after a disruption from the last good backup to the failure point.

### What dodes MAO stand for?
Maximum Acceptable Outage: The longest period an organization can sustain an outage before severe business impact or failure.

### Name 4 Agentic AI Design Principles
- Make the model reflect
- Make it use tools
- Make it plan and decompose tasks
- Have different models solve different parts