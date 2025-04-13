import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonial() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <blockquote>
                        <p className="text-lg font-medium sm:text-xl md:text-3xl">
                            "He was professional, detail-oriented, and delivered
                            high-quality work on time. The final product was
                            polished and exceeded expectations."
                        </p>

                        <div className="mt-12 flex items-center justify-center gap-6">
                            <cite className="text-xl md:text-3xl">
                                <span className="font-indie-flower"> — </span>
                                Mom."
                            </cite>
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
