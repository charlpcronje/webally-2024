// src/lib/data/services.ts
import type { Service, serviceCategory } from '$lib/types';
import Assets from './assets';

export const categories: Array<serviceCategory> = [
    {
        slug: "development-support",
        name: "Development Support",
        shortDescription: "Accelerate your projects with expert development assistance.",
        services: [
            {
                slug: "boost-team-speed",
                color: "#4A90E2",
                shortDescription: "Tackle those delayed projects by adding a fresh set of expert hands. I'll help your team hit those critical milestones faster.",
                image: Assets.BOOST_TEAM_SPEED,
                name: "Boost Your Team's Speed",
                type: "Development Support"
            },
            {
                slug: "extra-hands-new-project",
                color: "#7ED321",
                shortDescription: "Whether you're kicking off a new build or need assistance planning, I can help from the earliest stages, ensuring everything runs smoothly.",
                image: Assets.EXTRA_HANDS_NEW_PROJECT,
                name: "Extra Hands for New Projects",
                type: "Project Initiation"
            },
            {
                slug: "flexible-freelance-help",
                color: "#BD10E0",
                shortDescription: "Need someone on a flexible basis? I'm available for short-term or ongoing projects, adapting to your team's evolving needs.",
                image: Assets.FLEXIBLE_FREELANCE_HELP,
                name: "Flexible Freelance Help",
                type: "Flexible Support"
            },
            {
                slug: "dev",
                color: "#1E90FF",
                shortDescription: "Elevate your project with comprehensive full stack development expertise, from front-end to back-end and everything in between.",
                image: Assets.FULL_STACK_DEV,
                name: "Senior Full Stack Developer",
                type: "Development Support"
            },
            {
                slug: "mobile",
                color: "#32CD32",
                shortDescription: "Reach users on all major platforms with cross-platform mobile app development, ensuring a consistent experience across devices.",
                image: Assets.MOBILE_DEV,
                name: "Cross-Platform Mobile App Development",
                type: "Development Support"
            }
        ]
    },
    {
        slug: "project-completion",
        name: "Project Completion",
        shortDescription: "Turn unfinished projects into polished, market-ready products.",
        services: [
            {
                slug: "finish-projects",
                color: "#50E3C2",
                shortDescription: "Got an app or website stuck in development limbo? I specialize in jumping into existing code bases and delivering final results.",
                image: Assets.FINISH_PROJECTS,
                name: "Finish Unfinished Projects",
                type: "Project Completion"
            },
            {
                slug: "finish-half-built-app",
                color: "#9013FE",
                shortDescription: "Don't leave potential profit on the table with unfinished software. I'll help complete your half-built projects.",
                image: Assets.FINISH_HALF_BUILT_APP,
                name: "Finish Half-Built Apps",
                type: "Project Completion"
            }
        ]
    },
    {
        slug: "optimization-maintenance",
        name: "Optimization & Maintenance",
        shortDescription: "Enhance performance and ensure long-term reliability of your software.",
        services: [
            {
                slug: "handle-tedious-stuff",
                color: "#F5A623",
                shortDescription: "Let your core team focus on what they do best while I take care of repetitive tasks like bug fixing, refactoring, or testing.",
                image: Assets.HANDLE_TEDIOUS_STUFF,
                name: "Handle the Tedious Stuff",
                type: "Maintenance & Optimization"
            },
            {
                slug: "debugging-optimization",
                color: "#D0021B",
                shortDescription: "Let's squash those bugs and optimize your code for better performance. You focus on the features—I'll handle the fixes.",
                image: Assets.DEBUGGING_OPTIMIZATION,
                name: "Debugging and Optimization",
                type: "Performance Enhancement"
            },
            {
                slug: "future-proof-codebase",
                color: "#4A4A4A",
                shortDescription: "Worried about tech debt? I can refactor your codebase to reduce future issues and ensure your systems stay scalable and reliable.",
                image: Assets.FUTURE_PROOF_CODEBASE,
                name: "Future-Proof Your Codebase",
                type: "Code Maintenance"
            }
        ]
    },
    {
        slug: "growth-scaling",
        name: "Growth & Scaling",
        shortDescription: "Support your business growth with scalable solutions and integrations.",
        services: [
            {
                slug: "scale-projects",
                color: "#8B572A",
                shortDescription: "If your business is growing faster than your team can handle, I'm here to take on extra work without slowing down progress.",
                image: Assets.SCALE_PROJECTS,
                name: "Scale Your Projects",
                type: "Growth Support"
            },
            {
                slug: "complex-integrations",
                color: "#417505",
                shortDescription: "Need help with intricate integrations or complex APIs? I have experience in making sure all systems communicate smoothly.",
                image: Assets.COMPLEX_INTEGRATIONS,
                name: "Complex Integrations",
                type: "System Integration"
            }
        ]
    },
    {
        slug: "ai-automation",
        name: "AI & Automation",
        shortDescription: "Leverage cutting-edge AI and automation to transform your business operations.",
        services: [
            {
                slug: "intelligent-automation",
                color: "#00A3E0",
                shortDescription: "Streamline your operations with custom automation strategies that eliminate repetitive tasks and boost productivity.",
                image: Assets.INTELLIGENT_AUTOMATION,
                name: "Intelligent Automation Solutions",
                type: "AI & Automation"
            },
            {
                slug: "ai-business-intelligence",
                color: "#FF6B6B",
                shortDescription: "Turn data into actionable insights with our AI-driven business intelligence solutions for smarter decision-making.",
                image: Assets.AI_BUSINESS_INTELLIGENCE,
                name: "AI-Powered Business Intelligence",
                type: "AI & Automation"
            },
            {
                slug: "custom-ai-solutions",
                color: "#4ECDC4",
                shortDescription: "From NLP to computer vision, we design AI applications tailored to your specific business needs.",
                image: Assets.CUSTOM_AI_SOLUTIONS,
                name: "Custom AI Solutions",
                type: "AI & Automation"
            },
            {
                slug: "workflow-optimization",
                color: "#FF9F1C",
                shortDescription: "Optimize your workflows with AI-driven consulting to identify key areas for growth and cost savings.",
                image: Assets.WORKFLOW_OPTIMIZATION,
                name: "Workflow Optimization & Automation Consulting",
                type: "AI & Automation"
            },
            {
                slug: "predictive-analytics",
                color: "#800080",
                shortDescription: "Stay ahead of market trends with AI-powered predictive analytics and forecasting models.",
                image: Assets.PREDICTIVE_ANALYTICS,
                name: "Predictive Analytics & Forecasting",
                type: "AI & Automation"
            },
            {
                slug: "chatbot-development",
                color: "#20B2AA",
                shortDescription: "Enhance customer engagement with intelligent chatbots powered by natural language processing.",
                image: Assets.CHATBOT_DEVELOPMENT,
                name: "AI Chatbot Development",
                type: "AI & Automation"
            },
            {
                slug: "machine-learning-models",
                color: "#FF4500",
                shortDescription: "Develop and deploy custom machine learning models to solve complex business problems.",
                image: Assets.MACHINE_LEARNING_MODELS,
                name: "Machine Learning Model Development",
                type: "AI & Automation"
            },
            {
                slug: "ai-consulting",
                color: "#DAA520",
                shortDescription: "Get expert guidance on integrating AI into your business strategy and processes.",
                image: Assets.AI_CONSULTING,
                name: "AI Strategy Consulting",
                type: "AI & Automation"
            },
            {
                slug: "computer-vision",
                color: "#008B8B",
                shortDescription: "Leverage computer vision technology for image and video analysis, object detection, and facial recognition.",
                image: Assets.COMPUTER_VISION,
                name: "Computer Vision Applications",
                type: "AI & Automation"
            },
            {
                slug: "natural-language-processing",
                color: "#9932CC",
                shortDescription: "Implement NLP solutions for text analysis, sentiment analysis, and language understanding.",
                image: Assets.NATURAL_LANGUAGE_PROCESSING,
                name: "Natural Language Processing Solutions",
                type: "AI & Automation"
            }
        ]
    },
    {
        slug: "infrastructure-services",
        name: "Infrastructure Services",
        shortDescription: "Ensure robust, efficient, and secure IT infrastructure for your business operations.",
        services: [
            {
                slug: "db_admin",
                color: "#FF4500",
                shortDescription: "Optimize your database performance, security, and reliability with expert database administration services.",
                image: Assets.DB_ADMIN,
                name: "Database Administration",
                type: "Infrastructure Services"
            },
            {
                slug: "server_admin",
                color: "#4B0082",
                shortDescription: "Keep your servers running at peak performance with professional server administration and management.",
                image: Assets.SERVER_ADMIN,
                name: "Server Administration",
                type: "Infrastructure Services"
            },
            {
                slug: "hosting",
                color: "#008080",
                shortDescription: "Reliable and scalable hosting solutions for your websites and applications, ensuring high uptime and performance.",
                image: Assets.HOSTING,
                name: "Website / Server Hosting",
                type: "Infrastructure Services"
            }
        ]
    }
];

export const items: Array<Service> = categories.flatMap(category => category.services);

export const title = 'Services';