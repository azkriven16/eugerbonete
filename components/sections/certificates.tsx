import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Certificates() {
    const certificates = [
        {
            title: "JavaScript",
            description: "JavaScript Certification",
            logo: "/testdome.svg",
            href: "https://www.testdome.com/certificates/530156ebb39f43c5a407bb157b414413",
            logoAlt: "TestDome Logo",
        },
        {
            title: "TypeScript",
            description: "TypeScript Certification",
            logo: "/testdome.svg",
            href: "https://www.testdome.com/certificates/b42958b8c828498782f72c304e0f7d24",
            logoAlt: "TestDome Logo",
        },
        {
            title: "React",
            description: "React Certification",
            logo: "/testdome.svg",
            href: "https://www.testdome.com/certificates/da2507e9432941068913931a9ce1dc47",
            logoAlt: "TestDome Logo",
        },
        {
            title: "Internship",
            description: "Internship Certification",
            logo: "/digipay.png",
            href: "https://eugerbonete.vercel.app/internship.pdf",
            logoAlt: "Internship Logo",
        },
    ];

    return (
        <section className="min-h-[30rem]">
            <h2 className="text-md font-semibold text-center mb-5 uppercase">
                My certifications from various places
            </h2>
            <div className="grid gap-4 md:grid-cols-2 px-4 md:px-6">
                {certificates.map((certificate) => (
                    <Link
                        key={certificate.title}
                        href={certificate.href}
                        className="group transition-colors"
                        target="_blank"
                    >
                        <Card className="relative overflow-hidden border bg-background p-6 transition-colors hover:bg-accent">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="relative size-28 overflow-hidden rounded-full">
                                        <Image
                                            src={certificate.logo}
                                            alt={certificate.logoAlt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-xl">
                                            {certificate.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {certificate.description}
                                        </CardDescription>
                                    </CardHeader>
                                </div>
                                <ArrowRight
                                    className="h-6 w-6 transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
