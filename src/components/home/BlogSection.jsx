import Image from 'next/image'
import React from 'react'
import Title from './Title'

const BlogSection = () => {
   const blogs = [
             { title: "Traveling Solo Is Awesome", category: "Lifestyle", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" },
             { title: "A Beautiful Sunday Morning", category: "Living", img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1000&auto=format&fit=crop" },
             { title: "Kitchen Inspired On Japanese", category: "Cooking", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" }
           ]
  return (
     <section className="w-full py-14 px-8 md:px-32 bg-gray-100">
      <Title title="From Our Blog" subTitle="Our latest thoughts and stories" align="center" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
           {blogs.map((blog, idx) => (
             <div key={idx} className="group cursor-pointer">
               <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden mb-6 rounded-sm">
                 <div className="absolute top-4 left-4 bg-white px-3 py-1 flex flex-col items-center justify-center z-10 font-bold shadow-sm">
                   <span className="text-lg leading-none">30</span>
                   <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">MAY</span>
                 </div>
                 <Image src={blog.img} alt={blog.title} fill className="object-cover" unoptimized />
               </div>
               <div className="text-center px-4">
                 <span className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 mb-2 block">{blog.category}</span>
                 <h3 className="text-lg font-medium mb-3 group-hover:text-gray-500 transition-colors">{blog.title}</h3>
                 <p className="text-gray-500 text-xs flex justify-center items-center gap-2">
                    <span>By: Admin</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>1 Comment</span>
                 </p>
               </div>
             </div>
           ))}
        </div>
      </section>
  )
}

export default BlogSection