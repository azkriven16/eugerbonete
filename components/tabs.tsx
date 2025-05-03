"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AnimatedTabs() {
    const [activeTab, setActiveTab] = useState("projects");

    const handleTabChange = (value: any) => {
        setActiveTab(value);
    };

    return (
        <div className="w-full mx-auto rounded-xl mt-10">
            <Tabs
                defaultValue="projects"
                className="w-full"
                onValueChange={handleTabChange}
            >
                <TabsList className="grid grid-cols-4 my-8 w-fit bg-background">
                    <TabsTrigger
                        value="projects"
                        className="flex items-center justify-center gap-2"
                    >
                        <span>Projects</span>
                    </TabsTrigger>

                    <TabsTrigger
                        value="services"
                        className="flex items-center justify-center gap-2"
                    >
                        <span>Services</span>
                    </TabsTrigger>

                    <TabsTrigger
                        value="tech-stack"
                        className="flex items-center justify-center gap-2"
                    >
                        <span>Tech-Stack</span>
                    </TabsTrigger>

                    <TabsTrigger
                        value="connect"
                        className="flex items-center justify-center gap-2"
                    >
                        <span>Connect</span>
                    </TabsTrigger>
                </TabsList>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <TabsContent value="projects" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Featured Projects</CardTitle>
                                <CardDescription>
                                    Explore some of my recent work.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[1, 2, 3, 4].map((item) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: item * 0.1,
                                            }}
                                            className="bg-muted rounded-lg p-4"
                                        >
                                            <h3 className="font-medium">
                                                Project {item}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                A brief description of this
                                                amazing project.
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline">
                                    View All Projects
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="services" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Services</CardTitle>
                                <CardDescription>
                                    Professional solutions for your needs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <motion.div
                                    className="space-y-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ staggerChildren: 0.1 }}
                                >
                                    {[
                                        "Web Development",
                                        "UI/UX Design",
                                        "Mobile Applications",
                                        "Consulting",
                                    ].map((service, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                            }}
                                            className="flex items-center p-3 border rounded-lg"
                                        >
                                            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3">
                                                <span className="text-muted-foreground font-bold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-medium">
                                                    {service}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Professional{" "}
                                                    {service.toLowerCase()}{" "}
                                                    services.
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="tech-stack" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Technology Stack</CardTitle>
                                <CardDescription>
                                    Tools and technologies we work with.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        "React",
                                        "Next.js",
                                        "Tailwind CSS",
                                        "Node.js",
                                        "TypeScript",
                                        "Framer Motion",
                                    ].map((tech, index) => (
                                        <motion.div
                                            key={tech}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                            }}
                                            className="bg-muted p-4 rounded-lg flex flex-col items-center text-center"
                                        >
                                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-2"></div>
                                            <h3 className="font-medium">
                                                {tech}
                                            </h3>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="connect" className="space-y-4">
                        Contact
                    </TabsContent>
                </motion.div>
            </Tabs>
        </div>
    );
}
