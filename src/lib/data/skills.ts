// src/lib/data/skills.ts

import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

function escapeHtml(unsafe: string): string {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;")
		.replace(/&lt;br&gt;/g, "<br/>")
		.replace(/&lt;b&gt;/g, "<b>")
		.replace(/&lt;\/b&gt;/g, "</b>");
}

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
		description: escapeHtml(`<b>JavaScript</b> is a versatile, high-level programming language that has become the backbone of modern web development.<br>
Originally created by Brendan Eich in 1995, JavaScript has evolved from a simple scripting language for web browsers to a powerful tool for both front-end and back-end development.<br>
Its ability to run on the client-side allows for dynamic, interactive web pages that can update content without requiring a page reload.<br>
JavaScript's syntax is influenced by Java, but it uses prototype-based object-orientation, making it more flexible than class-based object-oriented languages.<br>
With the advent of Node.js, JavaScript has also become a popular choice for server-side programming, enabling developers to use a single language across the entire web stack.<br>
JavaScript's ecosystem is vast, with numerous libraries and frameworks like React, Angular, and Vue.js enhancing its capabilities for building complex web applications.<br>
The language continues to evolve through ECMAScript specifications, introducing new features and improvements regularly.<br>
JavaScript's asynchronous programming model, with features like Promises and async/await, makes it well-suited for handling I/O operations and API calls efficiently.<br>
Its widespread adoption and the constant innovation in its ecosystem make JavaScript an essential skill for any web developer.<br>`),
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: escapeHtml(`<b>JavaScript</b> is a versatile, high-level programming language that has become the backbone of modern web development.<br>
Originally created by Brendan Eich in 1995, JavaScript has evolved from a simple scripting language for web browsers to a powerful tool for both front-end and back-end development.<br>
Its ability to run on the client-side allows for dynamic, interactive web pages that can update content without requiring a page reload.<br>
JavaScript's syntax is influenced by Java, but it uses prototype-based object-orientation, making it more flexible than class-based object-oriented languages.<br>
With the advent of Node.js, JavaScript has also become a popular choice for server-side programming, enabling developers to use a single language across the entire web stack.<br>
JavaScript's ecosystem is vast, with numerous libraries and frameworks like React, Angular, and Vue.js enhancing its capabilities for building complex web applications.<br>
The language continues to evolve through ECMAScript specifications, introducing new features and improvements regularly.<br>
JavaScript's asynchronous programming model, with features like Promises and async/await, makes it well-suited for handling I/O operations and API calls efficiently.<br>
Its widespread adoption and the constant innovation in its ecosystem make JavaScript an essential skill for any web developer.<br>`),
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description: escapeHtml(`<b>PHP</b> (Hypertext Preprocessor) is a widely-used, open-source server-side scripting language particularly suited for web development.<br>
Created by Rasmus Lerdorf in 1994, PHP has evolved into a powerful tool for building dynamic web pages and applications.<br>
PHP's syntax draws elements from C, Java, and Perl, making it relatively easy for developers with experience in these languages to pick up.<br>
One of PHP's key strengths is its deep integration with web servers and databases, particularly MySQL.<br>
This integration allows for efficient processing of form data, file operations, and database interactions.<br>
PHP supports both procedural and object-oriented programming paradigms, offering flexibility in coding styles.<br>
The language comes with a vast standard library and has an extensive ecosystem of frameworks and libraries, such as Laravel, Symfony, and CodeIgniter, which provide robust tools for building complex web applications.<br>
PHP's ability to be embedded directly into HTML makes it particularly convenient for creating dynamic web content.<br>
Over the years, PHP has made significant improvements in performance, especially with the introduction of PHP 7 and later versions, which brought substantial speed enhancements and reduced memory usage.<br>
While PHP has faced criticism for inconsistencies in its core API and some security concerns in older versions, its continued development and the strength of its community have addressed many of these issues.<br>
PHP powers many popular content management systems like WordPress, Drupal, and Joomla, making it a crucial technology in the web development landscape.<br>`),
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: escapeHtml(`<b>Python</b> is a high-level, interpreted programming language known for its simplicity, readability, and versatility.<br>
Created by Guido van Rossum and first released in 1991, Python has grown to become one of the most popular programming languages in the world.<br>
Its design philosophy emphasizes code readability with its notable use of significant whitespace, making it an excellent language for beginners while still being powerful enough for advanced users and enterprise applications.<br>
Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming.<br>
One of Python's greatest strengths is its extensive standard library, which provides tools suited to many tasks, reducing the need for external libraries in many projects.<br>
The language's "batteries included" philosophy means that complex functionalities often require just a single line of code to implement.<br>
Python's simplicity and efficiency have made it a favorite in scientific computing, data analysis, artificial intelligence, and machine learning, with libraries like NumPy, Pandas, and TensorFlow being widely used in these fields.<br>
Web development frameworks like Django and Flask have also made Python a popular choice for backend web development.<br>
Python's interpreter nature and dynamic typing allow for rapid development and prototyping, making it well-suited for scripting and automation tasks.<br>
The language's cross-platform compatibility ensures that Python code can run on various operating systems with minimal modifications.<br>
With its large and active community, extensive documentation, and continuous development, Python remains at the forefront of modern programming languages, adapting to new technological trends and maintaining its relevance across various domains of software development.<br>`),
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: escapeHtml(`<b>Java</b> is a versatile, object-oriented programming language designed to be "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.<br>
Developed by James Gosling at Sun Microsystems (now owned by Oracle Corporation) and released in 1995, Java has become one of the most popular programming languages for building enterprise-scale applications.<br>
Java's syntax is similar to C and C++, but it eliminates certain low-level constructs such as pointers and has a simpler object model.<br>
The language is strongly typed and compiled to bytecode, which runs on a Java Virtual Machine (JVM), providing platform independence.<br>
Java's robust standard library, known as the Java Class Library, provides a wide range of utilities for tasks such as networking, data structures, and graphical user interface (GUI) development.<br>
The language's "garbage collection" feature automatically manages memory allocation and deallocation, reducing the likelihood of memory leaks and other common programming errors.<br>
Java's "Write Once, Run Anywhere" capability, along with its strong emphasis on security, has made it a preferred choice for developing large-scale, distributed systems, particularly in enterprise environments.<br>
The platform includes Java SE (Standard Edition) for desktop and server environments, Java EE (Enterprise Edition) for large-scale, multi-tiered, scalable, and secure network applications, and Java ME (Micro Edition) for mobile and embedded devices.<br>
Java has also been widely used in Android app development, further extending its reach.<br>
With its long-standing presence in the industry, extensive ecosystem of tools and frameworks, and continued evolution through regular releases, Java remains a cornerstone of modern software development, particularly in areas requiring scalability, security, and cross-platform compatibility.<br>`),
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'orange',
		description: escapeHtml(`<b>Kotlin</b> is a modern, statically typed programming language developed by JetBrains.<br>
First appearing in 2011 and reaching version 1.0 in 2016, Kotlin was designed to be fully interoperable with Java while addressing many of Java's perceived shortcomings.<br>
Kotlin compiles to Java bytecode and runs on the Java Virtual Machine (JVM), allowing it to be used anywhere Java is used, including Android development, server-side applications, and more.<br>
One of Kotlin's primary goals is to enhance developer productivity and code safety.<br>
It achieves this through a more concise and expressive syntax compared to Java, reducing boilerplate code and making programs easier to read and write.<br>
Kotlin introduces several features that Java lacks, such as null safety, data classes, and extension functions.<br>
The language's null safety feature helps prevent null pointer exceptions, a common source of errors in Java programs, by distinguishing between nullable and non-nullable types at the compiler level.<br>
Kotlin supports both object-oriented and functional programming paradigms, offering features like higher-order functions, lambda expressions, and operator overloading.<br>
Its smart cast feature automatically casts types in many cases, reducing the need for explicit type checking.<br>
In 2017, Google announced first-class support for Kotlin on Android, further boosting its popularity among mobile developers.<br>
Kotlin's coroutines feature provides a way to write asynchronous, non-blocking code in a sequential manner, making it easier to handle concurrency.<br>
The language's multiplatform capabilities allow developers to share code between JVM, JavaScript, and native applications.<br>
With its modern features, Java interoperability, and growing ecosystem, Kotlin has rapidly gained adoption in various domains of software development, offering a more enjoyable and productive alternative to Java while leveraging existing Java libraries and frameworks.<br>`),
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'green',
		description: escapeHtml(`<b>C#</b> (pronounced "C-sharp") is a modern, multi-paradigm programming language developed by Microsoft as part of its .NET framework.<br>
First released in 2002, C# was designed by Anders Hejlsberg with the goal of combining the computing power of C++ with the programming ease of Visual Basic.<br>
C# is a strongly typed, object-oriented language that supports various programming paradigms including imperative, declarative, functional, generic, and component-oriented programming.<br>
It draws significant inspiration from Java and C++, but introduces several innovative features that set it apart.<br>
C# is designed for developing applications that run on the .NET Framework or .NET Core, making it particularly well-suited for Windows desktop applications, web applications (using ASP.NET), and games (using Unity game engine).<br>
The language's tight integration with the .NET ecosystem provides access to a vast library of pre-built functions and APIs, enhancing developer productivity.<br>
C# includes features such as properties, delegates, events, and LINQ (Language Integrated Query), which simplify common programming tasks.<br>
Its garbage collection mechanism automatically manages memory, reducing the risk of memory leaks.<br>
C# has evolved significantly since its inception, with each new version introducing features that enhance its capabilities and ease of use.<br>
Recent versions have added features like nullable reference types, pattern matching, and asynchronous streams, keeping the language modern and relevant.<br>
The introduction of .NET Core (now .NET 5 and beyond) has made C# more versatile, allowing developers to build cross-platform applications that can run on Windows, macOS, and Linux.<br>
C#'s use extends beyond traditional software development; it's widely used in game development with the Unity engine, and in combination with the .NET framework, it's a popular choice for enterprise-level applications.<br>
With Microsoft's continued investment and a large, active community, C# remains at the forefront of programming languages, particularly in the Microsoft ecosystem and beyond.<br>`),
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: escapeHtml(`<b>C++</b> is a powerful, general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.<br>
First released in 1985, C++ has evolved to become one of the most influential and widely used programming languages in the world.<br>
It combines the low-level control and efficiency of C with high-level features for programming flexibility and software development productivity.<br>
C++ is known for its performance, efficiency, and close-to-the-hardware programming capabilities, making it a popular choice for system software, application software, device drivers, embedded software, and video games.<br>
The language supports multiple programming paradigms, including procedural, object-oriented, functional, and generic programming.<br>
C++'s object-oriented features, such as classes, inheritance, and polymorphism, allow for the creation of well-structured and maintainable code.<br>
The language's template feature enables generic programming, allowing developers to write code that works with any data type.<br>
C++ has undergone significant evolution over the years, with major revisions (like C++11, C++14, C++17, and C++20) introducing new features and improvements.<br>
These updates have added features like lambda expressions, smart pointers, move semantics, and concepts, enhancing the language's expressiveness and safety while maintaining its performance characteristics.<br>
The Standard Template Library (STL) provides a collection of powerful, reusable components for common data structures and algorithms, significantly boosting productivity.<br>
C++'s ability to directly manipulate hardware and memory makes it suitable for performance-critical applications, such as game engines, financial systems, and scientific simulations.<br>
However, this low-level control also requires careful management to avoid issues like buffer overflows and memory leaks.<br>
Despite the rise of higher-level languages, C++ remains crucial in many domains due to its performance, flexibility, and extensive legacy codebase.<br>
Its continued evolution and the introduction of modern features ensure that C++ stays relevant in contemporary software development, particularly in areas where performance and hardware control are paramount.<br>`),
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: escapeHtml(`<b>HTML</b> (Hypertext Markup Language) is the standard markup language used for creating web pages and web applications.<br>
First developed by Tim Berners-Lee in 1990, HTML has been the backbone of the World Wide Web since its inception.<br>
HTML uses a system of elements and attributes to define the structure and content of web pages, allowing browsers to interpret and display the information correctly.<br>
The language has evolved significantly over the years, with HTML5 being the latest major version, introducing more semantic elements and support for multimedia without the need for plugins.<br>
HTML documents are composed of a tree-like structure of elements, each represented by tags.<br>
These elements can include text, images, videos, forms, and links, among others.<br>
The language works in conjunction with CSS (Cascading Style Sheets) for styling and JavaScript for dynamic behavior, forming the triad of core technologies for the World Wide Web.<br>
HTML5 introduced new structural elements like <header>, <nav>, <article>, and <footer>, which provide more meaningful ways to structure content.<br>
It also added support for audio and video elements, canvas for 2D drawing, and improved form controls.<br>
The language's simplicity and flexibility have contributed to its widespread adoption, making it an essential skill for web developers, content creators, and even marketers.<br>
HTML's role in search engine optimization (SEO) is crucial, as proper use of semantic elements and attributes can significantly impact a website's visibility in search results.<br>
The language's accessibility features, such as ARIA (Accessible Rich Internet Applications) attributes, enable the creation of web content that is more inclusive and usable by people with disabilities.<br>
HTML's declarative nature makes it relatively easy to learn, yet it offers enough depth to support complex web applications when combined with other technologies.<br>
As the web continues to evolve, HTML adapts to new requirements, with ongoing discussions and proposals for future versions aimed at addressing emerging needs in web development.<br>
Understanding HTML is fundamental not just for web development, but also for related fields such as email marketing, content management systems, and even some aspects of mobile app development, making it a versatile and enduring technology in the digital landscape.<br>`),
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: escapeHtml(`<b>CSS</b> (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.<br>
Developed by Håkon Wium Lie and Bert Bos, and first proposed in 1994, CSS has become an essential technology in web design and development.<br>
CSS separates the presentation and layout from the content of web pages, allowing developers to control the look and feel of multiple web pages all at once.<br>
This separation of concerns enhances maintainability, improves accessibility, and provides greater flexibility in web design.<br>
CSS works by selecting HTML elements and applying styles to them.<br>
These styles can include properties for color, font, sizing, spacing, positioning, and much more.<br>
The "cascading" in CSS refers to the way styles can be inherited and overridden, with styles defined later in a stylesheet or with higher specificity taking precedence.<br>
CSS3, the latest major version, introduced numerous new features including animations, transitions, rounded corners, gradients, and flexible box layout (flexbox).<br>
These advancements have significantly reduced the need for images and JavaScript in creating dynamic and responsive designs.<br>
Responsive web design, a crucial aspect of modern web development, is largely achieved through CSS media queries, which allow different styles to be applied based on the device's characteristics, such as screen size.<br>
CSS preprocessors like Sass and Less extend CSS with variables, nested rules, mixins, and functions, enhancing its power and making stylesheets more maintainable.<br>
CSS frameworks such as Bootstrap and Foundation provide pre-written CSS files that can be used to quickly develop responsive and consistent web designs.<br>
The ongoing development of CSS includes new layout models like CSS Grid, which offers a two-dimensional layout system, and new features are continually proposed and implemented to address evolving web design needs.<br>
Mastery of CSS is essential for creating visually appealing, responsive, and accessible web interfaces, making it a fundamental skill for web designers and front-end developers.<br>`),
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: escapeHtml(`<b>Sass</b> (continued)
zenbaum in 2006, Sass introduces programming-like features to CSS, making stylesheets more maintainable, thematic, and extendable.<br>
Sass files are compiled into standard CSS files, which can then be used in web projects.<br>
The language comes in two syntaxes: the original indented syntax (Sass) and the more widely used SCSS (Sassy CSS) syntax, which is a superset of CSS3 syntax.<br>
Sass introduces variables, allowing developers to store information like colors, font stacks, or any CSS value to reuse throughout the stylesheet.<br>
This feature significantly reduces repetition and makes large stylesheets more manageable.<br>
Nesting is another key feature of Sass, allowing selectors to be nested inside one another, mirroring the HTML structure and making the stylesheet more readable.<br>
Sass supports partials, which are smaller Sass files that can be imported into other Sass files, promoting modularity and organization in large projects.<br>
The @import directive in Sass is more powerful than its CSS counterpart, allowing imports without additional HTTP requests.<br>
Mixins in Sass enable the reuse of whole chunks of CSS, accepting arguments for even more flexibility.<br>
The language also includes powerful operations and built-in functions for color manipulation, mathematics, and more.<br>
Control directives like @if, @for, @each, and @while bring programming-like logic to stylesheets, enabling complex operations and dynamic style generation.<br>
Sass's extend/inheritance feature allows sharing of CSS properties from one selector to another, reducing code duplication.<br>
With its ability to create cleaner, more organized, and more maintainable stylesheets, Sass has become an indispensable tool for many front-end developers, particularly in large-scale web projects where CSS management can become complex.<br>`),
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description: escapeHtml(`<b>React</b> is an open-source JavaScript library for building user interfaces, primarily for single-page applications.<br>
Developed and maintained by Facebook (now Meta) and a community of individual developers and companies, React was first released in 2013 and has since become one of the most popular front-end libraries in web development.<br>
React's core philosophy is to make it painless to create interactive UIs by using a component-based architecture.<br>
Components are the building blocks of React applications, encapsulating both the structure (typically written in JSX, a syntax extension for JavaScript) and behavior of a part of the UI.<br>
This modular approach promotes code reusability and makes applications easier to develop and maintain.<br>
One of React's key features is the virtual DOM (Document Object Model), which is a lightweight copy of the actual DOM.<br>
React uses this to optimize rendering performance by minimizing direct manipulation of the DOM, which can be computationally expensive.<br>
When state changes occur, React first updates the virtual DOM, compares it with the previous version, and then efficiently updates only the parts of the actual DOM that have changed.<br>
React's unidirectional data flow, often referred to as one-way binding, makes it easier to track and debug how data changes affect the application state.<br>
This model, combined with the concept of state and props, provides a clear and predictable way to manage data within an application.<br>
The library's ecosystem is vast and continually growing, with tools like Create React App simplifying project setup, and state management solutions like Redux and MobX addressing complex state management needs.<br>
React Native, an offshoot of React, allows developers to create native mobile applications using React principles, further extending the library's reach.<br>
React's declarative nature, where developers describe what they want the UI to look like rather than imperatively defining each step to get there, leads to more predictable and easier to debug code.<br>
With its strong community support, extensive documentation, and backing from major tech companies, React continues to evolve and maintain its position as a leading technology in modern web development.<br>`),
		logo: Assets.ReactJs,
		name: 'React',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vue',
		color: 'green',
		description: escapeHtml(`Vue.js is a progressive JavaScript framework for building user interfaces. Created by Evan You and first released in 2014, Vue has gained significant popularity due to its approachable learning curve and powerful features. Vue is designed to be incrementally adoptable, allowing developers to start using it for small parts of an application and gradually expand its usage as needed. This flexibility makes Vue suitable for a wide range of projects, from enhancing static HTML pages to powering sophisticated single-page applications. At its core, Vue uses a template syntax that extends HTML with directives, allowing for dynamic rendering of data to the DOM. Vue's reactivity system efficiently updates the DOM when the underlying data changes, providing a smooth and responsive user experience. The framework is component-based, allowing developers to build encapsulated, reusable UI elements. Vue components can be single-file components, containing template, script, and style in one .vue file, which promotes organization and maintainability. Vue's official tooling, like the Vue CLI, provides a full system for rapid Vue.js development, including a plugin-based architecture for easy integration of additional features. Vue's core library focuses on the view layer, but the Vue ecosystem includes official libraries for routing (vue-router) and state management (Vuex), allowing developers to build complex applications with a consistent architecture. The framework's performance is notable, with a small footprint and fast rendering capabilities. Vue 3, the latest major version, introduced the Composition API, offering a more flexible way to organize component logic, especially in larger applications. It also brought performance improvements and better TypeScript support. Vue's gentle learning curve, combined with its scalability and performance, has led to its adoption by many companies and developers worldwide. The framework's active community and comprehensive documentation further contribute to its popularity and ease of use. Whether used for small interactive elements or full-scale applications, Vue.js provides a robust and enjoyable development experience for building modern web interfaces.`),
		logo: Assets.VueJs,
		name: 'Vue.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: escapeHtml(`<b>Angular</b> is a comprehensive, open-source web application framework maintained by Google and a community of individual developers and corporations.<br>
