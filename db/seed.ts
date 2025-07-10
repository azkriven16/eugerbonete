import { db } from "./index";
import { blogsTable } from "./schema";

const blogContent1 = `
# Frontend Developer Roadmap 2025: Your Complete Guide to Modern Web Development

Starting your journey as a frontend developer can feel overwhelming with so many technologies and frameworks to learn. This comprehensive roadmap will guide you through the essential skills you need to master in 2025.

## Phase 1: Foundation (2-3 months)

### HTML & CSS Mastery
Before jumping into frameworks, build a solid foundation:

**HTML Essentials:**
- Semantic HTML5 elements
- Forms and input validation
- Accessibility (ARIA labels, screen readers)
- SEO basics (meta tags, structured data)

**CSS Deep Dive:**
- Flexbox and CSS Grid (master both!)
- Responsive design and mobile-first approach
- CSS Custom Properties (CSS variables)
- Modern CSS features (container queries, subgrid)
- CSS preprocessing (Sass/SCSS)

**Practice Projects:**
- Build a personal portfolio website
- Create a responsive landing page
- Design a complex layout using CSS Grid

### JavaScript Fundamentals
Don't rush into React before mastering vanilla JavaScript:

**Core Concepts:**
- ES6+ features (arrow functions, destructuring, modules)
- Asynchronous programming (Promises, async/await)
- DOM manipulation and event handling
- Array methods (map, filter, reduce)
- Error handling and debugging

**Advanced JavaScript:**
- Closures and scope
- Prototype inheritance
- Event loop and call stack
- Module systems (CommonJS, ES6 modules)

## Phase 2: Modern Development Tools (1-2 months)

### Version Control
- Git fundamentals (add, commit, push, pull)
- Branching strategies (Git Flow, GitHub Flow)
- GitHub/GitLab collaboration
- Pull requests and code reviews

### Package Management & Build Tools
- npm/yarn package management
- Webpack or Vite for bundling
- Babel for JavaScript transpilation
- ESLint and Prettier for code quality

### Browser Developer Tools
- Chrome DevTools mastery
- Performance profiling
- Network tab debugging
- Responsive design testing

## Phase 3: Frontend Framework (3-4 months)

### Choose Your Framework Wisely

**React (Most Popular Choice):**
- Component-based architecture
- JSX syntax and virtual DOM
- Hooks (useState, useEffect, custom hooks)
- State management (Context API, Redux Toolkit)
- React Router for navigation

**Vue.js (Beginner-Friendly):**
- Template syntax and directives
- Composition API
- Vuex for state management
- Vue Router

**Angular (Enterprise-Ready):**
- TypeScript by default
- Dependency injection
- Services and observables
- Angular CLI

### Recommended Learning Path for React:
1. Start with Create React App
2. Build 3-4 projects of increasing complexity
3. Learn state management (start with Context API)
4. Master React Router
5. Explore Next.js for production apps

## Phase 4: Advanced Concepts (2-3 months)

### State Management
- When to use local vs global state
- Redux Toolkit (for React)
- Zustand (lightweight alternative)
- Server state management (React Query/TanStack Query)

### Testing
- Unit testing with Jest
- Component testing with React Testing Library
- End-to-end testing with Cypress or Playwright
- Test-driven development (TDD) basics

### Performance Optimization
- Code splitting and lazy loading
- Image optimization
- Bundle size analysis
- Web Vitals and performance metrics

## Phase 5: Full-Stack Integration (2-3 months)

### Backend Basics
- RESTful API consumption
- GraphQL fundamentals
- Authentication (JWT, OAuth)
- Error handling and loading states

### Database Knowledge
- SQL basics
- NoSQL concepts (MongoDB)
- Database design principles

### Deployment & DevOps
- Static site deployment (Vercel, Netlify)
- CI/CD pipelines
- Docker basics
- Cloud platforms (AWS, Azure, GCP)

## 2025 Trends to Watch

### Must-Learn Technologies:
- **Server Components** (React Server Components, Next.js App Router)
- **Meta-frameworks** (Next.js, Nuxt.js, SvelteKit)
- **TypeScript** (essential for larger projects)
- **Tailwind CSS** (utility-first CSS framework)
- **Astro** (static site generation)

### Emerging Technologies:
- **Web Assembly (WASM)** for performance-critical applications
- **Progressive Web Apps (PWAs)** with advanced features
- **Micro-frontends** for large-scale applications
- **AI Integration** (OpenAI API, AI-powered development tools)

## Timeline & Milestones

### Month 1-3: Foundation
- ✅ Complete HTML/CSS mastery
- ✅ Build 3 responsive websites
- ✅ JavaScript fundamentals solid

### Month 4-6: Tools & Framework
- ✅ Git workflow comfortable
- ✅ React/Vue/Angular basics
- ✅ First framework project deployed

### Month 7-9: Advanced Skills
- ✅ State management implemented
- ✅ Testing suite setup
- ✅ Performance optimization applied

### Month 10-12: Professional Ready
- ✅ Full-stack project completed
- ✅ Portfolio with 5+ projects
- ✅ Ready for junior developer roles

## Key Success Tips

1. **Build Projects, Not Just Tutorials** - Apply what you learn immediately
2. **Focus on Fundamentals** - Don't skip JavaScript basics for shiny frameworks
3. **Join Communities** - Discord servers, Reddit, Twitter dev communities
4. **Practice Daily** - Consistency beats intensity
5. **Document Your Journey** - Blog about your learning process
6. **Seek Feedback** - Code reviews from experienced developers
7. **Stay Updated** - Follow industry news and best practices

## Common Pitfalls to Avoid

- ❌ Framework-hopping without mastering one
- ❌ Ignoring accessibility and semantic HTML
- ❌ Not learning version control early
- ❌ Skipping testing and debugging skills
- ❌ Focusing only on code, ignoring soft skills

## Your Next Steps

1. Assess your current skill level
2. Choose your learning path based on this roadmap
3. Set realistic timelines (don't rush!)
4. Start building your first project today
5. Connect with other developers on social media

Remember: Everyone's journey is different. This roadmap is a guide, not a strict rulebook. Focus on consistent progress over perfection, and you'll be amazed at how much you can achieve in 12 months!
`;

