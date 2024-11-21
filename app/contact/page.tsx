import { Contact } from "@/components/contact";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div>
            <Contact number="01" />

            <div className="space-y-5">
                <div className="space-x-10 text-2xl">
                    <Link
                        target="_blank"
                        href="https://www.facebook.com/euger.bonete.9"
                        className="group inline-flex items-center space-x-2"
                    >
                        <span>Facebook</span>
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-2" />
                    </Link>

                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/euger-bonete/"
                        className="group inline-flex items-center space-x-2"
                    >
                        <span>LinkedIn</span>
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-2" />
                    </Link>

                    <Link
                        target="_blank"
                        href="https://github.com/azkriven16"
                        className="group inline-flex items-center space-x-2"
                    >
                        <span>Github</span>
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-2" />
                    </Link>
                    <Link
                        target="_blank"
                        href="mailto:azkriven16"
                        className="group inline-flex items-center space-x-2"
                    >
                        <span>Email</span>
                        <ExternalLink className="opacity-0 group-hover:opacity-100 transform transition-all duration-300 group-hover:translate-x-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
