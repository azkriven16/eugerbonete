import { Commands } from "./commands";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
    return (
        <div className="flex items-center justify-between w-full">
            <Commands />
            <ModeToggle/>
        </div>
    );
};
