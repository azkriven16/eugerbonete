import ContactForm from "@/components/contact-form";
import FAQ from "@/components/faq";

export default function Contact() {
    return (
        <section className="w-full max-w-3xl mx-auto p-4 my-10 gap-10 min-h-screen">
            <h1 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Get in touch 🌸
            </h1>
            <p className="font-light leading-tight tracking-tight mt-2 mb-10">
                <span className="font-semibold text-muted-foreground">
                    I'd love to hear from you.
                </span>
            </p>

            <ContactForm />
            <FAQ />
        </section>
    );
}
