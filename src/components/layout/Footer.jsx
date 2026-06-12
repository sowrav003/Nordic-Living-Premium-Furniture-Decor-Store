import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 ">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-wide text-white uppercase"
            >
              Nordic Living
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-stone-400 max-w-sm">
              Timeless Scandinavian furniture crafted for comfort,
              simplicity, and everyday living.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-6">
              Shop
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/products">
                  All Products
                </Link>
              </li>

              <li>
                <Link href="/products?category=sofas">
                  Sofas
                </Link>
              </li>

              <li>
                <Link href="/products?category=chairs">
                  Chairs
                </Link>
              </li>

              <li>
                <Link href="/products?category=tables">
                  Tables
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-6">
              Company
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <Link href="/blog">
                  Journal
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-6">
              Support
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/faq">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/shipping">
                  Shipping & Returns
                </Link>
              </li>

              <li>
                <Link href="/care">
                  Product Care
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Nordic Living. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <Link href="#">
              Instagram
            </Link>

            <Link href="#">
              Pinterest
            </Link>

            <Link href="#">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}