const blogContent2 = `
# Choosing the Right Tech Stack in 2025: A Developer's Decision Guide

Selecting the right technology stack can make or break your project's success. With so many options available, how do you make the best choice for your specific needs? Let's break down the most popular tech stacks and when to use each.

## Understanding Tech Stacks

A tech stack is the combination of programming languages, frameworks, databases, and tools used to build a complete application. Think of it as your toolkit for bringing ideas to life.

### Frontend + Backend + Database = Full Stack

## The Most Popular Tech Stacks in 2025

### 1. MERN Stack (MongoDB, Express, React, Node.js)
**Best for:** Rapid prototyping, startups, real-time applications

**Pros:**
- Single language (JavaScript) across the entire stack
- Huge community support and learning resources
- Excellent for MVPs and quick deployment
- Strong ecosystem with numerous packages

**Cons:**
- Not ideal for CPU-intensive applications
- Callback complexity in Node.js
- MongoDB's flexibility can lead to inconsistent data

**When to Choose MERN:**
- Building social media platforms
- E-commerce applications
- Content management systems
- Real-time chat applications

**Example Companies:** Netflix, Airbnb, Instagram

### 2. MEAN Stack (MongoDB, Express, Angular, Node.js)
**Best for:** Enterprise applications, large-scale projects

**Pros:**
- TypeScript by default (better for large teams)
- Structured and opinionated framework
- Excellent for complex business logic
- Strong testing ecosystem

**Cons:**
- Steeper learning curve
- More verbose than React
- Frequent major version updates

**When to Choose MEAN:**
- Enterprise web applications
- Complex business logic requirements
- Large development teams
- Long-term maintenance projects

**Example Companies:** Google, Microsoft, Samsung

### 3. LAMP Stack (Linux, Apache, MySQL, PHP)
**Best for:** Traditional web applications, WordPress sites

**Pros:**
- Mature and stable technology
- Cost-effective hosting options
- Extensive documentation
- Perfect for content-heavy websites

**Cons:**
- PHP has limitations for modern web apps
- Less suitable for real-time applications
- Scaling challenges with traditional setup

**When to Choose LAMP:**
- WordPress-based websites
- Traditional business websites
- Content management systems
- Budget-conscious projects

**Example Companies:** Wikipedia, WordPress.com, Tumblr

### 4. JAMstack (JavaScript, APIs, Markup)
**Best for:** Static sites, blogs, marketing websites

**Popular Combinations:**
- **Gatsby + Contentful + Netlify**
- **Next.js + Strapi + Vercel**
- **Nuxt.js + Forestry + Netlify**

**Pros:**
- Excellent performance and SEO
- Enhanced security
- Cost-effective hosting
- Great developer experience

**Cons:**
- Limited dynamic functionality
- Build times can be long for large sites
- Requires API for dynamic content

**When to Choose JAMstack:**
- Marketing websites
- Blogs and documentation sites
- E-commerce with external APIs
- Portfolio websites

**Example Companies:** Smashing Magazine, Impossible Foods, Nike

### 5. T3 Stack (TypeScript, Next.js, tRPC, Prisma)
**Best for:** Type-safe full-stack applications

**Components:**
- **Next.js** - React framework
- **TypeScript** - Type safety
- **tRPC** - End-to-end typesafe APIs
- **Prisma** - Database ORM
- **Tailwind CSS** - Styling

**Pros:**
- Full-stack type safety
- Excellent developer experience
- Modern development practices
- Great for startups and solo developers

**Cons:**
- Relatively new ecosystem
- Learning curve for beginners
- Limited enterprise adoption

**When to Choose T3:**
- Type-safe applications
- Modern web applications
- Developer productivity focused projects
- Small to medium-sized teams

## Choosing Based on Project Requirements

### For Startups & MVPs
**Recommended:** MERN or T3 Stack
- Fast development cycles
- Cost-effective
- Easy to pivot and iterate
- Good talent availability

### For Enterprise Applications
**Recommended:** MEAN or .NET Stack
- Structured development approach
- Long-term maintainability
- Team scalability
- Enterprise security requirements

### For E-commerce
**Recommended:** Next.js + Shopify/Stripe + Vercel
- Performance optimization
- SEO requirements
- Payment integration
- Scalability

### For Content-Heavy Sites
**Recommended:** JAMstack or WordPress
- SEO optimization
- Content management ease
- Performance optimization
- Cost-effective hosting

## Technology Decision Framework

### 1. Team Expertise
- What languages does your team know?
- How quickly can they learn new technologies?
- What's the team's preference?

### 2. Project Requirements
- Performance needs
- Scalability requirements
- Security considerations
- Budget constraints

### 3. Timeline Constraints
- Development speed required
- Time to market pressure
- Maintenance timeline

### 4. Long-term Vision
- Expected growth
- Feature expansion plans
- Technology evolution

## 2025 Emerging Stacks to Watch

### 1. BETH Stack (Bun, Elysia, Turso, htmx)
**The New Kid on the Block**
- Bun for JavaScript runtime
- Elysia for backend framework
- Turso for edge database
- htmx for interactivity

**Why it's exciting:**
- Extreme performance focus
- Simplified development
- Edge-first architecture

### 2. Astro + Supabase + Vercel
**The Modern Static Stack**
- Astro for static site generation
- Supabase for backend services
- Vercel for deployment

**Perfect for:**
- Content-driven websites
- Performance-critical applications
- SEO-focused projects

### 3. SvelteKit + PlanetScale + Vercel
**The Performance Stack**
- SvelteKit for frontend
- PlanetScale for database
- Vercel for deployment

**Advantages:**
- Minimal bundle sizes
- Excellent performance
- Great developer experience

## Making Your Final Decision

### Ask These Questions:

1. **What's your primary goal?**
   - Speed to market → MERN/T3
   - Enterprise reliability → MEAN/.NET
   - Performance → JAMstack/SvelteKit

2. **What's your team's experience?**
   - JavaScript experts → MERN/MEAN
   - Diverse backgrounds → Pick based on strongest skills
   - New team → Choose simpler stack

3. **What's your budget?**
   - Limited budget → LAMP/JAMstack
   - Flexible budget → Any modern stack
   - Enterprise budget → .NET/Java enterprise

4. **What's your timeline?**
   - Weeks → Use familiar technologies
   - Months → Time to learn new stack
   - Years → Choose for long-term maintainability

## Final Recommendations

### For Beginners:
Start with **MERN** or **T3** - they offer the best learning curve and job market opportunities.

### For Freelancers:
Master **WordPress/LAMP** for client work and **JAMstack** for modern projects.

### For Startups:
Go with **MERN**, **T3**, or **Next.js + Supabase** for rapid development and scaling.

### For Enterprise:
Choose **MEAN**, **.NET**, or **Java Spring** for reliability and team scalability.

## Remember: There's No Perfect Stack

The "best" tech stack is the one that:
- Solves your specific problem
- Matches your team's skills
- Fits your timeline and budget
- Can evolve with your project

Don't get caught up in the latest trends. Focus on building something that works, ships on time, and can be maintained by your team. The most important factor is execution, not the technology choice.

Start with what you know, and optimize as you grow. Your first version doesn't need to be perfect – it needs to exist!
`;

