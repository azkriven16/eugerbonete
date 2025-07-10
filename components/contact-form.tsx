"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2, Mail, User, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        from_name: "",
        reply_to: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    // Initialize EmailJS (do this once when your app starts)
    // You can put this in a useEffect or in your app initialization
    // emailjs.init("YOUR_PUBLIC_KEY");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formData.from_name ||
            !formData.reply_to ||
            !formData.subject ||
            !formData.message
        ) {
            toast.error("Please fill in all fields", {
                description: "All fields are required to send your message.",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                "service_ifj2kzt", // Replace with your service ID
                "template_bwjjiau", // Replace with your template ID
                form.current!,
                "N8aNd63YGsF09jqLX" // Replace with your public key
            );

            console.log("SUCCESS!", result.status, result.text);

            toast.success("Message sent successfully!", {
                description:
                    "Thank you for your message. We'll get back to you soon.",
            });

            // Reset form
            setFormData({
                from_name: "",
                reply_to: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.log("FAILED...", error);
            toast.error("Error sending message", {
                description: "Please try again later or contact us directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full mx-auto">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                        <Mail className="h-6 w-6" />
                        Contact
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        ref={form}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="from_name"
                                    className="flex items-center gap-2"
                                >
                                    <User className="h-4 w-4" />
                                    Name
                                </Label>
                                <Input
                                    id="from_name"
                                    name="from_name"
                                    type="text"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    className="w-full"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="reply_to"
                                    className="flex items-center gap-2"
                                >
                                    <Mail className="h-4 w-4" />
                                    Email
                                </Label>
                                <Input
                                    id="reply_to"
                                    name="reply_to"
                                    type="email"
                                    value={formData.reply_to}
                                    onChange={handleChange}
                                    className="w-full"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full"
                                placeholder="What is this message about?"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="message"
                                className="flex items-center gap-2"
                            >
                                <MessageSquare className="h-4 w-4" />
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full min-h-[120px]"
                                placeholder="Tell us more about your inquiry..."
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