First released in 2010 as AngularJS, it was completely rewritten and released as Angular 2 in 2016, with subsequent versions following a semantic versioning scheme.<br>
Angular provides a component-based framework for building scalable web applications, combined with a collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.<br>
Angular uses TypeScript as its primary language, which adds static typing, classes, and modules to JavaScript, enhancing code quality and maintainability.<br>
The framework's architecture is based on components, services, and modules.<br>
Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.<br>
Services provide specific functionality not directly related to views, and modules help organize an application into cohesive blocks of functionality.<br>
Angular's powerful template syntax extends HTML with features like data binding, event handling, and structural directives, allowing for dynamic and interactive user interfaces.<br>
The framework includes a powerful dependency injection system, which increases the efficiency and modularity of applications.<br>
Angular's CLI (Command Line Interface) simplifies the development process by providing commands for generating components, services, and other artifacts, as well as for building, testing, and deploying applications.<br>
The framework also includes robust testing utilities, making it easier to write and run unit and integration tests.<br>
Angular's performance optimization features, such as Ahead-of-Time compilation and tree-shaking, result in faster loading and better runtime performance.<br>
With its comprehensive nature, Angular is particularly well-suited for large-scale, complex applications, especially in enterprise environments.<br>
While it has a steeper learning curve compared to some other frameworks, Angular's structure and conventions promote consistency across projects and teams.<br>
Regular updates and long-term support versions ensure that Angular remains modern and reliable for large-scale application development.<br>`),
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: escapeHtml(`<b>Svelte</b> is a modern JavaScript framework for building user interfaces, created by Rich Harris in 2016.<br>
Unlike traditional frameworks that do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.<br>
The result is highly efficient, lightweight applications with excellent runtime performance.<br>
Svelte's approach is to compile your code to vanilla JavaScript at build time, effectively disappearing at runtime, which leads to smaller bundle sizes and faster initial page loads compared to other frameworks.<br>
One of Svelte's key features is its simplicity and ease of use.<br>
It uses a component-based architecture, where each component is written in a .svelte file that contains HTML, CSS, and JavaScript together.<br>
This structure promotes a clear separation of concerns while keeping related code close together.<br>
Svelte's syntax is designed to be familiar to web developers, with minimal new concepts to learn.<br>
The framework provides reactive declarations, which automatically update the DOM when the underlying data changes, without the need for a virtual DOM.<br>
This approach not only simplifies the mental model for developers but also contributes to Svelte's performance advantages.<br>
Svelte includes built-in state management capabilities, eliminating the need for additional libraries in many cases.<br>
It also provides an animation and transition system out of the box, making it easy to create smooth, engaging user interfaces.<br>
The framework's compiler generates highly optimized JavaScript, often resulting in smaller bundle sizes compared to other frameworks.<br>
This is particularly beneficial for performance-sensitive applications or those targeting low-powered devices.<br>
Svelte's ecosystem includes SvelteKit, an application framework that provides server-side rendering, routing, and other features needed for building full-fledged web applications.<br>
While Svelte is newer and has a smaller community compared to some other frameworks, it has been gaining popularity rapidly due to its performance benefits and developer-friendly approach.<br>
Its innovative compile-time approach and focus on simplicity make Svelte an attractive option for developers looking to build fast, efficient web applications with less boilerplate code.<br>`),
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: escapeHtml(`<b>Node.js</b> is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.<br>
Created by Ryan Dahl in 2009, Node.js enables developers to use JavaScript for server-side scripting, allowing for the development of scalable network applications.<br>
Built on Chrome's V8 JavaScript engine, Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.<br>
One of Node.js's key features is its vast ecosystem of open-source libraries available through npm (Node Package Manager), which is the largest ecosystem of open source libraries in the world.<br>
This extensive collection of modules allows developers to quickly add functionality to their applications without having to build everything from scratch.<br>
Node.js's architecture makes it particularly well-suited for building real-time, push-based applications like chat applications, streaming services, and collaborative tools.<br>
Its single-threaded event loop can handle a large number of simultaneous connections with high throughput, making it an excellent choice for building scalable network applications.<br>
The platform's ability to handle asynchronous operations efficiently is one of its major strengths, allowing for non-blocking execution of code.<br>
This is particularly useful for I/O-heavy applications, as it allows the server to continue processing other requests while waiting for I/O operations to complete.<br>
Node.js has found wide adoption in various types of applications, from web servers and RESTful APIs to microservices and serverless functions.<br>
It's used by many large companies including Netflix, LinkedIn, and NASA, demonstrating its capability to handle enterprise-level applications.<br>
The Node.js ecosystem includes frameworks like Express.js, which simplify the process of building web applications and APIs.<br>
Tools like pm2 and Forever enable process management and ensure that Node.js applications can run continuously.<br>
With its performance, scalability, and the ability to use JavaScript across the full stack, Node.js has become a cornerstone of modern web development, enabling developers to build fast, scalable network applications efficiently.<br>`),
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'gray',
		description: escapeHtml(`<b>Express.js</b>, often simply called Express, is a minimal and flexible web application framework for Node.js.<br>
