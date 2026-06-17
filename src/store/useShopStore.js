import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShopStore = create(persist((set) => ({
  
  cartItems: [],
  wishlistItems: [],

  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existingItem =
        state.cartItems.find(
          (item) =>
            item.id === product.id
        );

      if (existingItem) {
        return {
          cartItems:
            state.cartItems.map(
              (item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity:
                        item.quantity +
                        quantity,
                    }
                  : item
            ),
        };
      }

      return {
        cartItems: [
          ...state.cartItems,
          {
            ...product,
            quantity,
          },
        ],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cartItems:
        state.cartItems.filter(
          (item) =>
            item.id !== productId
        ),
    })),

  increaseQuantity: (productId) =>
    set((state) => ({
      cartItems:
        state.cartItems.map(
          (item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
        ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      cartItems:
        state.cartItems.map(
          (item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity: Math.max(
                    1,
                    item.quantity - 1
                  ),
                }
              : item
        ),
    })),

  toggleWishlist: (product) =>
    set((state) => {
      const exists =
        state.wishlistItems.find(
          (item) =>
            item.id === product.id
        );

      if (exists) {
        return {
          wishlistItems:
            state.wishlistItems.filter(
              (item) =>
                item.id !== product.id
            ),
        };
      }

      return {
        wishlistItems: [
          ...state.wishlistItems,
          product,
        ],
      };
    }),
})));