// src/lib/data/skills.ts

import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Mobile Development', slug: 'mobile' }),
	defineSkillCategory({ name: 'Game Development', slug: 'game' }),
	defineSkillCategory({ name: 'AI & Machine Learning', slug: 'ai-ml' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transcompiles to JavaScript.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description: 'PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is an interpreted, high-level and general-purpose programming language. Its design philosophy emphasizes code readability with its notable use of significant indentation.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA).',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'orange',
		description: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin\'s standard library depends on the Java Class Library.',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'green',
		description: 'C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'library'
	}),
	defineSkill({
		slug: 'vue',
		color: 'green',
		description: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
		logo: Assets.VueJs,
		name: 'Vue.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'Svelte is a free and open-source front end component framework created by Rich Harris and maintained by the Svelte core team members.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'gray',
		description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern.',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'symfony',
		color: 'black',
		description: 'Symfony is a PHP web application framework and a set of reusable PHP components/libraries. It was published as free software on October 18, 2005 and released under the MIT license.',
		logo: Assets.Symfony,
		name: 'Symfony',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: 'Django is a Python-based free and open-source web framework that follows the model-template-views (MTV) architectural pattern.',
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description: 'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 'MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mssql',
		color: 'red',
		description: 'Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.',
		logo: Assets.MSSQL,
		name: 'Microsoft SQL Server',
		category: 'db'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: 'Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing (OLTP), data warehousing (DW) and mixed (OLTP & DW) database workloads.',
		logo: Assets.Oracle,
		name: 'Oracle Database',
		category: 'db'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: 'Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis',
		logo: Assets.AWS,
		name: 'Amazon Web Services',
		category: 'devops'
	}),
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description: 'Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.',
		logo: Assets.Azure,
		name: 'Microsoft Azure',
		category: 'devops'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'red',
		description: 'Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.',
		logo: Assets.GCP,
		name: 'Google Cloud Platform',
		category: 'devops'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: 'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'red',
		description: 'Jenkins is an open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.',
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'travis',
		color: 'red',
		description: 'Travis CI is a hosted continuous integration service used to build and test software projects hosted at GitHub and Bitbucket.',
		logo: Assets.Travis,
		name: 'Travis CI',
		category: 'devops'
	}),
	defineSkill({
		slug: 'circleci',
		color: 'green',
		description: 'CircleCI is a continuous integration and continuous delivery platform that can be used to implement DevOps practices.',
		logo: Assets.CircleCI,
		name: 'CircleCI',
		category: 'devops'
	}),
	defineSkill({
		slug: 'android',
		color: 'green',
		description: 'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.',
		logo: Assets.Android,
		name: 'Android',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'ios',
		color: 'gray',
		description: 'iOS is a mobile operating system created and developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company\'s mobile devices, including the iPhone and iPod Touch.',
		logo: Assets.IOS,
		name: 'iOS',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'blue',
		description: 'React Native is an open-source mobile application development framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities.',
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description: 'Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'unity',
		color: 'black',
		description: 'Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.\'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.',
		logo: Assets.Unity,
		name: 'Unity',
		category: 'game'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'black',
		description: 'Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. Although initially developed for first-person shooters, it has been successfully used in a variety of other genres, including platformers, fighting games, MMORPGs, and other RPGs.',
		logo: Assets.Unreal,
		name: 'Unreal Engine',
		category: 'game'
	}),
	defineSkill({
		slug: 'ai',
		color: 'purple',
		description: 'Artificial Intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality.',
		logo: Assets.AI,
		name: 'Artificial Intelligence',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'machine-learning',
		color: 'green',
		description: 'Machine Learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence.',
		logo: Assets.MachineLearning,
		name: 'Machine Learning',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'deep-learning',
		color: 'blue',
		description: 'Deep Learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.',
		logo: Assets.DeepLearning,
		name: 'Deep Learning',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It has become the industry standard not only in raster graphics manipulation, but in digital art as a whole.',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		color: 'orange',
		description: 'Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985.',
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'indesign',
		color: 'pink',
		description: 'Adobe InDesign is a desktop publishing and typesetting software application produced by Adobe Inc. It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books and ebooks.',
		logo: Assets.InDesign,
		name: 'Adobe InDesign',
		category: 'design'
	}),
	defineSkill({
		slug: 'after-effects',
		color: 'purple',
		description: 'Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Inc. and used in the post-production process of film making, video games and television production.',
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects',
		category: 'design'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
