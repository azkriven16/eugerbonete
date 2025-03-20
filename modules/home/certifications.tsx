import { CheckCircle } from "lucide-react";

export default function CertificationsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">
                        Trusted by top companies
                    </h2>
                    <p>
                        Lyra is evolving to be more than just the models. It
                        supports an entire to the APIs and platforms helping
                        developers and businesses innovate.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        "GDPR Compliant",
                        "SOC 2 Type II",
                        "HIPAA Compliant",
                        "ISO 27001 Certified",
                        "PCI DSS Certified",
                        "FedRAMP Authorized",
                    ].map((title, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-green-500" />
                                <h3 className="text-sm font-medium">{title}</h3>
                            </div>
                            <p className="text-sm">
                                It supports an entire helping developers and
                                businesses.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
