// src/lib/data/tools.ts

export const aiToolsTitle = 'AI Tools';
export const codeToolsTitle = 'Code Tools';
export const dataToolsTitle = 'Data Tools';


export const aiTools = [
    {
        name: 'AI Response Parser',
        description: 'A Python script that parses a markdown file, extracts code blocks, and creates output files based on specified rules and requirements.',
        github: 'https://github.com/charlpcronje/AI-Response-Parser',
        details: `
            The AI Response Parser is a Python script designed to process markdown files containing AI responses. Key features include:
            - Logging all actions to a file and terminal
            - Modular script design
            - Adding relative file paths and version numbers to created files
            - Storing app settings in a .env file
            - Providing a list of the last 20 run arguments
            - Prompting for Input Path and Output Path if a new run is selected
            - Creating an index.md file with the output of the tree command
        `,
        slug: 'ai-response-parser'
    },
    {
        name: 'Project Data Collector',
        description: 'A Python application designed to scan project directories and collect various pieces of information such as project metadata, dependencies, environment variables, documentation, and more.',
        github: 'https://github.com/charlpcronje/Project-Scout',
        details: `
            The Project Data Collector is a modular Python application with features including:
            - Modular architecture for easy extension and maintenance
            - Collection of project information, dependencies, environment variables, documentation, and more
            - Use of Git to collect commit and contributor information
            - Support for both Flask endpoints and terminal execution for data collection
            - Comprehensive logging to both terminal and file
        `,
        slug: 'project-data-collector'
    },
    {
        name: 'ChatGPT Chat Manager',
        description: 'An application consisting of a Flask API and a Chrome extension that work together to provide a seamless chat management experience within ChatGPT.',
        github: 'https://github.com/charlpcronje/Chrome-Extension-for-LLMs',
        details: `
            The ChatGPT Chat Manager application allows users to:
            - Organize ChatGPT conversations using folders and tags
            - Manage folders, tags, and chats through a Flask API backend
            - Interact with the API and integrate with ChatGPT's user interface via a Chrome extension
        `,
        slug: "chatgpt-chat-manager"
    },
    {
        name: 'Synthiq - Multi-Embedded AI Smart Storage',
        description: 'An application that functions like Chat GPT but can be trained on user-specified data.',
        github: 'https://github.com/charlpcronje/brain.cronje.me',
        details: `
            Synthiq offers features such as:
            - Universal data acceptance (text, images, code snippets, etc.)
            - Generative AI capabilities
            - Fast and efficient data access
            - Secure data control
            - Compatibility with various file types including text, markdown, PDF, powerpoint, CSV, word, audio, and video
        `,
        slug: "synthiq"
    },
    {
        name: 'GPT Crawler',
        description: 'A tool to crawl a site and generate knowledge files to create custom GPTs from one or multiple URLs.',
        github: 'https://github.com/charlpcronje/Context-Crawler-GPT',
        details: `
            The GPT Crawler offers:
            - Site crawling to generate knowledge files
            - Support for creating custom GPTs from multiple URLs
            - Configuration options for crawl depth and output customization
            - Integration with OpenAI's custom GPT creation process
        `,
        slug: "gpt-crawler"
    },
    {
        name: 'Code Context Parser and Indexer for AI',
        description: 'An advanced tool designed to analyze and index code from multiple programming languages to facilitate AI-driven code assistance.',
        github: 'https://github.com/charlpcronje/Code-Context-Parser-and-Indexer-for-AI',
        details: `
            This tool offers:
            - Support for multiple programming languages (Java, JavaScript, HTML, PHP, Python, Rust, C++)
            - Deep code analysis to extract classes, methods, properties, and other elements
            - Generation of both human-readable and AI-optimized indexes
            - Application of a unique numeric referencing system for frequent terms
            - Modular architecture for easy extension to more programming languages
        `,
        slug: "code-context-parser-indexer-for-ai"
    },
    {
        name: 'Add Relative Path to Files',
        description: 'A Python script that scans through a project directory and adds comments with the relative file path to the first line of each file matching specified file types.',
        github: 'https://github.com/charlpcronje/Add-Relative-Path-to-Files',
        details: `
            This tool provides:
            - Dynamic commenting based on file type
            - Support for multiple programming languages
            - Custom comment placement
            - Block comment handling
            - Prevention of duplicate comments
            - Configurable project types
            - Directory exclusion
            - Flexible configuration through JSON files
            - Comprehensive logging
        `,
        slug: "add-relative-path-to-files"
    },
    {
        name: 'Script and CSS Extractor',
        description: 'A Python script that extracts all JavaScript and CSS links from an HTML file and outputs them in Markdown format.',
        github: 'https://github.com/charlpcronje/Script-and-CSS-Extract',
        details: `
            This tool offers:
            - Extraction of JavaScript and CSS links from HTML files
            - Categorization of links found in <head> and <body> tags
            - Output of extracted information in Markdown format
        `,
        slug: "script-and-css-extractor"
    },
    {
        name: 'Combine Project Markdown Docs',
        description: 'A Python application that recursively scans a specified directory and its sub-directories for Markdown (.md) files and combines them into a single file.',
        github: 'https://github.com/charlpcronje/Combine-Markdown-Docs',
        details: `
            This tool offers:
            - Recursive file scanning for Markdown files
            - Exclusion configuration for specific files and folders
            - Addition of custom headers with relative paths to each Markdown file in the combined output
        `,
        slug:"combine-project-markdown-docs"
    },
    {
        name: 'File System Analysis Tool for AI Embeddings',
        description: 'A Python-based tool designed to analyze file structures and metadata in a manner that is user-friendly and suitable for AI embeddings.',
        github: 'https://github.com/charlpcronje/File-System-Analysis-Tool-for-AII-Embeddings',
        details: `
            This tool provides:
            - Directory traversal and exploration
            - Extraction of file metadata (size, creation and modification dates, file hashes)
            - Content analysis (line, word, and token counting)
            - Error analysis and reporting
            - ASCII tree visualization of directory structures
        `,
        slug: "file-system-analysis-tool-for-ai-embeddings"
    },
    {
        name: 'Project Code Markdown Generator',
        description: 'A set of Python scripts designed to generate a Markdown document from a project\'s source code.',
        github: 'https://github.com/charlpcronje/Project-Code-Markdown-Generator',
        details: `
            This tool provides:
            - Modular script design
            - Depth calculation and heading assignment in Markdown
            - Customizable heading levels
            - Path normalization
            - Exclusion of specific directories and files
            - Line, character, and page count for each file
            - Index generation with file details
            - Configurable file extensions
        `,
        slug: "project-code-markdown-generator"
    },
    {
        name: 'Image Sharpness Categorizer',
        description: 'A Python script designed to analyze and categorize images in a folder based on their sharpness.',
        github: 'https://github.com/charlpcronje/mage-Sharpness-Categorizer',
        details: `
            The Image Sharpness Categorizer offers:
            - Automatic sharpness assessment using the Laplacian variance method
            - Dynamic categorization based on configurable percentage thresholds
            - Output of categorized images into "best", "better", and "med" folders
            - Customizable configuration through a JSON file
        `,
        slug: "image-sharpness-categorizer"
    }
];

