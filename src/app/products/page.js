"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

import ProductsCard from "@/components/home/ProductsCard";
import Title from "@/components/home/Title";

import {
  categories,
  productColors,
  products,
} from "@/lib/data";

const ProductPage = () => {
  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [selectedColors, setSelectedColors] =
    useState([]);

  const [sortType, setSortType] =
    useState("default");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 12;

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(
          product.category
        )
      );
    }

    // Colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
        selectedColors.includes(
          product.color
        )
      );
    }

    // Sorting
    switch (sortType) {
      case "lowtohigh":
        filtered.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "hightolow":
        filtered.sort(
          (a, b) => b.price - a.price
        );
        break;

      case "newarrivals":
        filtered.sort(
          (a, b) => Number(b.id) - Number(a.id)
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [
    searchTerm,
    selectedCategories,
    selectedColors,
    sortType,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    selectedCategories,
    selectedColors,
    sortType,
  ]);

  const totalPages = Math.ceil(
    filteredProducts.length /
      productsPerPage
  );

  const startIndex =
    (currentPage - 1) *
    productsPerPage;

  const paginatedProducts =
    filteredProducts.slice(
      startIndex,
      startIndex +
        productsPerPage
    );

  return (
    <div className="py-20">
      {/* Hero */}
      <div className="bg-stone-100 py-20 px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <Title
            title="Our Collection"
            subTitle="Discover timeless furniture crafted with natural materials and Scandinavian simplicity."
            align="center"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-72">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div>
                <h3 className="font-medium mb-3">
                  Search
                </h3>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />

                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    className="w-full border border-stone-300 pl-10 pr-4 py-3 outline-none focus:border-stone-900"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-medium mb-4">
                  Categories
                </h3>

                <div className="space-y-3">
                  {categories.map(
                    (category) => (
                      <label
                        key={category.slug}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(
                            category.slug
                          )}
                          onChange={() =>
                            toggleCategory(
                              category.slug
                            )
                          }
                        />

                        <span>
                          {category.name}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-medium mb-4">
                  Colors
                </h3>

                <div className="space-y-3">
                  {productColors.map(
                    (color) => (
                      <label
                        key={color}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(
                            color
                          )}
                          onChange={() =>
                            toggleColor(
                              color
                            )
                          }
                        />

                        <span>{color}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Clear */}
              <button
                onClick={() => {
                  setSelectedCategories(
                    []
                  );
                  setSelectedColors(
                    []
                  );
                  setSortType(
                    "default"
                  );
                  setSearchTerm("");
                }}
                className="w-full border border-stone-300 py-3 hover:bg-stone-100 transition"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Products */}
          <main className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <p className="text-stone-500">
                Showing{" "}
                {filteredProducts.length ===
                0
                  ? 0
                  : startIndex + 1}
                –
                {Math.min(
                  startIndex +
                    productsPerPage,
                  filteredProducts.length
                )}{" "}
                of{" "}
                {
                  filteredProducts.length
                }{" "}
                products
              </p>

              <select
                value={sortType}
                onChange={(e) =>
                  setSortType(
                    e.target.value
                  )
                }
                className="border border-stone-300 px-4 py-3"
              >
                <option value="default">
                  Default Sorting
                </option>

                <option value="lowtohigh">
                  Price: Low to High
                </option>

                <option value="hightolow">
                  Price: High to Low
                </option>

                <option value="newarrivals">
                  New Arrivals
                </option>
              </select>
            </div>

            {/* Grid */}
            <div className="min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {paginatedProducts.map(
                (product) => (
                  <ProductsCard
                    key={product.id}
                    product={product}
                  />
                )
              )}
            </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                <button
                  disabled={
                    currentPage === 1
                  }
                  onClick={() =>
                    setCurrentPage(
                      (prev) =>
                        prev - 1
                    )
                  }
                  className="px-4 py-2 border border-stone-300 disabled:opacity-40"
                >
                  Prev
                </button>

                {[
                  ...Array(totalPages),
                ].map(
                  (_, index) => {
                    const page =
                      index + 1;

                    return (
                      <button
                        key={page}
                        onClick={() =>
                          setCurrentPage(
                            page
                          )
                        }
                        className={`w-10 h-10 border transition ${
                          currentPage ===
                          page
                            ? "bg-stone-900 text-white border-stone-900"
                            : "border-stone-300 hover:border-stone-900"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                )}

                <button
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    setCurrentPage(
                      (prev) =>
                        prev + 1
                    )
                  }
                  className="px-4 py-2 border border-stone-300 disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;