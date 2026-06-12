import Title from "@/components/home/Title";
import { assets } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const services = [
    {
      title: "Natural materials",
      description: "Solid oak, undyed wool, stoneware and linen — chosen for how they age, not how they look new.",
    },
    {
      title: "Small batches",
      description: "We release a handful of pieces a year, made in family workshops we know by name.",
    },
    {
      title: "Built to keep",
      description: "Mortise-and-tenon joinery, replaceable upholstery, and a lifetime structural guarantee.",
    },
  ];
  return (
     <div className="w-full py-10">
       <div className="w-full bg-gray-100 py-16 px-6 ">
         <Title
          title="Our Story"
          subTitle="Learn more about our company and mission "
          align="center"
        />
       </div>


       <div className="w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={assets.aboutImg2}
                alt="Crafting and woodworking"
                fill
                className="object-cover"
                
              />
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-semibold mb-2 block">Values</span>
                <h3 className="text-3xl font-serif text-gray-900 mb-4">Dedicated to the Craft</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Every product we offer is carefully selected from vendors who share our commitment to quality. Whether it's hand-turned wood, woven linen, or perfectly fired ceramics, we prioritize materials that age gracefully and techniques that outlast trends.
                </p>
              </div>
              
              <div>
                <h3 className="text-3xl font-serif text-gray-900 mb-4">Sustainable Practices</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  We are deeply mindful of our environmental footprint. From sourcing FSC-certified timber to partnering with local artisans and using eco-friendly packaging, every step in our supply chain is designed to respect the earth.
                </p>
              </div>

              <div className="pt-4">
                <Link 
                  href="/vendors"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-black border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  Meet Our Vendors
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20 grid md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-500 p-6">
            <h3 className="font-serif text-3xl">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-3">{service.description}</p>
          </div>
        ))}
      </div>
        </div>

      
      </div>
    </div>
  );
};

export default About;
