import LatestMusic from "@/components/latest-music";

export default async function Music() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Music
            </h1>
            <p className="font-light leading-tight tracking-tight mt-2 mb-10">
                <span className="font-semibold text-muted-foreground">
                    Music created for your long coding sessions.
                </span>
            </p>
            <LatestMusic />
        </section>
    );
}
