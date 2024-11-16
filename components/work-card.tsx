import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { sectionVariants } from "@/lib/animations";
import { Badge } from "./ui/badge";

interface WorkCardProps {
    title: string;
    slug: string;
    href: string;
    img: string;
    img_mobile: string;
    source: string;
    category: string[];
    description: string;
}

export const WorkCard = (data: WorkCardProps) => {
    const { title, category } = data;
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <Card className="">
                <CardContent className="border">
                    <Image
                        src="/projects/nisuboard.png"
                        alt={title}
                        width={1000}
                        height={1000}
                        className="aspect-video object-contain"
                    />
                </CardContent>
                <CardFooter className="flex-col md:flex-row items-start justify-between">
                    <CardTitle>{title.toUpperCase()}</CardTitle>
                    <div>
                        {category.map((data) => (
                            <Badge
                                key={data}
                                className="mr-1 mt-1 text-base"
                                variant="outline"
                            >
                                {data}
                            </Badge>
                        ))}{" "}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
};
