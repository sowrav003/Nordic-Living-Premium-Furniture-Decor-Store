"use client";

import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import { assets } from '@/lib/data';

const Hero = () => {
  return (
    <div>
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={assets.heroImg}
            alt="Modern living room" 
            fill

            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Furniture Designed<br />For Modern Living
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            Timeless Scandinavian furniture crafted for comfort, simplicity, and everyday life. Elevate your space with our premium collection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" onClick={() => navigate('/products')} className="w-full sm:w-auto bg-white text-stone-900 hover:bg-stone-100 dark:bg-white dark:text-stone-900">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10 dark:text-white dark:border-white dark:hover:bg-white/10" onClick={() => {
              document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Categories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero