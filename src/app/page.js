import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Support from "@/components/home/Support";


export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Products />
      <Banner />
      <Support />
      <BlogSection />
    </>
  );
}
