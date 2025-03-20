export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">
                        Tailus UI in numbers
                    </h2>
                    <p>
                        I'm a software engineer with a passion for building
                        high-quality software. Here are some numbers that
                        represent my work.
                    </p>
                </div>

                <div className="grid gap-0.5 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">+1000</div>
                        <p>Hours of coding</p>
                    </div>
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">+20</div>
                        <p>Repositories created</p>
                    </div>
                    <div className="bg-muted rounded-(--radius) space-y-4 py-12">
                        <div className="text-5xl font-bold">+100</div>
                        <p>Commits made</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
