import React from "./logos/react";
import ShadcnUi from "./logos/shadcn-ui";
import Tailwind from "./logos/tailwind";
import TypeScript from "./logos/typescript";
import Logo from "@/components/ui/logo";

export default function Logos() {
    return (
        <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
            <h2 className="text-md font-semibold text-center mb-5 uppercase">
                This portfolio is built with
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <Logo image={React} name="React" />
                <Logo image={TypeScript} name="TypeScript" />
                <Logo image={ShadcnUi} name="Shadcn/ui" />
                <Logo image={Tailwind} name="Tailwind" />
            </div>
        </div>
    );
}
