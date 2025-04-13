import Balancer from "react-wrap-balancer";
import { TextAnimate } from "./magicui/text-animate";
import Image from "next/image";
import Link from "next/link";

export function Experience() {
    return (
        <section className="max-w-5xl mx-auto py-16 p-4">
            <div className="flex flex-col gap-5">
                <TextAnimate
                    animation="blurInUp"
                    by="character"
                    once
                    className="font-indie-flower text-2xl md:text-3xl lg:text-4xl text-center text-muted-foreground"
                >
                    Timeline
                </TextAnimate>
                <Balancer>
                    <TextAnimate
                        animation="blurInUp"
                        by="character"
                        once
                        className="text-2xl font-bold md:text-3xl lg:text-4xl font-poppins text-center"
                    >
                        "Progress is made not by the first step, but by the step
                        that follows."
                    </TextAnimate>
                </Balancer>
            </div>

            <div className="space-y-12 mt-20 flex flex-col items-center justify-center">
                <div className="flex gap-10 items-center justify-between w-full">
                    <p className="text-xs md:text-lg font-semibold font-poppins text-muted-foreground">
                        2025 - Present
                    </p>
                    <h3 className="text-xs md:text-lg font-semibold">
                        Finishing up my degree at
                    </h3>
                    <Link
                        href="https://www.google.com/search?q=Northern+Iloilo+State+University&rlz=1C1FKPE_enPH1132PH1132&oq=northern+iloilo+state+university&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIMCAEQLhhDGIAEGIoFMg0IAhAAGJECGIAEGIoFMhMIAxAuGK8BGMcBGJECGIAEGIoFMg0IBBAuGK8BGMcBGIAEMgcIBRAAGIAEMgwIBhAAGBQYhwIYgAQyDQgHEC4YrwEYxwEYgAQyDQgIEC4YrwEYxwEYgAQyBwgJEAAYgATSAQgxMDc0ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-lg font-semibold text-blue-500 hover:underline"
                    >
                        Northern Iloilo State University
                    </Link>
                </div>

                <div className="flex gap-10 items-center justify-between w-full">
                    <p className="text-xs md:text-lg font-semibold font-poppins text-muted-foreground">
                        2023 - 2024
                    </p>
                    <h3 className="text-xs md:text-lg font-semibold">
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

                <div className="flex gap-10 items-center justify-between w-full">
                    <p className="text-xs md:text-lg font-semibold font-poppins text-muted-foreground">
                        2021 - 2022
                    </p>
                    <h3 className="text-xs md:text-lg font-semibold">
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
