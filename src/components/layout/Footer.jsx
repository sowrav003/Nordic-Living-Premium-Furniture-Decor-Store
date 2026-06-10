import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t border-stone-800 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-stone-50 uppercase inline-block">
              Nordic Living
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Timeless Scandinavian furniture crafted for comfort, simplicity, and everyday life. Designed in Copenhagen.
            </p>
          </div>
          
          <div>
            <h4 className="text-stone-50 font-medium mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="/categories/sofas" className="hover:text-white transition-colors">Sofas</Link></li>
              <li><Link href="/categories/chairs" className="hover:text-white transition-colors">Chairs</Link></li>
              <li><Link href="/categories/tables" className="hover:text-white transition-colors">Tables</Link></li>
              <li><Link href="/categories/lighting" className="hover:text-white transition-colors">Lighting</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-50 font-medium mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-50 font-medium mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/care" className="hover:text-white transition-colors">Product Care</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Nordic Living. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Pinterest</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
