// src/lib/data/experience.ts
import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'webally-self-employed',
		company: 'webAlly',
		description: `<b>webAlly is the company name under which I do all my freelance work, I established the company in 2006.</b> Over the years I've accepted print work, advertising work, video, graphic design, web-development, custom hardware development, embedded programming and Software Development.

<b>Awarded Tenders:</b>
Was awarded tenders from:
- USAID on the PEPFAR project
- Municipality of Ekurhuleni
- Imperial Logistics

<b>Some of my clients & Projects:</b>
- ACSA - Airport Company South Africa
- Airport Company South Africa - 3D Airport Explore
- Airport Company South Africa - 3D Airport Game
- Airport Company South Africa - Duty free Shopping
- Alex May Inc - Case Management System
- Alex May Inc - Document Encryption
- Alex May Inc - Document Management Systems (DMS)
- ANANZI - Online Marketing / Banners
- Anglo American - E-Mail Marketing
- Electronic Invitations
- Anglo Gold - Electronic Invitations
- Anglo Gold - Website
- APBCO Insurance - Asset Management System
- ATKV - Website and Print
- Best4Kids - Website & Customer Portal
- BKS Engineers - Website
- BlueJam Photography - Website
- Brandwag School - Promotional Video
- Brinant Security - Shift and Staff Management System
- Cavalier Abattoirs - Process Management System
- Cavalier Abattoirs - Quote and Invoice System
- Cavalier Abattoirs - Vehicle Maintenance System
- Cavalier Abattoirs - Vehicle Tracking and  System
- Cavalier Livestock - Website
- CE @ UP - Multimedia Presentation
- City Lodge - Bid2Stay Website
- City Lodge - Online Booking System
- City Lodge - System Integration
- City Lodge - Website
- City Lodge Hotel Group
- Collect-a-Can - Website
- Constantia Village Mall - Marketing System
- Continuing Education At University of Pretoria
- Die Poort School - Christmas Market Sales System
- DIY Weddings - Website
- DLC Group
- DLC Group - Website
- DOTCOM Trading - Data Capturing Software
- DOTCOM Trading - Database Development
- DOTCOM Trading - GIS (Geographical Information Systems)
- Duoporta - Vehicle Valuations System
- Emperors Palace - Event Promotions
- Exxaro - Internal Communication System
- Exxaro - IZone Staff Empowerment System
- Exxaro - Online Quiz Game
- Exxaro - Software for Real Life Quiz Game, Custom Hardware
- Fear Factor Candy - Website
- FGX Studios
- FGX Studios - CMS Centred
- FGX Studios - CMS Development
- FGX Studios - CMS Ignition
- FGX Studios - Mall Management System
- FNB - Corporate Identity Development
- Goldfield Logistics - Intranet
- Imperial Distribution
- Imperial Logistics
- Imperial Logistics - Building Management System
- Imperial Logistics - Document Management System
- Imperial Logistics - HR Management System
- Imvula ICD - Asset Management System
- Imvula ICD - Server Monitoring System
- Imvula ICD - Software License Management System
- InGenius - Website
- Inspectacar - Online Car Market System
- IQ Recruitment - Candidate Management System
- Kumba Iron Ore - Annual Report
- Laerskool Die Poort
- Legacy Underwriting Managers - Portfolio Management System
- LURITS - Learner Performance Management System
- Mac Mobile - Product Distribution System
- McDonald's
- Musofinder - Website
- Nutella - Billboards and Posters
- Ombudsman - Case Management System
- One Red Marble - Website
- OZ Pharmaceuticals - Website
- PC Palace - Service and Product Repair
- Nexus Online - Website
- PC Palace - Website
- Pencil Box - School Admin System
- PNA - E-Commerce
- PNA - Product Management System
- Principal Software - Custom Online IDE
- Principal Software - Custom Version Control System
- Principal Software - School Admin System
- Principle Software
- Quick PC - Billboards
- Restaurant Mosaic - Point of Sale System
- Restaurant Mosaic - Website
- Student Village - System Analysis
- Super Soil - Brand Development
- T-Systems - Website
- The Car Shop - Website
- The Orient Hotel - Hotel Management System
- The Orient Hotel - Point of Sale System
- The Orient Hotel - Website
- The Orient Hotel - Website
- TiciBox - Point Of Sale Systems
- Tribake - Quote and Invoice System
- Tshwane University of Technology - Website
- TSMA - Website
- TUT Heita Newsletter (Award Winner)
- TUT Pharmaceuticals Department - Website
- UNISA - Annual Report
- UNISA Law Department - Website
- UNISA Math Department - Game
- University of Pretoria - Multimedia Presentation
- Urban Crew - Website
- USAID - NGO and Financial Management System
- Vane Systems - Bus Ticket Booking System
- Vane Systems - Event Ticketing System
- Vane Systems - Indoor Venue Maps (SVG, XML)
- Voortrekker Monument - Website
- WebOnline - Website
- Yara International - Website and Branding

<b>Achievements:</b>
- Won 1st prize for 2 years running for the best electronic publication in South Africa for TUT's monthly newsletter called HEITA
- I believe webAlly was one of few web development companies that also did print work. I outsourced all the non electronic media and got help with some of the hardware development but - I've always tried to keep the development close and to learn as much as possible, programming is truly a my passion.
- In 2019, for McDonalds I Created and Launched Tinbo Dash, a PC and Android Infinite Runner type game where players could win vouchers by playing the game. We had over a million game played in 4 weeks.

<b>HeEPP - Hyper extensible Element Pre-Processor:</b>
When I started doing freelance work I got a lot of the same kind of projects and I started creating modules I can re-use for different projects. These modules grew into a framework that I initially called \`webCore\`. Eventually after years the MVC framework I created was at the stage where it was the only tool I used for all my projects if the client had no particular preference. During this time I got a 2 year contract from Cavalier Abattoirs to create a complete process management system and invoice system. This gave me the chance to refine webCore and I renamed it HeEPP.

I named it HeEPP or Hyper extensible Element Pre-Processor because of the way the system focused or creating re-usable elements. Elements can be used within elements and elements can be extended by others. This was years before Google Polymer started doing the same but only on the front-end. 

In HeEPP you create custom HTML tags that is then called an element.
Each element has a corresponding PHP class with the same name
The attributes of the tag updates the properties of the PHP class and the PHP class will then render the element in various ways depending or those properties.
Elements can be used in loops and they can be nested and grouped. Building a system that comprises of re-usable elements you only have to create once and test once and that you can then build bigger elements with is surprisingly efficient and very stable and easy to maintain and test. The past few years I haven't had the time I wanted to finish the docs but I'm busy with that now in 2022 and I hope to get this done before May 2022 and then putting it out there for the public to comment and help out if they would like to. I hope to compete with Laravel from 2024 for the top spot in PHP MVC Frameworks`,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2019, 0, 1) },
		skills: getSkills('js', 'ts', 'php', 'python', 'java', 'kotlin', 'react', 'vue', 'angular', 'nodejs', 'laravel', 'symfony', 'django', 'flask', 'mongodb', 'mysql', 'postgresql', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'android', 'ios', 'react-native', 'flutter', 'ai', 'machine-learning'),
		name: 'Senior Full-Stack Developer',
		color: 'blue',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' },
			{ to: 'https://cv.webally.co.za', label: 'Resume Website' },
			{ to: 'https://blog.webally.co.za', label: 'webAlly Blog' },
			{ to: 'https://docs.webally.co.za', label: 'webAlly Wiki' },
			{ to: 'https://nav.webally.co.za', label: 'webAlly Dashboard' }
		],
		logo: Assets.Webally, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'vane-systems',
		company: 'Vane Systems',
		description: `<b>Vane Systems creates and integrates with payment solutions as well as booking / Ticketing Systems.</b>

During my time at Vane Systems I maintained the C# RestFull API SOAP Service and PHP GraphQL API.
The company also does bus bookings and integrates with Greyhound and InterCape. They also do event booking systems point of sale systems and credit card machines.
Like with most Senior developers I had a hand in most of what was going on. Security was of great concern with many of the systems as well as physical access control systems as well as document encryption.
The development team worked on an Agile The company manages the developers with an agile methodology, test driven development, scrums, burndows, Kanban boards etc.

<b>Reason for leaving:</b>
I left because I broke my back and was out of action for months, but since then I've no problems at all.

<b>Other Tasks:</b>
- API Integration
- Authentication including OAuth 2
- Check and Apply Coding Standards
- Database Development
- Management Tools and Business Logic
- Project Management
- Project Planning
- Server Management
- System Analysis

<b>PHP 5.6 and PHP 7:</b>
- Custom MVC PHP Framework
- Laravel
- Laravel Lighthouse
- Laravel Passport
- Object Orientated
- PHP
- SaaS (Software as a Service)
- Web Services (Restful & SOAP)

<b>Database Management:</b>
- MSSQL
- Mysql
- SQLite

<b>Indoor Mapping:</b>
- WSDL
- XML DTD
- XML Schema's
- XPath
- XML
- SVG
- XHTML
- XSLT

<b>GIS:</b>
- Geographic Information Systems (GIS)
- Mapping and Geo Reverse Tracking
- Route Planning
- SQL Integration

<b>Server Administrator:</b>
- Apache
- CentOS 7
- FreeBSD Mail Server
- MariaDB
- MySQL
- NginX Reverse Proxy
- PHP

<b>Security:</b>
- Biometrics
- Digital Signatures
- Document Encryption
- Facial Recognition
- Location Based Authentication Methods
- Voice Recognition

<b>Android App Development:</b>
- Custom Hardware Development
- Java
- Point Of Sale Systems
- SQLite
- Teleric
- XML

<b>CSS Frameworks & Pre-processors:</b>
- Bootstrap
- Foundation
- Material - SASS
- Less CSS
- Stylus

<b>Version Systems Control:</b>
- GIT
- SVN`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Johannesburg, South Africa',
		period: { from: new Date(2018, 0, 1), to: new Date(2019, 1, 1) },
		skills: getSkills('csharp', 'php', 'graphql', 'mysql', 'postgresql', 'docker', 'kubernetes'),
		name: 'Senior Full-Stack Developer',
		color: 'green',
		links: [],
		logo: Assets.VaneSystems, // Replace with Vane Systems logo when available
		shortDescription: 'Developed and maintained API services and various booking systems.'
	},
	{
		slug: 'webally-2015',
		company: 'webAlly',
		description: `<b>webAlly is the company name under which I do all my freelance work, I established the company in 2006.</b> Over the years I've accepted print work, advertising work, video, graphic design, web-development, custom hardware development, embedded programming and Software Development.<br>

<b>Awarded Tenders:</b><br>
Was awarded tenders from:<br>
- USAID on the PEPFAR project<br>
- Municipality of Ekurhuleni<br>
- Imperial Logistics<br>`,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2015, 3, 1), to: new Date(2017, 11, 1) },
		skills: getSkills('JavaScript', 'php', 'mysql', 'html', 'Flash','ActionScript', 'Database Management','XML'),
		name: 'Founder & Senior Full-Stack Developer',
		color: 'lime',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' },
			{ to: 'https://cv.webally.co.za', label: 'Resume Website' },
			{ to: 'https://blog.webally.co.za', label: 'webAlly Blog' },
			{ to: 'https://docs.webally.co.za', label: 'webAlly Wiki' },
			{ to: 'https://nav.webally.co.za', label: 'webAlly Dashboard' }
		],
		logo: Assets.Webally, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'legacy-underwriting-managers',
		company: 'Legacy Underwriting Managers',
		description: `<b>Legacy Insurance Underwriting Managers (LUM)</b>

Software for general insurance underwriting, systems and processes will allow you as our client access to your portfolio in real time wherever you are and offers you improved communication with your client.

Web: <a href="https://www.lum.co.za">www.lum.co.za</a>

At LUM I worked as a senior PHP developer on a web-based system for insurance. My main responsibility was to maintain LUM's underwriting software. This web-based system is used by insurance brokers who sell insurance for multiple underwriters. The system integrates with Sanlam, Budget, APBCO, and a few more. The type of systems are really quite extensive and is of course mainly focused to make sure all the financial are done correctly and that there is a proper audit trail for all transactions. Once unique thing I've only encountered at this company was the Database technology the used for the system: Sybase, a Columnar Databases.

- A columnar database is a database management system (DBMS) that stores data in columns instead of rows. 
- Columnar databases store data in a way that greatly improves disk I/O performance. They are particularly helpful for data analytics and data warehousing.

<b>Some of the system features:</b>
- Policy administration and claims management
- Claims Automation
- Insurance Admin Systems
- Insurance Policy Administration
- Broker Policy

<b>Reason for leaving:</b>
Vane Systems offered me a R10 000 increase

<b>Other Tasks:</b>
- POS System for Mosaic Restaurant that is owned by the same person
- Asset Management System for LUM, APBCO and The Orient Hotel
- Website for The Orient Hotel
- I built all of these side projects on HeEPP (My PHP MVC Framework)

<b>PHP:</b>
- Custom MVC PHP Framework
- WebCore (HeEPP)
- Object Orientated
- SaaS (Software as a Service)
- Web Services (Restful & SOAP)

<b>Databases:</b>
- Mysql
- Sybase

<b>Server Administrator:</b>
- Apache
- MySQL
- PHP

<b>Security:</b>
- Digital Signatures
- Document Encryption

<b>CSS Frameworks & Pre-processors:</b>
- Bootstrap
- Foundation
- Material Design

<b>Version Control:</b>
- GIT`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2014, 1, 1), to: new Date(2015, 2, 1) },
		skills: getSkills('php', 'mysql', 'sybase', 'js', 'css', 'html'),
		name: 'Senior PHP Developer',
		color: 'red',
		links: [
			{ to: 'https://www.lum.co.za', label: 'Company Website' }
		],
		logo: Assets.LegacyUnderwriting, // Replace with LUM logo when available
		shortDescription: 'Developed and maintained web-based insurance underwriting systems.'
	},
	{
		slug: 'principal-software',
		company: 'Principal Software (D6 Group)',
		description: `<b>When I worked for d6 Group it was still known as Principal Software.</b> I believe the main focus of the company is still admin systems for schools. When I started they rolled out to 30 schools, each school on their own server and own code base. This presented many challenges:

- New updates were a process of deploying the code and DB migrations on 30 servers.
- It took an entire day and if there was a complication at just one school we did a rollback on all.

The first update I proposed was to combine all code bases. This presented a bigger challenge than I thought for some strange reasons. The whole system was written in 1 very, very, very long PHP file. I believe it was a 12MB text file. What I found out later was that the original developer was in fact blind and coded the whole system with text to speech and knowing almost exactly what line of code did what. I was honestly impressed and shocked at the same time.

- I took some time and I split the file into hundreds of smaller files
- The first update I did was deploying the same code, but just split into smaller pieces, but just to one server and we created sub-domains for each school, the sub-domain also determined the DB name the system connected to. We decided to leave each school on their own database since none of the tables had a \`school_id\` or any unique identifier that would differentiate each school's data
- During the time I was there the company grew from being 3 people to more than 40 with over 2000 schools using the system with almost a million users. Working for this company was a real adventure and I enjoyed every day. I loved the people and how the product evolved.

Web: <a href="https://d6.co.za/education/products/d6-plus/">https://d6.co.za/education/products/d6-plus/</a>

<b>Some of the system features:</b>
- <b>Administration:</b>
  - Task-Driven Workflow
  - General School Admin
  - Learner l Parent l Staff
  - Code of Conduct
  - Compliance
  - Communication
- <b>Finance:</b>
  - General Ledger
  - Budget
  - Debtors
  - Creditors
  - Cash Book
  - Projects
- <b>Curriculum:</b>
  - Curriculum Setup
  - Promotion Criteria
  - Marks Computing
  - Report Cards
  - Certificates
  - Report Card Remarks

<b>Reason for leaving:</b>
For some reason it felt like my job was done and I needed to move on, we were a dev team of 6 people by then and I trusted that they would be fine without me.

<b>Other Tasks:</b>
- Project Management
- Server Management
- Department Manager
- Lead Developer
- Created online IDE where everyone worked, this prevented us from working on the same files at the same time. We were still using SVN, and I think that everyone who's worked with SVN knows how working on the same files can sometimes cause you to roll back an entire dev cycle.
- Training
- System Analysis
- Maintenance

<b>PHP:</b>
- Custom MVC PHP Framework
- WebCore (HeEPP)
- Object Orientated
- SaaS (Software as a Service)
- Web Services (Restful & SOAP)

<b>Databases:</b>
- Mysql
- Sybase

<b>Server Administrator:</b>
- Apache
- MySQL
- PHP

<b>Security:</b>
- Digital Signatures
- Document Encryption

<b>CSS Frameworks & Pre-processors:</b>
- Bootstrap
- Foundation
- Material Design

<b>Version Control:</b>
- GIT`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2011, 11, 1), to: new Date(2014, 1, 1) },
		skills: getSkills('php', 'mysql', 'js', 'css', 'html'),
		name: 'Senior PHP Developer',
		color: 'purple',
		links: [
			{ to: 'https://d6.co.za', label: 'Company Website' }
		],
		logo: Assets.PrincipalSoftware, // Replace with D6 Group logo when available
		shortDescription: 'Led development of school administration systems used by thousands of schools.'
	},
	{
		slug: 'webally-2006',
		company: 'webAlly',
		description: 'started webAlly in March 2006, I believe it was one of the first web development companies in Pretoria.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2006, 0, 1), to: new Date(2011, 11, 1) },
		skills: getSkills('JavaScript', 'php', 'mysql', 'html', 'Flash','ActionScript', 'Database Management','XML'),
		name: 'Founder & Senior Full-Stack Developer',
		color: 'lime',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' },
			{ to: 'https://cv.webally.co.za', label: 'Resume Website' },
			{ to: 'https://blog.webally.co.za', label: 'webAlly Blog' },
			{ to: 'https://docs.webally.co.za', label: 'webAlly Wiki' },
			{ to: 'https://nav.webally.co.za', label: 'webAlly Dashboard' }
		],
		logo: Assets.Webally, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'pageworks',
		company: 'PageWorks',
		description: `<b>PageWorks was a Advertising Agency, this was my first job where I was employed specifically for just web-development, but my title at the office was HEAD WEB DEVELOPER</b>, I guess that was only because I was the only one, and not because I was in change of anyone else. We did however employ two more people in the department during the course of the year it felt good doing my title justice.
This was during the time of IE6, JQuery just started getting some traction and most websites were images cut up into tables. The web was very simplistic, you could only safely use 5 different fonts, I knew all the CSS rules, I honestly did not think JavaScript had any future, I treated it as a bad joke, I honestly believe that if Jquery did not come and save JavasScript then it might have been trashed together with Objective C, Turbo Pascal and AT&T Unix Operating System.

<b>Tasks and Tech:</b>
- Section manager
- Web Developer
- Web applications including e-commerce, content management, invoicing systems, resource management
- Php , Asp .net, Visual Basic, MySql, MSSql, Delphi, Access, Flash
- Graphic design
- Video editing
- Multi-Media
- Customer support
- Sales

<b>Reason for leaving:</b>
I got married and I decided to start working as a freelancer to have more time at home, little did I know that working for yourself is a lot more hours than working for someone else.`,
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2005, 11, 1), to: new Date(2006, 1, 1) },
		skills: getSkills('php', 'asp', 'mysql', 'mssql', 'js', 'css', 'html'),
		name: 'Head Web Developer',
		color: 'orange',
		links: [],
		logo: Assets.Pageworks, // Replace with PageWorks logo when available
		shortDescription: 'Led web development projects in an advertising agency setting.'
	},
	{
		slug: 'pc-palace',
		company: 'PC Palace',
		description: `<b>I was studying to become a lawyer back then, but to pay for my studies I started working at PC Palace as a techie.</b> I've always had an interest in computers and I knew much o what I knew back then by just playing around at home, constantly reinstalling Windows 95 from 22 2.5" Disks that I bought on special from CNA's grand opening in Menlyn mall for R20. Before the days of owning a CD-ROM and before you could hope to download more than 10MB over an entire weekend.
The technical department booked in repairs with an Access database running on the Windows Server 2003. The database constantly kicked people out and caused loads of frustration. That is when I decided to create my very first website, I did some research and decided on a LAMP Stack, I've got no idea how it happened that I chose Apache, PHP and Mysql. It took me about two months and many sleepless nights but I completed the new system for the technical department. After that they put me in charge of the company website. Then some of the company's clients also started paying them for development until PageWorks offered me the Lead Web Developer role for 6 times what I was earing at PC Palace.
That was it, I never looked back.

<b>Tasks & Tech:</b>
- Customer support
- Web Master
- Web applications including e-commerce
- PHP, Asp .net, Visual Basic, MySQL, MSSQL
- Graphic design
- Installing networks and maintaining networks
- Server installations
- Hardware Troubleshooting
- Sales

<b>Reason for leaving:</b>
I got married and I decided to start working as a freelancer to have more time at home, little did I know that working for yourself is a lot more hours than working for someone else.`,
		contract: ContractType.FullTime,
		type: 'IT Support / Web Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2004, 7, 1), to: new Date(2005, 11, 1) },
		skills: getSkills('php', 'mysql', 'js', 'css', 'html'),
		name: 'IT Technician / Web Developer',
		color: 'cyan',
		links: [],
		logo: Assets.PCPalace, // Replace with PC Palace logo when available
		shortDescription: 'Transitioned from IT support to web development, creating internal systems and client websites.'
	},
	{
		slug: 'nexus-online',
		company: 'Nexus Online',
		description: `<b>Tasks & Tech:</b>
One of my friends owned an internet cafe / Web-Hosting company, I helped out when I could while I was studying

- Web / graphic design
- Networking
- Customer service
- Support
- Sales`,
		contract: ContractType.PartTime,
		type: 'Web Design / IT Support',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2004, 1, 1), to: new Date(2004, 7, 1) },
		skills: getSkills('html', 'css', 'js'),
		name: 'Web Designer / IT Support',
		color: 'teal',
		links: [],
		logo: Assets.Nexus, // Replace with Nexus Online logo when available
		shortDescription: 'Provided web design and IT support services for an internet cafe and web hosting company.'
	},
	{
		slug: 'ram-london',
		company: 'RAM',
		description: `<b>Technician:</b>
- Technical support
- Computer repair
- Software installation
- Computer building`,
		contract: ContractType.FullTime,
		type: 'IT Support',
		location: 'London, England',
		period: { from: new Date(2003, 7, 1), to: new Date(2004, 11, 1) },
		skills: getSkills('hardware', 'software-installation'),
		name: 'Technician',
		color: 'indigo',
		links: [],
		logo: Assets.RAM, // Replace with RAM logo when available
		shortDescription: 'Provided comprehensive IT support and computer services in London.'
	},
	{
		slug: 'cnn-london',
		company: 'CNN',
		description: `<b>Equipment & Personal:</b>
- Keep track of personal and equipment
- SignIn Logs
- Show visitors to interview rooms
- Security`,
		contract: ContractType.FullTime,
		type: 'Equipment and Personnel Management',
		location: 'London, England',
		period: { from: new Date(2002, 7, 1), to: new Date(2003, 11, 1) },
		skills: getSkills('equipment-management', 'security-protocols'),
		name: 'Equipment and Personnel Manager',
		color: 'red',
		links: [],
		logo: Assets.CNN, // Replace with CNN logo when available
		shortDescription: 'Managed equipment and personnel logistics for CNN in London.'
	}
];

export const title = 'Experience';