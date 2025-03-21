import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <Button className={cn("uppercase", className)}>Jr</Button>{" "}
            <span className="text-lg font-semibold">Portfolio</span>
        </div>
    );
};