Created by TJ Holowaychuk and first released in 2010, Express has become one of the most popular web frameworks for Node.js, known for its simplicity, flexibility, and robust set of features for web and mobile applications.<br>
Express provides a thin layer of fundamental web application features without obscuring Node.js features, giving developers the freedom to structure their applications as they see fit.<br>
At its core, Express is a routing and middleware framework that sits on top of Node.js's built-in http module.<br>
It simplifies the process of handling HTTP requests and responses, making it easier to create robust APIs and web applications.<br>
The middleware concept in Express allows for a series of functions to be executed in the middle of the request-response cycle, each with access to the request object, response object, and the next middleware function.<br>
This feature enables developers to add functionality like logging, parsing request bodies, handling sessions, and more.<br>
Express's routing system allows developers to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs, making it straightforward to create RESTful APIs.<br>
The framework also supports template engines, allowing for easy generation of HTML markup.<br>
While Express itself is minimalist, its extensive ecosystem of middleware and plugins allows developers to add a wide range of functionality to their applications.<br>
Popular middleware packages include body-parser for parsing incoming request bodies, morgan for logging, and cors for handling Cross-Origin Resource Sharing.<br>
Express integrates well with various databases and ORMs, making it suitable for building full-stack applications.<br>
It's often used as part of the MEAN (MongoDB, Express, Angular, Node.js) or MERN (MongoDB, Express, React, Node.js) stack.<br>
The framework's simplicity and flexibility make it an excellent choice for both beginners and experienced developers.<br>
It can be used to build everything from simple single-page applications to complex enterprise-level applications.<br>
Express's extensive documentation, large community, and abundance of learning resources contribute to its popularity and ease of adoption.<br>
As a testament to its robustness and scalability, Express is used by many large companies including IBM, Uber, and Accenture.<br>
Its continued development and wide adoption ensure that Express remains a relevant and powerful tool in the Node.js ecosystem.<br>`),
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description: escapeHtml(`<b>Laravel</b> is a free, open-source PHP web framework created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern.<br>
First released in June 2011, Laravel has quickly become one of the most popular PHP frameworks due to its elegant syntax, robust features, and developer-friendly tools.<br>
Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality.<br>
It achieves this through a combination of expressive, beautiful syntax and a rich set of features that cover most common tasks in modern web development.<br>
One of Laravel's key strengths is its extensive ecosystem.<br>
The framework comes with a powerful command-line interface called Artisan, which can be used to generate boilerplate code, run database migrations, and manage various aspects of the application.<br>
Laravel also includes Eloquent, an advanced ORM (Object-Relational Mapping) that makes database interactions intuitive and efficient.<br>
The framework's templating engine, Blade, provides a clean, simple way to create views, with features like template inheritance and sections.<br>
Laravel includes built-in authentication and authorization systems, making it easy to implement user registration, login, and access control.<br>
The framework also provides robust queuing services for deferred job processing, event broadcasting for real-time applications, and task scheduling for recurring jobs.<br>
Laravel's service container is a powerful tool for managing class dependencies and performing dependency injection.<br>
The framework also includes Facades, which provide a static interface to classes that are available in the application's service container.<br>
For testing, Laravel provides PHPUnit out of the box and offers convenient helper methods to make testing applications easier.<br>
The framework's emphasis on security is evident in its built-in protection against common web vulnerabilities like cross-site scripting (XSS), SQL injection, and CSRF (Cross-Site Request Forgery).<br>
Laravel's package manager, Composer, allows for easy integration of third-party libraries.<br>
The framework also has official packages like Passport for API authentication, Socialite for social login, and Horizon for queue monitoring.<br>
With its combination of developer-friendly features, robust architecture, and active community, Laravel has established itself as a go-to framework for building modern, scalable web applications in PHP.<br>`),
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'symfony',
		color: 'black',
		description: escapeHtml(`<b>Symfony</b> is a leading PHP web application framework and a set of reusable PHP components/libraries.<br>
Created by Fabien Potencier in 2005, Symfony has grown to become one of the most respected and widely used frameworks in the PHP ecosystem.<br>
It's known for its robustness, flexibility, and high performance, making it a popular choice for large-scale enterprise applications as well as smaller projects.<br>
Symfony follows the MVC (Model-View-Controller) architectural pattern and is designed to optimize the development of web applications by providing a structured, reusable code base.<br>
One of Symfony's key philosophies is the idea of "don't repeat yourself" (DRY), which it achieves through a comprehensive set of reusable components.<br>
These components can be used independently in any PHP project, not just those built on the full Symfony framework.<br>
This modular approach allows developers to use only the parts they need, promoting flexibility and efficiency.<br>
Symfony is built with performance in mind, featuring a powerful dependency injection container and an event dispatcher, which contribute to its speed and efficiency.<br>
The framework also includes a profiler tool that helps developers identify and resolve performance bottlenecks.<br>
Symfony's console component provides a robust command-line interface for automating tasks and generating boilerplate code.<br>
The framework's form component simplifies the process of creating and processing HTML forms, while its security component provides tools for handling authentication, authorization, and protection against common web vulnerabilities.<br>
For database operations, Symfony integrates seamlessly with Doctrine, a powerful ORM (Object-Relational Mapper) and DBAL (Database Abstraction Layer).<br>
This integration simplifies database interactions and supports multiple database systems.<br>
Symfony's templating engine, Twig, offers a clean and extensible syntax for creating views.<br>
The framework also includes a powerful routing system that maps URLs to controllers.<br>
One of Symfony's strengths is its emphasis on following PHP best practices and design patterns.<br>
It encourages the use of PSR (PHP Standards Recommendations) standards, promoting code that is not only functional but also clean and maintainable.<br>
The framework has a strong focus on testing, providing tools and best practices for unit and functional testing.<br>
Symfony's extensive documentation, active community, and regular release cycle (with long-term support versions) make it a reliable choice for long-term projects.<br>
Many popular PHP projects, including Drupal, phpBB, and Laravel, use Symfony components, testament to the framework's quality and versatility.<br>
With its robust architecture, extensive feature set, and commitment to PHP best practices, Symfony continues to be a cornerstone of professional PHP development.<br>`),
		logo: Assets.Symfony,
		name: 'Symfony',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: escapeHtml(`b>Django</b> is a high-level Python web framework that encourages rapid development and clean, pragmatic design.<br>
