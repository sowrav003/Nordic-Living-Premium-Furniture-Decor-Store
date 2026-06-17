"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

import Title from "@/components/home/Title";
import { useShopStore } from "@/store/useShopStore";

const WishlistPage = () => {
  const {
    wishlistItems,
    toggleWishlist,
    addToCart,
  } = useShopStore();

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Title
          title={`Wishlist (${wishlistItems.length})`}
          align="left"
        />

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <Heart
              className="mx-auto mb-6 text-stone-300"
              size={60}
            />

            <h2 className="font-serif text-4xl mb-4">
              Your Wishlist is Empty
            </h2>

            <p className="text-stone-500 mb-8">
              Save products you love and come back to them later.
            </p>

            <Link
              href="/products"
              className="inline-block bg-black text-white px-8 py-4"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="flex flex-col">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-6 border-b border-stone-200 py-8"
              >
                {/* Image */}
                <div className="w-full md:w-40 flex-shrink-0">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <p className="uppercase tracking-[0.2em] text-xs text-stone-500 mb-2">
                    {item.category}
                  </p>

                  <h2 className="font-serif text-3xl mb-3">
                    {item.name}
                  </h2>

                  <p className="text-stone-600 mb-6">
                    ${item.price}
                  </p>

                  <Link
                    href={`/products/${item.slug}`}
                    className="text-sm underline text-stone-600 hover:text-black"
                  >
                    View Product
                  </Link>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 md:items-end">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-black text-white px-6 py-3 flex items-center justify-center gap-2 min-w-[180px]"
                  >
                    <ShoppingBag size={18} />
                    Add To Cart
                  </button>

                  <button
                    onClick={() => toggleWishlist(item)}
                    className="border border-stone-300 px-6 py-3 min-w-[180px] hover:bg-stone-100 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;