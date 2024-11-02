"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import ForCartview from "./ForCartview";

export function BackgroundBeamsDemo() {
    return (
        (<div
            className="background-beams-demo h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="content max-w-2xl mx-auto p-4">
               <ForCartview/>
            </div>
            <BackgroundBeams />
        </div>)
    );
}
