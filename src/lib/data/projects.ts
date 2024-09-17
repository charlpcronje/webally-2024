// // src/lib/data/projects.ts

import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'acsa-3d-airport-explore',
		color: '#0077be',
		description: 'A 3D game developed for Airport Company South Africa (ACSA) where players explore a virtual airport to find items and win prizes. This interactive experience aimed to familiarize users with airport layouts and promote engagement.',
		shortDescription: 'Interactive 3D airport exploration game for ACSA.',
		links: [{ to: 'https://www.airports.co.za/', label: 'ACSA Website' }],
		logo: Assets.ACSA,
		name: 'ACSA 3D Airport Explore',
		period: {
			from: new Date(2018, 0, 1),
			to: new Date(2018, 1, 15)
		},
		skills: getSkills('unity', 'csharp', 'js', 'html', 'css'),
		type: 'Interactive 3D Game',
		company: 'Airport Company South Africa'
	},
	{
		slug: 'anglo-american-email-marketing',
		color: '#ff0000',
		description: 'Developed email marketing campaigns and electronic invitations for Anglo American, a global mining company. The project involved creating responsive email templates and a system for managing and sending personalized invitations.',
		shortDescription: 'Email marketing and electronic invitations for Anglo American.',
		links: [{ to: 'https://www.angloamerican.com/', label: 'Anglo American Website' }],
		logo: Assets.AngloAmerican,
		name: 'Anglo American Email Marketing',
		period: {
			from: new Date(2017, 0, 1),
			to: new Date(2017, 1, 17)
		},
		skills: getSkills('html', 'css', 'js', 'php'),
		type: 'Email Marketing',
		company: 'Anglo American'
	},
	{
		slug: 'apbco-asset-management',
		color: '#4a90e2',
		description: 'Designed and implemented an Asset Management System for APBCO Insurance. This system allowed for efficient tracking, maintenance, and reporting of company assets, improving overall operational efficiency.',
		shortDescription: 'Asset Management System for APBCO Insurance.',
		links: [{ to: 'https://www.apbco.co.za/', label: 'APBCO Website' }],
		logo: Assets.APBCO,
		name: 'APBCO Asset Management System',
		period: {
			from: new Date(2016, 5, 1),
			to: new Date(2016, 10, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Asset Management Software',
		company: 'APBCO Insurance'
	},
	{
		slug: 'brinant-security-management',
		color: '#2c3e50',
		description: 'Developed a comprehensive Shift and Staff Management System for Brinant Security. The system streamlined scheduling, time tracking, and staff allocation, significantly improving operational efficiency.',
		shortDescription: 'Shift and Staff Management System for Brinant Security.',
		links: [{ to: 'https://www.brinantsecurity.co.za/', label: 'Brinant Security Website' }],
		logo: Assets.BrinantSecurity,
		name: 'Brinant Security Management System',
		period: {
			from: new Date(2015, 1, 1),
			to: new Date(2015, 7, 12)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Staff Management Software',
		company: 'Brinant Security'
	},
	{
		slug: 'cavalier-abattoirs-systems',
		color: '#8e44ad',
		description: 'Developed multiple integrated systems for Cavalier Abattoirs, including Quote and Invoice System, Vehicle Tracking System, Vehicle Maintenance System, Process Management System, Stock Management System, and Document Management System. This comprehensive suite of applications streamlined various aspects of the company\'s operations.',
		shortDescription: 'Integrated management systems for Cavalier Abattoirs.',
		links: [{ to: 'https://www.cavalier.co.za/', label: 'Cavalier Abattoirs Website' }],
		logo: Assets.CavalierAbattoirs,
		name: 'Cavalier Abattoirs Integrated Systems',
		period: {
			from: new Date(2009, 0, 1),
			to: new Date(2016, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'laravel'),
		type: 'Integrated Management Software',
		company: 'Cavalier Abattoirs'
	},
	{
		slug: 'city-lodge-booking-system',
		color: '#e74c3c',
		description: 'Designed and developed the website and online booking system for City Lodge Hotel Group. The system provided a seamless booking experience for customers and integrated with the hotel\'s existing management systems.',
		shortDescription: 'Website and online booking system for City Lodge.',
		links: [{ to: 'https://www.citylodge.co.za/', label: 'City Lodge Website' }],
		logo: Assets.CityLodge,
		name: 'City Lodge Online Booking System',
		period: {
			from: new Date(2016, 6, 1),
			to: new Date(2017, 1, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'laravel'),
		type: 'Web Development & Booking System',
		company: 'City Lodge Hotel Group'
	},
	{
		slug: 'exxaro-systems',
		color: '#3498db',
		description: 'Developed multiple systems for Exxaro, including an Internal Communication System, Online Quiz Game, and IZone Staff Empowerment System. The IZone system was particularly notable, featuring an online quiz with the top 3 teams participating in a live quiz night, winning a vacation to Hawaii. Custom software and hardware were created for the real-life quiz game event.',
		shortDescription: 'Internal systems and gamified staff engagement for Exxaro.',
		links: [{ to: 'https://www.exxaro.com/', label: 'Exxaro Website' }],
		logo: Assets.Exxaro,
		name: 'Exxaro Internal Systems',
		period: {
			from: new Date(2012, 0, 1),
			to: new Date(2013, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'csharp', 'unity'),
		type: 'Internal Systems & Gamification',
		company: 'Exxaro'
	},
	{
		slug: 'fnb-corporate-identity',
		color: '#f39c12',
		description: 'Led the development of corporate identity materials for First National Bank (FNB). This project involved creating a consistent visual language across various digital and print media, reinforcing FNB\'s brand identity.',
		shortDescription: 'Corporate identity development for FNB.',
		links: [{ to: 'https://www.fnb.co.za/', label: 'FNB Website' }],
		logo: Assets.FNB,
		name: 'FNB Corporate Identity Development',
		period: {
			from: new Date(2011, 6, 1),
			to: new Date(2011, 12, 31)
		},
		skills: getSkills('photoshop', 'illustrator', 'indesign'),
		type: 'Corporate Identity Design',
		company: 'First National Bank'
	},
	{
		slug: 'imperial-logistics-systems',
		color: '#2ecc71',
		description: 'Developed a Document Management System and HR Management System for Imperial Logistics. These systems improved document handling, storage, retrieval, and human resource management processes across the organization.',
		shortDescription: 'Document and HR management systems for Imperial Logistics.',
		links: [{ to: 'https://www.imperiallogistics.com/', label: 'Imperial Logistics Website' }],
		logo: Assets.ImperialLogistics,
		name: 'Imperial Logistics Management Systems',
		period: {
			from: new Date(2010, 0, 1),
			to: new Date(2011, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Document & HR Management Software',
		company: 'Imperial Logistics'
	},
	{
		slug: 'imvula-icd-server-monitoring',
		color: '#9b59b6',
		description: 'Designed and implemented a Server Monitoring System for Imvula ICD. This system provided real-time monitoring, alerting, and reporting capabilities for the company\'s server infrastructure, ensuring optimal performance and quick issue resolution.',
		shortDescription: 'Server monitoring system for Imvula ICD.',
		links: [{ to: 'https://www.imvulaicd.co.za/', label: 'Imvula ICD Website' }],
		logo: Assets.ImvulaICD,
		name: 'Imvula ICD Server Monitoring System',
		period: {
			from: new Date(2009, 6, 1),
			to: new Date(2009, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'python'),
		type: 'Server Monitoring Software',
		company: 'Imvula ICD'
	},
	{
		slug: 'legacy-underwriting-portfolio-management',
		color: '#34495e',
		description: 'Developed a Portfolio Management System for Legacy Underwriting Managers. This system enabled efficient management of insurance portfolios, risk assessment, and reporting, streamlining the underwriting process.',
		shortDescription: 'Portfolio management system for Legacy Underwriting Managers.',
		links: [{ to: 'https://www.lum.co.za/', label: 'Legacy Underwriting Managers Website' }],
		logo: Assets.LegacyUnderwriting,
		name: 'Legacy Underwriting Portfolio Management',
		period: {
			from: new Date(2008, 0, 1),
			to: new Date(2008, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Portfolio Management Software',
		company: 'Legacy Underwriting Managers'
	}, {
		slug: 'pna',
		color: '#e67e22',
		description: 'Developed a Product Management System and E-Commerce platform for PNA. These systems allowed for efficient management of product inventory and enabled online sales, expanding PNA\'s market reach.',
		shortDescription: 'Product management and e-commerce systems for PNA.',
		links: [{ to: 'https://www.pna.co.za/', label: 'PNA Website' }],
		logo: Assets.PNA,
		name: 'PNA Management and E-Commerce Systems',
		period: {
			from: new Date(2007, 0, 1),
			to: new Date(2007, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Product Management & E-Commerce',
		company: 'PNA'
	},
	{
		slug: 'principal-software',
		color: '#1abc9c',
		description: 'Developed a custom Version Control System for Principal Software. This system was tailored to the specific needs of the company, providing efficient code versioning, branching, and collaboration features.',
		shortDescription: 'Custom version control system for Principal Software.',
		links: [{ to: 'https://www.principalsoftware.co.za/', label: 'Principal Software Website' }],
		logo: Assets.PrincipalSoftware,
		name: 'Principal Software (Now D6)',
		period: {
			from: new Date(2006, 6, 1),
			to: new Date(2006, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Version Control Software',
		company: 'Principal Software'
	},
	{
		slug: 'the-car-shop-website',
		color: '#d35400',
		description: 'Designed and developed a website for The Car Shop. The website showcased the company\'s inventory, services, and provided features for customer engagement and online inquiries.',
		shortDescription: 'Website development for The Car Shop.',
		links: [{ to: 'https://www.thecarshop.co.za/', label: 'The Car Shop Website' }],
		logo: Assets.TheCarShop,
		name: 'The Car Shop Website',
		period: {
			from: new Date(2006, 0, 1),
			to: new Date(2006, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Web Development',
		company: 'The Car Shop'
	},
	{
		slug: 'the-orient-hotel-website',
		color: '#c0392b',
		description: 'Developed a website for The Orient Hotel. The website showcased the hotel\'s amenities, rooms, and services, and included an online booking system integrated with the hotel\'s management software.',
		shortDescription: 'Website development for The Orient Hotel.',
		links: [{ to: 'https://www.theorient.co.za/', label: 'The Orient Hotel Website' }],
		logo: Assets.TheOrientHotel,
		name: 'The Orient Hotel Website',
		period: {
			from: new Date(2005, 6, 1),
			to: new Date(2005, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Web Development',
		company: 'The Orient Hotel'
	},
	{
		slug: 'tribake-quote-invoice-system',
		color: '#27ae60',
		description: 'Developed a Quote and Invoice System for Tribake. This system streamlined the process of creating quotes and invoices, managing customer information, and tracking payments.',
		shortDescription: 'Quote and invoice system for Tribake.',
		links: [{ to: 'https://www.tribake.co.za/', label: 'Tribake Website' }],
		logo: Assets.Tribake,
		name: 'Tribake Quote and Invoice System',
		period: {
			from: new Date(2005, 0, 1),
			to: new Date(2005, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Quote and Invoice Software',
		company: 'Tribake'
	}
];

export const title = 'Projects';