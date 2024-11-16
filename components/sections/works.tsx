import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { works } from "@/config/works";
import { WorkCard } from "../work-card";

export const Works = () => {
    return (
        <section>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl md:text-4xl font-sans border-b">
                        Works
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-20">
                    {works.map((work) => (
                        <WorkCard {...work} key={work.slug} />
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};
