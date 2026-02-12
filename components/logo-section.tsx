"use client";

import Image from "next/image";

export function LogoSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-xs mx-auto text-center">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
          alt="Bitcoin Association Switzerland"
          width={227}
          height={238}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
