import Balancer from "react-wrap-balancer";
import { TextAnimate } from "./magicui/text-animate";

export function TechStack() {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col gap-5 text-center">
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="font-indie-flower self-end text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                    >
                        My tech stack
                    </TextAnimate>
                    <Balancer>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-3xl font-bold md:text-4xl lg:text-5xl text-center max-w-4xl font-poppins"
                        >
                            Here are some of the tech I use.
                        </TextAnimate>
                    </Balancer>
                    <Balancer>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-muted-foreground text-2xl max-w-4xl text-center"
                        >
                            Always looking to learn more and stay up to date
                            with the latest trends and technologies.
                        </TextAnimate>
                    </Balancer>
                </div>
                <div className="mx-auto mt-12 space-y-16">
                    {/* Frontend Technologies */}
                    <div className="space-y-6">
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="font-indie-flower self-end text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                        >
                            Frontend
                        </TextAnimate>
                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=html"
                                alt="HTML5"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=css"
                                alt="CSS3"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=js"
                                alt="JavaScript"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=ts"
                                alt="TypeScript"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=react"
                                alt="React"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=nextjs"
                                alt="Next.js"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=tailwindcss"
                                alt="Tailwind CSS"
                            />
                        </div>
                    </div>

                    {/* Backend Technologies */}
                    <div className="space-y-6">
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="font-indie-flower self-end text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                        >
                            Backend
                        </TextAnimate>
                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=nodejs"
                                alt="Node.js"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=bun"
                                alt="Bun"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=postgresql"
                                alt="PostgreSQL"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=mongodb"
                                alt="MongoDB"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=firebase"
                                alt="Firebase"
                            />

                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=prisma"
                                alt="Prisma"
                            />
                        </div>
                    </div>

                    {/* Development Tools */}
                    <div className="space-y-6">
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="font-indie-flower self-end text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                        >
                            Development Tools
                        </TextAnimate>

                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=vscode"
                                alt="VS Code"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=git"
                                alt="Git"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=github"
                                alt="GitHub"
                            />
                            <img
                                className="size-14 w-fit"
                                src="https://skillicons.dev/icons?i=docker"
                                alt="Docker"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
