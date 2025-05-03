"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function AnimatedTabs() {
    return (
        <div className="w-full mx-auto rounded-xl mt-10">
            <Tabs defaultValue="projects" className="w-full">
                <TabsList className="grid grid-cols-4 my-8 w-fit bg-background">
                    <TabsTrigger value="projects">
                        <span>Projects</span>
                    </TabsTrigger>

                    <TabsTrigger value="about">
                        <span>About</span>
                    </TabsTrigger>

                    <TabsTrigger value="tech-stack">
                        <span>Tech-Stack</span>
                    </TabsTrigger>

                    <TabsTrigger value="connect">
                        <span>Connect</span>
                    </TabsTrigger>
                </TabsList>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <TabsContent value="projects">
                        <Projects />
                    </TabsContent>

                    <TabsContent value="about" className="space-y-4">
                        <About />
                    </TabsContent>

                    <TabsContent value="tech-stack" className="space-y-4">
                        <TechStack />
                    </TabsContent>

                    <TabsContent value="connect" className="space-y-4">
                        <Contact />
                    </TabsContent>
                </motion.div>
            </Tabs>
        </div>
    );
}