const blogContent3 = `
# From Zero to Hired: A Realistic Guide to Landing Your First Developer Job

Breaking into the tech industry as a self-taught developer can feel like an impossible challenge. But with the right strategy, dedication, and realistic expectations, you can land your first developer job within 6-12 months. Here's your comprehensive guide to making it happen.

## The Reality Check: What You're Really Up Against

### The Good News:
- High demand for skilled developers
- Many companies hire self-taught developers
- Remote work opportunities are abundant
- Technology skills are valued over degrees

### The Challenges:
- Fierce competition from bootcamp grads and CS graduates
- Many job posts require "2+ years experience"
- Imposter syndrome is real and common
- Technical interviews can be intimidating

### Setting Realistic Expectations:
- **Timeline:** 6-12 months of focused learning and job searching
- **Applications:** Expect to apply to 100+ positions
- **Interviews:** Plan for 20-30 technical interviews
- **Rejections:** 95%+ rejection rate is normal
- **Salary:** Start 10-20% below market rate, negotiate later

## Phase 1: Build Your Foundation (Months 1-4)

### Master the Fundamentals First
Don't skip the basics to jump into frameworks:

**HTML & CSS Mastery:**
- Semantic HTML structure
- CSS Grid and Flexbox
- Responsive design principles
- CSS animations and transitions
- Cross-browser compatibility

**JavaScript Deep Dive:**
- Data types and structures
- Functions and scope
- Asynchronous programming
- DOM manipulation
- ES6+ features
- Error handling

**Version Control:**
- Git workflow
- GitHub profile optimization
- Meaningful commit messages
- Branch management

### Build Your First Projects
Create 3-4 projects that demonstrate different skills:

**Project 1: Personal Portfolio**
- Responsive design
- Clean, professional layout
- Contact form functionality
- Deployment on Netlify/Vercel

**Project 2: Todo App with Local Storage**
- CRUD operations
- Local storage persistence
- User interface interactions
- Form validation

**Project 3: API Integration Project**
- Fetch data from external APIs
- Error handling
- Loading states
- Dynamic content display

**Project 4: Calculator or Game**
- Complex JavaScript logic
- Interactive user interface
- Clean code structure
- Responsive design

### Portfolio Requirements:
- Mobile-responsive design
- Fast loading times
- Clear project descriptions
- Live demos and source code links
- Professional email address
- LinkedIn integration

## Phase 2: Specialize and Advance (Months 3-6)

### Choose Your Path
Pick one area to specialize in initially:

**Frontend Focus:**
- React or Vue.js
- State management (Redux, Context API)
- Testing (Jest, React Testing Library)
- Build tools (Webpack, Vite)
- CSS frameworks (Tailwind, Bootstrap)

**Backend Focus:**
- Node.js with Express
- Database design (MongoDB, PostgreSQL)
- Authentication and authorization
- API development
- Server deployment

**Full-Stack Approach:**
- Choose one frontend framework
- One backend technology
- Database management
- Deployment strategies

### Advanced Project Ideas:

**E-commerce Site:**
- Product catalog
- Shopping cart functionality
- Payment integration (Stripe)
- User authentication
- Admin panel

**Social Media Clone:**
- User profiles
- Post creation and interaction
- Real-time updates
- File upload functionality
- Mobile responsive design

**Task Management App:**
- User authentication
- Team collaboration features
- Real-time updates
- Data visualization
- Export functionality

## Phase 3: Job Search Strategy (Months 5-8)

### Optimize Your Online Presence

**LinkedIn Profile:**
- Professional headshot
- Compelling headline
- Detailed experience section
- Skills endorsements
- Regular content sharing

**GitHub Profile:**
- Professional README
- Pinned repositories
- Consistent commit history
- Clean, well-documented code
- Contribution to open source

**Portfolio Website:**
- Fast loading speed
- Mobile optimization
- SEO optimization
- Contact information
- Professional design

### Job Search Channels

**Primary Sources:**
- LinkedIn Jobs (40% of applications)
- Company websites directly (30%)
- AngelList for startups (15%)
- Indeed and other job boards (10%)
- Networking and referrals (5%)

**Networking Strategy:**
- Attend local meetups and tech events
- Join developer communities (Discord, Reddit)
- Participate in online forums
- Reach out to developers in your target companies
- Engage with content on social media

### Application Strategy

**Quality Over Quantity:**
- Research each company thoroughly
- Customize your resume for each application
- Write personalized cover letters
- Follow up professionally
- Track all applications

**Resume Optimization:**
- Keep it to 1-2 pages
- Focus on projects and skills
- Use action verbs and quantifiable results
- Include relevant technologies
- Proofread multiple times

## Phase 4: Interview Preparation (Months 6-8)

### Technical Interview Preparation

**Coding Challenges:**
- Practice on LeetCode, HackerRank, Codewars
- Focus on data structures and algorithms
- Practice explaining your thought process
- Learn to code on whiteboards
- Time yourself solving problems

**System Design (For Senior Roles):**
- Basic scalability concepts
- Database design principles
- API design patterns
- Caching strategies
- Load balancing basics

**Portfolio Defense:**
- Be ready to explain every line of code
- Discuss your technology choices
- Explain challenges and solutions
- Demonstrate your problem-solving process
- Show your learning journey

### Behavioral Interview Preparation

**Common Questions:**
- "Tell me about yourself"
- "Why do you want to be a developer?"
- "Describe a challenging project"
- "How do you handle criticism?"
- "Where do you see yourself in 5 years?"

**STAR Method:**
- **S**ituation: Set the context
- **T**ask: Describe your responsibility
- **A**ction: Explain what you did
- **R**esult: Share the outcome

## Salary Negotiation and Offer Evaluation

### Research Market Rates:
- Glassdoor and PayScale
- Local developer meetups
- LinkedIn salary insights
- Stack Overflow developer survey
- Consider location and experience level

### Negotiation Strategy:
- Always negotiate (politely)
- Focus on total compensation
- Consider growth opportunities
- Evaluate company culture
- Don't accept the first offer immediately

### Red Flags to Avoid:
- Unpaid "trial periods"
- Vague job descriptions
- Poor communication during interview process
- Unrealistic timeline expectations
- No mention of professional development

## Timeline and Milestones

### Month 1-2: Foundation Building
- ✅ HTML/CSS fundamentals
- ✅ JavaScript basics
- ✅ First project completed
- ✅ Git workflow established

### Month 3-4: Skill Development
- ✅ Framework chosen and learned
- ✅ 2-3 projects completed
- ✅ Portfolio website live
- ✅ GitHub profile optimized

### Month 5-6: Job Search Preparation
- ✅ Resume and cover letter polished
- ✅ LinkedIn profile optimized
- ✅ Interview preparation started
- ✅ Networking activities begun

### Month 7-8: Active Job Search
- ✅ Applications submitted daily
- ✅ Interview skills practiced
- ✅ Coding challenges completed
- ✅ Follow-up system established

### Month 9-12: Interviews and Offers
- ✅ Technical interviews scheduled
- ✅ Soft skills demonstrated
- ✅ Salary negotiation prepared
- ✅ Job offer received and evaluated

## Common Mistakes to Avoid

### Technical Mistakes:
- ❌ Skipping fundamentals for frameworks
- ❌ Not testing code before submission
- ❌ Ignoring code quality and best practices
- ❌ Not version controlling projects
- ❌ Copying code without understanding

### Job Search Mistakes:
- ❌ Applying to jobs you're not qualified for
- ❌ Not customizing applications
- ❌ Poor follow-up communication
- ❌ Not preparing for interviews
- ❌ Accepting the first offer without negotiation

### Mindset Mistakes:
- ❌ Comparing yourself to others
- ❌ Giving up after rejections
- ❌ Not seeking feedback
- ❌ Isolating yourself from the community
- ❌ Focusing only on salary

## Success Strategies That Work

### 1. Consistency Over Intensity
- Code every day, even if just 30 minutes
- Set realistic daily goals
- Track your progress
- Celebrate small wins

### 2. Build in Public
- Share your learning journey
- Write blog posts about your projects
- Create tutorial videos
- Engage with the developer community

### 3. Seek Feedback Actively
- Join code review communities
- Ask for portfolio feedback
- Practice interviews with peers
- Iterate based on feedback

### 4. Never Stop Learning
- Follow industry news and trends
- Take online courses
- Read technical blogs
- Experiment with new technologies

### 5. Focus on Problem-Solving
- Employers hire problem-solvers
- Demonstrate your thinking process
- Show how you approach challenges
- Highlight your debugging skills

## Your Action Plan: Start Today

### Week 1-2: Assessment and Planning
1. Evaluate your current skills honestly
2. Set specific, measurable goals
3. Create a learning schedule
4. Set up your development environment

### Week 3-4: Foundation Building
1. Complete HTML/CSS fundamentals
2. Start JavaScript basics
3. Create your first project
4. Set up version control

### Month 2-3: Skill Development
1. Choose your specialization
2. Build 2-3 portfolio projects
3. Start networking activities
4. Begin technical interview preparation

### Month 4-6: Job Search Preparation
1. Polish your resume and portfolio
2. Optimize your online presence
3. Practice interview skills
4. Research target companies

### Month 7+: Active Job Search
1. Apply to 5-10 jobs weekly
2. Follow up on applications
3. Prepare for interviews
4. Negotiate offers professionally

## Final Words of Encouragement

Landing your first developer job is challenging, but it's absolutely achievable. Remember:

- **Every expert was once a beginner**
- **Rejection is redirection, not failure**
- **Your unique background is an asset**
- **Consistency beats perfection**
- **The tech industry needs diverse perspectives**

You don't need to know everything to get started. You need to know enough to solve problems and demonstrate your ability to learn. Focus on building real projects, contributing to the community, and showing your passion for technology.

The journey from zero to hired isn't just about learning to code – it's about becoming a professional developer who can add value to a team. Embrace the process, stay persistent, and trust that your hard work will pay off.

Your first developer job is waiting for you. Now go build something amazing! 🚀
`;

