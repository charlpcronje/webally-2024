import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'webally-self-employed',
		company: 'webAlly',
		description: 'As the founder of webAlly, I have been providing a wide range of services including web development, custom software development, mobile app development, and graphic design. I have worked on numerous projects for various clients, delivering high-quality solutions tailored to their specific needs.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2006, 0, 1) },
		skills: getSkills('js', 'ts', 'php', 'python', 'java', 'kotlin', 'react', 'vue', 'angular', 'nodejs', 'laravel', 'symfony', 'django', 'flask', 'mongodb', 'mysql', 'postgresql', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'android', 'ios', 'react-native', 'flutter', 'ai', 'machine-learning'),
		name: 'Senior Full-Stack Developer',
		color: 'blue',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' }
		],
		logo: Assets.Unknown, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'vane-systems',
		company: 'Vane Systems',
		description: 'At Vane Systems, I was responsible for maintaining and developing the C# RestFull API SOAP Service and PHP GraphQL API. I worked on various projects including bus booking systems, event booking systems, and point of sale systems. I also focused on security implementations for physical access control systems and document encryption.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Johannesburg, South Africa',
		period: { from: new Date(2018, 0, 1), to: new Date(2019, 1, 1) },
		skills: getSkills('csharp', 'php', 'graphql', 'mysql', 'postgresql', 'docker', 'kubernetes'),
		name: 'Senior Full-Stack Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown, // Replace with Vane Systems logo when available
		shortDescription: 'Developed and maintained API services and various booking systems.'
	},
	{
		slug: 'webally-self-employed',
		company: 'webAlly',
		description: 'As the founder of webAlly, I have been providing a wide range of services including web development, custom software development, mobile app development, and graphic design. I have worked on numerous projects for various clients, delivering high-quality solutions tailored to their specific needs.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2006, 0, 1), to: new Date(2011, 11, 1) },
		skills: getSkills('js', 'ts', 'php', 'python', 'java', 'kotlin', 'react', 'vue', 'angular', 'nodejs', 'laravel', 'symfony', 'django', 'flask', 'mongodb', 'mysql', 'postgresql', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'android', 'ios', 'react-native', 'flutter', 'ai', 'machine-learning'),
		name: 'Senior Full-Stack Developer',
		color: 'blue',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' }
		],
		logo: Assets.Unknown, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'legacy-underwriting-managers',
		company: 'Legacy Underwriting Managers',
		description: 'At Legacy Insurance Underwriting Managers (LUM), I worked as a senior PHP developer on a web-based system for insurance. My main responsibility was to maintain LUM\'s underwriting software, which is used by insurance brokers who sell insurance for multiple underwriters. The system integrates with Sanlam, Budget, APBCO, and others, focusing on accurate financial calculations and maintaining a proper audit trail for all transactions.',
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
		logo: Assets.Unknown, // Replace with LUM logo when available
		shortDescription: 'Developed and maintained web-based insurance underwriting systems.'
	},
	{
		slug: 'principal-software',
		company: 'Principal Software (D6 Group)',
		description: 'At Principal Software (now known as d6 Group), I played a key role in developing and improving the school administration system. I led the initiative to combine multiple codebases into a single, more manageable system, significantly improving the deployment process. During my tenure, the company grew from 3 people to more than 40, with the system being used by over 2000 schools and almost a million users.',
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
		logo: Assets.Unknown, // Replace with D6 Group logo when available
		shortDescription: 'Led development of school administration systems used by thousands of schools.'
	},
	{
		slug: 'pageworks',
		company: 'PageWorks',
		description: 'At PageWorks, an advertising agency, I served as the Head Web Developer. This was my first role specifically focused on web development. During my time here, I worked on various web applications including e-commerce sites, content management systems, and resource management tools.',
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2005, 11, 1), to: new Date(2006, 1, 1) },
		skills: getSkills('php', 'asp', 'mysql', 'mssql', 'js', 'css', 'html'),
		name: 'Head Web Developer',
		color: 'orange',
		links: [],
		logo: Assets.Unknown, // Replace with PageWorks logo when available
		shortDescription: 'Led web development projects in an advertising agency setting.'
	},
	{
		slug: 'pc-palace',
		company: 'PC Palace',
		description: 'At PC Palace, I started as an IT Technician but quickly transitioned into web development. I created my first website here, a system for the technical department using a LAMP stack. This project led to me taking charge of the company website and eventually developing websites for the company\'s clients.',
		contract: ContractType.FullTime,
		type: 'IT Support / Web Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2004, 7, 1), to: new Date(2005, 11, 1) },
		skills: getSkills('php', 'mysql', 'js', 'css', 'html'),
		name: 'IT Technician / Web Developer',
		color: 'cyan',
		links: [],
		logo: Assets.Unknown, // Replace with PC Palace logo when available
		shortDescription: 'Transitioned from IT support to web development, creating internal systems and client websites.'
	},
	{
		slug: 'nexus-online',
		company: 'Nexus Online',
		description: 'At Nexus Online, an internet cafe and web hosting company, I assisted with various tasks including web design, networking, customer service, and support while studying.',
		contract: ContractType.PartTime,
		type: 'Web Design / IT Support',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2004, 1, 1), to: new Date(2004, 7, 1) },
		skills: getSkills('html', 'css', 'js'),
		name: 'Web Designer / IT Support',
		color: 'teal',
		links: [],
		logo: Assets.Unknown, // Replace with Nexus Online logo when available
		shortDescription: 'Provided web design and IT support services for an internet cafe and web hosting company.'
	},
	{
		slug: 'ram-london',
		company: 'RAM',
		description: 'During my time in London, I worked as a technician at RAM, providing technical support, computer repair services, software installations, and computer building.',
		contract: ContractType.FullTime,
		type: 'IT Support',
		location: 'London, England',
		period: { from: new Date(2003, 7, 1), to: new Date(2004, 11, 1) },
		skills: getSkills('hardware', 'software-installation'),
		name: 'Technician',
		color: 'indigo',
		links: [],
		logo: Assets.Unknown, // Replace with RAM logo when available
		shortDescription: 'Provided comprehensive IT support and computer services in London.'
	},
	{
		slug: 'cnn-london',
		company: 'CNN',
		description: 'At CNN in London, I was responsible for tracking personnel and equipment, managing sign-in logs, escorting visitors to interview rooms, and ensuring security protocols were followed.',
		contract: ContractType.FullTime,
		type: 'Equipment and Personnel Management',
		location: 'London, England',
		period: { from: new Date(2002, 7, 1), to: new Date(2003, 11, 1) },
		skills: getSkills('equipment-management', 'security-protocols'),
		name: 'Equipment and Personnel Manager',
		color: 'red',
		links: [],
		logo: Assets.Unknown, // Replace with CNN logo when available
		shortDescription: 'Managed equipment and personnel logistics for CNN in London.'
	}
];

export const title = 'Experience';