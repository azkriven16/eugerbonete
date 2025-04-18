import Link from "next/link";
import { TextAnimate } from "./magicui/text-animate";
import Balancer from "react-wrap-balancer";

const links = [
    {
        title: "Features",
        href: "#",
    },
    {
        title: "Solution",
        href: "#",
    },
    {
        title: "Customers",
        href: "#",
    },
    {
        title: "Pricing",
        href: "#",
    },
    {
        title: "Help",
        href: "#",
    },
    {
        title: "About",
        href: "#",
    },
];

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl flex flex-col items-center justify-center">
                <div className="flex flex-col gap-5">
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="font-indie-flower text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                    >
                        Let's keep in touch!
                    </TextAnimate>
                    <Balancer>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-2xl font-bold md:text-3xl lg:text-4xl font-poppins text-center"
                        >
                            You can contact me through the socials below !
                        </TextAnimate>
                    </Balancer>
                </div>
                <div className="my-20 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="text-muted-foreground hover:text-primary block"
                    >
                        <svg
                            className="size-9 md:size-12"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block"
                    >
                        <svg
                            className="size-9 md:size-12"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block"
                    >
                        <svg
                            className="size-9 md:size-12"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="text-muted-foreground hover:text-primary block"
                    >
                        <svg
                            className="size-9 md:size-12"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                            ></path>
                        </svg>
                    </Link>
                </div>
                <span className="text-sm md:text-2xl text-muted-foreground">
                    {" "}
                    © {new Date().getFullYear()} Euger Bonete Portfolio. Built
                    with 💘.
                </span>
            </div>
        </footer>
    );
}
