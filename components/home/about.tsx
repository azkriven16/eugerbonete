import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className, href }) => {
    const baseClasses = `inline-flex items-center rounded-full border px-2.5 py-0.5 text- transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200`;
    const interactiveClasses = `hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer`;

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} ${interactiveClasses} ${className}`}
            >
                {children}
            </a>
        );
    }

    return <span className={`${baseClasses} ${className}`}>{children}</span>;
};

interface IconButtonProps {
    children: React.ReactNode;
    className?: string;
    href: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
    children,
    className,
    href,
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 w-8 bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 ${className}`}
        >
            {children}
        </a>
    );
};

export default function About() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 font-sans">
            <div className="w-full bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-neutral-700 mt-10">
                <p className="text-xs sm:text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    Hi, I’m{" "}
                    <span className="inline-flex items-center">
                        <img
                            src="https://github.com/azkriven16.png"
                            alt="profile picture"
                            className="mr-1 size-10 rounded-full"
                        />
                    </span>
                    <strong className="uppercase">Euger Bonete</strong>, a
                    software developer focused on building modern web
                    applications with <Badge href="#nextjs">Next.js</Badge>,{" "}
                    <Badge href="#tailwind">Tailwind CSS</Badge>, and{" "}
                    <Badge href="#react">React</Badge>. I also use{" "}
                    <Badge href="#drizzle">Drizzle</Badge> and{" "}
                    <Badge href="#neondb">Neon DB</Badge> to craft fast,
                    scalable backends.
                </p>

                <p className="text-xs sm:text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed mt-6">
                    I’m passionate about building clean, user-friendly
                    interfaces and writing maintainable code. Whether it's
                    frontend design or backend logic, I aim to create seamless
                    digital experiences.
                </p>

                <p className="mt-6 text-xs sm:text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    Connect with me on{" "}
                    <IconButton href="https://linkedin.com/in/yourprofile">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </IconButton>{" "}
                    to stay in touch professionally,
                    <br />
                    or view my{" "}
                    <IconButton href="https://example.com/resume.pdf">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-file-text"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" x2="8" y1="13" y2="13" />
                            <line x1="16" x2="8" y1="17" y2="17" />
                            <line x1="10" x2="8" y1="9" y2="9" />
                        </svg>
                    </IconButton>{" "}
                    to see my resume and past work.
                </p>
            </div>
        </section>
    );
}
