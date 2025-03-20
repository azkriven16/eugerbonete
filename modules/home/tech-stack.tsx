import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export const TechStack = () => {
    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Tech Stack</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)] grid grid-cols-5 gap-8">
                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/html.svg"
                                alt="Html Logo"
                                height="20"
                                width="auto"
                            />
                            <p className="text-sm mt-2">HTML</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/css.svg"
                                alt="CSS Logo"
                                height="20"
                                width="auto"
                            />
                            <p className="text-sm mt-2">CSS</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/javascript.svg"
                                alt="Javascript Logo"
                                height="20"
                                width="auto"
                            />
                            <p className="text-sm mt-2">JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/typescript.svg"
                                alt="Typescript Logo"
                                height="20"
                                width="auto"
                            />
                            <p className="text-sm mt-2">TypeScript</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/react.svg"
                                alt="Reactjs Logo"
                                height="20"
                                width="auto"
                            />
                            <p className="text-sm mt-2">React</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/nextjs.svg"
                                alt="NextJS Logo"
                                height="20"
                                width="auto"
                            />
                            <p className="text-sm mt-2">Next.js</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/tailwind.svg"
                                alt="Tailwind CSS Logo"
                                height="16"
                                width="auto"
                            />
                            <p className="text-sm mt-2">Tailwind CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/vite.svg"
                                alt="Vite Logo"
                                height="16"
                                width="auto"
                            />
                            <p className="text-sm mt-2">Vite</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/nextjs.svg"
                                alt="Prisma Logo"
                                height="20"
                                width="auto"
                            />
                            <p className="text-sm mt-2">Prisma</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                className="mx-auto h-10 w-fit"
                                src="/techstack/react-query.svg"
                                alt="React Query Logo"
                                height="16"
                                width="auto"
                            />
                            <p className="text-sm mt-2">React Query</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