Created in 2003 by Adrian Holovaty and Simon Willison, and publicly released in 2005, Django has become one of the world's most popular web frameworks for Python.<br>
It follows the model-template-view (MTV) architectural pattern, which is similar to the model-view-controller (MVC) pattern used in other frameworks.<br>
Django's primary goal is to ease the creation of complex, database-driven websites by emphasizing reusability and "pluggability" of components, less code, low coupling, rapid development, and the principle of don't repeat yourself (DRY).<br>
<b>One of Django's key features is its automatic admin interface</b>, which reads metadata from your models to provide a powerful and production-ready interface for managing content on your site.<br>
This admin interface is highly customizable and can save significant development time.<br>
Django includes a robust object-relational mapper (ORM) that supports a wide range of database backends.<br>
The ORM allows developers to interact with databases using Python code instead of writing SQL queries directly, enhancing productivity and portability across different database systems.<br>
<b>Security is a top priority in Django.</b><br>
The framework includes protection against many common security issues such as cross-site scripting (XSS), cross-site request forgery (CSRF), SQL injection, and clickjacking.<br>
It also provides a user authentication system that handles user accounts, groups, permissions, and cookie-based user sessions.<br>
Django's URL dispatcher uses elegant URL design, allowing developers to design clean, SEO-friendly URLs without framework-specific limitations.<br>
The framework's template engine is powerful yet maintains a clear separation between design, content, and Python code, promoting the DRY principle.<br>
For handling forms, Django provides a form library that manages rendering forms as HTML, validating user-submitted data, and converting that data to native Python types.<br>
<b>Django also includes a caching framework</b>, which interfaces with memcached or other cache backends, and a syndication framework for generating RSS and Atom feeds.<br>
The framework's "batteries included" philosophy means it comes with many extras you commonly need, including a lightweight web server for development and testing, and tools for generating Google Sitemaps.<br>
Django has excellent documentation and a large, supportive community, which contributes to its ease of learning and use.<br>
It's used by many large organizations including Mozilla, Instagram, and NASA, demonstrating its scalability and robustness.<br>
With its comprehensive feature set, strong security defaults, and focus on rapid development, Django remains a top choice for developers building everything from content management systems to social networking sites and scientific computing platforms.<br>`),
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description: escapeHtml(`<b>Flask</b> is a lightweight WSGI web application framework written in Python.<br>
Created by Armin Ronacher in 2010, Flask is designed to be simple and easy to use, making it an excellent choice for small to medium-sized web applications and microservices.<br>
Often referred to as a "micro" framework, Flask aims to keep the core simple but extensible, allowing developers to add the features they need without imposing a specific structure or dependencies.<br>
<b>Unlike more comprehensive frameworks</b>, Flask doesn't include an ORM (Object-Relational Mapper) or form validation out of the box.<br>
Instead, it allows developers to choose and integrate the tools that best fit their specific needs.<br>
This flexibility is one of Flask's key strengths, as it enables developers to have more control over their application's architecture and dependencies.<br>
<b>Despite its minimalist core</b>, Flask includes several essential features for web development.<br>
It comes with a built-in development server and debugger, integrated unit testing support, RESTful request dispatching, and Jinja2 templating engine.<br>
Flask uses Werkzeug, a comprehensive WSGI web application library, and Jinja2, which together handle much of the backend heavy lifting.<br>
<b>One of Flask's notable features</b> is its use of decorators to bind functions to URLs, making route definitions clean and intuitive.<br>
Flask's simplicity makes it an excellent choice for beginners learning web development, as well as for experienced developers who want to quickly prototype ideas or build small to medium-sized applications.<br>
The framework's documentation is comprehensive and includes many examples, further contributing to its ease of use.<br>
<b>Flask's extensibility is another key feature.</b><br>
A wide range of extensions are available that add functionality such as form validation, upload handling, various authentication technologies, and more.<br>
This allows developers to add complex functionality to their applications while keeping the core simple.<br>
<b>Flask is well-suited for building RESTful APIs and microservices.</b><br>
Its lightweight nature and flexibility make it easy to create small, focused services that can be part of a larger, distributed system.<br>
The framework is also popular in the data science community, often used to create web interfaces for machine learning models and data visualization tools.<br>
<b>While Flask doesn't impose a specific project structure</b>, it's flexible enough to support various architectural patterns, including MVC (Model-View-Controller).<br>
This flexibility allows Flask to scale with the complexity of the project, from simple single-file applications to large, complex systems.<br>
<b>Flask has been adopted by many companies and organizations</b>, including LinkedIn, Netflix, and Mozilla, demonstrating its capability to handle production-level applications.<br>
Its combination of simplicity, flexibility, and a strong ecosystem of extensions makes Flask a versatile and powerful tool for Python web development.<br>`),
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: escapeHtml(`<b>MongoDB</b> is a popular, open-source document-oriented database program classified as a NoSQL database.<br>
Developed by MongoDB Inc., it was first released in 2009 and has since become one of the most widely used databases for modern applications.<br>
MongoDB stores data in flexible, JSON-like documents called BSON (Binary JSON), which allows for varying structure of data between documents.<br>
This schema-less nature makes MongoDB particularly well-suited for applications where data structures may evolve over time or where the structure of the data is not known in advance.<br>
<b>One of MongoDB's key features is its support for dynamic queries.</b><br>
The database allows for querying on any field in a document, regardless of how deeply nested it may be, and supports a rich query language for complex queries.<br>
MongoDB provides high availability through its replica set feature, which is a group of MongoDB processes that maintain the same data set.<br>
Replica sets provide automatic failover and data redundancy, enhancing the database's fault tolerance.<br>
<b>For scalability, MongoDB offers horizontal scaling through sharding.</b><br>
This allows the database to distribute data across multiple machines, enabling it to handle large amounts of data and high-throughput operations.<br>
MongoDB includes a powerful aggregation framework for data analysis and transformation.<br>
This feature allows for complex operations on data, including grouping, filtering, and computing aggregate values.<br>
<b>The database also supports geospatial indexing</b>, allowing for location-based queries, which is particularly useful for applications that deal with geographic data.<br>
MongoDB's flexible document model makes it well-suited for a wide range of applications, from content management systems and real-time analytics to mobile apps and IoT (Internet of Things) solutions.<br>
It's particularly popular in scenarios where rapid development and the ability to scale horizontally are important.<br>
<b>Security features in MongoDB include authentication</b>, role-based access control, and encryption, both for data at rest and in transit.<br>
The database also provides tools for monitoring and performance tuning, including a query profiler and various diagnostic commands.<br>
<b>MongoDB offers official drivers for many popular programming languages</b>, making it easy to integrate with various technology stacks.<br>
It also has a vibrant ecosystem of third-party tools and frameworks.<br>
<b>While MongoDB excels in many scenarios</b>, it's important to note that it may not be the best choice for all types of applications, particularly those requiring complex transactions across multiple documents or tables.<br>
However, for many modern, data-intensive applications, MongoDB's flexibility, scalability, and performance make it a powerful and popular choice in the database landscape.<br>`),
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: escapeHtml(`<b>MySQL</b> is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL).<br>
		Originally developed by MySQL AB and now owned by Oracle Corporation, MySQL has become one of the world's most popular open-source databases since its initial release in 1995.<br>
		It's a key component of the LAMP (Linux, Apache, MySQL, PHP/Perl/Python) stack, which is widely used for web application development.<br>
		<b>MySQL follows the traditional table-based relational model</b>, where data is organized into tables with rows and columns.<br>
		It supports the full range of SQL operations, including complex queries, joins, and transactions.<br>
		One of MySQL's key strengths is its speed and reliability.<br>
		It's designed to be fast, especially for read-heavy operations, making it well-suited for web applications and other scenarios where read performance is crucial.<br>
		<b>MySQL supports various storage engines</b>, which determine how data is stored and retrieved.<br>
		The most commonly used are InnoDB (which supports transactions and foreign keys) and MyISAM (which is faster for read-heavy operations but doesn't support transactions).<br>
		This flexibility allows developers to choose the storage engine that best fits their specific needs.<br>
		<b>For high availability and scalability</b>, MySQL offers features like replication and clustering.<br>
		Replication allows data from one MySQL database server (the master) to be copied to one or more other servers (slaves), providing data redundancy and improving read performance.<br>
		MySQL Cluster provides a way to run MySQL in a distributed computing environment, allowing for high availability and scalability.<br>
		<b>MySQL includes robust security features</b>, including encrypted connections, access control lists, and plugins for authentication.<br>
		It also provides backup and recovery tools to help protect against data loss.<br>
		<b>The database supports a wide range of data types</b>, including numeric, date and time, string types, and spatial data types for geographic information.<br>
		It also includes features like stored procedures, triggers, and views, which allow for complex operations and data manipulations to be performed within the database itself.<br>
		<b>MySQL's wide adoption means it has excellent support across various programming languages and frameworks.</b><br>
		Most major programming languages have libraries or modules for interacting with MySQL databases.<br>
		<b>While MySQL is powerful and feature-rich</b>, it's also known for being relatively easy to set up and use, making it a popular choice for both small projects and large-scale applications.<br>
		It's used by many high-profile websites and applications, including Facebook, Twitter, YouTube, and many more.<br>
		<b>MySQL's combination of performance, reliability, ease of use, and cost-effectiveness</b> (being open-source) has contributed to its enduring popularity in the database world.<br>
		Despite competition from newer database technologies, MySQL continues to evolve and remain relevant, with ongoing development addressing modern needs such as JSON support and improved performance for large-scale operations.<br>`),
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: escapeHtml(`b>PostgreSQL</b>, often simply "Postgres," is a powerful, open-source object-relational database system.<br>
With its strong reputation for reliability, feature robustness, and performance, PostgreSQL has become one of the most popular database choices for applications ranging from small, single-machine applications to large, data-warehousing systems with many concurrent users.<br>
First released in 1996, PostgreSQL is developed by the PostgreSQL Global Development Group, a diverse group of contributors worldwide.<br>
<b>PostgreSQL is fully ACID (Atomicity, Consistency, Isolation, Durability) compliant and transactional</b>, ensuring data integrity even in the event of errors or system failures.<br>
It supports advanced data types and advanced performance optimization features that are often only found in commercial database systems.<br>
<b>One of PostgreSQL's standout features is its extensibility.</b><br>
Users can define their own data types, index types, functional languages, and more.<br>
This extensibility, coupled with PostgreSQL's standards compliance, makes it highly flexible and adaptable to various use cases.<br>
<b>PostgreSQL offers robust support for concurrent access</b> through its implementation of Multiversion Concurrency Control (MVCC), allowing for efficient handling of multiple simultaneous operations.<br>
The database provides strong support for JSON, allowing it to serve as both a relational and document-style database.<br>
This feature makes PostgreSQL well-suited for applications that need to handle both structured and semi-structured data.<br>
<b>For scalability, PostgreSQL supports table partitioning, parallel query execution, and various replication methods</b> including built-in logical replication.<br>
These features allow PostgreSQL to handle large amounts of data and high-concurrency scenarios effectively.<br>
<b>PostgreSQL is known for its strong adherence to SQL standards and its comprehensive feature set.</b><br>
It includes features like window functions, common table expressions, and lateral joins, which are useful for complex queries and data analysis.<br>
The database also supports full-text search, enabling sophisticated search capabilities within the database itself.<br>
<b>Security features in PostgreSQL are extensive</b>, including robust access-control systems, column and row-level security, and strong encryption options.<br>
It also provides various authentication methods and supports SSL connections for secure data transmission.<br>
<b>PostgreSQL's active community contributes to its continuous improvement and extensive third-party tool ecosystem.</b><br>
This community also ensures excellent documentation and support resources.<br>
<b>While PostgreSQL is powerful</b>, it can be more complex to set up and optimize compared to some other databases, potentially requiring more specialized knowledge for advanced use cases.<br>
However, for applications requiring a feature-rich, standards-compliant, and reliable database system, PostgreSQL is often an excellent choice.<br>
Its use in critical systems by companies like Apple, Instagram, and Cisco demonstrates its capability to handle enterprise-level demands.<br>`),
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mssql',
		color: 'red',
		description: escapeHtml(`
			
			Microsoft SQL Server, commonly referred to as MSSQL, is a relational database management system developed by Microsoft. First released in 1989, MSSQL has become one of the leading database platforms, particularly in enterprise environments running on Windows servers, though it now also supports Linux. MSSQL is known for its robust feature set, high performance, and tight integration with other Microsoft technologies. At its core, MSSQL uses Transact-SQL (T-SQL), Microsoft\'s proprietary extension to SQL, which adds a rich set of programming constructs to standard SQL. This allows for powerful data manipulation and complex query operations directly within the database. One of MSSQL\'s key strengths is its performance optimization features. It includes advanced query processing capabilities, intelligent query plan caching, and automated tuning features that help maintain optimal performance even as data and query patterns change over time. For data warehousing and analytics, MSSQL offers features like columnstore indexes, which can dramatically improve the performance of large analytical queries. It also includes built-in data mining capabilities and integration with Microsoft\'s business intelligence tools. MSSQL provides robust security features, including encryption at rest and in motion, row-level security, dynamic data masking, and always encrypted, which allows for operations on encrypted data without decryption. The database also offers comprehensive auditing capabilities to track access and changes to data. For high availability and disaster recovery, MSSQL includes features like AlwaysOn Availability Groups, which provide advanced failover and replication capabilities. This allows for minimal downtime and data loss in the event of hardware failures or other issues. MSSQL integrates seamlessly with other Microsoft technologies, including .NET Framework, Azure cloud services, and Power BI for business intelligence. This integration makes it a natural choice for organizations heavily invested in the Microsoft ecosystem. In recent years, Microsoft has made significant strides in making MSSQL more open and flexible. It now supports multiple programming languages, including Python and R, directly within the database for advanced analytics. The introduction of SQL Server on Linux and Docker containers has also expanded its reach beyond Windows-only environments. MSSQL includes advanced features for handling complex data types and operations. This includes support for JSON, graph data, and spatial data, making it versatile for various types of applications. While MSSQL is a commercial product with associated licensing costs, it also offers a free Express edition suitable for smaller applications and development purposes. The platform is known for its comprehensive management tools, including SQL Server Management Studio, which provides a user-friendly interface for database administration and query development. Microsoft\'s regular release cycle ensures that MSSQL continually evolves to meet modern data management needs. Recent versions have focused on improving performance, security, and cloud integration. While MSSQL can be more expensive and complex compared to some open-source alternatives, its robust feature set, strong performance, and excellent support make it a top choice for many organizations, especially those already invested in Microsoft technologies.
			
			`),
		logo: Assets.MSSQL,
		name: 'Microsoft SQL Server',
		category: 'db'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: escapeHtml(`<b>Microsoft SQL Server</b>, commonly referred to as MSSQL, is a relational database management system developed by Microsoft.<br>
First released in 1989, MSSQL has become one of the leading database platforms, particularly in enterprise environments running on Windows servers, though it now also supports Linux.<br>
MSSQL is known for its robust feature set, high performance, and tight integration with other Microsoft technologies.<br>
<b>At its core, MSSQL uses Transact-SQL (T-SQL)</b>, Microsoft's proprietary extension to SQL, which adds a rich set of programming constructs to standard SQL.<br>
This allows for powerful data manipulation and complex query operations directly within the database.<br>
<b>One of MSSQL's key strengths is its performance optimization features.</b><br>
It includes advanced query processing capabilities, intelligent query plan caching, and automated tuning features that help maintain optimal performance even as data and query patterns change over time.<br>
<b>For data warehousing and analytics</b>, MSSQL offers features like columnstore indexes, which can dramatically improve the performance of large analytical queries.<br>
It also includes built-in data mining capabilities and integration with Microsoft's business intelligence tools.<br>
<b>MSSQL provides robust security features</b>, including encryption at rest and in motion, row-level security, dynamic data masking, and always encrypted, which allows for operations on encrypted data without decryption.<br>
The database also offers comprehensive auditing capabilities to track access and changes to data.<br>
<b>For high availability and disaster recovery</b>, MSSQL includes features like AlwaysOn Availability Groups, which provide advanced failover and replication capabilities.<br>
This allows for minimal downtime and data loss in the event of hardware failures or other issues.<br>
<b>MSSQL integrates seamlessly with other Microsoft technologies</b>, including .NET Framework, Azure cloud services, and Power BI for business intelligence.<br>
This integration makes it a natural choice for organizations heavily invested in the Microsoft ecosystem.<br>
<b>In recent years, Microsoft has made significant strides in making MSSQL more open and flexible.</b><br>
It now supports multiple programming languages, including Python and R, directly within the database for advanced analytics.<br>
The introduction of SQL Server on Linux and Docker containers has also expanded its reach beyond Windows-only environments.<br>
<b>MSSQL includes advanced features for handling complex data types and operations.</b><br>
This includes support for JSON, graph data, and spatial data, making it versatile for various types of applications.<br>
<b>While MSSQL is a commercial product with associated licensing costs</b>, it also offers a free Express edition suitable for smaller applications and development purposes.<br>
The platform is known for its comprehensive management tools, including SQL Server Management Studio, which provides a user-friendly interface for database administration and query development.<br>
<b>Microsoft's regular release cycle ensures that MSSQL continually evolves to meet modern data management needs.</b><br>
Recent versions have focused on improving performance, security, and cloud integration.<br>
<b>While MSSQL can be more expensive and complex compared to some open-source alternatives</b>, its robust feature set, strong performance, and excellent support make it a top choice for many organizations, especially those already invested in Microsoft technologies.<br>
<b>Oracle Database</b>, commonly referred to as Oracle, is a multi-model database management system produced and markete`),
		logo: Assets.Oracle,
		name: 'Oracle Database',
		category: 'db'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: escapeHtml(`<b>Kubernetes</b>, often abbreviated as K8s, is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications.<br><br>

Key features include:<br>

1) <b>Container Orchestration:</b> Automatically manages containerized applications across multiple hosts.<br>
2) <b>Self-healing:</b> Automatically restarts containers that fail, replaces containers, kills containers that don't respond to health checks.<br>
3) <b>Horizontal Scaling:</b> Scale applications up and down with a simple command, UI, or automatically based on CPU usage.<br>
4) <b>Service Discovery and Load Balancing:</b> Kubernetes can expose a container using the DNS name or using their own IP address.<br>
5) <b>Automated Rollouts and Rollbacks:</b> Kubernetes progressively rolls out changes to your application or its configuration, while monitoring application health.<br>
6) <b>Secret and Configuration Management:</b> Deploy and update secrets and application configuration without rebuilding your image.<br>
7) <b>Storage Orchestration:</b> Automatically mount the storage system of your choice, whether from local storage, or cloud providers.<br>
8) <b>Batch Execution:</b> Manage your batch and CI workloads, replacing containers that fail, if needed.<br><br>

<b>Kubernetes</b> is widely used for managing microservices architectures, enabling practices like infrastructure as code, continuous deployment, and auto-scaling.`),
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: escapeHtml(`<b>Amazon Web Services (AWS)</b> is a comprehensive and widely adopted cloud platform offered by Amazon.<br><br>

Key features include:<br>

1) <b>Elastic Compute Cloud (EC2):</b> Virtual servers in the cloud.<br>
2) <b>Simple Storage Service (S3):</b> Scalable storage in the cloud.<br>
3) <b>Relational Database Service (RDS):</b> Set up, operate, and scale a relational database in the cloud.<br>
4) <b>Lambda:</b> Run code without provisioning or managing servers.<br>
5) <b>CloudFront:</b> Global content delivery network.<br>
6) <b>Virtual Private Cloud (VPC):</b> Isolated cloud resources.<br>
7) <b>CloudWatch:</b> Monitor AWS cloud resources and applications.<br>
8) <b>Route 53:</b> Scalable domain name system (DNS) web service.<br>
9) <b>Identity and Access Management (IAM):</b> Securely manage access to AWS services and resources.<br>
10) <b>Elastic Beanstalk:</b> Deploy and scale web applications.<br>
11) <b>SageMaker:</b> Build, train, and deploy machine learning models at scale.<br>
12) <b>Redshift:</b> Fast, simple, cost-effective data warehousing.<br><br>

<b>AWS</b> offers over 200 fully featured services from data centers globally, enabling organizations of all sizes to build sophisticated, scalable applications.`),
		logo: Assets.AWS,
		name: 'Amazon Web Services',
		category: 'devops'
	}),
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description: escapeHtml(`<b>Microsoft Azure</b> is a comprehensive cloud computing platform and infrastructure created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.<br><br>

Key features include:<br>

1) <b>Virtual Machines:</b> Provision Windows and Linux virtual machines in seconds.<br>
2) <b>App Services:</b> Quickly create powerful cloud apps for web and mobile.<br>
3) <b>Azure SQL Database:</b> Managed relational SQL Database as a service.<br>
4) <b>Azure Active Directory:</b> Synchronize on-premises directories and enable single sign-on.<br>
5) <b>Azure Cosmos DB:</b> Globally distributed, multi-model database service.<br>
6) <b>Azure Functions:</b> Process events with serverless code.<br>
7) <b>Azure Kubernetes Service (AKS):</b> Simplify Kubernetes management, deployment, and operations.<br>
8) <b>Azure DevOps:</b> Services for teams to share code, track work, and ship software.<br>
9) <b>Azure Machine Learning:</b> Build, train, and deploy machine learning models.<br>
10) <b>Azure IoT Hub:</b> Connect, monitor, and manage billions of IoT assets.<br>
11) <b>Azure Synapse Analytics:</b> Analytics service that brings together enterprise data warehousing and Big Data analytics.<br>
12) <b>Azure Security Center:</b> Unified security management and advanced threat protection.<br><br>

<b>Azure</b> provides a range of capabilities including IaaS, PaaS, and SaaS that can be used for services such as analytics, virtual computing, storage, networking, and much more.`),
		logo: Assets.Azure,
		name: 'Microsoft Azure',
		category: 'devops'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'red',
		description: escapeHtml(`<b>Google Cloud Platform (GCP)</b> is a suite of cloud computing services offered by Google.<br><br>

Key features include:<br>

1) <b>Compute Engine:</b> Virtual machines running in Google's data centers.<br>
2) <b>Cloud Storage:</b> Object storage for companies of all sizes.<br>
3) <b>BigQuery:</b> Fully managed, serverless data warehouse.<br>
4) <b>Cloud Run:</b> Fully managed compute platform for containerized applications.<br>
5) <b>Kubernetes Engine:</b> Managed, production-ready environment for deploying containerized applications.<br>
6) <b>Cloud Functions:</b> Event-driven serverless compute platform.<br>
7) <b>Cloud SQL:</b> Fully managed relational database service.<br>
8) <b>Cloud Bigtable:</b> Fully managed, scalable NoSQL database service.<br>
9) <b>Vertex AI:</b> Unified platform for machine learning and artificial intelligence.<br>
10) <b>Cloud Pub/Sub:</b> Messaging and ingestion for event-driven systems and streaming analytics.<br>
11) <b>Cloud CDN:</b> Content delivery network for fast, low-cost content delivery.<br>
12) <b>Cloud Armor:</b> Web application firewall (WAF) and DDoS protection service.<br><br>

<b>GCP</b> leverages Google's core infrastructure, data analytics, and machine learning capabilities, offering these technologies to businesses and developers worldwide.`),
		logo: Assets.GCP,
		name: 'Google Cloud Platform',
		category: 'devops'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: escapeHtml(`<b>Git</b> is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.<br><br>

Key features include:<br>

1) <b>Distributed Development:</b> Every developer has a full copy of the repository, including its history.<br>
2) <b>Branching and Merging:</b> Git allows for non-linear development with its robust branching and merging capabilities.<br>
3) <b>Speed:</b> Git operations are performed locally, giving it a speed advantage over centralized systems.<br>
4) <b>Data Integrity:</b> Git uses SHA-1 hashes to check the integrity of the repository.<br>
5) <b>Staging Area:</b> Git has a unique staging area or 'index' that allows you to format and review your commits.<br>
6) <b>Free and Open Source:</b> Git is released under the GNU General Public License version 2.0.<br>
7) <b>Support for Non-linear Development:</b> Git supports rapid branching and merging, and includes specific tools for visualizing and navigating a non-linear development history.<br>
8) <b>Cryptographic Authentication:</b> Git uses SHA-1 hash for content authentication.<br><br>

<b>Git</b> has become the most widely used modern version control system in the world, enabling new workflows like Git Flow and GitHub Flow, and has become an essential tool in modern software development practices.`),
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'red',
		description: escapeHtml(`<b>Jenkins</b> is an open-source automation server that has become a crucial tool in the world of continuous integration and continuous delivery (CI/CD).<br><br>

Key features include:<br>

1) <b>Easy Installation:</b> Jenkins can be easily installed on many operating systems.<br>
2) <b>Easy Configuration:</b> Jenkins can be easily configured via its web interface.<br>
3) <b>Rich Plugin Ecosystem:</b> Jenkins has hundreds of plugins available in the Update Center.<br>
4) <b>Extensible:</b> Jenkins can be extended via its plugin architecture.<br>
5) <b>Distributed:</b> Jenkins can easily distribute work across multiple machines for faster builds, tests, and deployments.<br>
6) <b>Pipeline Support:</b> Jenkins supports defining delivery pipelines as code through the Pipeline plugin.<br>
7) <b>Community-contributed Platform:</b> Many of the plugins are developed by the community.<br>
8) <b>Free and Open Source:</b> Jenkins is an open-source tool released under the MIT License.<br><br>

<b>Jenkins</b> has played a significant role in the adoption of DevOps practices, enabling teams to automate their software delivery process and reduce the time between writing code and having it deployed to production.`),
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'travis',
		color: 'red',
		description: escapeHtml(`<b>Travis CI</b> is a hosted continuous integration and deployment system that has gained significant popularity, especially in the open-source community.<br><br>

Key features include:<br>

1) <b>GitHub Integration:</b> Travis CI integrates seamlessly with GitHub repositories.<br>
2) <b>Multi-language Support:</b> Travis CI supports numerous programming languages out of the box.<br>
3) <b>Build Matrix:</b> Easily test your projects against multiple versions of languages and dependencies.<br>
4) <b>Parallel Build Execution:</b> Run multiple jobs in parallel to speed up your build process.<br>
5) <b>Deploy to Multiple Cloud Providers:</b> Travis CI supports deployment to various cloud platforms.<br>
6) <b>Pull Request Support:</b> Automatically test pull requests before merging.<br>
7) <b>Environment Variables:</b> Securely store sensitive information as encrypted environment variables.<br>
8) <b>Caching:</b> Speed up builds by caching dependencies.<br><br>

<b>Travis CI</b> automates the process of building, testing, and deploying code changes, helping developers catch and fix issues quickly.`),
		logo: Assets.Travis,
		name: 'Travis CI',
		category: 'devops'
	}),
	defineSkill({
		slug: 'circleci',
		color: 'green',
		description: escapeHtml(`<b>CircleCI</b> is a popular continuous integration and continuous delivery (CI/CD) platform that automates the build, test, and deployment processes of software applications.<br><br>

Key features include:<br>

1) <b>Fast Builds:</b> CircleCI uses intelligent parallelism to split tests across multiple machines.<br>
2) <b>Flexibility:</b> Supports a wide range of languages and tools.<br>
3) <b>Docker Support:</b> First-class Docker support, allowing you to build Docker images for your applications.<br>
4) <b>Workflows:</b> Orchestrate jobs with dependencies and fan-out/fan-in.<br>
5) <b>Caching:</b> Speed up builds by caching dependencies and build outputs.<br>
6) <b>Resource Classes:</b> Choose the CPU and RAM allocation for your build containers.<br>
7) <b>Orbs:</b> Reusable packages of CircleCI configuration.<br>
8) <b>SSH Access:</b> Debug builds via SSH access to build containers.<br><br>

<b>CircleCI</b> is designed to help development teams release code rapidly and efficiently by automating the integration and delivery process.`),
		logo: Assets.CircleCI,
		name: 'CircleCI',
		category: 'devops'
	}),
	defineSkill({
		slug: 'android',
		color: 'green',
		description: escapeHtml(`<b>Android</b> is a mobile operating system developed by Google, based on a modified version of the Linux kernel and other open source software.<br><br>

Key features include:<br>

1) <b>Open Source:</b> The Android Open Source Project (AOSP) allows for customization and modification.<br>
2) <b>Rich Application Framework:</b> Allows developers to build innovative apps and games.<br>
3) <b>Support for Multiple Screen Sizes:</b> Android can adapt to various device form factors.<br>
4) <b>Multitasking:</b> True multitasking of applications.<br>
5) <b>Google Play Store:</b> A vast ecosystem of apps and digital content.<br>
6) <b>Customizable Home Screen:</b> Users can customize their device's interface.<br>
7) <b>Notifications:</b> A robust notification system for apps to communicate with users.<br>
8) <b>Integration with Google Services:</b> Seamless integration with Google's suite of mobile services.<br><br>

<b>Android</b> is designed primarily for touchscreen mobile devices such as smartphones and tablets, and has been extended to televisions, cars, wearables, and other devices.`),
		logo: Assets.Android,
		name: 'Android',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'ios',
		color: 'gray',
		description: escapeHtml(`<b>iOS</b> is a mobile operating system created and developed by Apple Inc. exclusively for its hardware.<br><br>

Key features include:<br>

1) <b>User-Friendly Interface:</b> Known for its intuitive and easy-to-use interface.<br>
2) <b>App Store:</b> A curated store for downloading applications.<br>
3) <b>iCloud Integration:</b> Seamless syncing of data across Apple devices.<br>
4) <b>Security:</b> Strong security features including encryption and app sandboxing.<br>
5) <b>Siri:</b> Intelligent personal assistant and knowledge navigator.<br>
6) <b>Continuity:</b> Allows for seamless transition between iOS and macOS devices.<br>
7) <b>Regular Updates:</b> Consistent system updates with new features and security improvements.<br>
8) <b>Privacy Controls:</b> Granular control over app permissions and data access.<br><br>

<b>iOS</b> is known for its consistent and intuitive user interface, tight integration with Apple's hardware, and strong emphasis on user privacy and security.`),
		logo: Assets.IOS,
		name: 'iOS',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'blue',
		description: escapeHtml(`<b>React Native</b> is an open-source mobile application development framework created by Facebook.<br><br>

Key features include:<br>

1) <b>Cross-Platform Development:</b> Develop for both iOS and Android using a single codebase.<br>
2) <b>Native Components:</b> Uses native UI components for better performance.<br>
3) <b>Hot Reloading:</b> See changes instantly during development.<br>
4) <b>Large Community and Ecosystem:</b> Extensive third-party plugins and libraries available.<br>
5) <b>JavaScript and React:</b> Leverage existing web development skills.<br>
6) <b>Performance:</b> Near-native performance due to optimized native components.<br>
7) <b>Code Reusability:</b> Share code between mobile and web applications.<br>
8) <b>OTA Updates:</b> Update apps without going through the app store review process.<br><br>

<b>React Native</b> allows developers to use React along with native platform capabilities to create mobile applications for both iOS and Android platforms using a single codebase.`),
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description: escapeHtml(`<b>Flutter</b> is an open-source UI software development kit created by Google.<br><br>

Key features include:<br>

1) <b>Cross-Platform Development:</b> Build for mobile, web, and desktop from a single codebase.<br>
2) <b>Hot Reload:</b> See changes instantly during development.<br>
3) <b>Widgets:</b> Rich set of customizable widgets for building native interfaces.<br>
4) <b>High Performance:</b> Compiles to native ARM machine code for high performance.<br>
5) <b>Dart Language:</b> Uses the Dart programming language, optimized for UI creation.<br>
6) <b>Extensive Libraries:</b> Rich set of pre-built and customizable widgets.<br>
7) <b>Strong Community:</b> Growing ecosystem and community support.<br>
8) <b>Integration:</b> Easy integration with platform-specific code.<br><br>

<b>Flutter</b> allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase.`),
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'unity',
		color: 'black',
		description: escapeHtml(`<b>Unity</b> is a cross-platform game engine developed by Unity Technologies.<br><br>

Key features include:<br>

1) <b>Cross-Platform Development:</b> Develop for multiple platforms from a single codebase.<br>
2) <b>Visual Editor:</b> Powerful visual editing tools for game development.<br>
3) <b>Asset Store:</b> Marketplace for assets, tools, and plugins.<br>
4) <b>2D and 3D Support:</b> Create both 2D and 3D games and experiences.<br>
5) <b>Physics Engine:</b> Built-in physics engine for realistic simulations.<br>
6) <b>Animation System:</b> Powerful tools for creating and managing animations.<br>
7) <b>Scripting:</b> Uses C# for scripting game logic.<br>
8) <b>Visual Scripting:</b> Node-based scripting system for non-programmers.<br><br>
   
<b>Unity</b> is widely used for developing video games and simulations for computers, consoles, and mobile devices, as well as for creating experiences in AR and VR.`),
		logo: Assets.Unity,
		name: 'Unity',
		category: 'game'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'black',
		description: escapeHtml(`<b>Unreal Engine</b> is a powerful and versatile game engine developed by Epic Games.<br><br>

Key features include:<br>

1) <b>High-Fidelity Graphics:</b> Known for its ability to produce photorealistic graphics.<br>
2) <b>Blueprint Visual Scripting:</b> Visual scripting system for non-programmers.<br>
3) <b>C++ Source Code Access:</b> Full access to engine source code for advanced developers.<br>
4) <b>Cross-Platform Development:</b> Support for multiple platforms including PC, console, mobile, and VR.<br>
5) <b>Real-Time Rendering:</b> Advanced real-time rendering capabilities.<br>
6) <b>Physics Simulation:</b> Built-in physics engine for realistic simulations.<br>
7) <b>Material Editor:</b> Powerful node-based material creation system.<br>
8) <b>Marketplace:</b> Ecosystem for buying and selling assets and tools.<br><br>

<b>Unreal Engine</b> is particularly known for its graphical capabilities and is used not only in game development but also in film, television production, and architecture visualization.`),
		logo: Assets.Unreal,
		name: 'Unreal Engine',
		category: 'game'
	}),
	defineSkill({
		slug: 'ai',
		color: 'purple',
		description: escapeHtml(`<b>Artificial Intelligence (AI)</b> is a branch of computer science that aims to create intelligent machines that can perform tasks that typically require human intelligence.<br><br>

Key areas include:<br>

1) <b>Machine Learning:</b> Algorithms that can learn from and make predictions or decisions based on data.<br>
2) <b>Deep Learning:</b> A subset of machine learning based on artificial neural networks.<br>
3) <b>Natural Language Processing (NLP):</b> Enabling computers to understand, interpret, and generate human language.<br>
4) <b>Computer Vision:</b> Enabling machines to interpret and understand visual information from the world.<br>
5) <b>Robotics:</b> Designing and creating robots that can interact with the physical world.<br>
6) <b>Expert Systems:</b> Systems that emulate the decision-making ability of a human expert.<br>
7) <b>Speech Recognition:</b> Translating spoken language into text.<br>
8) <b>Planning and Decision Making:</b> Systems that can create and execute plans to achieve specific goals.<br><br>

<b>AI</b> has applications across numerous fields including healthcare, finance, transportation, and entertainment, and is one of the most transformative technologies of the 21st century.`),
		logo: Assets.AI,
		name: 'Artificial Intelligence',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'machine-learning',
		color: 'green',
		description: escapeHtml(`<b>Machine Learning (ML)</b> is a subset of Artificial Intelligence that focuses on the development of algorithms and statistical models that enable computer systems to improve their performance on a specific task through experience.<br><br>

Key concepts include:<br>

1) <b>Supervised Learning:</b> Learning from labeled data to predict outcomes for unforeseen data.<br>
2) <b>Unsupervised Learning:</b> Finding patterns and relationships in unlabeled data.<br>
3) <b>Reinforcement Learning:</b> Learning to make decisions by interacting with an environment.<br>
4) <b>Neural Networks:</b> Computational models inspired by the human brain.<br>
5) <b>Deep Learning:</b> Machine learning based on artificial neural networks with multiple layers.<br>
6) <b>Feature Engineering:</b> The process of selecting and transforming variables when creating a predictive model.<br>
7) <b>Model Evaluation:</b> Techniques to assess the performance and generalization of a model.<br>
8) <b>Ensemble Methods:</b> Combining multiple learning algorithms to improve predictive performance.<br><br>

<b>Machine Learning</b> has applications in various fields including image and speech recognition, natural language processing, predictive analytics, and autonomous systems.`),
		logo: Assets.MachineLearning,
		name: 'Machine Learning',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'deep-learning',
		color: 'blue',
		description: escapeHtml(`<b>Deep Learning</b> is a subset of machine learning that is inspired by the structure and function of the human brain, specifically the interconnected neurons that form neural networks.<br><br>

Key concepts include:<br>

1) <b>Neural Networks:</b> Computational models inspired by biological neural networks.<br>
2) <b>Convolutional Neural Networks (CNNs):</b> Specialized for processing grid-like data, such as images.<br>
3) <b>Recurrent Neural Networks (RNNs):</b> Designed to work with sequence data, like text or time series.<br>
4) <b>Long Short-Term Memory (LSTM):</b> A type of RNN capable of learning long-term dependencies.<br>
5) <b>Generative Adversarial Networks (GANs):</b> Two neural networks contest with each other to generate new, synthetic instances of data.<br>
6) <b>Transfer Learning:</b> Technique that allows a model trained on one task to be repurposed on a second related task.<br>
7) <b>Reinforcement Learning:</b> Training models to make sequences of decisions.<br>
8) <b>Attention Mechanisms:</b> Allowing models to focus on specific parts of their input.<br><br>

<b>Deep Learning</b> has achieved remarkable results in various domains including computer vision, natural language processing, speech recognition, and game playing.`),
		logo: Assets.DeepLearning,
		name: 'Deep Learning',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description: escapeHtml(`<b>Adobe Photoshop</b> is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.<br><br>

Key features include:<br>

1) <b>Layer-based Editing:</b> Allows working on different elements of an image separately.<br>
2) <b>Selection Tools:</b> Various tools for selecting specific parts of an image for editing.<br>
3) <b>Brush Tools:</b> For painting, erasing, and retouching images.<br>
4) <b>Type Tools:</b> For adding and manipulating text in various fonts and styles.<br>
5) <b>Adjustment Tools:</b> For fine-tuning image colors and tones.<br>
6) <b>Filters:</b> A wide range of effects that can be applied to images.<br>
7) <b>Smart Objects:</b> Allow for non-destructive editing of layers.<br>
8) <b>3D Capabilities:</b> For creating and editing 3D models and scenes.<br><br>

<b>Photoshop</b> is used across a wide range of industries and applications, from photography and graphic design to web design and digital art creation.`),
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		color: 'orange',
		description: escapeHtml(`<b>Adobe Illustrator</b> is a vector graphics editor and design program developed and marketed by Adobe Inc.<br>
Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985.<br>
Along with Creative Cloud, it is currently marketed as part of the Adobe Creative Suite.<br>
<b>Illustrator is widely recognized as the industry-standard vector graphics software</b>, used by graphic designers, visual artists, and illustrators worldwide.<br>
<b>At its core, Illustrator works with vector graphics.</b><br>
Unlike raster graphics, which are based on pixels, vector graphics are based on mathematical formulas that define geometric primitives such as points, lines, curves, and shapes.<br>
This means that vector graphics can be scaled to any size without loss of quality, making Illustrator ideal for creating logos, icons, typography, and illustrations that may need to be used at various sizes.<br>
<b>Key features of Adobe Illustrator include:</b><br>

Pen Tool: The primary tool for creating precise, smooth vector paths.<br>
Shape Tools: For creating basic shapes like rectangles, ellipses, and polygons.<br>
Type Tools: For creating and manipulating text, including text on a path and text in shapes.<br>
Pathfinder: For combining and manipulating shapes in various ways.<br>
Live Trace: For converting raster images into vector graphics.<br>
Gradient Mesh: For creating complex, multi-colored gradients.<br>
Perspective Grid: For creating and manipulating objects in perspective.<br>
Artboards: Multiple artboards in a single document for creating various layouts or versions of a design.<br>
Symbols: For creating and reusing design elements efficiently.<br>
Graphic Styles: For saving and applying combinations of appearance attributes.<br>
Color Management: Including support for Pantone colors and other color systems.<br>
3D Effects: For creating three-dimensional objects from 2D artwork.<br>

<b>Illustrator is used in a wide range of industries and applications:</b><br>

Logo Design: For creating scalable, print-ready logos.<br>
Brand Identity: For developing comprehensive brand guidelines and assets.<br>
Packaging Design: For creating product packaging and labels.<br>
Editorial Illustration: For magazines, books, and digital publications.<br>
Icon Design: For creating app icons, web icons, and user interface elements.<br>
Infographic Design: For creating data visualizations and informational graphics.<br>
Fashion Design: For creating technical drawings and pattern designs.<br>
Map Making: For creating custom maps and location graphics.<br>
Signage and Wayfinding: For creating large-scale graphics for public spaces.<br>

<b>Illustrator integrates seamlessly with other Adobe Creative Cloud applications</b>, allowing for efficient workflows between different aspects of design projects.<br>
<b>It supports a wide range of file formats</b>, including its native AI format, as well as SVG, EPS, and PDF, which are widely used in the design and printing industries.<br>
<b>The software also supports a plugin architecture</b>, allowing third-party developers to extend its functionality.<br>
<b>Recent versions of Illustrator have incorporated more features for digital and web design</b>, including the ability to export designs for web and mobile platforms.<br>
It also includes features for collaboration and cloud storage through Creative Cloud.<br>
<b>While Illustrator is powerful, it can have a learning curve</b>, particularly for those new to vector graphics.<br>
However, Adobe provides extensive documentation, tutorials, and a large user community that shares knowledge and resources.<br>
<b>Illustrator is available through Adobe's Creative Cloud subscription service</b>, which provides regular updates and cloud storage integration.<br>
<b>For professionals in graphic design, illustration, and many other creative fields</b>, proficiency in Illustrator is often considered an essential skill.<br>
Its precision and scalability make it indispensable for creating high-quality graphics for both print and digital media.<br>
<b>As the demand for visual communication continues to grow across various industries</b>, Illustrator remains a key tool in the creation of vector graphics and illustrations.<br>`),
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'indesign',
		color: 'pink',
		description: escapeHtml(`<b>Adobe InDesign</b> is a desktop publishing and typesetting software application produced by Adobe Inc.<br>
It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books and ebooks.<br>
<b>First released in 1999, InDesign has become the industry standard for layout and page design for print and digital media.</b><br>
InDesign is part of the Adobe Creative Cloud, which allows it to integrate seamlessly with other Adobe applications like Photoshop and Illustrator.<br>
<b>Key features of Adobe InDesign include:</b><br>

Page Layout Tools: InDesign offers a comprehensive set of tools for precise control over page layouts, including guides, grids, and smart guides.<br>
Master Pages: These allow users to create consistent layouts across multiple pages.<br>
Paragraph and Character Styles: For consistent and easily updatable text formatting.<br>
Object Styles: Similar to text styles, but for design elements.<br>
Advanced Typography: InDesign provides fine control over typography, including kerning, tracking, and OpenType features.<br>
Tables: Tools for creating and formatting complex tables.<br>
Interactive PDFs: Ability to create PDFs with interactive elements like buttons, hyperlinks, and media.<br>
Digital Publishing: Features for creating digital publications, including support for fixed-layout EPUB.<br>
Data Merge: For creating personalized documents from databases.<br>
Long Document Features: Tools for managing long documents, including table of contents, indexing, and cross-references.<br>
Collaboration Tools: Integration with Adobe Creative Cloud for team collaboration.<br>
Preflight: Built-in tools for checking documents for potential printing issues.<br>

<b>InDesign is used in a variety of industries and applications:</b><br>

Publishing: For creating books, magazines, and newspapers.<br>
Marketing: For designing brochures, flyers, and other marketing materials.<br>
Corporate Communications: For annual reports, company newsletters, and presentations.<br>
Packaging Design: For creating packaging layouts and dielines.<br>
Digital Publishing: For creating ebooks and interactive digital publications.<br>
Education: For creating textbooks and educational materials.<br>

<b>One of InDesign's strengths is its ability to handle long, complex documents.</b><br>
Its book feature allows users to combine multiple InDesign files into a single project, making it ideal for managing large publications.<br>
<b>InDesign also excels in its typography features.</b><br>
It offers advanced control over text, including OpenType support, optical margin alignment, and paragraph composer for optimizing line breaks.<br>
<b>The software supports a wide range of file formats</b>, including its native INDD format, as well as IDML for backwards compatibility, and the ability to export to PDF, EPUB, and HTML.<br>
<b>InDesign's scripting capabilities allow for automation of repetitive tasks</b>, which can be particularly useful in production environments.<br>
<b>Recent versions of InDesign have expanded its digital publishing capabilities.</b><br>
The software now includes tools for creating fixed-layout EPUBs, interactive PDFs, and publications for tablet devices.<br>
It also integrates with Adobe's Digital Publishing Suite for creating tablet applications.<br>
<b>While InDesign is powerful, it can have a learning curve</b>, particularly for those new to desktop publishing.<br>
However, Adobe provides extensive documentation, tutorials, and a large user community that shares knowledge and resources.<br>
<b>InDesign is available through Adobe's Creative Cloud subscription service</b>, which provides regular updates and cloud storage integration.<br>
<b>For professionals in publishing, graphic design, and marketing</b>, proficiency in InDesign is often considered an essential skill.<br>
Its robust features for both print and digital publishing make it a versatile tool for creating a wide range of publications.<br>
<b>As the publishing industry continues to evolve</b>, with increasing emphasis on digital formats, InDesign remains a key tool in bridging the gap between print and digital publishing.<br>`),
		logo: Assets.InDesign,
		name: 'Adobe InDesign',
		category: 'design'
	}),
	defineSkill({
		slug: 'after-effects',
		color: 'purple',
		description: escapeHtml(`<b>Adobe After Effects</b> is a digital visual effects, motion graphics, and compositing application developed by Adobe Inc.<br><br>

Key features include:<br>

1) <b>Composition:</b> The ability to layer multiple pieces of footage, images, and audio.<br>
2) <b>Keyframe Animation:</b> For creating motion by changing properties over time.<br>
3) <b>Effects:</b> A wide range of built-in effects for altering footage.<br>
4) <b>3D Capability:</b> The ability to work with 3D layers and create 3D compositions.<br>
5) <b>Motion Tracking:</b> Tools for tracking motion in footage and applying that motion to other elements.<br>
6) <b>Rotoscoping:</b> Tools for cutting out objects from footage frame by frame.<br>
7) <b>Shape Layers:</b> Vector-based layers for creating and animating shapes.<br>
8) <b>Text Animation:</b> Powerful tools for creating and animating text.<br>
9) <b>Expressions:</b> A scripting language for creating complex animations and automating tasks.<br>
10) <b>Puppet Tool:</b> For easily animating characters and objects.<br>
11) <b>Camera Tools:</b> For creating and animating virtual cameras in 3D space.<br>
12) <b>Rendering and Output:</b> Support for various output formats and rendering engines.<br><br>

<b>After Effects</b> is used in a wide range of industries and applications, from film and television to advertising and mobile app design.	`),
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects',
		category: 'design'
	}),
	defineSkill({
		slug: 'selenium',
		color: 'green',
		description: escapeHtml(`<b>Selenium</b> is a powerful suite of tools specifically designed for automating web browsers.<br><br>

Key features include:<br>

1) <b>Cross-Browser Testing:</b> Selenium supports all major browsers.<br>
2) <b>Multiple Language Support:</b> Tests can be written in various programming languages.<br>
3) <b>OS Independence:</b> Selenium can run on various operating systems.<br>
4) <b>Reusable Code:</b> Selenium allows for the creation of reusable code.<br>
5) <b>Integration with Testing Frameworks:</b> Selenium integrates well with testing frameworks like JUnit, TestNG, and others.<br>
6) <b>Support for Mobile Testing:</b> Through tools like Appium, it's possible to automate mobile application testing.<br>
7) <b>Parallel Execution:</b> With Selenium Grid, tests can be run in parallel.<br>
8) <b>Headless Browser Testing:</b> Selenium supports headless browser testing.<br><br>

<b>Selenium</b> is widely used for automating functional and regression testing of web applications, as part of CI/CD pipelines, and sometimes for web scraping tasks.`),
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'test'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: escapeHtml(`<b>Redis</b> (Remote Dictionary Server) is an open-source, in-memory data structure store that can be used as a database, cache, message broker, and queue.<br><br>

Key features include:<br>

1) <b>In-Memory Data Store:</b> Redis keeps its entire dataset in memory, enabling extremely fast read and write operations.<br>
2) <b>Persistence:</b> While Redis is an in-memory database, it supports persistence by periodically saving the dataset to disk.<br>
3) <b>Data Structures:</b> Redis supports various data structures including strings, hashes, lists, sets, sorted sets, and more.<br>
4) <b>Replication:</b> Redis supports master-slave replication, allowing easy scalability and high availability.<br>
5) <b>Transactions:</b> Redis supports transactions, allowing the execution of a group of commands in a single step.<br>
6) <b>Pub/Sub:</b> Redis has a Publish/Subscribe messaging paradigm, making it useful for real-time applications.<br>
7) <b>Lua Scripting:</b> Redis has built-in Lua scripting capabilities, allowing for complex operations to be performed efficiently.<br>
8) <b>TTL for Keys:</b> Redis allows setting a time to live (TTL) for keys, after which they are automatically deleted.<br>
9) <b>Atomic Operations:</b> Redis operations are atomic, even when operating on complex data structures.<br>
10) <b>Cluster Mode:</b> Redis Cluster provides a way to run a Redis installation where data is automatically sharded across multiple Redis nodes.<br><br>

<b>Redis</b> is used in a wide variety of scenarios, from caching and session storage to real-time analytics and queuing systems.`),
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'quasar',
		color: 'cyan',
		description: escapeHtml(`<b>Quasar</b> is an open-source Vue.js based framework that allows developers to quickly create responsive websites, progressive web apps (PWAs), and mobile and desktop apps, all from a single codebase.<br><br>

Key features include:<br>

1) <b>Cross-Platform Development:</b> With Quasar, you can build for Web, Mobile, and Desktop from the same codebase.<br>
2) <b>Vue.js Based:</b> Quasar is built on top of Vue.js, leveraging its reactivity system and component-based architecture.<br>
3) <b>Comprehensive Component Library:</b> Quasar provides a large set of high-quality, customizable Vue components out of the box.<br>
4) <b>Material Design Implementation:</b> Quasar components follow Material Design specifications, but can be easily customized.<br>
5) <b>Responsive Design:</b> Quasar's components and layout system are designed to be responsive out of the box.<br>
6) <b>CLI with Hot-Reload:</b> Quasar comes with a powerful CLI that supports hot-reload, allowing for rapid development.<br>
7) <b>RTL Support:</b> Quasar has built-in support for right-to-left languages.<br>
8) <b>Icon Libraries:</b> Integrated support for Material Icons, Font Awesome, and Ionicons.<br>
9) <b>Quasar Language Packs:</b> Easy internationalization support.<br>
10) <b>Sass/SCSS Support:</b> Quasar allows the use of Sass/SCSS for styling.<br>
11) <b>Performance Focused:</b> Quasar is designed with performance in mind, offering features like tree shaking out of the box.<br>
12) <b>Extensive Documentation:</b> Quasar provides comprehensive documentation and guides.<br><br>

<b>Quasar</b> is particularly well-suited for rapid prototyping, cross-platform applications, and progressive web apps.`),
		logo: Assets.Quasar,
		name: 'Quasar',
		category: 'framework'
	}),
	defineSkill({
		slug: 'premiere',
		color: 'purple',
		description: escapeHtml(`<b>Adobe Premiere Pro</b> is a timeline-based video editing software application developed by Adobe Inc.<br><br>

Key features include:<br>

1) <b>Non-Linear Editing:</b> Premiere Pro uses a non-linear editing approach, allowing editors to access any frame in a digital video clip with the same ease as any other.<br>
2) <b>Multi-camera Editing:</b> The software supports editing footage from multiple cameras in real-time.<br>
3) <b>Color Correction and Grading:</b> Premiere Pro includes powerful color correction and grading tools, including the Lumetri Color panel.<br>
4) <b>Audio Editing:</b> While primarily a video editor, Premiere Pro also includes robust audio editing capabilities.<br>
5) <b>Motion Graphics Templates:</b> Users can create and edit motion graphics templates, which can be shared with team members.<br>
6) <b>VR Editing:</b> Premiere Pro supports editing of VR (Virtual Reality) content.<br>
7) <b>Auto Reframe:</b> This AI-powered feature automatically reframes videos for different aspect ratios.<br>
8) <b>Essential Graphics Panel:</b> This feature allows for the creation and animation of titles and graphics within Premiere Pro.<br>
9) <b>Integration with other Adobe Software:</b> Premiere Pro integrates seamlessly with other Adobe Creative Cloud applications.<br>
10) <b>Proxy Workflow:</b> This feature allows editors to work with lower-resolution copies of their footage for improved performance.<br>
11) <b>Team Projects:</b> Collaborative features allow multiple editors to work on the same project simultaneously.<br>
12) <b>Extensive Format Support:</b> Premiere Pro supports a wide range of video formats and codecs.<br><br>

<b>Premiere Pro</b> is used in various scenarios from film editing to television production and web video creation.`),
		logo: Assets.Premiere,
		name: 'Adobe Premiere Pro',
		category: 'design'
	}),
	defineSkill({
		slug: 'postcss',
		color: 'red',
		description: escapeHtml(`<b>PostCSS</b> is a tool for transforming CSS with JavaScript.<br><br>

Key features include:<br>

1) <b>Plugin Architecture:</b> PostCSS itself is very lightweight, with all functionality provided through plugins.<br>
2) <b>Future CSS Features:</b> PostCSS can be used to polyfill future CSS features, allowing developers to use upcoming CSS syntax today.<br>
3) <b>Autoprefixer:</b> One of the most popular PostCSS plugins, Autoprefixer, automatically adds vendor prefixes to CSS rules.<br>
4) <b>CSS Modules:</b> PostCSS can be used to implement CSS Modules, providing local scope for CSS classes.<br>
5) <b>Linting:</b> PostCSS plugins can provide CSS linting, helping to catch errors and enforce coding standards.<br>
6) <b>Minification:</b> PostCSS can be used to minify CSS, reducing file size.<br>
7) <b>Preprocessing:</b> While not a preprocessor itself, PostCSS can replicate many features of preprocessors like variables and mixins through plugins.<br>
8) <b>Custom Properties:</b> PostCSS can transform custom properties (CSS variables) for broader browser support.<br>
9) <b>Image Processing:</b> Some PostCSS plugins can handle tasks like image inlining or spriting.<br>
10) <b>Source Maps:</b> PostCSS supports source maps, making it easier to debug transformed CSS.<br><br>

<b>PostCSS</b> is used in various scenarios, from modern web development to maintaining large stylesheets and optimizing performance.`),
		logo: Assets.Postcss,
		name: 'PostCSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'nuxt',
		color: 'green',
		description: escapeHtml(`<b>Nuxt.js</b> is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js.<br><br>

Key features include:<br>

1) <b>Server-Side Rendering (SSR):</b> Nuxt.js can render Vue.js applications on the server, improving SEO and initial load times.<br>
2) <b>Static Site Generation (SSG):</b> Nuxt.js can generate static websites, providing the benefits of a static site with the power of a Vue.js application.<br>
3) <b>Automatic Code Splitting:</b> Nuxt.js automatically splits your code for faster page loads.<br>
4) <b>Vue Router Integration:</b> Nuxt.js automatically generates the vue-router configuration based on your file structure.<br>
5) <b>Asynchronous Data:</b> Nuxt.js provides a powerful asyncData method for fetching data on the server side.<br>
6) <b>Vuex Store Integration:</b> Nuxt.js provides a Vuex store that's easy to set up and use.<br>
7) <b>Plugin System:</b> Easily extend core functionality with plugins.<br>
8) <b>Modular Architecture:</b> Nuxt.js has a modular architecture that allows you to choose and use only the features you need.<br>
9) <b>Hot Module Replacement:</b> Enjoy instant feedback during development with hot module replacement.<br>
10) <b>SEO Optimization:</b> Nuxt.js provides features like automatic generation of headers and links for better SEO.<br>
11) <b>TypeScript Support:</b> Nuxt.js has built-in TypeScript support.<br>
12) <b>Nuxt Modules:</b> Extend Nuxt.js with modules for tasks like PWA features, Google Analytics integration, and more.<br><br>

<b>Nuxt.js</b> is particularly well-suited for server-side rendered Vue.js applications, static site generation, and large-scale Vue.js applications.`),
		logo: Assets.Nuxt,
		name: 'Nuxt.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description: escapeHtml(`<b>Nginx</b> (pronounced "engine-x") is a powerful, open-source web server software that can also be used as a reverse proxy, load balancer, HTTP cache, and more.<br><br>

Key features include:<br>

1) <b>Web Server:</b> Nginx can serve static content quickly and efficiently.<br>
2) <b>Reverse Proxy:</b> It can act as an intermediary for requests from clients, forwarding them to other servers.<br>
3) <b>Load Balancer:</b> Nginx can distribute incoming traffic across multiple servers to ensure no single server becomes overwhelmed.<br>
4) <b>HTTP Cache:</b> It can cache content, reducing the load on upstream servers.<br>
5) <b>SSL/TLS Termination:</b> Nginx can handle SSL/TLS encryption and decryption, offloading this work from application servers.<br>
6) <b>FastCGI Support:</b> For serving dynamic content, Nginx supports the FastCGI protocol.<br>
7) <b>URL Rewriting and Redirection:</b> Nginx provides powerful tools for manipulating URLs.<br>
8) <b>Gzip Compression:</b> It can compress responses before sending them to clients, reducing bandwidth usage.<br>
9) <b>WebSockets Support:</b> Nginx can proxy WebSocket connections.<br>
10) <b>HTTP/2 Support:</b> Nginx supports the HTTP/2 protocol, enabling faster web page loading.<br>
11) <b>Monitoring and Logging:</b> It provides detailed logs and status information for monitoring server health and performance.<br>
12) <b>Security Features:</b> Nginx includes features like rate limiting and access control to help protect against various types of attacks.<br><br>

