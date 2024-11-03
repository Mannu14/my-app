"use client";

import React from "react";
import Link from 'next/link';
import { LinkPreview } from "./ui/link-preview";
interface LinkPreviewDemoProps {
  url: string;
  Name: string;
}

export function LinkPreviewDemo({ Name, url }: LinkPreviewDemoProps) {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-font text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url={url} className="font-bold">
          <Link href={url} passHref>
            <a target="_blank" rel="noopener noreferrer">{Name}</a>
          </Link>
        </LinkPreview>
      </p>
    </div>
  );
}
