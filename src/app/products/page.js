"use client";

import { useEffect, useState } from "react";
import ProductsCard from "@/components/home/ProductsCard";
import { categories, productColors, products } from "@/lib/data";
import Title from "@/components/home/Title";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortType, setSortType] = useState("default");

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );
  };

  const handleColorToggle = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color],
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedColors([]);
    setMaxPrice(5000);
    setSortType("default");
  };

  let filteredProducts = [...products];

  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }

  if (selectedColors.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedColors.includes(product.color),
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) => product.price <= maxPrice,
  );

  switch (sortType) {
    case "lowtohigh":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "hightolow":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "newest":
      filteredProducts.sort((a, b) => Number(b.id) - Number(a.id));
      break;

    default:
      break;
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Title
          title="Our Products"
          subTitle="Discover our wide range of high-quality products, carefully crafted to meet your needs and elevate your lifestyle."
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 mt-10">
          <aside className="space-y-10">
            <div>
              <h3 className="uppercase tracking-widest text-xs mb-4">Search</h3>

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-xs mb-4">
                Categories
              </h3>

              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category.slug}
                    onClick={() => handleCategoryToggle(category.slug)}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <span
                      className={`${
                        selectedCategories.includes(category.slug)
                          ? "font-medium text-black"
                          : "text-gray-500"
                      }`}
                    >
                      {category.name}
                    </span>

                    <div
                      className={`w-4 h-4 border flex items-center justify-center rounded-sm ${
                        selectedCategories.includes(category.slug)
                          ? "bg-black border-black"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedCategories.includes(category.slug) && (
                        <span className="w-2 h-2 bg-white rounded-sm"></span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-xs mb-4">Colors</h3>

              <div className="flex flex-wrap gap-3">
                {productColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handleColorToggle(color.name)}
                    title={color.name}
                    style={{
                      backgroundColor: color.colorCode,
                    }}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColors.includes(color.name)
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-xs mb-4">Price</h3>

              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />

              <p className="mt-3 text-sm text-gray-500">Up to ${maxPrice}</p>
            </div>

            <button
              onClick={clearFilters}
              className="w-full border py-3 hover:bg-gray-100 transition"
            >
              Clear Filters
            </button>
          </aside>

          <div>
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <p className="text-gray-500">
                Showing {filteredProducts.length} products
              </p>

              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="border px-4 py-2"
              >
                <option value="default">Default</option>

                <option value="lowtohigh">Price: Low to High</option>

                <option value="hightolow">Price: High to Low</option>

                <option value="newest">Newest</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full py-20 text-center">
                  <h3 className="text-2xl font-serif mb-2">
                    No products found
                  </h3>

                  <p className="text-gray-500 mb-6">
                    Try adjusting your filters.
                  </p>

                  <button onClick={clearFilters} className="border px-6 py-3">
                    Clear Filters
                  </button>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <ProductsCard key={product.id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
