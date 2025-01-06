"use client";

import React from "react";
import Link from 'next/link';
import { LinkPreview } from "./ui/link-preview";
import { ExternalLink } from 'lucide-react';
interface LinkPreviewDemoProps {
  url: string;
}

export function LinkPreviewDemo({ url }: LinkPreviewDemoProps) {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <h5 className="text-neutral-font text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url={url} className="font-bold">
          <Link href={url} passHref>
            <ExternalLink size={20} /> View Live
          </Link>
        </LinkPreview>
      </h5>
    </div>
  );
}
