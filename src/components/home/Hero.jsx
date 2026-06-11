"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/lib/data";
import Link from "next/link";


const Hero = () => {
  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={assets.heroImg}
            alt="Modern living room"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Furniture Designed
            <br />
            For Modern Living
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            Timeless Scandinavian furniture crafted for comfort, simplicity, and
            everyday life. Elevate your space with our premium collection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link
              href="/products"
              className="bg-white text-stone-900 px-10 py-4 text-sm font-medium  uppercase flex items-center justify-center gap-3 hover:bg-stone-100 transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="/products"
              className="bg-transparent text-white border hover:bg-white/10 dark:text-white dark:border-white dark:hover:bg-white/10 px-12 py-4 text-sm font-medium uppercase flex items-center justify-center gap-3 transition-colors"
            >
              Explore More
            </Link>
            {/* <Link
              href="/categories"
              className="bg-transparent text-white border hover:bg-white/10 dark:text-white dark:border-white dark:hover:bg-white/10 px-8 py-4 text-sm font-medium tracking-wide uppercase flex items-center justify-center gap-3 transition-colors"
            >
              Explore Categories
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
