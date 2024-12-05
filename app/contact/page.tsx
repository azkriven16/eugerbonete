import SmoothScroll from "@/components/smooth-scroll";
import { Contact } from "./_components/contact";
import { Preloader } from "@/components/preloader";

export default function ContactPage() {
    return (
        <Preloader>
            <SmoothScroll>
                <main className="space-y-20 py-10">
                    <Contact />
                </main>
            </SmoothScroll>
        </Preloader>
    );
}
