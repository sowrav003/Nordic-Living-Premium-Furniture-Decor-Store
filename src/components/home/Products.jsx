"use client";

import React from 'react'
import Title from './Title'
import ProductsCard from './ProductsCard'
import { products } from '@/lib/data'
import Link from 'next/link'

const Products = () => {
  return (
    <section id="products" className="py-24 flex flex-col items-center justify-center gap-12">
        <Title title="New Arrivals" subTitle="Discover the latest additions to our collection, featuring fresh designs and timeless classics to elevate your living space." align="center" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-6 max-w-7xl mx-auto">
            {
                products.slice(6, 14).map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))
            }
        </div>
        <Link href="/products" className="text-center mt-8 gap-2 text-md font-medium uppercase underline  text-stone-900 hover:text-stone-600 transition-colors">
            View All Products
        </Link>
                  
    </section>
  )
}

export default Products