"use client";

import { cn } from "@/lib/utils";
import { useShopStore } from "@/store/useShopStore";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Products", href: "/products" },
    // { name: 'Categories', href: '/categories' },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));
  const { cartItems, wishlistItems } = useShopStore();

  useEffect(() => {
    if (pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-stone-200 py-4 shadow-sm"
            : "bg-transparent py-6",
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <button
              className="md:hidden text-stone-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link
              href="/"
              className={cn(
                "font-serif tracking-widest uppercase text-xl font-medium",
                isScrolled ? "text-stone-900" : "text-white z-50 relative",
              )}
            >
              NØRDIC
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm uppercase tracking-wider font-medium transition-colors relative group",
                    isActive(link.href)
                      ? isScrolled
                        ? "text-stone-900"
                        : "text-white"
                      : isScrolled
                        ? "text-stone-700 hover:text-stone-500 transition-colors"
                        : "text-white hover:text-stone-300",
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full",

                      isScrolled ? "bg-stone-900" : "bg-white",
                    )}
                  ></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-5">
              <button
                className={cn(
                  " transition-colors hidden sm:block",
                  isScrolled
                    ? "text-stone-900 hover:text-stone-500"
                    : "text-white hover:text-stone-300",
                )}
              >
                <Search className="w-5 h-5" />
                <span className="sr-only">Search</span>
              </button>

              <Link
                href="/wishlist"
                className={cn(
                  "relative transition-colors hidden sm:block",
                  isScrolled
                    ? "text-stone-900 hover:text-stone-500"
                    : "text-white hover:text-stone-300",
                )}
              >
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5  w-2 h-2 rounded-full bg-black" />
                )}

                <span className="sr-only">Wishlist</span>
              </Link>

              <Link
                href="/cart"
                className={cn(
                  "relative transition-colors",
                  isScrolled
                    ? "text-stone-900 hover:text-stone-500"
                    : "text-white hover:text-stone-300",
                )}
              >
                <ShoppingBag className="w-5 h-5" />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                    {cartCount}
                  </span>
                )}

                <span className="sr-only">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 pt-24 px-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <button
          className="absolute top-6 right-6 text-stone-900"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col gap-8">
          <Link
            href="/"
            className="font-serif tracking-widest text-3xl text-gray-700 pb-8 border-b border-stone-200"
          >
            NORDIC
          </Link>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-serif tracking-wide transition-colors",
                  pathname.startsWith(link.href)
                    ? "text-stone-900"
                    : "text-stone-500",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
