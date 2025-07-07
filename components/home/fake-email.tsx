"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FakeEmailSubscription() {
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
        <div className="flex w-full items-center space-x-2">
            <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleSubscribe}>Subscribe</Button>
        </div>
    );
}
