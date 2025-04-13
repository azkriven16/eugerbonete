import { TextAnimate } from "@/components/magicui/text-animate";
import Balancer from "react-wrap-balancer";
import { ShimmerButton } from "./magicui/shimmer-button";
import { BlurFade } from "./magicui/blur-fade";
import Three from "./3d";
import { Button } from "./ui/button";

export const Hero = () => {
    return (
        <section className="min-h-[65vh] p-4 flex flex-col items-center justify-center">
            {/* background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:hidden"></div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] hidden dark:block"></div>
            {/* background */}

            <div className="absolute top-0 left-0 md:left-[50%] right-0 bottom-[40%] md:bottom-0 md:block">
                <Three />
            </div>
            <div className="md:max-w-5xl space-y-5 md:space-y-6 mt-52 md:mt-0 md:mr-20">
                <Balancer>
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-2xl font-bold md:text-5xl lg:text-6xl/normal text-center md:text-left md:max-w-4xl font-poppins"
                    >
                        A developer that ♥ to "Ctrl + Alt + Create "
                    </TextAnimate>
                </Balancer>
                <TextAnimate
                    animation="blurInUp"
                    by="character"
                    once
                    className="font-indie-flower self-end text-xl md:text-3xl lg:text-4xl text-center md:text-left text-muted-foreground"
                >
                    Hey, I’m Euger, Web Developer & Designer
                </TextAnimate>
                <BlurFade
                    delay={0.25}
                    inView
                    className="flex gap-4 items-center justify-center md:justify-start"
                >
                    <Button variant="default" size="lg">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                            Contact me
                        </span>
                    </Button>
                    <Button variant="secondary" size="lg">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg">
                            See my work
                        </span>
                    </Button>
                </BlurFade>
            </div>
        </section>
    );
};
