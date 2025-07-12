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
            <div className="border-t">
                <div className="w-full max-w-3xl mx-auto p-4 my-10">
                    <h3 className="text-lg md:text-xl font-semibold leading-tight tracking-tight">
                        Let's Connect
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mt-2 mb-10">
                        Feel free to reach out through my phone or email
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-mail"
                            >
                                <rect
                                    width="20"
                                    height="16"
                                    x="2"
                                    y="4"
                                    rx="2"
                                />
                                <path d="m22 7-10 5L2 7" />
                            </svg>
                            <a
                                href="mailto:eugerbone@gmail.com"
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                            >
                                eugerbone@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-phone"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="text-neutral-700 dark:text-neutral-300">
                                +63 994 204 5331
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-map-pin"
                            >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-neutral-700 dark:text-neutral-300">
                                Carles, Iloilo, Philippines
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
