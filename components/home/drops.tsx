"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";

export default function DevDropFeature() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!email || !isValid) {
            toast.error("Please enter a valid email address.");
            return;
        }

        toast.success(`You're subscribed! Thank you! ${email}`);
        setEmail("");
    };

    return (
        <section className="flex flex-col max-w-3xl mx-auto p-4 my-10 gap-10 justify-between">
            <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
                    <Image
                        src="/me.png"
                        alt="Developer Workspace"
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-300 rounded-xl"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 md:w-1/2 flex flex-col justify-center gap-4">
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full w-fit">
                        Upcoming Drop
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                        Web Dev Kits & Workflow Tips
                    </h2>
                    <p className="text-muted-foreground text-base">
                        Get notified when new dev tools, guides, and UI kits
                        drop.
                    </p>

                    <div className="flex w-full items-center space-x-2">
                        <Input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button onClick={handleSubscribe}>Subscribe</Button>
                    </div>

                    <div className="pt-4">
                        <div className="text-sm text-muted-foreground mb-2 font-medium">
                            My Dev Blogs
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Button variant="secondary" size="sm">
                                Top 10 React Tips
                            </Button>
                            <Button variant="secondary" size="sm">
                                My VSCode Setup
                            </Button>
                            <Button variant="secondary" size="sm">
                                Frontend Starter Packs
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