export const codeTools = [
    {
        name: 'Compare Files VS Code Extension',
        description: 'A Visual Studio Code extension that allows you to compare two selected files.',
        github: 'https://github.com/charlpcronje/Compare-Files-VS-Code-Extension',
        details: `
            This VS Code extension enables users to:
            - Select two files from the explorer and compare them using the "Compare Files" command
            - Access the "Compare Files" command from the context menu of the explorer
        `,
        slug: "compare-files-vs-code-extension"
    },
    {
        name: 'File Groups for VS Code',
        description: 'A Visual Studio Code extension that allows you to create, manage, and manipulate groups of files.',
        github: 'https://github.com/charlpcronje/File-Groups-for-VSCode',
        details: `
            This VS Code extension provides functionalities to:
            - Create and rename file groups
            - Add files to groups
            - Toggle the visibility of files in groups
            - Duplicate groups
            - Combine files in a group into a single markdown file
            - Export and import file groups as JSON
            - Delete file groups
        `,
        slug: "file-groups-for-vs-code"
    },
    {
        name: 'Java Class Component Endpoint Extractor',
        description: 'A Python script designed to analyze Java source files, especially those used in Spring Framework applications, to extract detailed information about API endpoints.',
        github: 'https://github.com/charlpcronje/Java-Class-Component-Endpoint-Extractor',
        details: `
            This tool provides:
            - Automatic extraction of endpoint information from Java source files
            - Support for Spring annotations (GetMapping, PostMapping, PutMapping, DeleteMapping, RequestMapping)
            - Generation of a well-structured Markdown file summarizing all extracted endpoint information
        `,
        slug: "java-class-component-endpoint-extractor"
    },
    {
        name: 'Ignite Builder - App Runner',
        description: 'A Python application designed to manage and run multiple smaller Python scripts.',
        github: 'https://github.com/charlpcronje/Ignite-Builder-App-Runner',
        details: `
            The Ignite Builder - App Runner includes:
            - Management of application configurations
            - Execution of individual Python scripts
            - Handling of file operations
            - Configuration through a JSON file
        `,
        slug: "ignite-builder-app-runner"
    }
]

