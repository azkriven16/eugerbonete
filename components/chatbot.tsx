"use client";
import {
    Bot,
    BotIcon,
    ExternalLink,
    Loader2,
    Send,
    Sparkles,
    User,
    X,
} from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

// Types
interface Message {
    id: number;
    role: "user" | "assistant";
    content: string;
    isMarkdown?: boolean;
}

interface Project {
    name: string;
    description: string;
    tech: string;
    sourceCode: string;
    liveDemo: string;
}

interface Experience {
    title: string;
    company: string;
    period: string;
    resumeLink: string;
}

interface Skill {
    category: string;
    items: string[];
    certificationLink?: string;
}

interface GeminiResponse {
    candidates: Array<{
        content: {
            parts: Array<{
                text: string;
            }>;
        };
    }>;
}

// MDX Component for rendering markdown
const MDXContent: React.FC<{ content: string }> = ({ content }) => {
    const renderMarkdown = (text: string): JSX.Element => {
        // Split by lines and process each line
        const lines = text.split("\n");
        const elements: JSX.Element[] = [];

        lines.forEach((line, index) => {
            // Headers
            if (line.startsWith("### ")) {
                elements.push(
                    <h3
                        key={index}
                        className="text-lg font-semibold my-2 text-foreground"
                    >
                        {line.replace("### ", "")}
                    </h3>
                );
            } else if (line.startsWith("## ")) {
                elements.push(
                    <h2
                        key={index}
                        className="text-xl font-semibold my-3 text-foreground"
                    >
                        {line.replace("## ", "")}
                    </h2>
                );
            } else if (line.startsWith("# ")) {
                elements.push(
                    <h1
                        key={index}
                        className="text-2xl font-bold my-3 text-foreground"
                    >
                        {line.replace("# ", "")}
                    </h1>
                );
            }
            // List items
            else if (line.startsWith("* ")) {
                elements.push(
                    <div key={index} className="my-1 flex items-start gap-2">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span className="text-xs sm:text-sm">
                            {processInlineFormatting(line.replace("* ", ""))}
                        </span>
                    </div>
                );
            }
            // Links
            else if (line.includes("http")) {
                elements.push(
                    <div key={index} className="my-1">
                        {processLinks(line)}
                    </div>
                );
            }
            // Regular text
            else if (line.trim()) {
                elements.push(
                    <p
                        key={index}
                        className="my-1 text-xs sm:text-sm leading-relaxed"
                    >
                        {processInlineFormatting(line)}
                    </p>
                );
            }
        });

        return <div className="space-y-1">{elements}</div>;
    };

    const processInlineFormatting = (text: string): JSX.Element => {
        // Process **bold** text
        const boldRegex = /\*\*(.*?)\*\*/g;
        const parts = text.split(boldRegex);

        return (
            <span>
                {parts.map((part, index) =>
                    index % 2 === 1 ? (
                        <strong
                            key={index}
                            className="font-semibold text-foreground"
                        >
                            {part}
                        </strong>
                    ) : (
                        <span key={index}>{processLinks(part)}</span>
                    )
                )}
            </span>
        );
    };

    const processLinks = (text: string): JSX.Element => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = text.split(urlRegex);

        return (
            <span className="flex items-center gap-1 flex-wrap">
                {parts.map((part, index) => {
                    if (urlRegex.test(part)) {
                        return (
                            <a
                                key={index}
                                href={part}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 underline text-xs sm:text-sm"
                            >
                                {part.length > 35
                                    ? `${part.substring(0, 35)}...`
                                    : part}
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        );
                    }
                    return <span key={index}>{part}</span>;
                })}
            </span>
        );
    };

    return renderMarkdown(content);
};

const PortfolioChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const API_KEY: string = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;

    // Portfolio data with links
    const portfolioData = {
        experience: [
            {
                title: "Senior Full Stack Developer",
                company: "TechCorp",
                period: "2022-Present",
                resumeLink:
                    "https://drive.google.com/file/d/your-resume-link/view",
            },
            {
                title: "Frontend Developer",
                company: "StartupXYZ",
                period: "2020-2022",
                resumeLink:
                    "https://drive.google.com/file/d/your-resume-link/view",
            },
            {
                title: "Junior Developer",
                company: "WebAgency",
                period: "2018-2020",
                resumeLink:
                    "https://drive.google.com/file/d/your-resume-link/view",
            },
        ] as Experience[],

        projects: [
            {
                name: "E-commerce Platform",
                description:
                    "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
                tech: "React, Node.js, PostgreSQL, Stripe API",
                sourceCode:
                    "https://github.com/yourusername/ecommerce-platform",
                liveDemo: "https://your-ecommerce-demo.vercel.app",
            },
            {
                name: "Task Management App",
                description:
                    "Collaborative task management application with real-time updates",
                tech: "Vue.js, Express, MongoDB, Socket.io",
                sourceCode: "https://github.com/yourusername/task-manager",
                liveDemo: "https://your-task-manager.netlify.app",
            },
            {
                name: "Real-time Chat Application",
                description:
                    "WebSocket-based chat app with rooms and file sharing",
                tech: "Socket.io, React, Express, Redis",
                sourceCode: "https://github.com/yourusername/chat-app",
                liveDemo: "https://your-chat-app.herokuapp.com",
            },
            {
                name: "Weather Dashboard",
                description:
                    "Interactive weather dashboard with location-based forecasts",
                tech: "React, OpenWeather API, Chart.js",
                sourceCode: "https://github.com/yourusername/weather-dashboard",
                liveDemo: "https://your-weather-dashboard.vercel.app",
            },
        ] as Project[],

        skills: [
            {
                category: "Cloud Certifications",
                items: [
                    "AWS Solutions Architect",
                    "Google Cloud Professional Developer",
                ],
                certificationLink: "https://www.credly.com/users/your-profile",
            },
            {
                category: "Frontend Technologies",
                items: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Vue.js",
                ],
                certificationLink:
                    "https://www.freecodecamp.org/certification/your-profile",
            },
            {
                category: "Backend Technologies",
                items: [
                    "Node.js",
                    "Express",
                    "Python",
                    "Django",
                    "PostgreSQL",
                    "MongoDB",
                ],
            },
            {
                category: "DevOps & Tools",
                items: [
                    "Docker",
                    "Kubernetes",
                    "Git",
                    "VS Code",
                    "Figma",
                    "Postman",
                ],
            },
        ] as Skill[],
    };

    const createPortfolioContext = (): string => {
        return `You are a concise portfolio assistant. Keep responses SHORT and to the point. Use markdown formatting.

EXPERIENCE:
- Senior Full Stack Developer at TechCorp (2022-Present)
- Frontend Developer at StartupXYZ (2020-2022) 
- Junior Developer at WebAgency (2018-2020)

PROJECTS:
- E-commerce Platform: Full-stack solution (React, Node.js, PostgreSQL, Stripe API)
- Task Management App: Collaborative app with real-time updates (Vue.js, Express, MongoDB, Socket.io)
- Real-time Chat Application: WebSocket-based chat with rooms and file sharing (Socket.io, React, Express, Redis)
- Weather Dashboard: Interactive dashboard with location-based forecasts (React, OpenWeather API, Chart.js)

SKILLS:
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Vue.js
- Backend: Node.js, Express, Python, Django, PostgreSQL, MongoDB
- Cloud: AWS, Docker, Kubernetes
- Certifications: AWS Solutions Architect, Google Cloud Professional Developer

RULES:
- Keep responses under 150 words
- Use markdown bullet points for lists
- Be direct and helpful
- When asked about projects, experience, or skills, mention you can provide links
- Use ** for bold text in project names
- Format as: * **Project Name:** Description (Tech stack)`;
    };

    const formatResponseWithLinks = (content: string): string => {
        let formattedContent = content;

        // Add project links when projects are mentioned
        if (/project/gi.test(formattedContent)) {
            const mentionedProjects = portfolioData.projects.filter((project) =>
                new RegExp(project.name, "gi").test(formattedContent)
            );

            if (mentionedProjects.length > 0) {
                formattedContent += "\n\n**🔗 Project Links:**";
                mentionedProjects.forEach((project) => {
                    formattedContent += `\n* **${project.name}:** [Source](${project.sourceCode}) | [Demo](${project.liveDemo})`;
                });
            } else if (
                mentionedProjects.length === 0 &&
                /project/gi.test(formattedContent)
            ) {
                formattedContent += "\n\n**🔗 All Project Links:**";
                portfolioData.projects.forEach((project) => {
                    formattedContent += `\n* **${project.name}:** [Source](${project.sourceCode}) | [Demo](${project.liveDemo})`;
                });
            }
        }

        // Add resume link when experience is mentioned
        if (/experience|resume|work/gi.test(formattedContent)) {
            formattedContent += `\n\n**📄 Resume:** ${portfolioData.experience[0].resumeLink}`;
        }

        // Add certification links when skills are mentioned
        if (/skill|certification|aws|google cloud/gi.test(formattedContent)) {
            const certSkills = portfolioData.skills.filter(
                (skill) => skill.certificationLink
            );
            if (certSkills.length > 0) {
                formattedContent += "\n\n**🏆 Certifications:**";
                certSkills.forEach((skill) => {
                    formattedContent += `\n* **${skill.category}:** ${skill.certificationLink}`;
                });
            }
        }

        return formattedContent;
    };

    const scrollToBottom = useCallback((): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    role: "assistant",
                    content: `Hi! I'm your portfolio assistant. Ask me about **projects, experience, or skills!**`,
                    id: Date.now(),
                    isMarkdown: true,
                },
            ]);
        }
    }, [isOpen, messages.length]);

    const handleSubmit = async (
        e: React.FormEvent | React.MouseEvent
    ): Promise<void> => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            role: "user",
            content: input,
            id: Date.now(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const fullPrompt = `${createPortfolioContext()}\n\nUser question: ${input}`;

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: fullPrompt,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: GeminiResponse = await response.json();
            const rawContent = data.candidates[0].content.parts[0].text;
            const enhancedContent = formatResponseWithLinks(rawContent);

            const botMessage: Message = {
                role: "assistant",
                content: enhancedContent,
                id: Date.now(),
                isMarkdown: true,
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            const errorMessage: Message = {
                role: "assistant",
                content: "Sorry, I encountered an error. Please try again.",
                id: Date.now(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleChat = (): void => {
        setIsOpen(!isOpen);
    };

    const handleQuickQuestion = useCallback((question: string): void => {
        setInput(question);
    }, []);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>): void => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
            }
        },
        []
    );

    const handleOverlayClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>): void => {
            if (e.target === e.currentTarget && window.innerWidth >= 768) {
                setIsOpen(false);
            }
        },
        []
    );

    const quickQuestions: string[] = [
        "Show me your projects",
        "What's your experience?",
        "Tell me about your skills",
        "Can I see your resume?",
    ];

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <div className="relative">
                        <BotIcon className="h-6 w-6" />
                        <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
                    </div>
                )}
            </button>

            {/* Chat Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center md:p-4"
                    onClick={handleOverlayClick}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="chat-title"
                >
                    <div className="bg-background border rounded-lg shadow-2xl w-full max-w-2xl h-full max-h-[100vh] md:max-h-[90vh] flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-full">
                                    <Bot className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h2
                                        id="chat-title"
                                        className="text-base font-semibold"
                                    >
                                        Portfolio Assistant
                                    </h2>
                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                        Quick answers with links
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="p-2 hover:bg-muted rounded-full transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Quick Questions */}
                        {messages.length <= 1 && (
                            <div className="p-4 border-b bg-muted/20">
                                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                                    Quick questions:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {quickQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                handleQuickQuestion(question)
                                            }
                                            className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full transition-colors"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`flex items-start gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
                                    >
                                        <div
                                            className={`p-2 rounded-full flex-shrink-0 ${
                                                message.role === "user"
                                                    ? "bg-primary"
                                                    : "bg-muted"
                                            }`}
                                        >
                                            {message.role === "user" ? (
                                                <User className="h-4 w-4 text-primary-foreground" />
                                            ) : (
                                                <Bot className="h-4 w-4 text-muted-foreground" />
                                            )}
                                        </div>
                                        <div
                                            className={`px-4 py-3 rounded-lg ${
                                                message.role === "user"
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-muted text-muted-foreground"
                                            }`}
                                        >
                                            {message.role === "assistant" &&
                                            message.isMarkdown ? (
                                                <MDXContent
                                                    content={message.content}
                                                />
                                            ) : (
                                                <div className="text-xs sm:text-sm leading-relaxed">
                                                    {message.content}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-muted rounded-full">
                                            <Bot className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <div className="bg-muted px-4 py-3 rounded-lg">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                <span className="text-xs sm:text-sm">
                                                    Thinking...
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about projects, experience, skills..."
                                    className="flex-1 px-4 py-2 bg-background border border-input rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent placeholder:text-muted-foreground"
                                    disabled={isLoading}
                                    onKeyDown={handleKeyDown}
                                    maxLength={200}
                                />
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading || !input.trim()}
                                    className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Send message"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PortfolioChatbot;
