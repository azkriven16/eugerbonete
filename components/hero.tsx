"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
export const Hero = () => {
    return (
        <section className="space-y-6 w-full">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </motion.div>
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl font-bold primary-font tracking-wide"
            >
                Hey, I'm Euger Bonete.
            </motion.h1>
            <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="leading-relaxed md:text-2xl sansation-bold tracking-wide text-muted-foreground"
            >
                I'm a Web Designer, Music Artist & Photographer.
                <br /> I spend most of time thinking about Tea.
            </motion.p>
            <Socials />
        </section>
    );
};

function Socials() {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4"
        >
            <TooltipProvider>
                {socialLinks.map((social, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: social.delay,
                                }}
                            >
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    {social.icon}
                                </Link>
                            </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{social.label}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div>
                            <ModeToggle />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Toggle theme</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </motion.div>
    );
}

const Facebook = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <g id="Layer_1"></g>
            <g id="Layer_2">
                <g>
                    <path
                        fill="#1877F2"
                        d="M50,2.5c-58.892,1.725-64.898,84.363-7.46,95l0,0h0H50h7.46l0,0C114.911,86.853,108.879,4.219,50,2.5z"
                    ></path>
                    <path
                        fill="#F1F1F1"
                        d="M57.46,64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779,1.85-7.463,7.781-7.463h6.021
              c0,0,0-11.761,0-11.761c-12.894-2.323-28.385-1.616-28.722,17.66V50.29H30.417v13.814H42.54c0,0,0,33.395,0,33.396H50h7.46l0,0h0
              V64.104z"
                    ></path>
                </g>
            </g>
        </g>
    </svg>
);

const LinkedIn = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <g id="Layer_1"></g>
            <g id="Layer_2">
                <g>
                    <path
                        fill="#0077B5"
                        d="M90.479,2.513c-14.611-0.041-68.502,0.028-80.958,0C5.645,2.513,2.5,5.562,2.5,9.317v81.381 
                 c0,3.756,3.145,6.802,7.021,6.802h80.958c3.878,0,7.021-3.046,7.021-6.803V9.317C97.5,5.562,94.357,2.513,90.479,2.513z"
                    />
                    <g fill="#F1F1F1">
                        <path
                            d="M53.453,82.005c0,0,0-23.878,0-23.879c-0.139-4.388,2.484-8.483,7.762-8.667 
                   c5.143,0,7.201,3.921,7.201,9.67v22.875h14.214V57.485c0-13.135-7.012-19.247-16.365-19.247
                   c-7.668,0-11.036,4.285-12.907,7.204l0.095-6.2H39.239c0.185,4.012-0.001,42.763-0.001,42.763L53.453,82.005z"
                        />
                        <path d="M31.37,63.461v-24.22H17.154v42.763h14.217C31.368,77.514,31.376,67.888,31.37,63.461z" />
                        <path
                            d="M24.265,33.404c4.956,0,8.042-3.284,8.042-7.387c-0.041-9.897-16.004-9.787-15.991-0.001 
                   C16.305,30.151,19.476,33.455,24.265,33.404z"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

const Email = ({ className = "" }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={className}
    >
        <g>
            <path
                fill="#B5332A"
                d="M95.861,24.752c0-7.801-8.824-12.254-15.003-7.579L75.014,21.6v0.013L50,40.548L24.986,21.6l-5.831-4.415 
        c-6.192-4.675-15.016-0.221-15.016,7.579v8.413v45.241c0,3.49,2.799,6.316,6.257,6.316h14.59V48.961L50,67.896l25.014-18.935 
        v-0.013l0.029-0.022l-0.029,0.035v35.773h14.59c3.457,0,6.257-2.826,6.257-6.316V33.178l-0.038,0.015l0.038-0.028V24.752z"
            />
            <path
                fill="#4E85EB"
                d="M10.396,84.734h14.59V48.961L4.139,33.178v45.241C4.139,81.908,6.938,84.734,10.396,84.734z"
            />
            <path
                fill="#58A45C"
                d="M75.014,84.734h14.59c3.457,0,6.257-2.826,6.257-6.316V33.178L75.014,48.961V84.734z"
            />
            <path
                fill="#F2BC42"
                d="M75.014,21.6v27.348l20.847-15.783v-8.413c0-7.801-8.824-12.254-15.003-7.579L75.014,21.6z"
            />
            <path
                fill="#D85040"
                d="M24.986,48.961V21.6L50,40.548l25.014-18.935v27.348L50,67.896L24.986,48.961z"
            />
            <path
                fill="#B5332A"
                d="M4.139,24.765v8.413l20.847,15.783V21.6l-5.831-4.415C12.963,12.511,4.139,16.964,4.139,24.765z"
            />
        </g>
    </svg>
);

const socialLinks = [
    {
        href: "https://github.com/davidjohnsonellis",
        label: "GitHub",
        icon: <VscGithub className="size-7" />,
        delay: 0.1,
    },
    {
        href: "mailto:your-email@example.com",
        label: "Email",
        icon: <Email className="size-7" />,
        delay: 0.2,
    },
    {
        href: "https://facebook.com/davidjohnsonellis",
        label: "Facebook",
        icon: <Facebook className="size-7" />,
        delay: 0.3,
    },
    {
        href: "https://facebook.com/davidjohnsonellis",
        label: "LinkedIn",
        icon: <LinkedIn className="size-7" />,
        delay: 0.3,
    },
];
