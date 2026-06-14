import { assets } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
      <section className="bg-gray-100 flex justify-center w-full px-4 md:px-16 py-12 md:py-24">
        <div className="relative w-full max-w-7xl min-h-[400px] sm:min-h-[500px] lg:h-[600px] rounded overflow-hidden shadow-sm group">
          <Image 
            src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2000&auto=format&fit=crop" 
            alt="Spring Edit Living Room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white/60 to-transparent" />
          <div className="relative z-10 h-full flex flex-col items-start justify-center p-8 md:p-20 max-w-3xl">
             <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4 font-semibold">The Spring Edit</span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 ">A softer way to live.</h2>
             <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
               Twelve new pieces in natural linen, oak and stoneware — shaped slowly, for quiet rooms.
             </p>
             <Link href="/shop" className="bg-[#1a1a1a] text-white px-7 py-3.5 text-sm font-medium hover:bg-black transition-colors flex items-center gap-2">
               View the collection <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

  )
}

export default Banner