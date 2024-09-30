import type { Service } from '$lib/types';
import Assets from './assets';

export const items: Array<Service> = [
    {
        slug: "boost-team-speed",
        color: "#4A90E2",
        shortDescription: "Tackle those delayed projects by adding a fresh set of expert hands. I'll help your team hit those critical milestones faster.",
    image: Assets.BOOST_TEAM_SPEED,
        name: "Boost Your Team's Speed",
        type: "Development Support"
    },
    {
        slug: "finish-projects",
        color: "#50E3C2",
        shortDescription: "Got an app or website stuck in development limbo? I specialize in jumping into existing code bases and delivering final results.",
    image: Assets.FINISH_PROJECTS,
        name: "Finish Unfinished Projects",
        type: "Project Completion"
    },
    {
        slug: "handle-tedious-stuff",
        color: "#F5A623",
        shortDescription: "Let your core team focus on what they do best while I take care of repetitive tasks like bug fixing, refactoring, or testing.",
    image: Assets.HANDLE_TEDIOUS_STUFF,
        name: "Handle the Tedious Stuff",
        type: "Maintenance & Optimization"
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
        slug: "finish-half-built-app",
        color: "#9013FE",
        shortDescription: "Don't leave potential profit on the table with unfinished software. I'll help complete your half-built projects.",
    image: Assets.FINISH_HALF_BUILT_APP,
        name: "Finish Half-Built Apps",
        type: "Project Completion"
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
    },
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
];

export const title = 'Services';