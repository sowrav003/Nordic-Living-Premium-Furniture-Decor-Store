"use client";

import Image from "next/image";
import Link from "next/link";
import { useShopStore } from "@/store/useShopStore";
import { Trash2 } from "lucide-react";
import Title from "@/components/home/Title";

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useShopStore();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Your Cart is Empty</h1>

          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything yet.
          </p>

          <Link
            href="/products"
            className="bg-black text-white px-8 py-4 inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Title title="Shop Cart" align="left" />

        <div className="grid lg:grid-cols-[1fr_350px] gap-12">
          {/* Cart Items */}
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-6 border-b items-start border-stone-200 py-6"
              >
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

                <div className="flex-1">
                  <p className="uppercase text-xs tracking-[0.2em] text-stone-500 mb-2">
                    {item.category}
                  </p>

                  <h2 className="font-serif text-2xl mb-2">{item.name}</h2>

                  <p className="text-stone-600 mb-4">${item.price}</p>

                  <button onClick={() => decreaseQuantity(item.id)} className="bg-stone-200 text-stone-700 px-3 py-1 rounded-md">
                    -
                  </button>

                  <span className="mx-2">{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)} className="bg-stone-200 text-stone-700 px-3 py-1 rounded-md">
                    +
                  </button>

                  
                </div>
                <div className="flex flex-col items-center justify-between gap-4">
                  <button
                  onClick={() => removeFromCart(item.id)}
                  className=" text-sm hover:underline"
                >
                  <Trash2 className="w-4 h-4 inline-block mr-1" />
                </button>
                <p className="font-medium mb-4">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit border border-stone-200 p-8">
            <h2 className="font-serif text-2xl mb-6">Order Summary</h2>

            <div className="flex justify-between mb-4">
              <span>Items</span>

              <span>
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

            <div className="flex justify-between mb-6">
              <span>Total</span>

              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full bg-black text-white py-4 uppercase tracking-wider">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
