"use client";

import { use, useState } from "react";
import { products } from "@/lib/data";
import ProductsCard from "@/components/home/ProductsCard";

import Image from "next/image";
import Link from "next/link";

import {
Check,
Heart,
Minus,
Plus,
ShoppingBag,
Star,
} from "lucide-react";

const ProductDetails = ({ params }) => {
const { slug } = use(params);

const product = products.find(
(p) => p.slug === slug
);

if (!product) {
return ( <div className="min-h-screen flex items-center justify-center">
Product not found </div>
);
}

const [activeImage, setActiveImage] = useState(0);
const [quantity, setQuantity] = useState(1);
const [added, setAdded] = useState(false);
const [wished, setWished] = useState(false);
const [activeTab, setActiveTab] =
useState("description");

const relatedProducts = products
.filter(
(item) =>
item.category === product.category &&
item.id !== product.id
)
.slice(0, 4);

const handleAddToCart = () => {
setAdded(true);


setTimeout(() => {
  setAdded(false);
}, 2000);


};

return ( <div className="pt-28 pb-24"> <div className="max-w-7xl mx-auto px-6">


    {/* Breadcrumb */}
    <div className="text-sm text-stone-500 mb-10">
      <Link href="/">Home</Link>
      <span className="mx-2">/</span>

      <Link href="/products">
        Products
      </Link>

      <span className="mx-2">/</span>

      <span>{product.name}</span>
    </div>

    {/* Product Hero */}
    <div className="grid lg:grid-cols-[120px_1fr_500px] gap-8">

      {/* Thumbnails */}
      <div className="hidden lg:flex flex-col gap-4">
        {product.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() =>
              setActiveImage(idx)
            }
            className={`relative w-full h-28 border ${
              activeImage === idx
                ? "border-black"
                : "border-stone-200"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div>
        <div className="bg-stone-100">
          <Image
            src={product.images[activeImage]}
            alt={product.name}
            width={800}
            height={800}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>

        <div className="grid grid-cols-4 gap-3 mt-4 lg:hidden">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() =>
                setActiveImage(idx)
              }
              className={`border ${
                activeImage === idx
                  ? "border-black"
                  : "border-stone-200"
              }`}
            >
              <Image
                src={img}
                alt=""
                width={150}
                height={150}
                className="w-full"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="lg:sticky lg:top-28 h-fit">

        <p className="uppercase tracking-[0.2em] text-xs text-stone-500 mb-3">
          {product.category}
        </p>

        <h1 className="font-serif text-4xl lg:text-5xl mb-4">
          {product.name}
        </h1>

        <div className="flex items-center gap-2 mb-6">
          <Star
            size={16}
            className="fill-yellow-500 text-yellow-500"
          />

          <span>{product.rating}</span>

          <span className="text-stone-500">
            ({product.reviews} reviews)
          </span>
        </div>

        <p className="text-3xl font-medium mb-8">
          ${product.price}
        </p>

        <p className="text-stone-600 leading-relaxed mb-10">
          {product.description}
        </p>

        {/* Colors */}
        <div className="mb-8">
          <p className="font-medium mb-4">
            Colors
          </p>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-stone-800 ring-2 ring-black" />
            <button className="w-10 h-10 rounded-full bg-stone-300" />
            <button className="w-10 h-10 rounded-full bg-[#c19a6b]" />
            <button className="w-10 h-10 rounded-full bg-[#6f4e37]" />
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-10">
          <p className="font-medium mb-4">
            Quantity
          </p>

          <div className="flex items-center border border-stone-300 w-fit">

            <button
              onClick={() =>
                setQuantity(
                  Math.max(1, quantity - 1)
                )
              }
              className="px-4 py-3"
            >
              <Minus size={16} />
            </button>

            <span className="px-8">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="px-4 py-3"
            >
              <Plus size={16} />
            </button>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-stone-900 text-white py-4 flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            {added ? (
              <>
                <Check size={18} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag size={18} />
                Add To Cart
              </>
            )}
          </button>

          <button
            onClick={() =>
              setWished(!wished)
            }
            className={`w-14 border flex items-center justify-center ${
              wished
                ? "bg-black text-white"
                : "border-stone-300"
            }`}
          >
            <Heart
              size={20}
              className={
                wished
                  ? "fill-current"
                  : ""
              }
            />
          </button>

        </div>

      </div>

    </div>

    {/* Tabs */}
    <section className="mt-24 border-t border-stone-200 pt-10">

      <div className="flex gap-8 mb-8">

        {[
          "description",
          "materials",
          "shipping",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab)
            }
            className={`uppercase text-sm tracking-wider ${
              activeTab === tab
                ? "border-b-2 border-black pb-2"
                : "text-stone-400"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {activeTab ===
        "description" && (
        <p className="text-stone-600 leading-8 max-w-4xl">
          {product.description}
        </p>
      )}

      {activeTab ===
        "materials" && (
        <div className="space-y-2 text-stone-600">
          <p>Solid Oak</p>
          <p>Premium Linen</p>
          <p>Handcrafted Finish</p>
        </div>
      )}

      {activeTab ===
        "shipping" && (
        <div className="space-y-2 text-stone-600">
          <p>Free Delivery</p>
          <p>2–4 Week Lead Time</p>
          <p>White Glove Service Available</p>
        </div>
      )}

    </section>

    {/* Related Products */}
    <section className="py-24">

      <h2 className="font-serif text-4xl mb-10">
        You May Also Like
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map(
          (item) => (
            <ProductsCard
              key={item.id}
              product={item}
            />
          )
        )}
      </div>

    </section>

    {/* CTA */}
    <section className="bg-stone-100 py-20 px-8 text-center rounded-xl">

      <span className="uppercase tracking-[0.2em] text-xs text-stone-500">
        Visit Our Showroom
      </span>

      <h2 className="font-serif text-4xl mt-4 mb-6">
        Experience Nordic Living in person
      </h2>

      <p className="text-stone-600 max-w-2xl mx-auto mb-8">
        Discover our collections, explore materials,
        and receive personalized guidance from our design specialists.
      </p>

      <Link
        href="/contact"
        className="inline-flex bg-black text-white px-8 py-4"
      >
        Contact Us
      </Link>

    </section>

  </div>
</div>


);
};

export default ProductDetails;
