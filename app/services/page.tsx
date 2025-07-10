import FAQ from "@/components/faq";
import { Code, Layout, Lightbulb, Server } from "lucide-react";

export default function Services() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Services 🌺
            </h1>
            <p className="font-light leading-tight tracking-tight mt-2 mb-10">
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
                            <h2 className="text-lg font-semibold mb-2">
                                {service.title}
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <FAQ />
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
