import { motion } from "framer-motion";

export const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:p-8 p-4"
        >
            <motion.p
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base md:text-lg leading-relaxed mb-4 text-muted-foreground"
            >
                I'm{" "}
                <strong className="text-foreground">Euger Bonete Jr.</strong>, a
                <em className="italic text-foreground">
                    {" "}
                    full-stack developer
                </em>{" "}
                focused on crafting high-quality, scalable web apps. With a
                background in{" "}
                <strong className="text-foreground">Typescript</strong>,{" "}
                <strong className="text-foreground">Next.js</strong>, and
                <strong className="text-foreground"> Tailwind CSS</strong>, I
                love building clean interfaces and intuitive user experiences.
                I'm graduating college with a degree in Information Technology
                this 2025.
            </motion.p>

            <motion.p
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base md:text-lg leading-relaxed text-muted-foreground"
            >
                I started my coding journey in{" "}
                <strong className="text-foreground">2021</strong>, and since then, I've been
                honing my coding, skills, If you're interested,here is my
                <a href="" className="text-blue-500 font-bold hover:underline">
                {" "}resume{" "}
                </a>
                  and here are some
                <a href="" className="text-blue-500 font-bold hover:underline">
                {" "}certifications{" "}
                </a>
                that demonstrate my qualifications. When I'm not coding, you can find me{" "}
                <em>biking through the city</em>, <em>getting lost in a book</em>, or{" "}
                <em>competing with friends in online games</em>.
            </motion.p>
        </motion.section>
    );
};
