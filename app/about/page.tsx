import { Badge, IconButton } from "@/components/home/about";
import DevDropFeature from "@/components/home/drops";

export default function AboutPage() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                About Me 👨
            </h1>
            <p className="font-light leading-tight tracking-tight mt-2 mb-10">
                <span className="font-semibold text-muted-foreground">
                    Selected clients projects from the past years.
                </span>
            </p>
            <div className="w-full bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-neutral-700 mt-10">
                <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
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

                <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed mt-6">
                    I’m passionate about creating user-friendly interfaces and
                    maintainable code. Whether it's frontend or backend, I
                    strive for seamless experiences. I <strong>love</strong>{" "}
                    ambitious projects and <em>collaborating</em> with talented
                    individuals. <span className="italic">I value</span>{" "}
                    <strong>quality</strong> and{" "}
                    <span className="underline">usability</span>. I have
                    completed my education in Information Technology and have
                    worked as a software developer, web developer, and intern at
                    various companies. I <strong>pride</strong> myself on being{" "}
                    <em>reliable</em>, <span className="italic">proactive</span>
                    , and <strong>results-driven</strong>. I{" "}
                    <span className="underline">love</span> to{" "}
                    <strong>learn</strong> and <em>improve</em> my skills.
                </p>

                <p className="mt-6 text-lg md:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    Connect with me on{" "}
                    <IconButton href="https://www.linkedin.com/in/euger-bonete/">
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
                    <IconButton href="http://eugerbonete.vercel.app/resume.pdf">
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

            <DevDropFeature />
        </section>
    );
}