export const dataTools = [
    {
        name: 'Audit Log for MariaDB & MySQL Databases',
        description: 'A stored procedure designed to automatically create database triggers for INSERT, UPDATE, and DELETE operations across all tables in a specified MariaDB database.',
        github: 'https://github.com/charlpcronje/Audit-Log-for-MariaDB-MySQL-',
        details: `
            This tool provides:
            - Automatic creation of triggers for all tables in a database
            - Logging of changes to an audit_logs table in JSON format
            - Safe rerunning without creating duplicate triggers
            - Comprehensive auditing across all database tables
        `,
        slug:"audit-log-for-mariadb-mysql-databases"
    },
    {
        name: 'WhatsApp Chat Analyzer',
        description: 'A Python script that processes a WhatsApp chat export file to analyze messages between two specified individuals.',
        github: 'https://github.com/charlpcronje/WhatsApp-Chat-Analyzer',
        details: `
            This tool provides:
            - Separation of messages between two specified individuals
            - Exclusion of messages containing specified phrases
            - Calculation of total word count for each individual
            - Determination of top 10 active days based on word count
            - Calculation of average response time for each individual
            - Output of results in Markdown files
        `,
        slug: "whatsapp-chat-analyzer"
    },
    {
        name: 'File Change RSS Feed',
        description: 'This project generates an RSS feed that tracks changes to files in the /var/www/ directory.',
        github: 'https://github.com/charlpcronje/File-Change-RSS-Feed',
        details: `
            The File Change RSS Feed project offers:
            - Real-time updates to the RSS feed when files are created, modified, or deleted
            - Detailed file information including name, path, change event, and timestamp
            - Easy integration with various RSS readers and aggregators
            - Customizable number of items in the feed
            - Lightweight implementation using Bash and standard Unix utilities
        `,
        slug: "file-change-rss-feed"
    },
    {
        name: 'DataSingleton',
        description: 'A Python package that provides a singleton class for managing data and plugins, offering a unified interface to access various functionalities.',
        github: 'https://github.com/charlpcronje/Python-Data-Singleton',
        details: `
            DataSingleton offers features such as:
            - Configuration management
            - Request handling
            - Environment variables management
            - Logging
            - Module loading
            - Database querying
            - API integration
            - Data storage
            - Bitwise operations
        `,
        slug: "data-singleton"
    },
    {
        name: 'pwa-service-worker-creator',
        description: 'A Python package that provides a singleton class for managing data and plugins, offering a unified interface to access various functionalities.',
        github: 'https://github.com/charlpcronje/PWA-Service-Worker-Config-and-Generator',
        details: `
            This project provides a tool for generating and configuring service workers for Progressive Web Applications (PWAs). It allows for interactive configuration generation or loading from a JSON file, analyzes the file structure of your web application, and generates a service worker script based on the configuration.
            
            Features
            - Interactive configuration generation
            - Load configuration from JSON file
            - File structure analysis
            - Service worker script generation
            - Logging to both file and terminal

            The script will generate a 'service-worker.js' file in the current directory.
        `,
        slug: "pwa-service-worker-creator"
    }
];