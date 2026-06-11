"use client"

import ProductsCard from '@/components/home/ProductsCard'
import Title from '@/components/home/Title'
import { categories, products } from '@/lib/data'


const ProductPage = () => {
  
  return (
    <div className='py-16'>
      
      <div className="relative z-10 bg-gray-100 p-10 rounded">
        <Title title="Products Page" subTitle="Explore our diverse range of products, crafted with quality and style to elevate your living space." align="center" />
      </div>
      <div className="relative z-10 p-6 rounded mt-10 flex flex-col md:flex-row gap-10">
        <div className="min-w-60 relative z-10 px-6 ">
         <p className="my-2 text-gray-700 text-xl flex items-center gap-2 ">Filters</p>
         <div className="bg-white p-4 border border-gray-300 rounded">
          <p className="text-gray-700 text-lg mb-2">Category</p>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center mb-2">
              <input type="checkbox" id={category.slug} className="mr-2" />
              <label htmlFor={category.slug} className="text-gray-700 text-lg">{category.name}</label>
            </div>
          ))}
         </div>
         <div className="bg-white p-4 border border-gray-300 rounded mt-6">
          <p className="text-gray-700 text-lg mb-2">Category</p>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center mb-2">
              <input type="checkbox" id={category.slug} className="mr-2" />
              <label htmlFor={category.slug} className="text-gray-700 text-lg">{category.name}</label>
            </div>
          ))}
         </div>
        </div>
        <div className="flex-1 relative z-10">
          <div className="flex justify-end text-base sm:text-2xl mb-4">
          <select onChange={(e) => setSortType(e.target.value)} name="products" id="products" className="border border-gray-300 px-2 py-4 text-sm sm:text-base">
            <option value="default">Default Sorting</option>
            <option value="lowtohigh">Price: Low to High</option>
            <option value="hightolow">Price: High to Low</option>
            <option value="newarrivals">New Arrivals</option>
          </select>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
          {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage