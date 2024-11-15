import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const Works = () => {
    return (
        <section>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl md:text-4xl font-sans border-b">
                        Works
                    </CardTitle>
                </CardHeader>
                <CardContent>some stuff</CardContent>
            </Card>
        </section>
    );
};