<b>Nginx</b> is used in various scenarios, from serving high-traffic websites to acting as an API gateway in microservices setups.`),
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'yellow',
		description: escapeHtml(`<b>Firebase</b> is a comprehensive mobile and web application development platform provided by Google.<br><br>

Key features include:<br>

1) <b>Realtime Database:</b> A cloud-hosted NoSQL database that lets you store and sync data in realtime.<br>
2) <b>Cloud Firestore:</b> A flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development.<br>
3) <b>Authentication:</b> Provides easy-to-use SDKs and ready-made UI libraries to authenticate users to your app.<br>
4) <b>Hosting:</b> Fast and secure web hosting for your static and dynamic content.<br>
5) <b>Cloud Functions:</b> Let you automatically run backend code in response to events triggered by Firebase features and HTTPS requests.<br>
6) <b>Cloud Storage:</b> For storing and serving user-generated content like photos or videos.<br>
7) <b>Crashlytics:</b> A real-time crash reporter that helps you track, prioritize, and fix stability issues.<br>
8) <b>Analytics:</b> Provides insight into app usage and user engagement.<br>
9) <b>Cloud Messaging:</b> A cross-platform messaging solution that lets you reliably send messages at no cost.<br>
10) <b>Performance Monitoring:</b> Helps you gain insight into your app's performance issues.<br>
11) <b>Remote Config:</b> Lets you modify your app's behavior and appearance without publishing an app update.<br>
12) <b>Dynamic Links:</b> Allows you to create smart URLs that dynamically adapt to different platforms.<br><br>

