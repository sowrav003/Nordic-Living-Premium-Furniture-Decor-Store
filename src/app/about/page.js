"use client";

import Title from "@/components/home/Title";
import { assets } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const values = [
    {
      title: "Natural Materials",
      description:
        "Solid oak, undyed wool, stoneware and linen — chosen for how they age, not how they look new.",
    },
    {
      title: "Small Batches",
      description:
        "We release a handful of pieces each year, crafted in family-owned workshops we know by name.",
    },
    {
      title: "Built to Keep",
      description:
        "Mortise-and-tenon joinery, replaceable upholstery, and a lifetime structural guarantee.",
    },
  ];

  const stats = [
    {
      value: "12+",
      label: "Years of Craftsmanship",
    },
    {
      value: "30K+",
      label: "Happy Customers",
    },
    {
      value: "50+",
      label: "Furniture Pieces",
    },
    {
      value: "100%",
      label: "Sustainably Sourced",
    },
  ];

  return (
    <div className="pt-14">
      <div className="bg-stone-100 py-20 px-6">

        <Title
          title="Our Story"
          subTitle="Creating timeless furniture inspired by Scandinavian craftsmanship, natural materials, and thoughtful living."
          align="center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={assets.aboutImg2}
              alt="Craftsmanship"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-10">
            <div>
              <span className="uppercase text-xs text-stone-500">
                Craftsmanship
              </span>

              <h3 className="font-serif text-4xl mt-4 mb-6">
                Dedicated to the craft.
              </h3>

              <p className="text-stone-600">
                Every piece is carefully developed with longevity in mind. From
                hand-finished oak frames to premium textiles, we collaborate
                with artisans who share our commitment to enduring quality.
              </p>
            </div>

            <div>
              <span className="uppercase text-xs text-stone-500">
                Sustainability
              </span>

              <h3 className="font-serif text-4xl mt-4 mb-6">
                Respect for materials.
              </h3>

              <p className="text-stone-600">
                We work with responsibly sourced timber, natural fabrics, and
                production partners who prioritize environmental stewardship.
                Better materials create better products—and a better future.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center border border-stone-900 px-8 py-4 uppercase tracking-wider text-xs font-medium hover:bg-stone-900 hover:text-white transition-colors"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-stone-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 md:p-12 border-r border-b md:border-b-0 border-stone-200 last:border-r-0 text-center"
            >
              <h3 className="font-serif text-4xl md:text-5xl text-stone-900">
                {stat.value}
              </h3>

              <p className="text-sm text-stone-500 mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <span className="uppercase text-xs text-stone-500">
            What We Believe
          </span>

          <h2 className="font-serif text-4xl mt-4">
            Built around enduring values.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border border-stone-200">
          {values.map((value, index) => (
            <div
              key={index}
              className={`p-10 ${
                index !== values.length - 1
                  ? "border-b md:border-b-0 md:border-r border-stone-200"
                  : ""
              }`}
            >
              <h3 className="font-serif text-3xl mb-4">{value.title}</h3>

              <p className="text-stone-600 ">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-stone-100 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase text-xs text-stone-500">
            Visit Our Showroom
          </span>

          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            Experience Nordic Living in person.
          </h2>

          <p className="text-stone-600 mb-10">
            Discover our collections, explore materials up close, and receive
            personalized guidance from our design specialists.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-stone-900 text-white px-8 py-4 uppercase text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
