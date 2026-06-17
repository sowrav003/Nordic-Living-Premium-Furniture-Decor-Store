import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { assets, products } from '@/lib/data'

const Feature = () => {
  return (
    <section id="categories" className="py-24 px-8 md:px-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between items-center gap-6 mb-16">
           
            <Title title="Featured Categories" subTitle="Explore collections designed for specific areas of your home, featuring harmonious materials and clean lines." align="left" />
            <Link href="/products" className="inline-flex items-center gap-2 text-md font-medium uppercase text-stone-900 hover:text-stone-600 transition-colors">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          
<div className="grid lg:grid-cols-[1fr_1fr] gap-6">
  
  <Link
    href='/products'
    className="relative min-h-[400px] overflow-hidden group"
  >
    <Image
      src={assets.sofa1}
      alt="Sofas & Sectionals"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      unoptimized
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    <div className="absolute bottom-8 left-8">
      <h3 className="text-white text-3xl font-serif mb-2">
        Sofas & Sectionals
      </h3>

      <span className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
        Shop Now
        <ChevronRight size={16} />
      </span>
    </div>
  </Link>

<div className='grid grid-cols-2 gap-6'>
    {products.slice(1, 5).map((product) => (
    <Link
      key={product.id}
      href={`/products/${product.slug}`}
      className="relative h-[300px] w-full overflow-hidden group "
    >
      <Image
        src={product.images[0]}
        alt={product.name}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-white text-xl font-serif">
          {product.name}
        </h3>
      </div>
    </Link>
  ))}
</div>
</div>
      </section>
  )
}

export default Feature