<b>Firebase</b> is used in various scenarios, from mobile app development to real-time applications and serverless architectures.`),
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: escapeHtml(`5) <b>Docker Hub:</b> A cloud-based registry service for sharing and managing container images.<br>
6) <b>Isolation:</b> Each container runs in isolation from others, enhancing security and reducing conflicts.<br>
7) <b>Scalability:</b> Docker makes it easy to scale applications by spinning up new containers as needed.<br>
8) <b>Docker Compose:</b> A tool for defining and running multi-container Docker applications.<br>
9) <b>Docker Swarm:</b> Docker's native clustering and scheduling tool for Docker containers.<br>
10) <b>Efficient Updates:</b> Docker allows for efficient updates and maintenance as only the necessary changes need to be deployed.<br>
11) <b>Resource Efficiency:</b> Docker allows for better utilization of system resources compared to traditional virtualization.<br>
12) <b>Rapid Deployment:</b> Containers can be created and destroyed quickly, allowing for rapid application deployment and scaling.<br><br>

<b>Docker</b> is used in various scenarios, from microservices architecture to continuous integration/continuous deployment (CI/CD) pipelines and cloud migration.`),
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'dart',
		color: 'blue',
		description: escapeHtml(`<b>Dart</b> is a client-optimized programming language for fast apps on multiple platforms.<br><br>

