import { Code, Pencil, Sparkles } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";
import Balancer from "react-wrap-balancer";

export function Cta() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="flex flex-col gap-5 text-center">
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="font-indie-flower self-start text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                    >
                        What can I do for you?
                    </TextAnimate>
                    <Balancer>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-3xl font-bold md:text-4xl lg:text-5xl text-center max-w-4xl font-poppins"
                        >
                            If you hire me.
                        </TextAnimate>
                    </Balancer>
                    <Balancer>
                        <TextAnimate
                            animation="blurInUp"
                            by="character"
                            once
                            className="text-muted-foreground text-2xl max-w-4xl text-center"
                        >
                            I can help you with your web development needs.
                        </TextAnimate>
                    </Balancer>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Code className="size-4" />
                            <h3 className="text-sm font-medium">
                                Frontend Development
                            </h3>
                        </div>
                        <p className="text-sm">
                            Creating responsive and interactive web interfaces.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />
                            <h3 className="text-sm font-medium">
                                UI/UX Design
                            </h3>
                        </div>
                        <p className="text-sm">
                            Crafting user-friendly and visually appealing
                            designs.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">
                                Backend Integration
                            </h3>
                        </div>
                        <p className="text-sm">
                            Integrating backend services to enhance
                            functionality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
