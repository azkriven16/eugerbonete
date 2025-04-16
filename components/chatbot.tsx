// app/components/chat/ChatBot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, User, Bot, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { developerProfile } from "@/lib/developer-profile";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface Message {
    id: string;
    content: string;
    role: "user" | "assistant";
    timestamp: Date;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            content: `👋 Hi there! I'm ${developerProfile.name}'s AI assistant. How can I help you learn about ${developerProfile.name}'s development experience, tech stack, or projects?`,
            role: "assistant",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const chatCardRef = useRef<HTMLDivElement>(null);

    const suggestedPrompts = [
        "What's your tech stack?",
        "Years of experience?",
        "Tell me about your projects",
        "What are your favorite tools?",
        "Education background",
        "Previous work history",
    ];

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Handle click outside to close chat
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                chatCardRef.current &&
                !chatCardRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const sendMessage = async (content: string) => {
        if (!content.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content,
            role: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: content,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to get response");
            }

            const data = await response.json();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: data.response,
                role: "assistant",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error processing chat:", error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                content:
                    "Sorry, I couldn't process your request. Please try again.",
                role: "assistant",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    // Custom renderer components for ReactMarkdown
    const markdownComponents = {
        img: ({ node, ...props }:any) => (
            <img
                {...props}
                className="rounded-lg my-3 max-w-full shadow-md"
                alt={props.alt || "Project image"}
            />
        ),
        a: ({ node, ...props }:any) => (
            <a
                {...props}
                className="text-blue-500 hover:text-blue-700 underline inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.children}
                <ExternalLink size={14} className="inline" />
            </a>
        ),
        code: ({ node, inline, className, children, ...props }:any) => (
            <code
                className={`${
                    inline
                        ? "bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm"
                        : "block bg-gray-200 dark:bg-gray-800 p-3 rounded-md text-sm overflow-x-auto my-2"
                } ${className || ""} font-mono`}
                {...props}
            >
                {children}
            </code>
        ),
        h2: ({ node, ...props }:any) => (
            <h2
                {...props}
                className="text-lg font-semibold mt-4 mb-2 pb-1 border-b border-gray-200 dark:border-gray-700"
            />
        ),
        p: ({ node, ...props }:any) => <p {...props} className="mb-3" />,
        ul: ({ node, ...props }:any) => (
            <ul {...props} className="pl-5 mb-3 list-disc space-y-1" />
        ),
        li: ({ node, ...props }:any) => <li {...props} className="mb-1" />,
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen ? (
                <div ref={chatCardRef}>
                    <Card className="w-full sm:w-[450px] max-w-[95vw] shadow-xl border-gray-200 dark:border-gray-800 overflow-hidden">
                        {/* Header */}
                        <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="bg-white/20 p-1.5 rounded-full">
                                    <MessageCircle size={18} />
                                </div>
                                <span className="font-medium">
                                    Developer Assistant
                                </span>
                            </div>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20 rounded-full"
                                onClick={toggleChat}
                            >
                                <X size={16} />
                            </Button>
                        </div>

                        {/* Messages */}
                        <ScrollArea className="h-[400px] sm:h-[450px]">
                            <CardContent className="p-4">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`mb-5 ${
                                            message.role === "user"
                                                ? "ml-auto"
                                                : "mr-auto"
                                        }`}
                                    >
                                        <div
                                            className={`flex items-start gap-3 ${
                                                message.role === "user"
                                                    ? "flex-row-reverse"
                                                    : ""
                                            }`}
                                        >
                                            <div
                                                className={`flex-shrink-0 p-2 rounded-full shadow-sm ${
                                                    message.role === "user"
                                                        ? "bg-primary text-primary-foreground"
                                                        : "bg-card text-primary dark:text-primary border border-border"
                                                }`}
                                            >
                                                {message.role === "user" ? (
                                                    <User size={16} />
                                                ) : (
                                                    <Bot size={16} />
                                                )}
                                            </div>
                                            <div
                                                className={`${
                                                    message.role === "user"
                                                        ? "bg-primary text-primary-foreground"
                                                        : "bg-card border border-border text-card-foreground"
                                                } p-4 rounded-lg shadow-sm max-w-[85%]`}
                                            >
                                                <div className="prose prose-sm dark:prose-invert max-w-none">
                                                    <ReactMarkdown
                                                        components={
                                                            markdownComponents
                                                        }
                                                    >
                                                        {message.content}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Loading indicator */}
                                {isLoading && (
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="flex-shrink-0 p-2 rounded-full shadow-sm bg-card text-primary border border-border">
                                            <Bot size={16} />
                                        </div>
                                        <div className="bg-card border border-border py-3 px-4 rounded-lg shadow-sm">
                                            <div className="flex gap-1.5">
                                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                <span className="h-2 w-2 bg-primary rounded-full animate-bounce"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={bottomRef} />
                            </CardContent>
                        </ScrollArea>

                        {/* Suggested prompts and input */}
                        <div className="border-t border-border p-4 bg-muted/50">
                            {/* Scrollable suggested prompts with 2 per row */}
                            <ScrollArea className="h-24 mb-3 px-1 pb-1">
                                <div className="grid grid-cols-2 gap-2">
                                    {suggestedPrompts.map((prompt) => (
                                        <Button
                                            key={prompt}
                                            variant="outline"
                                            className="h-auto py-2 text-sm border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 whitespace-normal text-left justify-start"
                                            onClick={() => sendMessage(prompt)}
                                        >
                                            {prompt}
                                        </Button>
                                    ))}
                                </div>
                            </ScrollArea>

                            <form
                                onSubmit={handleSubmit}
                                className="flex gap-2"
                            >
                                <Input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    disabled={isLoading}
                                    className="flex-1 border-input focus-visible:ring-primary"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={isLoading || !input.trim()}
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                >
                                    <Send size={16} />
                                </Button>
                            </form>
                        </div>
                    </Card>
                </div>
            ) : (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={toggleChat}
                            className="size-12 lg:size-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground p-0 flex items-center justify-center"
                        >
                            <MessageCircle className="size-6 lg:size-8" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        You can chat with my ai for any inquiries
                    </TooltipContent>
                </Tooltip>
            )}
        </div>
    );
}
