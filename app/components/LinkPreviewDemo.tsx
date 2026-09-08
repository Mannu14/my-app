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
    <div className="inline-flex items-center">
      <LinkPreview url={url} className="text-sm font-semibold text-violet-400">
        <Link href={url} className="inline-flex items-center gap-1.5">
          <ExternalLink size={14} /> View Live
        </Link>
      </LinkPreview>
    </div>
  );
}
