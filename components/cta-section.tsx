"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Card */}
          <div className="text-center">
            <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg"
                alt="Bitcoin event crowd"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-heading tracking-widest uppercase mb-3">
              <Link href="/about-1" className="text-primary hover:underline">
                About
              </Link>
            </h3>
            <p className="text-gray-600 mb-4 font-body">
              Find out about our organization and mission.
            </p>
            <Link
              href="/about-1"
              className="inline-flex items-center text-primary hover:underline font-body text-sm"
            >
              Learn More
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Join Us Card */}
          <div className="text-center">
            <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg"
                alt="Bitcoin meetup gathering"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-heading tracking-widest uppercase mb-3">
              <Link href="/meetups-events" className="text-primary hover:underline">
                Join US
              </Link>
            </h3>
            <p className="text-gray-600 mb-4 font-body">
              You can become a contributor to our cause, or participate yourself.
            </p>
            <Link
              href="/meetups-events"
              className="inline-flex items-center text-primary hover:underline font-body text-sm"
            >
              Find Out How
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
