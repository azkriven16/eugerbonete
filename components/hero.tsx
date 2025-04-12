import { TextAnimate } from "@/components/magicui/text-animate";
import Balancer from "react-wrap-balancer";
import { ShimmerButton } from "./magicui/shimmer-button";
import { BlurFade } from "./magicui/blur-fade";

export const Hero = () => {
    return (
        <section className="min-h-screen p-4 flex flex-col items-center justify-center font-poppins">
            <div className="flex flex-col justify-center items-center gap-5">
                <TextAnimate
                    animation="blurInUp"
                    by="character"
                    once
                    className="font-indie-flower self-end text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                >
                    Kamusta' ka
                </TextAnimate>
                <Balancer>
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-4xl font-bold md:text-5xl lg:text-6xl text-center max-w-4xl font-poppins"
                    >
                        Hey, I’m Euger, Web Developer & Designer
                    </TextAnimate>
                </Balancer>

                <Balancer>
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-muted-foreground text-2xl max-w-4xl text-center"
                    >
                        Crafting seamless experiences and bold visuals. High
                        school student by day, creative thinker, and aspiring
                        innovator by night.
                    </TextAnimate>
                </Balancer>
                <BlurFade delay={0.25} inView>
                    <ShimmerButton
                        shimmerSize="0.2em"
                        className="shadow-2xl h-16 w-56"
                    >
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Get in touch 👋
                        </span>
                    </ShimmerButton>
                </BlurFade>
            </div>
        </section>
    );
};
