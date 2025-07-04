import React from "react";

// Define the interface for Badge component props
interface BadgeProps {
    children: React.ReactNode;
    className?: string; // className is optional
    href?: string; // href is optional, makes the badge clickable
}

// This is a basic Badge component. In a real Shadcn UI setup,
// you would import it directly if you've added it to your project.
// For this example, we'll define a simple one.
const Badge: React.FC<BadgeProps> = ({ children, className, href }) => {
    const baseClasses = `inline-flex items-center rounded-full border px-2.5 py-0.5 text- transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200`;
    const interactiveClasses = `hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer`; // Added hover effects and cursor

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

// Define the interface for IconButton component props
interface IconButtonProps {
    children: React.ReactNode;
    className?: string; // className is optional
    href: string; // href is required
}

// You might also have a Button component from Shadcn UI,
// but for the social links, a simple styled <a> tag will suffice
// given the visual in the image.
const IconButton: React.FC<IconButtonProps> = ({
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

// The About component currently has no props, so we can use React.FC without a generic type,
// or explicitly define an empty interface if props were expected in the future.
export default function About() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 font-sans">
            <div className="w-full bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-neutral-700">
                <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    I'm{" "}
                    <span className="inline-flex items-center">
                        <img
                            src="https://github.com/shadcn.png"
                            alt="profile picture"
                            className="mr-1 size-10 rounded-full" // Added rounded-full for the image
                        />
                    </span>
                    JENNA , a designer merging design with{" "}
                    <Badge href="#generative-ai">Generative AI</Badge> to create
                    new experiences. I craft{" "}
                    <Badge href="#products">Products</Badge> and regularly share
                    my learnings as <Badge href="#insights">Insights</Badge> by
                    writing about my discoveries in AI.
                </p>

                <p className="mt-6 text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    You can find me on{" "}
                    <IconButton href="https://x.com">
                        {/* Placeholder for X icon (formerly Twitter) */}
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
                            className="lucide lucide-x"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </IconButton>{" "}
                    where I share daily thoughts,
                    <br />
                    and on{" "}
                    <IconButton href="https://example.com/portfolio">
                        {/* Placeholder for another icon, e.g., portfolio or Instagram */}
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
                            className="lucide lucide-circle"
                        >
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </IconButton>{" "}
                    about my visual experiments.
                </p>
            </div>
        </section>
    );
}