Key features include:<br>

1) <b>Object-Oriented:</b> Dart is a class-based, object-oriented language with C-style syntax.<br>
2) <b>Strongly Typed:</b> Dart is strongly typed, but also has type inference, allowing for more concise code.<br>
3) <b>Garbage Collection:</b> Dart uses garbage collection to reclaim unused memory.<br>
4) <b>Isolates:</b> For concurrent programming, Dart uses isolates instead of threads.<br>
5) <b>JIT and AOT Compilation:</b> Dart supports both Just-In-Time (JIT) compilation for fast development cycles and Ahead-Of-Time (AOT) compilation for fast startup and execution.<br>
6) <b>Null Safety:</b> Dart has sound null safety, helping developers avoid null reference errors.<br>
7) <b>Async-Await:</b> Dart has built-in support for asynchronous programming using async and await keywords.<br>
8) <b>Mixins:</b> Dart supports mixins, allowing for more flexible code reuse than single inheritance alone.<br>
9) <b>Extension Methods:</b> Allows adding functionality to existing libraries.<br>
10) <b>Spread Operator:</b> Dart includes the spread operator for easier list and map manipulation.<br>
11) <b>Dart DevTools:</b> A suite of debugging and performance tools.<br>
12) <b>Easy to Learn:</b> Dart is designed to be familiar to developers coming from other object-oriented languages like Java or C#.<br><br>

