"use client";

import React, { useEffect, useState } from "react";
import Loader from "./loader";

interface PreloaderProps {
    children: React.ReactNode;
    delay?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({
    children,
    delay = 700,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [skipPreload, setSkipPreload] = useState(false);

    useEffect(() => {
        // Use a unique key based on the current page URL
        const pageKey = `preloaderLastTriggered_${window.location.pathname}`;
        const lastTriggered = localStorage.getItem(pageKey);
        const now = Date.now();

        // Check if 5 minutes have passed
        if (lastTriggered && now - parseInt(lastTriggered) < 5 * 60 * 1000) {
            setSkipPreload(true);
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(true);
                localStorage.setItem(pageKey, now.toString());
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [delay]);

    if (!isVisible && !skipPreload) {
        return <Loader />;
    }

    return <>{children}</>;
};
