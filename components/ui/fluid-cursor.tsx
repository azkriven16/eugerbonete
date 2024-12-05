"use client";
import { useEffect } from "react";

import fluidCursor from "@/hooks/fluid-cursor";

const FluidCursor = () => {
    useEffect(() => {
        fluidCursor();
    }, []);

    return (
        <div className="absolute top-0 left-0 z-2">
            <canvas id="fluid" className="w-screen h-screen" />
        </div>
    );
};
export default FluidCursor;
