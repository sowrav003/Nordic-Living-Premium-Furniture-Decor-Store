import { useShopStore } from "@/store/useShopStore";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsCard = ({ product }) => {
  const { toggleWishlist, wishlistItems } = useShopStore();

  const wished = wishlistItems.some((item) => item.id === product.id);
  return (
    <div className="w-full bg-white rounded">
      <Link href={`/products/${product.slug}`} className="group">
        <div className="relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded"
            loading="eager"
            unoptimized
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            className="absolute top-2 right-2 bg-white rounded-full p-2"
          >
            <Heart
              size={16}
              className={
                wished ? "fill-current text-stone-900" : "text-stone-600"
              }
            />
          </button>

          <div className="absolute top-2 left-2 bg-white rounded px-3 py-1 flex items-center gap-1">
            <Star size={14} className="text-yellow-400" />
            <span className="text-xs font-medium text-gray-500">
              {product.rating}
            </span>
          </div>
        </div>
      </Link>
      <div className=" flex items-center justify-between py-3">
        <h3 className="text-lg font-medium mt-4">{product.name}</h3>
        <p className="text-lg text-gray-500 mt-1">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductsCard;
