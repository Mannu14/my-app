"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import ForCartview from "./ForCartview";

export function BackgroundBeamsDemo() {
    return (
        (<div
            className="relative w-full overflow-hidden bg-neutral-950 antialiased">
            <div className="relative z-10">
               <ForCartview/>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <BackgroundBeams />
            </div>
        </div>)
    );
}
