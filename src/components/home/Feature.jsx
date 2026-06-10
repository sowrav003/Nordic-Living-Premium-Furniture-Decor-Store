import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { products } from '@/lib/data'

const Feature = () => {
  return (
    <section id="categories" className="py-24 px-16 ">
        <div className="flex flex-col md:flex-row md:items-end justify-between items-center gap-6 mb-16">
           
            <Title title="Featured Categories" subTitle="Explore collections designed for specific areas of your home, featuring harmonious materials and clean lines." align="left" />
            <Link href="/products" className="inline-flex items-center gap-2 text-md font-medium uppercase text-stone-900 hover:text-stone-600 transition-colors">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Link href="/products" className="col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden bg-stone-100" >
             <Image src={products[0].images[0]} alt="Sofas" width={500} height={500}  />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="absolute bottom-8 left-8">
               <h3 className="text-white text-2xl font-medium mb-2">Sofas & Sectionals</h3>
               <span className="text-white/80 text-sm flex items-center gap-2 group-hover:text-white transition-colors">Shop Now <ChevronRight size={14}/></span>
             </div>
          </Link>
         
        </div>
      </section>
  )
}

export default Feature