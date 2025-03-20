import Heading from "@/components/heading";
import Section from "@/components/section";
import AboutSection from "./about";
import CertificationsSection from "./certifications";
import Spotlight from "./spotlight";
import StatsSection from "./stats";
import { TechStack } from "./tech-stack";
import { Hero12 } from "./hero";

export default function HeroSection() {
    return (
        <>
            <Spotlight />
            <Section>
                <Hero12 />
                <AboutSection />
                <TechStack />
                <CertificationsSection />
                <StatsSection />
            </Section>
        </>
    );
}
