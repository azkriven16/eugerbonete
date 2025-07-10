import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <div className="mt-10">
            <h3 className="text-xl text-muted-foreground font-semibold leading-tight tracking-tight">
                Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        What services do you offer?
                    </AccordionTrigger>
                    <AccordionContent>
                        I offer front-end and full-stack web development, UI/UX
                        design, and web consulting services.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        How long have you been in the industry?
                    </AccordionTrigger>
                    <AccordionContent>
                        I have been working in web development for over 5 years,
                        delivering high-quality projects to clients globally.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What technologies do you specialize in?
                    </AccordionTrigger>
                    <AccordionContent>
                        I specialize in modern JavaScript frameworks like React
                        and Next.js, as well as CSS frameworks such as Tailwind
                        CSS.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        How can I contact you for a project?
                    </AccordionTrigger>
                    <AccordionContent>
                        Feel free to reach out through the contact form on my
                        website or email me directly at myemail@example.com.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
