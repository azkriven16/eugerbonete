"use client";
import { containerVariants, itemVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useEffect, useState } from "react";

export const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-5 md:space-y-10 flex flex-col items-center justify-center py-24"
        >
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-background 
    bg-[linear-gradient(to_right,#a8a8a8_1px,transparent_1px),linear-gradient(to_bottom,#a8a8a8_1px,transparent_1px)] 
    bg-[size:2rem_2rem] 
    dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] 
    dark:bg-[size:2rem_2rem]"
            >
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-background"></div>
            </div>

            <div className="relative">
                {/* First heading */}
                <motion.h1
                    className="text-3xl md:text-7xl font-bold font-sans mx-auto text-center uppercase"
                    variants={itemVariants}
                >
                    Design work,
                    <br />
                    the efficient way
                </motion.h1>

                {/* SVG for emphasis */}
                <motion.svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 323.057 323.057"
                    xmlSpace="preserve"
                    className="absolute top-0 -left-10 -translate-x-20 translate-y-16 fill-primary"
                    width="100"
                    height="100"
                >
                    <g>
                        <path d="M281.442,256.312c-47.124,59.364-139.536,44.676-160.956-29.376c-1.224-3.672-1.836-7.956-2.448-11.628 c49.572-11.016,97.92-47.124,102.204-90.576c3.672-39.168-36.108-50.796-62.424-28.764 c-31.212,26.316-53.244,64.872-55.08,105.875c-31.824,4.284-63.036-4.284-80.172-35.496 c-28.764-52.631,9.792-123.624,61.2-144.432c5.508-1.836,3.06-10.404-2.448-8.568C10.326,33.544-26.394,132.688,21.954,191.439 c18.972,22.645,49.572,29.988,81.396,26.316c4.284,41.616,36.72,74.664,75.275,87.516c44.676,14.688,85.68-6.731,111.996-41.616 C294.906,258.147,285.725,251.416,281.442,256.312z M144.354,132.688c9.792-13.464,22.644-28.764,39.168-34.272 c15.911-5.508,21.42,16.524,22.031,26.316c0.612,12.24-7.956,23.256-15.912,31.824c-16.523,18.971-44.063,35.496-72.215,42.839 C119.262,175.527,130.89,152.272,144.354,132.688z"></path>
                        <path d="M315.713,233.668c-17.136,0-34.884,1.224-51.408,5.508c-6.731,1.836-3.672,11.016,3.061,9.792 c13.464-2.448,27.54-1.836,41.004-1.224c-0.612,7.955-1.224,16.523-2.448,24.479c-1.224,6.12-5.508,15.3-1.836,21.42 c1.836,3.061,4.896,3.061,7.956,1.836c7.344-3.06,7.344-15.912,8.568-22.644c1.836-11.017,2.447-21.42,2.447-32.437 C323.057,236.728,319.385,233.668,315.713,233.668z"></path>
                    </g>
                </motion.svg>

                <motion.svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 323.057 323.057"
                    xmlSpace="preserve"
                    className="absolute -top-16 md:-top-10 right-10 translate-x-20 translate-y-8 rotate-90 fill-primary"
                    width="60"
                    height="60"
                >
                    <g>
                        <path d="M281.442,256.312c-47.124,59.364-139.536,44.676-160.956-29.376c-1.224-3.672-1.836-7.956-2.448-11.628 c49.572-11.016,97.92-47.124,102.204-90.576c3.672-39.168-36.108-50.796-62.424-28.764 c-31.212,26.316-53.244,64.872-55.08,105.875c-31.824,4.284-63.036-4.284-80.172-35.496 c-28.764-52.631,9.792-123.624,61.2-144.432c5.508-1.836,3.06-10.404-2.448-8.568C10.326,33.544-26.394,132.688,21.954,191.439 c18.972,22.645,49.572,29.988,81.396,26.316c4.284,41.616,36.72,74.664,75.275,87.516c44.676,14.688,85.68-6.731,111.996-41.616 C294.906,258.147,285.725,251.416,281.442,256.312z M144.354,132.688c9.792-13.464,22.644-28.764,39.168-34.272 c15.911-5.508,21.42,16.524,22.031,26.316c0.612,12.24-7.956,23.256-15.912,31.824c-16.523,18.971-44.063,35.496-72.215,42.839 C119.262,175.527,130.89,152.272,144.354,132.688z"></path>
                        <path d="M315.713,233.668c-17.136,0-34.884,1.224-51.408,5.508c-6.731,1.836-3.672,11.016,3.061,9.792 c13.464-2.448,27.54-1.836,41.004-1.224c-0.612,7.955-1.224,16.523-2.448,24.479c-1.224,6.12-5.508,15.3-1.836,21.42 c1.836,3.061,4.896,3.061,7.956,1.836c7.344-3.06,7.344-15.912,8.568-22.644c1.836-11.017,2.447-21.42,2.447-32.437 C323.057,236.728,319.385,233.668,315.713,233.668z"></path>
                    </g>
                </motion.svg>
            </div>

            <motion.p
                className="text-base md:text-xl leading-loose text-muted-foreground max-w-2xl mx-auto text-center"
                variants={itemVariants}
            >
                Hi. I'm Euger Bonete, a web developer based in Iloilo,
                Philippines
            </motion.p>

            <motion.div variants={itemVariants}>
                <Tooltip>
                    <TooltipTrigger>
                        <RainbowButton className="gap-3">
                            <Sparkles fill="" />
                            Let's build something
                        </RainbowButton>
                    </TooltipTrigger>
                    <TooltipContent
                        className="bg-secondary text-secondary-foreground"
                        side="bottom"
                    >
                        Lets talk 😉
                    </TooltipContent>
                </Tooltip>
            </motion.div>
        </motion.section>
    );
};
