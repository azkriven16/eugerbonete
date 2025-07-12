import FAQ from "@/components/faq";
import { Badge } from "@/components/home/about";
import TechStack from "@/components/home/stack";

export default function Stack() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 mb-10 min-h-screen">
            <TechStack />
               {/* Technical Skills Section */}
            <div className="w-full bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-neutral-700 mt-6">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                    Technical Skills
                </h2>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                            Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge href="#react">React</Badge>
                            <Badge href="#nextjs">Next.js</Badge>
                            <Badge href="#typescript">TypeScript</Badge>
                            <Badge href="#javascript">JavaScript</Badge>
                            <Badge href="#tailwind">Tailwind CSS</Badge>
                            <Badge href="#css">CSS</Badge>
                            <Badge href="#html">HTML</Badge>
                            <Badge href="#framer">Framer Motion</Badge>
                            <Badge href="#radix">Radix UI</Badge>
                            <Badge href="#shadcn">shadcn/ui</Badge>
                            <Badge href="#axios">Axios</Badge>
                            <Badge href="#reactquery">React Query</Badge>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                            Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge href="#nodejs">Node.js</Badge>
                            <Badge href="#express">Express</Badge>
                            <Badge href="#prisma">Prisma ORM</Badge>
                            <Badge href="#mongodb">MongoDB</Badge>
                            <Badge href="#firebase">Firebase</Badge>
                            <Badge href="#trpc">tRPC</Badge>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                            Tools & Development
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge href="#git">Git</Badge>
                            <Badge href="#github">GitHub</Badge>
                            <Badge href="#vscode">VS Code</Badge>
                            <Badge href="#figma">Figma</Badge>
                            <Badge href="#docker">Docker</Badge>
                            <Badge href="#postman">Postman</Badge>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
        </section>
    );
}
