import Link from "next/link";
import { Button } from "./ui/button";

export const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t-2 pt-10">
                {/* Strategy Column */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">
                            01.
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight">
                            SOCIAL LINKS
                        </h3>
                    </div>
                    <ul className="text-lg">
                        <li>
                            <LinkItem
                                external
                                href="https://www.facebook.com/euger.bonete.9"
                                text="Facebook"
                            />
                        </li>
                        <li>
                            <LinkItem
                                external
                                href="https://github.com/azkriven16"
                                text="Github"
                            />
                        </li>
                        <li>
                            <LinkItem
                                external
                                href="https://www.linkedin.com/in/euger-bonete/"
                                text="LinkedIn"
                            />
                        </li>
                        <li>
                            <LinkItem
                                external
                                href="mailto:azkriven16"
                                text="azkriven16@gmail.com"
                            />
                        </li>
                    </ul>
                </div>

                {/* Design Column */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">
                            02.
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight">
                            NAVIGATION
                        </h3>
                    </div>
                    <ul className="text-lg">
                        <li>
                            <LinkItem href="/" text="Home" />
                        </li>
                        <li>
                            <LinkItem href="/projects" text="Case Studies" />
                        </li>
                        <li>
                            <LinkItem href="/experience" text="Experience" />
                        </li>
                        <li>
                            <LinkItem href="/about" text="About Me" />
                        </li>
                    </ul>
                </div>

                {/* Development Column */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">
                            03.
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight">
                            PROJECTS
                        </h3>
                    </div>
                    <ul className="text-lg">
                        <li>
                            <LinkItem href="/about" text="Nisuboard" />
                        </li>
                        <li>
                            <LinkItem href="/about" text="Budget Tracker" />
                        </li>
                        <li>
                            <LinkItem href="/about" text="Anikumo" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-20">
                <p>Built and DESIGNED BY ME</p>
            </div>
        </footer>
    );
};

function LinkItem({
    href,
    text,
    external = false,
}: {
    href: string;
    text: string;
    external?: boolean;
}) {
    return (
        <Button asChild variant="linkHover2" className="text-lg px-0">
            <Link
                href={href}
                target={external ? "_blank" : "_self"}
                className="h-full"
            >
                {text}
            </Link>
        </Button>
    );
}
