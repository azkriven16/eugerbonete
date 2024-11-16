import { socials } from "@/config/socials";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SocialLinks() {
    return (
        <div className="flex gap-x-5">
            <Button asChild variant="ghost" size="icon">
                <Link href={socials.facebook}>
                    <Facebook className="size-7" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href={socials.linkedin}>
                    <Linkedin className="size-7" />
                </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <Link href={socials.github}>
                    <Github className="size-7" />
                </Link>
            </Button>
        </div>
    );
}
