import Balancer from "react-wrap-balancer";
import { TextAnimate } from "./magicui/text-animate";

export function TechStack() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl p-4">
                <div className="flex flex-col gap-5">
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="font-indie-flower text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                    >
                        My tech stack
                    </TextAnimate>
                    <Balancer>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-2xl font-bold md:text-3xl lg:text-4xl font-poppins text-center"
                        >
                            "The more you know, the more there is to learn."
                        </TextAnimate>
                    </Balancer>
                </div>
                <div className="mx-auto mt-12 md:mt-18 space-y-16">
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
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=html"
                                alt="HTML5"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=css"
                                alt="CSS3"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=js"
                                alt="JavaScript"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=ts"
                                alt="TypeScript"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=react"
                                alt="React"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=nextjs"
                                alt="Next.js"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
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
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=nodejs"
                                alt="Node.js"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=bun"
                                alt="Bun"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=postgresql"
                                alt="PostgreSQL"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=mongodb"
                                alt="MongoDB"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=firebase"
                                alt="Firebase"
                            />

                            <img
                                className="size-8 md:size-14 w-fit"
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
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=vscode"
                                alt="VS Code"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=git"
                                alt="Git"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
                                src="https://skillicons.dev/icons?i=github"
                                alt="GitHub"
                            />
                            <img
                                className="size-8 md:size-14 w-fit"
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
