// // src/lib/data/projects.ts

import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: "acsa-3d-airport-explore",
		color: "#0077be",
		description: "The ACSA 3D Airport Explore project was an innovative and engaging 3D game developed for Airport Company South Africa (ACSA). This interactive experience was designed to revolutionize the way users interact with and understand airport environments.<br><br><b>Key Features:</b><br>• Meticulously crafted virtual airport environment<br>• Gamified exploration of various airport areas<br>• Reward system for completing challenges<br>• Educational content balanced with entertainment value<br><br>The project successfully created a unique tool that served as both an innovative marketing asset for ACSA and an educational resource for travelers, potentially reducing anxiety and improving the overall airport experience for users.",
		shortDescription: "Interactive 3D airport exploration game for ACSA, designed to familiarize users with airport layouts and enhance engagement through an immersive virtual experience.",
		links: [{ to: "https://www.airports.co.za/", label: "ACSA Website" }],
		logo: Assets.ACSA,
		name: "ACSA 3D Airport Explore",
		period: {
			from: new Date(2018, 0, 1),
			to: new Date(2018, 3, 15)
		},
		skills: getSkills('unity', 'csharp', 'js', 'html', 'css'),
		type: "Interactive 3D Game",
		company: "Airport Company South Africa"
	},
	{
		slug: "anglo-american-email-marketing",
		color: "#ff0000",
		description: "The Anglo American Email Marketing project was a sophisticated digital communication initiative developed for Anglo American, a global leader in the mining industry. This comprehensive system managed and distributed personalized electronic communications to various stakeholders.<br><br><b>Key Components:</b><br>• Suite of responsive email templates<br>• Advanced personalized invitation system<br>• Robust tracking and analytics capabilities<br>• Stringent security measures for data protection<br><br>The result was a powerful, flexible, and secure email marketing solution that significantly enhanced Anglo American's digital communication capabilities, strengthening stakeholder relationships and reinforcing their position as a forward-thinking leader in the mining industry.",
		shortDescription: "Email marketing and electronic invitation system for Anglo American, featuring responsive templates and personalized communication management for enhanced corporate outreach.",
		links: [{ to: "https://www.angloamerican.com/", label: "Anglo American Website" }],
		logo: Assets.AngloAmerican,
		name: "Anglo American Email Marketing",
		period: {
			from: new Date(2017, 0, 1),
			to: new Date(2017, 2, 17)
		},
		skills: getSkills('html', 'css', 'js', 'php'),
		type: "Email Marketing",
		company: "Anglo American"
	},
	{
		slug: "apbco-asset-management",
		color: "#4a90e2",
		description: "The APBCO Asset Management System was a bespoke software solution developed for APBCO Insurance to revolutionize their approach to managing company assets. This project addressed complex challenges of asset tracking, maintenance scheduling, and comprehensive reporting.<br><br><b>Key Features:</b><br>• Centralized asset database with detailed information<br>• Real-time asset tracking using barcode and RFID technology<br>• Maintenance management module with automated alerts<br>• Comprehensive reporting suite for decision-making<br>• User-friendly interface for easy asset management<br><br>The implementation resulted in significant improvements in APBCO's operational efficiency, including real-time visibility into asset status, streamlined maintenance processes, improved budgeting accuracy, and enhanced resource allocation.",
		shortDescription: "Asset Management System for APBCO Insurance, designed to streamline tracking and reporting of company assets while significantly enhancing efficiency and resource allocation.",
		links: [{ to: "https://www.apbco.co.za/", label: "APBCO Website" }],
		logo: Assets.APBCO,
		name: "APBCO Asset Management System",
		period: {
			from: new Date(2016, 5, 1),
			to: new Date(2016, 10, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Asset Management Software",
		company: "APBCO Insurance"
	},
	{
		slug: "brinant-security-management",
		color: "#2c3e50",
		description: "The Brinant Security Management System was a comprehensive software solution developed to address the complex operational needs of Brinant Security, a prominent player in the security services industry. This system revolutionized the company's approach to shift management, staff scheduling, and overall operational efficiency.<br><br><b>Key Features:</b><br>• Advanced scheduling module with intelligent algorithms<br>• Time tracking with multiple clock-in methods<br>• Staff allocation based on skills and client preferences<br>• Robust reporting suite for operational insights<br>• Integrated messaging system for quick communication<br>• Mobile app for on-the-go access<br><br>• Mobile app development for staff access<br><br>The implementation resulted in significant improvements, including a reduction in scheduling time, decrease in overtime costs, and improvement in overall staff utilization. The system enhanced both employee and client satisfaction through fair shift distribution and consistent assignment of appropriately skilled personnel.",
		shortDescription: "Shift and Staff Management System for Brinant Security, designed to optimize scheduling, enhance time tracking accuracy and improve staff allocation, resulting improved service delivery.",
		links: [{ to: "https://www.brinantsecurity.co.za/", label: "Brinant Security Website" }],
		logo: Assets.BrinantSecurity,
		name: "Brinant Security Management System",
		period: {
			from: new Date(2015, 1, 1),
			to: new Date(2015, 7, 12)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Staff Management Software",
		company: "Brinant Security"
	},
	{
		slug: "cavalier-abattoirs-systems",
		color: "#8e44ad",
		description: "The Cavalier Abattoirs Integrated Systems project was an ambitious and comprehensive initiative to revolutionize the operational infrastructure of Cavalier Abattoirs. This large-scale project involved the development and integration of multiple specialized systems, each addressing a critical aspect of the company's operations.<br><br><b>Key Components:</b><br>• Quote and Invoice System<br>• Vehicle Tracking System<br>• Vehicle Maintenance System<br>• Process Management System<br>• Stock Management System<br>• Document Management System<br><br>• Custom API development for system integration<br>• Implementation of message queue for smooth data flow<br><br>The implementation of this integrated system suite resulted in transformative benefits, including an 80% reduction in manual data entry, 60% reduction in processing errors, and significantly improved real-time visibility for agile decision-making. The enhanced tracking and documentation capabilities also strengthened the company's compliance posture and supported its commitment to quality assurance.",
		shortDescription: "Suite of integrated management systems for Cavalier Abattoirs, quotes and invoices, vehicle tracking and maintenance, process management and documentation",
		links: [{ to: "https://www.cavalier.co.za/", label: "Cavalier Abattoirs Website" }],
		logo: Assets.CavalierAbattoirs,
		name: "Cavalier Abattoirs Integrated Systems",
		period: {
			from: new Date(2009, 0, 1),
			to: new Date(2016, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'laravel'),
		type: "Integrated Management Software",
		company: "Cavalier Abattoirs"
	},
	{
		slug: "city-lodge-booking-system",
		color: "#e74c3c",
		description: "The City Lodge Online Booking System project was a comprehensive digital transformation initiative for the City Lodge Hotel Group, one of South Africa's leading hotel chains. This project aimed to revolutionize the group's online presence and dramatically improve the customer booking experience.<br><br><b>Key Features:</b><br>• Modern, responsive website design<br>• Sophisticated online booking system<br>• Real-time integration with property management system<br>• Advanced yield management module<br>• User account feature for personalized experience<br>• Secure payment gateway<br><br>• Custom API development for system integration<br>• Implementation of security measures for data protection<br><br>The implementation resulted in significant improvements, including a 35% increase in online bookings within six months, 15% increase in average revenue per available room, and marked improvement in customer satisfaction scores for the booking process. The system not only modernized City Lodge's online presence but also provided a powerful tool for improving operational efficiency and driving revenue growth.",
		shortDescription: "Website and online booking platform for City Lodge Hotel Group, offering seamless reservation experiences for customers while fully integrating with existing hotel management systems",
		links: [{ to: "https://www.citylodge.co.za/", label: "City Lodge Website" }],
		logo: Assets.CityLodge,
		name: "City Lodge Online Booking System",
		period: {
			from: new Date(2016, 6, 1),
			to: new Date(2017, 1, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'laravel'),
		type: "Web Development & Booking System",
		company: "City Lodge Hotel Group"
	},
	{
		slug: "exxaro-systems",
		color: "#3498db",
		description: "The Exxaro Internal Systems project was a comprehensive initiative aimed at revolutionizing internal communication, employee engagement, and knowledge management within Exxaro, a leading South African resources company.<br><br><b>Key Components:</b><br>• Internal Communication System<br>• Online Quiz Game<br>• IZone Staff Empowerment System<br><br><b>Features:</b><br>• User-friendly intranet portal<br>• Gamified learning platform<br>• Idea submission and peer recognition system<br>• Annual quiz competition with live event<br><br>• Custom hardware development for live quiz event<br><br>The implementation had a transformative effect on Exxaro's corporate culture, with over 80% of staff actively participating in online quiz games and IZone activities. The systems dramatically improved information flow, boosted morale, and fostered a sense of camaraderie across departments. The IZone system also proved valuable in identifying and nurturing talent within the organization.",
		shortDescription: "Advanced communication platform, an engaging online quiz game, and an innovative staff empowerment system (IZone), all designed to enhance employee engagement, knowledge sharing, and corporate culture.",
		links: [{ to: "https://www.exxaro.com/", label: "Exxaro Website" }],
		logo: Assets.Exxaro,
		name: "Exxaro Internal Systems",
		period: {
			from: new Date(2012, 0, 1),
			to: new Date(2013, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'csharp', 'unity'),
		type: "Internal Systems & Gamification",
		company: "Exxaro"
	},
	{
		slug: "fnb-corporate-identity",
		color: "#f39c12",
		description: "The FNB Corporate Identity Development project was a pivotal initiative aimed at revitalizing and standardizing the visual brand identity of First National Bank (FNB), one of South Africa's 'big four' banks.<br><br><b>Key Components:</b><br>• Refinement of FNB's iconic logo<br>• Comprehensive brand guideline document<br>• Custom typeface development<br>• Imagery and photography style guidelines<br>• Digital application of new identity<br>• Print media templates<br>• Environmental design guidelines<br><br>• Digital asset management system<br><br>The impact of the new corporate identity was significant, with brand recognition scores improving by 15% within the first year of implementation. Employee surveys indicated a stronger sense of pride in the FNB brand, while customer feedback highlighted a perception of FNB as more modern and innovative. The cohesive application of the new identity across all touchpoints strengthened FNB's market position and supported its messaging around being a forward-thinking, customer-centric bank.",
		shortDescription: "Comprehensive corporate identity project for First National Bank (FNB), focusing on creating a cohesive and modern visual language across digital and print media",
		links: [{ to: "https://www.fnb.co.za/", label: "FNB Website" }],
		logo: Assets.FNB,
		name: "FNB Corporate Identity Development",
		period: {
			from: new Date(2011, 6, 1),
			to: new Date(2011, 12, 31)
		},
		skills: getSkills('photoshop', 'illustrator', 'indesign'),
		type: "Corporate Identity Design",
		company: "First National Bank"
	},
	{
		slug: "imperial-logistics-systems",
		color: "#27ae60",
		description: "The Imperial Logistics Management Systems project was a large-scale initiative aimed at modernizing and optimizing two critical aspects of Imperial Logistics' operations: document management and human resources.<br><br><b>Key Components:</b><br>• Document Management System (DMS)<br>• HR Management System (HRMS)<br><br><b>DMS Features:</b><br>• Centralized digital repository<br>• Advanced search functionality<br>• Version control<br>• Role-based access control<br>• Workflow automation<br>• OCR capabilities<br><br><b>HRMS Features:</b><br>• Recruitment and onboarding module<br>• Employee database<br>• Performance management tools<br>• Training and development module<br>• Leave management system<br>• Payroll integration<br>• Employee self-service portal<br><br>• API development for system integration<br><br>The implementation brought significant improvements, including a 70% reduction in document search time, 50% reduction in HR administrative tasks, and improved accuracy of employee data. The systems also enhanced employee satisfaction and supported more informed decision-making in areas such as recruitment and talent development.",
		shortDescription: "Comprehensive suite of management systems for Imperial Logistics, featuring an advanced Document Management System and a robust HR Management System, designed to streamline information handling, enhance human resource processes, and boost overall operational efficiency across the organization.",
		links: [{ to: "https://www.imperiallogistics.com/", label: "Imperial Logistics Website" }],
		logo: Assets.ImperialLogistics,
		name: "Imperial Logistics Management Systems",
		period: {
			from: new Date(2010, 0, 1),
			to: new Date(2011, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Document & HR Management Software",
		company: "Imperial Logistics"
	},
	{
		slug: "imvula-icd-server-monitoring",
		color: "#9b59b6",
		description: "The Imvula ICD Server Monitoring System was a sophisticated software solution developed to address the critical need for real-time monitoring and management of Imvula ICD's server infrastructure.<br><br><b>Key Features:</b><br>• Real-time Monitoring Dashboard<br>• Customizable Alerting System<br>• Predictive Analytics<br>• Automated Response Scripts<br>• Comprehensive Reporting<br>• Network Topology Mapping<br>• Log Analysis<br>• API Integration<br><br><br>The implementation resulted in significant improvements, including a reduction in server downtime, decrease in mean time to resolve (MTTR) for server issues, and reduction in unnecessary hardware expenditure. The system's comprehensive logging and reporting capabilities also supported Imvula ICD's compliance efforts with various industry regulations.",
		shortDescription: "Advanced Server Monitoring System for Imvula ICD, providing real-time oversight of server infrastructure, comprehensive alerting capabilities, and detailed reporting functionalities to ensure optimal performance, rapid issue resolution, and proactive IT management across the organization.",
		links: [{ to: "https://www.imvulaicd.co.za/", label: "Imvula ICD Website" }],
		logo: Assets.ImvulaICD,
		name: "Imvula ICD Server Monitoring System",
		period: {
			from: new Date(2009, 6, 1),
			to: new Date(2009, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'python'),
		type: "Server Monitoring Software",
		company: "Imvula ICD"
	},
	{
		slug: "legacy-underwriting-portfolio-management",
		color: "#34495e",
		description: "The Legacy Underwriting Portfolio Management System was a bespoke software solution developed to revolutionize the underwriting process for Legacy Underwriting Managers, a prominent player in the insurance industry.<br><br><b>Key Features:</b><br>• Advanced risk assessment module<br>• Policy Administration<br>• Risk Scoring and Segmentation<br>• Portfolio Analysis Dashboard<br>• Predictive Modeling<br>• Reinsurance Management<br>• Regulatory Compliance Tracking<br>• Claims Analysis<br>• What-If Scenario Modeling<br>• Automated Underwriting<br><br>• API development for system integration<br>• Implementation of strong security measures<br><br>The implementation brought significant improvements, including a 60% reduction in quote generation time, 90% reduction in errors, 25% reduction in loss ratios, and a 15% improvement in overall portfolio performance. The system not only improved Legacy Underwriting Managers' operational efficiency but also positioned the company for sustained growth and competitiveness in the dynamic insurance market.",
		shortDescription: "Sophisticated Portfolio Management System for Legacy Underwriting Managers, integrating advanced risk assessment tools, comprehensive reporting capabilities, and streamlined underwriting processes to enhance decision-making, improve portfolio performance, and optimize insurance operations.",
		links: [{ to: "https://www.lum.co.za/", label: "Legacy Underwriting Managers Website" }],
		logo: Assets.LegacyUnderwriting,
		name: "Legacy Underwriting Portfolio Management",
		period: {
			from: new Date(2008, 0, 1),
			to: new Date(2008, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Portfolio Management Software",
		company: "Legacy Underwriting Managers"
	},
	{
		slug: "pna",
		color: "#e67e22",
		description: "The PNA Management and E-Commerce Systems project was an ambitious initiative aimed at digitally transforming PNA, a well-known South African retailer specializing in stationery, books, and art supplies.<br><br><b>Product Management System Features:</b><br>• Centralized Product Catalog<br>• Inventory Tracking<br>• Supplier Management<br>• Barcode and SKU Management<br>• Product Performance Analytics<br>• Category and Attribute Management<br>• Price Management<br>• Integration with Point of Sale (POS) Systems<br><br><b>E-Commerce Platform Features:</b><br>• User-friendly Product Browsing<br>• Personalized User Accounts<br>• Secure Payment Gateway<br>• Order Management System<br>• Customer Service Integration<br>• Responsive Design<br>• Content Management System (CMS)<br>• Integration with Social Media<br>• Analytics and Reporting<br><br>• Implementation of security measures including PCI DSS compliance<br><br>The implementation resulted in significant improvements, including an 80% reduction in stock discrepancies, 50% reduction in inventory-related tasks, and online sales growing to represent 25% of total revenue within the first year. The project not only streamlined operations but also positioned PNA for sustained growth in an increasingly digital retail landscape.",
		shortDescription: "Comprehensive digital solution for PNA, encompassing an advanced Product Management System and a user-friendly E-Commerce platform, designed to streamline inventory control, enhance online sales capabilities, and significantly expand PNA's market reach in the competitive retail sector.",
		links: [{ to: "https://www.pna.co.za/", label: "PNA Website" }],
		logo: Assets.PNA,
		name: "PNA Management and E-Commerce Systems",
		period: {
			from: new Date(2007, 0, 1),
			to: new Date(2007, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Product Management & E-Commerce",
		company: "PNA"
	},
	{
		slug: "principal-software",
		color: "#1abc9c",
		description: "The Principal Software Version Control System project was an innovative initiative to develop a bespoke version control solution tailored to the unique needs and workflows of Principal Software, a leading software development company.<br><br><b>Key Features:</b><br>• Advanced Branching and Merging<br>• Code Review Integration<br>• CI/CD Support<br>• Project Management Integration<br>• Custom Workflow Enforcement<br>• Intelligent Codebase Analysis<br>• Advanced Search and Navigation<br>• Visual Diff and Merge Tools<br>• Customizable Notifications and Alerts<br>• Audit Trail and Compliance Features<br>• Large File Handling<br>• Integration with Development Tools<br><br>• Strong security measures including encryption and multi-factor authentication<br><br>The implementation brought significant improvements, including a 40% increase in collaboration between team members, 30% reduction in code integration issues, 50% reduction in post-release bugs, and a 25% increase in developer productivity. The system not only improved code management but also boosted overall productivity, code quality, and team collaboration.",
		shortDescription: "Customized Version Control System for Principal Software, featuring efficient code versioning, advanced branching capabilities, and collaborative tools tailored to the company's specific development workflow, enhancing team productivity and software quality management.",
		links: [{ to: "https://www.principalsoftware.co.za/", label: "Principal Software Website" }],
		logo: Assets.PrincipalSoftware,
		name: "Principal Software (Now D6)",
		period: {
			from: new Date(2006, 6, 1),
			to: new Date(2006, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Version Control Software",
		company: "Principal Software"
	},
	{
		slug: "the-car-shop-website",
		color: "#d35400",
		description: "The Car Shop Website project was a strategic initiative to establish a strong online presence for The Car Shop, a prominent automotive dealership.<br><br><b>Key Features:</b><br>• Advanced Vehicle Inventory System<br>• Detailed Vehicle Pages with 360-degree views<br>• Vehicle Comparison Tool<br>• Financing Calculator<br>• Service Scheduling System<br>• Trade-In Value Estimator<br>• Customer Reviews and Testimonials<br>• Blog and News Section<br>• Integration with Social Media<br>• Mobile Responsiveness<br>• Live Chat Support<br>• Analytics and Reporting<br><br>• Custom Content Management System (CMS)<br>• Implementation of lazy loading and image optimization<br>• HTTPS encryption and security measures<br><br>The launch of the new website brought significant improvements, including a 150% increase in organic search traffic, 75% increase in time spent on the website, 200% increase in online inquiries and test drive requests, and a 25% increase in overall sales. The project not only enhanced The Car Shop's online presence but also significantly contributed to its business growth and customer satisfaction.",
		shortDescription: "Comprehensive website development project for The Car Shop, featuring an intuitive interface for showcasing vehicle inventory, integrated services information, and advanced customer engagement tools, designed to enhance online presence and streamline the car buying process for potential customers.",
		links: [{ to: "https://www.thecarshop.co.za/", label: "The Car Shop Website" }],
		logo: Assets.TheCarShop,
		name: "The Car Shop Website",
		period: {
			from: new Date(2006, 0, 1),
			to: new Date(2006, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Web Development",
		company: "The Car Shop"
	},
	{
		slug: "the-orient-hotel-website",
		color: "#c0392b",
		description: "The Orient Hotel Website project was an ambitious endeavor to create a digital showcase for The Orient Hotel, a luxury accommodation renowned for its exquisite blend of Eastern and Western aesthetics.<br><br><b>Key Features:</b><br>• Stunning Visual Gallery<br>• Detailed Room Descriptions with virtual tours<br>• Integrated Booking System<br>• Dynamic Pricing Display<br>• Dining and Spa Sections<br>• Events and Weddings Portal<br>• Interactive Map and Location Information<br>• Multilingual Support<br>• Blog and Newsletter<br>• Customer Reviews Integration<br>• Mobile Responsiveness<br>• Virtual Concierge<br><br>• Implementation of strong security measures and PCI DSS compliance<br><br>The launch of the new website resulted in a significant increase in direct bookings, increased in user engagement, improvement in booking conversion rate, and enhanced brand perception as a luxury destination. The project not only improved The Orient Hotel's digital presence but also contributed significantly to its business growth and guest satisfaction.",
		shortDescription: "Sophisticated website development for The Orient Hotel, featuring elegant design, comprehensive amenity showcases, detailed room information, and an integrated booking system. This online platform enhances the hotel's digital presence, streamlines reservations, and offers an immersive preview of the luxury experience awaiting guests.",
		links: [{ to: "https://www.theorient.co.za/", label: "The Orient Hotel Website" }],
		logo: Assets.TheOrientHotel,
		name: "The Orient Hotel Website",
		period: {
			from: new Date(2005, 6, 1),
			to: new Date(2005, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Web Development",
		company: "The Orient Hotel"
	},
	{
		slug: "tribake-quote-invoice-system",
		color: "#27ae60",
		description: "The Tribake Quote and Invoice System project was a bespoke software development initiative aimed at revolutionizing the financial operations of Tribake, a leading bakery equipment supplier.<br><br><b>Key Features:</b><br>• Customer Relationship Management (CRM) Integration<br>• Dynamic Quote Generator<br>• Quote Versioning and Approval Workflow<br>• Automated Invoice Generation<br>• Flexible Pricing and Discounting<br>• Tax Calculation and Compliance<br>• Payment Tracking and Reminders<br>• Integration with Accounting Software<br>• Reporting and Analytics<br>• Document Management<br>• Multi-Currency Support<br>• Mobile Access<br><br>• API development for integration with existing systems<br>• Implementation of strong security measures<br><br>The implementation brought significant improvements, including a reduction in quote generation time, reduction in errors, reduction in average days sales outstanding (DSO), and the ability to handle a increase in sales volume without expanding administrative staff. The system not only improved Tribake's operational efficiency but also enhanced customer satisfaction and provided valuable business insights.",
		shortDescription: "Comprehensive Quote and Invoice System for Tribake, integrating advanced customer information management, streamlined quote generation, automated invoicing processes, and robust payment tracking. This tailored solution enhances operational efficiency, improves cash flow management, and elevates the overall customer experience in Tribake's business operations.",
		links: [{ to: "https://www.tribake.co.za/", label: "Tribake Website" }],
		logo: Assets.Tribake,
		name: "Tribake Quote and Invoice System",
		period: {
			from: new Date(2005, 0, 1),
			to: new Date(2005, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Quote and Invoice Software",
		company: "Tribake"
	}
];

export const title = 'Projects';