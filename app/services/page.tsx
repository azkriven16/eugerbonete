import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Layout, Lightbulb, Server } from "lucide-react";

export default function Services() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
                Services 👀
            </h1>
            <p className="text-lg font-light leading-tight tracking-tight mt-2 mb-10">
                <span className="font-semibold text-muted-foreground">
                    Here's what i can do for you.
                </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="border p-6 rounded-xl shadow-lg flex flex-col justify-between"
                    >
                        <div>
                            <div className="mb-4">
                                <service.icon size={36} />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                    Frequently Asked Questions
                </h3>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            What services do you offer?
                        </AccordionTrigger>
                        <AccordionContent>
                            I offer front-end and full-stack web development,
                            UI/UX design, and web consulting services.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            How long have you been in the industry?
                        </AccordionTrigger>
                        <AccordionContent>
                            I have been working in web development for over 5
                            years, delivering high-quality projects to clients
                            globally.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            What technologies do you specialize in?
                        </AccordionTrigger>
                        <AccordionContent>
                            I specialize in modern JavaScript frameworks like
                            React and Next.js, as well as CSS frameworks such as
                            Tailwind CSS.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            How can I contact you for a project?
                        </AccordionTrigger>
                        <AccordionContent>
                            Feel free to reach out through the contact form on
                            my website or email me directly at
                            myemail@example.com.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

const servicesData = [
    {
        icon: Code,
        title: "Front-End Development",
        description:
            "Crafting intuitive and responsive user interfaces using modern frameworks and best practices to deliver exceptional user experiences.",
    },
    {
        icon: Server,
        title: "Full-Stack Development",
        description:
            "Building robust and scalable web applications from database design to API development and seamless front-end integration.",
    },
    {
        icon: Layout,
        title: "UI/UX Design",
        description:
            "Designing user-centric interfaces and experiences, focusing on usability, accessibility, and visual appeal through wireframing and prototyping.",
    },
    {
        icon: Lightbulb,
        title: "Web Consulting & Strategy",
        description:
            "Providing expert guidance on web technology, project architecture, performance optimization, and digital strategy to achieve business goals.",
    },
];
