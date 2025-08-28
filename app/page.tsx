"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "https://euger.vercel.app/";
    }

    const timer =
      countdown > 0 &&
      setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

    return () => clearInterval(timer as NodeJS.Timeout);
  }, [countdown]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-md text-center space-y-4">
        <p className="text-xl sm:text-2xl font-semibold leading-relaxed">
          🚀 My new portfolio is live at 👇
        </p>
        <a
          href="https://euger.vercel.app/"
          className="text-blue-400 underline break-words text-lg sm:text-xl"
        >
          https://euger.vercel.app/
        </a>
        <p className="text-lg sm:text-xl mt-4">Redirecting in {countdown}...</p>
      </div>
    </div>
  );
}
