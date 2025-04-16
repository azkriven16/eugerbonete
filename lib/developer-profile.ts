// lib/developer-profile.ts

export const developerProfile = {
    name: "John Doe",
    experience: "5 years",
    techStack: [
        "Next.js",
        "React",
        "Tailwind",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
    ],
    portfolio: "https://johndoe-portfolio.vercel.app",
    github: "https://github.com/johndoe-dev",
    linkedin: "https://linkedin.com/in/johndoe-dev",
    favoriteTools: ["VS Code", "Vercel", "Prisma", "Figma", "GitHub Copilot"],
    about: "Full-stack web developer focused on building fast, accessible apps with beautiful UIs.",
    recentProjects: [
        {
            name: "E-commerce Platform",
            tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
            description:
                "A fully responsive e-commerce solution with cart functionality and Stripe payment integration.",
            url: "https://ecommerce-platform.example.com",
            github: "https://github.com/johndoe-dev/ecommerce-platform",
            image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd21rdWsxaHJrOHhodzRld3Z3NTZvYnNhZ2l5amI3MjZ0bXZtYm55YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPsx2VAYAgEHC12/giphy.gif", // Placeholder image
            features: [
                "Product catalog with search and filtering",
                "User authentication and profiles",
                "Shopping cart and checkout with Stripe",
                "Order history and tracking",
            ],
        },
        {
            name: "Task Management Dashboard",
            tech: ["React", "Redux", "Node.js", "MongoDB"],
            description:
                "Collaborative project management tool with real-time updates and team workspaces.",
            url: "https://taskmaster.example.com",
            github: "https://github.com/johndoe-dev/task-management",
            image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd21rdWsxaHJrOHhodzRld3Z3NTZvYnNhZ2l5amI3MjZ0bXZtYm55YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPsx2VAYAgEHC12/giphy.gif", // Placeholder image
            features: [
                "Drag-and-drop kanban boards",
                "Task assignment and deadlines",
                "Team collaboration features",
                "Real-time updates using WebSockets",
            ],
        },
        {
            name: "Personal Blog Platform",
            tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
            description:
                "A modern, responsive blog platform with support for MDX content and code syntax highlighting.",
            url: "https://tech-thoughts.example.com",
            github: "https://github.com/johndoe-dev/tech-blog",
            image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd21rdWsxaHJrOHhodzRld3Z3NTZvYnNhZ2l5amI3MjZ0bXZtYm55YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPsx2VAYAgEHC12/giphy.gif", // Placeholder image
            features: [
                "Markdown and MDX support",
                "Code syntax highlighting",
                "Dark/light mode toggle",
                "RSS feed and SEO optimization",
            ],
        },
    ],
    education: "Bachelor's in Computer Science, University of Technology",
    contact: "hello@johndoe.dev",
    skills: {
        frontend: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "HTML/CSS",
        ],
        backend: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "REST API",
            "GraphQL",
        ],
        devOps: ["Docker", "CI/CD", "Vercel", "AWS"],
        tools: ["Git", "VS Code", "Figma", "Postman", "GitHub Actions"],
    },
    testimonials: [
        {
            name: "Sarah Johnson",
            position: "Product Manager at TechCorp",
            text: "John delivered our project ahead of schedule with excellent code quality. His communication was outstanding throughout the process.",
        },
        {
            name: "Michael Chen",
            position: "CTO at StartupX",
            text: "Working with John was a pleasure. He quickly understood our requirements and translated them into elegant solutions.",
        },
    ],
};
