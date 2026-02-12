"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss mountains at sunset"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl font-heading font-normal tracking-wide leading-relaxed">
            A BRIGHT NEW DAWN FOR DIGITAL TRANSFERS, SOUND MONEY AND PERSONAL FREEDOM.
          </h1>
        </div>
      </div>
    </section>
  );
}