const blogs = [
    {
        title: "Frontend Developer Roadmap 2025: Your Complete Guide to Modern Web Development",
        content: blogContent1,
        author_email: "sarah.mentor@example.com",
    },
    {
        title: "Choosing the Right Tech Stack in 2025: A Developer's Decision Guide",
        content: blogContent2,
        author_email: "alex.architect@example.com",
    },
    {
        title: "From Zero to Hired: A Realistic Guide to Landing Your First Developer Job",
        content: blogContent3,
        author_email: "jordan.career@example.com",
    },
];

async function seed() {
    for (const blog of blogs) {
        await db.insert(blogsTable).values(blog).execute();
    }

    console.log("Advice-focused developer blogs added to the database");
}

seed().catch((error) => {
    console.error("Error seeding database:", error);
});

// import { db } from "./index"; // Adjust import path as needed
// import { projectsTable } from "./schema"; // Adjust import path as needed

// const fakeProjects = [
//     {
//         name: "E-Commerce Platform",
//         description:
//             "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform supports multiple payment methods and provides real-time inventory management.",
//         summary: "Modern e-commerce platform with complete shopping experience",
//         image_url:
//             "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Task Management App",
//         description:
//             "A collaborative project management tool designed for teams. Built with Vue.js frontend and Express.js backend. Features include task creation, assignment, progress tracking, team collaboration, file sharing, and deadline notifications. Integrated with calendar systems and supports multiple project views.",
//         summary: "Team-focused task management with collaboration features",
//         image_url:
//             "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Weather Dashboard",
//         description:
//             "A responsive weather application that provides real-time weather data and forecasts. Built with React and integrated with multiple weather APIs. Features include location-based weather, 7-day forecasts, weather maps, severe weather alerts, and historical data visualization with interactive charts.",
//         summary: "Real-time weather data with forecasting and visualization",
//         image_url:
//             "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1594736797933-d0407ba7fe65?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Social Media Analytics",
//         description:
//             "A comprehensive analytics platform for social media management. Built with Python Django backend and React frontend. Tracks engagement metrics, audience demographics, content performance, and competitor analysis. Features automated reporting, sentiment analysis, and integration with major social platforms.",
//         summary: "Advanced social media analytics and reporting platform",
//         image_url:
//             "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Recipe Sharing Platform",
//         description:
//             "A community-driven recipe sharing website where users can upload, rate, and share recipes. Built with Next.js and Supabase. Features include user profiles, recipe collections, nutritional information, cooking timers, shopping lists, and social features like comments and favorites.",
//         summary: "Community platform for sharing and discovering recipes",
//         image_url:
//             "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Fitness Tracker",
//         description:
//             "A comprehensive fitness tracking application with workout planning and progress monitoring. Built with React Native for mobile and React for web. Features include workout routines, exercise library, progress photos, nutrition tracking, goal setting, and integration with wearable devices.",
//         summary:
//             "Complete fitness tracking with workout planning and progress monitoring",
//         image_url:
//             "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Learning Management System",
//         description:
//             "An educational platform for online courses and training programs. Built with Angular frontend and Node.js backend. Features include course creation, video streaming, quizzes, progress tracking, certificates, discussion forums, and integration with payment systems for course purchases.",
//         summary:
//             "Comprehensive online learning platform with course management",
//         image_url:
//             "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Real Estate Portal",
//         description:
//             "A property listing and management platform for real estate agents and buyers. Built with React and Node.js with MongoDB. Features include property listings, advanced search filters, virtual tours, mortgage calculators, agent profiles, and integrated messaging system between buyers and sellers.",
//         summary: "Full-featured real estate platform with property management",
//         image_url:
//             "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Inventory Management System",
//         description:
//             "A robust inventory management solution for businesses. Built with Vue.js frontend and Laravel backend. Features include stock tracking, automated reordering, barcode scanning, supplier management, sales analytics, and multi-location support. Includes mobile app for warehouse operations.",
//         summary: "Enterprise inventory management with automated tracking",
//         image_url:
//             "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
//         ],
//     },
//     {
//         name: "Event Planning Platform",
//         description:
//             "A comprehensive event management platform for planners and attendees. Built with React and Firebase. Features include event creation, ticket sales, attendee management, venue booking, vendor coordination, schedule management, and real-time event updates with mobile notifications.",
//         summary: "Complete event planning and management solution",
//         image_url:
//             "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
//         gallery: [
//             "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
//         ],
//     },
// ];

// async function seedProjects() {
//     try {
//         console.log("Starting to seed projects...");

//         // Insert fake projects
//         await db.insert(projectsTable).values(fakeProjects);

//         console.log(`Successfully seeded ${fakeProjects.length} projects!`);
//     } catch (error) {
//         console.error("Error seeding projects:", error);
//     }
// }

// // Run the seed function
// seedProjects();
