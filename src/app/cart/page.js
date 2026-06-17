"use client";

import Image from "next/image";
import Link from "next/link";
import { useShopStore } from "@/store/useShopStore";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Title from "@/components/home/Title";

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useShopStore();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Title title={`Cart (${cartItems.length})`} align="left" />
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag
              className="mx-auto mb-6 text-stone-300"
              size={60}
            />

            <h2 className="font-serif text-4xl mb-4">
              Your Cart is Empty
            </h2>

            <p className="text-stone-500 mb-8">
              Looks like you haven't added anything yet.
            </p>

            <Link
              href="/products"
              className="inline-block bg-black text-white px-8 py-4"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_350px] gap-12">
            {/* Cart Items */}
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[120px_1fr_auto] gap-8 items-center border-b border-stone-200 py-8"
                >

                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="w-32 h-32 object-cover"
                    unoptimized
                  />
                  <div className="flex flex-col">
                    <p className="uppercase tracking-[0.2em] text-xs text-stone-500 mb-2">
                      {item.category}
                    </p>

                    <h2 className="font-serif text-2xl mb-3">{item.name}</h2>

                    <p className="text-stone-600 mb-4">${item.price}</p>

                    <p className="font-medium">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between h-full">

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-stone-500 hover:text-stone-900"
                    >
                      <Trash2 size={16} /> 
                    </button>

                    <div className="flex items-center border border-stone-300">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-4 py-2"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="px-4">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-4 py-2"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit border border-stone-200 bg-stone-100 p-8">
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
        )}
      </div>
    </div>
  );
};

export default CartPage;