<b>Dart</b> is used in various scenarios, particularly in Flutter development for cross-platform mobile applications.`),
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description: escapeHtml(`<b>Bootstrap</b> is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.<br><br>

Key features include:<br>

1) <b>Responsive Grid System:</b> Bootstrap includes a powerful mobile-first flexbox grid system for building layouts of all shapes and sizes.<br>
2) <b>Extensive Prebuilt Components:</b> It provides a large collection of commonly used interface components like navbars, dropdowns, alerts, and modals.<br>
3) <b>JavaScript Plugins:</b> Bootstrap comes with several JavaScript plugins that can be included as-needed.<br>
4) <b>Customization:</b> While Bootstrap provides a solid foundation, it's designed to be customized to fit your project's needs.<br>
5) <b>Sass Variables and Mixins:</b> For projects that use Sass, Bootstrap provides variables and mixins to make customization even easier.<br>
6) <b>Responsive Breakpoints:</b> Bootstrap includes a set of responsive breakpoints that make it easy to create responsive designs.<br>
7) <b>Utility Classes:</b> It provides a wide range of utility classes for quickly styling elements without having to write custom CSS.<br>
8) <b>Normalize.css:</b> Bootstrap includes Normalize.css to ensure consistent rendering across different browsers.<br>
9) <b>Icon Library:</b> While not included directly in Bootstrap 5, it recommends and provides guidance for using various icon libraries.<br>
10) <b>Extensive Documentation:</b> Bootstrap provides comprehensive documentation with examples and explanations.<br>
11) <b>Browser Support:</b> Bootstrap supports all major browsers and platforms.<br>
12) <b>Community and Ecosystem:</b> There's a large community around Bootstrap, resulting in numerous third-party themes, extensions, and tools.<br><br>

<b>Bootstrap</b> is used in various scenarios, from rapid prototyping to creating responsive web designs and maintaining consistent UI across projects.`),
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'delphi',
		color: 'red',
		description: escapeHtml(`<b>Delphi</b> is an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software, developed by Embarcadero Technologies.<br><br>

Key features include:<br>

1) <b>Rapid Application Development (RAD):</b> Delphi's visual development environment allows for quick creation of user interfaces and application logic.<br>
2) <b>Cross-Platform Development:</b> Modern versions of Delphi support development for Windows, macOS, iOS, Android, and Linux from a single codebase.<br>
3) <b>Native Compilation:</b> Delphi compiles to native machine code, resulting in fast, efficient applications.<br>
4) <b>Extensive Component Library:</b> Delphi comes with a large library of reusable components for various purposes.<br>
5) <b>Database Support:</b> It includes robust database access components and drivers for various database systems.<br>
6) <b>Visual Component Library (VCL):</b> A comprehensive framework for Windows development.<br>
7) <b>FireMonkey (FMX):</b> A framework for cross-platform development.<br>
8) <b>COM/ActiveX Support:</b> Delphi has strong support for Microsoft's COM technology.<br>
9) <b>SOAP/XML Support:</b> For web service development and XML processing.<br>
10) <b>Inline Assembly:</b> Allows mixing of assembly language with Object Pascal for performance-critical code.<br>
11) <b>Unicode Support:</b> Full Unicode support for developing multilingual applications.<br>
12) <b>Integrated Debugging:</b> Powerful debugging tools are built into the IDE.<br><br>

<b>Delphi</b> is used in various scenarios, particularly for desktop application developme`),
		logo: Assets.Delphi,
		name: 'Delphi',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'xamarin',
		color: 'blue',
		description: escapeHtml(`<b>Xamarin</b> is a cross-platform mobile app development framework owned by Microsoft.<br><br>

Key features include:<br>

1) <b>Code Sharing:</b> Up to 90% of code can be shared across platforms.<br>
2) <b>Native Performance:</b> Xamarin apps compile to native code for each platform.<br>
3) <b>Access to Native APIs:</b> Full access to platform-specific functionality.<br>
4) <b>Xamarin.Forms:</b> For rapid UI development across platforms.<br>
5) <b>Visual Studio Integration:</b> Seamless integration with Microsoft's IDE.<br>
6) <b>Xamarin Test Cloud:</b> For automated UI testing on real devices.<br><br>

<b>Xamarin</b> allows developers to use C# and .NET to create native Android, iOS, and Windows apps. While powerful, it has a learning curve and can have larger app sizes compared to fully native development.`),
		logo: Assets.Xamarin,
		name: 'Xamarin',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'vite',
		color: 'purple',
		description: escapeHtml(`<b>Vite</b> is a build tool that aims to provide a faster and leaner development experience for modern web projects.<br><br>

Key features include:<br>

1) <b>Lightning Fast HMR:</b> Updates are reflected instantly in the browser.<br>
2) <b>Pre-bundling:</b> Uses esbuild for super-fast dependency pre-bundling.<br>
3) <b>Optimized Build:</b> Uses Rollup for optimized production builds.<br>
4) <b>Universal Plugin Interface:</b> Plugins work for both dev and build.<br>
5) <b>TypeScript Support:</b> First-class TypeScript support out of the box.<br>
6) <b>CSS Support:</b> Supports CSS pre-processors and CSS modules.<br><br>

<b>Vite</b> is framework-agnostic but provides first-class Vue.js support. It's particularly suited for modern, ES module-based projects.`),
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'unocss',
		color: 'gray',
		description: escapeHtml(`<b>UnoCSS</b> is an atomic CSS engine that takes a unique approach to styling.<br><br>

Key features include:<br>

1) <b>Instant:</b> No parsing, AST, or selector computation at runtime.<br>
2) <b>Fully Customizable:</b> All features can be extended or disabled.<br>
3) <b>Attributify Mode:</b> Group utilities in attributes for cleaner markup.<br>
4) <b>Pure CSS Icons:</b> Use any icon as a single class.<br>
5) <b>Variant Groups:</b> Apply utilities for multiple variants easily.<br>
6) <b>CSS Scoping:</b> Built-in CSS scoping solution.<br>
7) <b>Web Fonts:</b> Auto-detects and inlines web fonts.<br><br>

<b>UnoCSS</b> is highly flexible and can be configured to behave like other utility-first CSS frameworks. It's particularly useful for projects where performance and customization are crucial.`),
		logo: Assets.Unocss,
		name: 'UnoCSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: escapeHtml(`<b>Tailwind CSS</b> is a utility-first CSS framework for rapidly building custom user interfaces.<br><br>

Key features include:<br>

1) <b>Utility-First:</b> Compose designs directly in your markup.<br>
2) <b>Responsive Design:</b> Built-in responsive modifiers.<br>
3) <b>Hover and Focus States:</b> Easy styling for interactive elements.<br>
4) <b>Customization:</b> Highly customizable through configuration.<br>
5) <b>Dark Mode:</b> Built-in dark mode support.<br>
6) <b>JIT Mode:</b> Just-in-Time mode for on-demand CSS generation.<br>
7) <b>Plugins:</b> Extensible through a plugin system.<br><br>

<b>Tailwind CSS</b> is particularly popular for its flexibility and the speed at which it allows developers to create custom designs without writing custom CSS.`),
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'solid',
		color: 'blue',
		description: escapeHtml(`Solid is a declarative JavaScript library for creating user interfaces. It stands out for its performance and its unique approach to reactivity.<br><br>

Key features include:<br>

1) Fine-Grained Reactivity: Updates only what needs to be updated.<br>
2) No Virtual DOM: Compiles templates to real DOM operations.<br>
3) Small Size: Tiny core library with no dependencies.<br>
4) JSX: Uses JSX for templating.<br>
5) Server-Side Rendering: Built-in SSR support.<br>
6) Suspense: For declarative data fetching.<br>
7) Stores: Simple but powerful state management.<br><br>

Solid is particularly suited for applications where performance is critical. Its approach to reactivity can lead to extremely efficient updates.`),
		logo: Assets.Solid,
		name: 'Solid.js',
		category: 'framework'
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