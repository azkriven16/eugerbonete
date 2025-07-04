"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SiFacebook, SiGmail, SiX } from "react-icons/si";

export default function Footer() {
    const [iloiloTime, setIloiloTime] = useState("");
    const [status, setStatus] = useState({ text: "", emoji: "" });
    const [email, setEmail] = useState(""); // State for email input - kept for consistency, though not used in UI

    useEffect(() => {
        const updateTimeAndStatus = () => {
            const now = new Date(); // Get the user's local date and time

            // Calculate UTC milliseconds from the local date object
            const utcMs = now.getTime() + now.getTimezoneOffset() * 60 * 1000;

            // Iloilo is UTC+8. Add 8 hours in milliseconds to the UTC milliseconds.
            const iloiloOffsetMs = 8 * 60 * 60 * 1000;
            const iloiloMs = utcMs + iloiloOffsetMs;

            // Create a new Date object representing the current time in Iloilo
            const iloiloDate = new Date(iloiloMs);

            const iloiloHour = iloiloDate.getHours();
            const iloiloMinute = iloiloDate.getMinutes();

            // Format the time for display (e.g., 6:56 PM)
            const ampm = iloiloHour >= 12 ? "PM" : "AM";
            const displayHour = iloiloHour % 12 === 0 ? 12 : iloiloHour % 12;
            const displayMinute =
                iloiloMinute < 10 ? `0${iloiloMinute}` : iloiloMinute;
            setIloiloTime(`${displayHour}:${displayMinute} ${ampm}`);

            // Determine status based on Iloilo hour
            if (iloiloHour >= 22 || iloiloHour < 7) {
                // 10 PM - 6:59 AM
                setStatus({ text: "Sleeping", emoji: "💤" });
            } else if (iloiloHour >= 7 && iloiloHour < 18) {
                // 7 AM - 5:59 PM
                setStatus({ text: "Working", emoji: "🧑‍💻" });
            } else {
                // 6 PM - 9:59 PM
                setStatus({ text: "Relaxing", emoji: "☕" });
            }
        };

        // Update immediately on mount
        updateTimeAndStatus();

        // Update every minute to keep the time current
        const intervalId = setInterval(updateTimeAndStatus, 60 * 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
        <footer>
       <div className="w-full max-w-3xl mx-auto p-4 my-10">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                    Let's Connect
                </h3>
                <p className="text-lg font-light leading-tight tracking-tight mt-2 mb-10">
                    Feel free to reach out through any of my social media
                    channels
                </p>
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                    >
                        <SiFacebook size={24} />
                        <span>Facebook</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                    >
                        <SiX size={24} />
                        <span>X</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                    >
                        <SiGmail size={24} />
                        <span>Gmail</span>
                    </Button>
                </div>
            </div>
            <div className="border-t">
                <div className="w-full max-w-3xl mx-auto p-4 my-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-10">
                        {" "}
                        {/* Adjusted gap for better mobile spacing */}
                        {/* Left Section: Quote */}
                        <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
                            {" "}
                            {/* Centered text on mobile, left on larger screens */}
                            <h2 className="text-2xl sm:text-2xl font-semibold text-white leading-tight">
                                {" "}
                                {/* Adjusted text size for responsiveness */}
                                “Code is how I think.
                                <br /> Design is how I feel.”
                            </h2>
                        </div>
                        {/* Right Section: Status and Links */}
                        <div className="flex flex-col items-center md:items-end text-gray-400 text-sm gap-2 mt-8 md:mt-0 w-full md:w-auto">
                            {" "}
                            {/* Ensured full width on mobile, auto on desktop */}
                            <div className="flex items-center gap-2">
                                <span>
                                    {status.text} {status.emoji}
                                </span>
                                <span className="mx-1">•</span>
                                <span>Iloilo, PH</span>
                                <span className="mx-1">•</span>
                                <span>{iloiloTime}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Source Code
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Old Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
