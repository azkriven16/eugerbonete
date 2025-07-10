import { db } from "./index"; // Adjust import path as needed
import { projectsTable } from "./schema"; // Adjust import path as needed

const fakeProjects = [
    {
        name: "E-Commerce Platform",
        type: "frontend",
        description:
            "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform supports multiple payment methods and provides real-time inventory management.",
        summary: "Modern e-commerce platform with complete shopping experience",
        created_at: new Date("2023-03-15T10:30:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/ecommerce-platform",
        live_url: "https://ecommerce-demo.vercel.app",
    },
    {
        name: "Task Management API",
        type: "backend",
        description:
            "A RESTful API for task management built with Node.js, Express, and MongoDB. Provides endpoints for user authentication, task CRUD operations, team management, file uploads, and real-time notifications. Features JWT authentication, rate limiting, and comprehensive error handling.",
        summary: "Robust REST API for task management with authentication",
        created_at: new Date("2022-08-22T14:20:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/task-management-api",
        live_url: "https://task-api.herokuapp.com",
    },
    {
        name: "Weather Dashboard",
        type: "frontend",
        description:
            "A responsive weather application that provides real-time weather data and forecasts. Built with React and integrated with multiple weather APIs. Features include location-based weather, 7-day forecasts, weather maps, severe weather alerts, and historical data visualization with interactive charts.",
        summary: "Real-time weather data with forecasting and visualization",
        created_at: new Date("2024-01-10T09:15:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1594736797933-d0407ba7fe65?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/weather-dashboard",
        live_url: "https://weather-app-demo.netlify.app",
    },
    {
        name: "Social Media Analytics API",
        type: "backend",
        description:
            "A comprehensive analytics API for social media management built with Python Django and PostgreSQL. Provides endpoints for tracking engagement metrics, audience demographics, content performance, and competitor analysis. Features automated data collection, sentiment analysis, and integration with major social platforms.",
        summary: "Advanced social media analytics API with automated reporting",
        created_at: new Date("2023-11-05T16:45:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/social-analytics-api",
        live_url: "https://social-analytics-api.railway.app",
    },
    {
        name: "Recipe Sharing Platform",
        type: "frontend",
        description:
            "A community-driven recipe sharing website where users can upload, rate, and share recipes. Built with Next.js and styled with Tailwind CSS. Features include user profiles, recipe collections, nutritional information, cooking timers, shopping lists, and social features like comments and favorites.",
        summary: "Community platform for sharing and discovering recipes",
        created_at: new Date("2022-05-18T11:30:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/recipe-sharing-platform",
        live_url: "https://recipe-share.vercel.app",
    },
    {
        name: "Fitness Tracker API",
        type: "backend",
        description:
            "A comprehensive fitness tracking API built with Express.js and MongoDB. Provides endpoints for workout routines, exercise library, progress tracking, nutrition logging, goal setting, and integration with wearable devices. Features user authentication, data validation, and real-time synchronization.",
        summary:
            "Complete fitness tracking API with workout and nutrition endpoints",
        created_at: new Date("2024-06-12T08:00:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/fitness-tracker-api",
        live_url: "https://fitness-api.onrender.com",
    },
    {
        name: "Learning Management System",
        type: "frontend",
        description:
            "An educational platform for online courses and training programs built with Angular and TypeScript. Features include course creation interface, video streaming, interactive quizzes, progress tracking, certificates, discussion forums, and responsive design for mobile learning.",
        summary:
            "Comprehensive online learning platform with course management",
        created_at: new Date("2021-12-03T13:20:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/learning-management-system",
        live_url: "https://lms-demo.surge.sh",
    },
    {
        name: "Real Estate API",
        type: "backend",
        description:
            "A property listing and management API built with Laravel and MySQL. Provides endpoints for property listings, advanced search filters, user management, agent profiles, messaging system, and image uploads. Features include geolocation search, property recommendations, and MLS integration.",
        summary: "Full-featured real estate API with property management",
        created_at: new Date("2023-07-28T15:10:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/real-estate-api",
        live_url: "https://realestate-api.fly.dev",
    },
    {
        name: "Inventory Management Dashboard",
        type: "frontend",
        description:
            "A responsive inventory management dashboard built with Vue.js and Chart.js. Features include stock tracking visualization, automated reordering alerts, barcode scanning interface, supplier management, sales analytics, and multi-location support with real-time updates.",
        summary:
            "Enterprise inventory management dashboard with automated tracking",
        created_at: new Date("2022-02-14T12:00:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        ],
        github_url:
            "https://github.com/username/inventory-management-dashboard",
        live_url: "https://inventory-dashboard.firebase.app",
    },
    {
        name: "Event Planning API",
        type: "backend",
        description:
            "A comprehensive event management API built with FastAPI and PostgreSQL. Provides endpoints for event creation, ticket sales, attendee management, venue booking, vendor coordination, schedule management, and real-time notifications. Features include payment processing and email automation.",
        summary: "Complete event planning and management API",
        created_at: new Date("2024-09-20T17:30:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/event-planning-api",
        live_url: "https://event-api.cyclic.app",
    },
    {
        name: "Cryptocurrency Portfolio Tracker",
        type: "frontend",
        description:
            "A real-time cryptocurrency portfolio tracking application built with React and Redux. Features include portfolio overview, price alerts, transaction history, market analysis, news integration, and advanced charting. Supports multiple exchanges and provides detailed profit/loss calculations.",
        summary: "Real-time crypto portfolio tracker with market analysis",
        created_at: new Date("2021-09-07T10:45:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/crypto-portfolio-tracker",
        live_url: "https://crypto-tracker-demo.pages.dev",
    },
    {
        name: "Chat Application Backend",
        type: "backend",
        description:
            "A real-time chat application backend built with Socket.io, Express, and Redis. Provides WebSocket connections for instant messaging, user presence tracking, group chat functionality, file sharing, message encryption, and conversation history. Features include user authentication and rate limiting.",
        summary: "Real-time chat backend with WebSocket support and encryption",
        created_at: new Date("2023-04-11T14:15:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/chat-application-backend",
        live_url: "https://chat-backend.adaptable.app",
    },
    {
        name: "Project Management Dashboard",
        type: "frontend",
        description:
            "A comprehensive project management dashboard built with Svelte and D3.js. Features include Gantt charts, task boards, team collaboration tools, time tracking, resource allocation, budget management, and progress visualization. Supports agile methodologies and custom workflows.",
        summary:
            "Advanced project management dashboard with visualization tools",
        created_at: new Date("2022-11-25T09:30:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/project-management-dashboard",
        live_url: "https://project-dashboard.github.io",
    },
    {
        name: "Microservices Gateway",
        type: "backend",
        description:
            "A robust API gateway built with Spring Boot and Spring Cloud Gateway. Handles routing, authentication, rate limiting, load balancing, and monitoring for microservices architecture. Features include circuit breakers, request/response transformation, and comprehensive logging.",
        summary: "Enterprise API gateway for microservices architecture",
        created_at: new Date("2024-03-08T16:20:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/microservices-gateway",
        live_url: "https://gateway-api.koyeb.app",
    },
    {
        name: "Data Visualization Platform",
        type: "frontend",
        description:
            "An interactive data visualization platform built with React and D3.js. Features include drag-and-drop chart builder, real-time data updates, custom dashboard creation, data filtering, export functionality, and collaborative sharing. Supports multiple data sources and chart types.",
        summary:
            "Interactive data visualization platform with custom dashboards",
        created_at: new Date("2021-06-16T11:00:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/data-visualization-platform",
        live_url: "https://dataviz-platform.netlify.app",
    },
    {
        name: "Expense Tracker Mobile App",
        type: "frontend",
        description:
            "A React Native mobile application for personal expense tracking. Features include expense categorization, budget setting, receipt scanning, financial reports, spending insights, bill reminders, and cloud synchronization. Supports multiple currencies and offline functionality.",
        summary: "Mobile expense tracking app with budget management",
        created_at: new Date("2023-12-20T13:45:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/expense-tracker-mobile",
        live_url: "https://expo.dev/@username/expense-tracker",
    },
    {
        name: "Blog CMS API",
        type: "backend",
        description:
            "A headless content management system API built with NestJS and PostgreSQL. Provides endpoints for article management, user authentication, comments, categories, tags, media uploads, and SEO optimization. Features include role-based access control, content scheduling, and full-text search.",
        summary: "Headless CMS API for blog and content management",
        created_at: new Date("2022-10-30T10:15:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/blog-cms-api",
        live_url: "https://blog-cms-api.up.railway.app",
    },
    {
        name: "Gaming Leaderboard System",
        type: "frontend",
        description:
            "A competitive gaming leaderboard platform built with Vue.js and Socket.io. Features include real-time score updates, player rankings, tournament management, achievement systems, user profiles, and interactive statistics. Supports multiple game types and custom scoring systems.",
        summary: "Real-time gaming leaderboard with tournament management",
        created_at: new Date("2024-04-22T14:30:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/gaming-leaderboard",
        live_url: "https://gaming-leaderboard.vercel.app",
    },
    {
        name: "IoT Data Analytics API",
        type: "backend",
        description:
            "A scalable IoT data analytics API built with Python FastAPI and InfluxDB. Handles sensor data ingestion, real-time processing, alerting, and historical analysis. Features include device management, data visualization endpoints, anomaly detection, and integration with cloud services.",
        summary: "IoT data analytics API with real-time processing",
        created_at: new Date("2023-08-14T16:00:00Z"),
        image_url:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        ],
        github_url: "https://github.com/username/iot-analytics-api",
        live_url: "https://iot-analytics.deta.dev",
    },
];

async function seedProjects() {
    try {
        console.log("Starting to seed projects...");

        // Insert fake projects
        await db.insert(projectsTable).values(fakeProjects);

        console.log(`Successfully seeded ${fakeProjects.length} projects!`);

        // Log summary
        const frontendCount = fakeProjects.filter(
            (p) => p.type === "frontend"
        ).length;
        const backendCount = fakeProjects.filter(
            (p) => p.type === "backend"
        ).length;
        console.log(`Frontend projects: ${frontendCount}`);
        console.log(`Backend projects: ${backendCount}`);
        console.log("All projects have GitHub and live URLs included!");
    } catch (error) {
        console.error("Error seeding projects:", error);
    }
}

// Run the seed function
seedProjects();
