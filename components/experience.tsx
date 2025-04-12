import Balancer from "react-wrap-balancer";
import { TextAnimate } from "./magicui/text-animate";
import Image from "next/image";

export function Experience() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 text-center">
                <TextAnimate
                    animation="blurInUp"
                    by="character"
                    once
                    className="font-indie-flower self-start text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                >
                    Work Experience
                </TextAnimate>
                <Balancer>
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-3xl font-bold md:text-4xl lg:text-5xl text-center max-w-4xl font-poppins"
                    >
                        Some companies I've worked with.
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
            </div>

            <div className="space-y-12 mt-20 flex flex-col items-center justify-center">
                <div className="flex gap-10 items-center justify-center">
                    <p className="text-lg font-semibold font-poppins text-muted-foreground">
                        2025 - Present
                    </p>
                    <h3 className="text-lg font-semibold">
                        Finishing up my degree @
                    </h3>
                    <div>
                        <Image
                            src="/school.jpg"
                            alt=""
                            width={150}
                            height={150}
                            className="dark:rounded-full"
                        />
                    </div>
                </div>

                <div className="flex gap-10 items-center justify-center">
                    <p className="text-lg font-semibold font-poppins text-muted-foreground">
                        2023 - 2024
                    </p>
                    <h3 className="text-lg font-semibold">
                        Part-time Software Engineer at
                    </h3>
                    <div>
                        <Image
                            src="/rocketshyft.webp"
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                </div>

                <div className="flex gap-10 items-center justify-center">
                    <p className="text-lg font-semibold font-poppins text-muted-foreground">
                        2021 - 2022
                    </p>
                    <h3 className="text-lg font-semibold">
                        Software Engineer Intern at
                    </h3>
                    <div>
                        <Image
                            src="/digipay.webp"
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
