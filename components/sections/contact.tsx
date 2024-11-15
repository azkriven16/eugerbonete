import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const Contact = () => {
    return (
        <section>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl md:text-4xl font-sans border-b pb-5">
                        Contact
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-20">
                        <div>
                            <p className="text-3xl md:text-7xl">
                                Let's work together
                            </p>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-base md:text-lg text-muted-foreground">
                                I am fueled by new challenges and cutting-edge
                                projects. If you need a committed and passionate
                                digital designer to enhance your vision, look no
                                further. Let's join forces to create memorable
                                experiences that resonate and leave a lasting
                                impression. Get in touch, and let's start this
                                thrilling adventure together!
                            </p>
                            <p className="underline text-xl md:text-3xl mt-5">
                                azkriven16@gmail.com
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};
