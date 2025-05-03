import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { Email, Facebook, LinkedIn } from "./hero";

export const Contact = () => {
    return (
        <div className="flex flex-col gap-8 md:p-8 p-4">
            {socialLinks.map(({ href, label, icon, delay, name }, index) => (
                <ContactCard
                    key={index}
                    href={href}
                    label={label}
                    icon={icon}
                    delay={delay}
                    name={name}
                />
            ))}
        </div>
    );
};

function ContactCard({
    href,
    label,
    icon,
    delay,
    name,
}: {
    href: string;
    label: string;
    icon: JSX.Element;
    delay: number;
    name: string;
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay }}
        >
            {icon}{" "}
            <span className="font-bold text-lg primary-font">{label}</span>{" "}
            <span className="text-muted-foreground sansation-regular">
                @{name}
            </span>
        </motion.a>
    );
}

const socialLinks = [
    {
        href: "https://github.com/davidjohnsonellis",
        label: "GitHub",
        icon: <VscGithub className="size-7" />,
        delay: 0.1,
        name: "johnDoe",
    },
    {
        href: "mailto:your-email@example.com",
        label: "Email",
        icon: <Email className="size-7" />,
        delay: 0.2,
        name: "janeDoe",
    },
    {
        href: "https://facebook.com/davidjohnsonellis",
        label: "Facebook",
        icon: <Facebook className="size-7" />,
        delay: 0.3,
        name: "jimmyDoe",
    },
    {
        href: "https://facebook.com/davidjohnsonellis",
        label: "LinkedIn",
        icon: <LinkedIn className="size-7" />,
        delay: 0.3,
        name: "sarahDoe",
    },
];
