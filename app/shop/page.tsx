"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Sambar Powder",
    price: "₹500 / kg",
    category: "Spices",
    image: "/images/sambar.webp",
  },
  {
    id: 2,
    name: "Chutney Powder",
    price: "₹385 / kg",
    category: "Spices",
    image: "/images/chutney.jpeg",
  },
  {
    id: 3,
    name: "Coriander Powder",
    price: "₹320 / kg",
    category: "Spices",
    image: "/images/coriander.webp",
  },
  {
    id: 4,
    name: "wheat Atta Powder",
    price: "₹375 / kg",
    category: "Spices",
    image: "/images/atta.jpg",
  },
  {
    id: 5,
    name: "Kashmiri Chilli Powder",
    price: "₹650 / kg",
    category: "Spices",
    image: "/images/kashmiri.jpg",
  },
  {
    id: 6,
    name: "Black Pepper Powder",
    price: "₹670 / piece",
    category: "Natural",
    image: "/images/pepper.webp",
  },
  {
    id: 7,
    name: "Red Chilli Powder",
    price: "₹420 / piece",
    category: "Spices",
    image: "/images/redchilli.jpg",
  },
  {
    id: 8,
    name: "Turmeric Powder",
    price: "₹360 / piece",
    category: "Spices",
    image: "/images/turmeric.jpg",
  },
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "Spices", "Natural"];

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#1B1B1B] min-h-screen px-6 md:px-20 py-24 text-white">

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Our Products
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Homemade & export-quality spices and natural products
        </p>
      </div>

      {/* FILTER
      <div className="flex gap-3 flex-wrap mb-12">
        {categories.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(item)}
            className={`px-5 py-2 text-sm rounded-full border transition ${activeCategory === item
                ? "bg-[#D97706] text-white border-[#D97706]"
                : "border-[#333] text-gray-300 hover:border-[#D97706]"
              }`}
          >
            {item}
          </button>
        ))}
      </div> */}

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >

            {/* CARD */}
            <div className="bg-[#262626] border border-[#333] rounded-xl overflow-hidden hover:border-[#3bb471] transition">

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-[10px] text-[#3bb471] uppercase">
                  {product.category}
                </p>

                <h3 className="text-sm font-medium">
                  {product.name}
                </h3>

                <p className="text-sm mt-1 text-gray-400">
                  {product.price}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: Number(product.price.replace(/[^0-9]/g, "")),
                      image: product.image,
                    })
                  }
                  className="mt-4 w-full bg-[#3bb471] text-white py-2 rounded-md text-sm hover:opacity-90 transition"
                >
                  Add to Inquiry
                </button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* 🔥 CTA SECTION */}
      <div className="mt-20 text-center">

        <h2 className="text-2xl font-semibold">
          Need Bulk Order or Custom Quantity?
        </h2>

        <p className="text-gray-400 mt-2 text-sm">
          Contact us directly for better pricing and export orders
        </p>

        <button
          onClick={() => router.push("/contact")}
          className="mt-6 bg-[#3bb471] px-6 py-3 rounded-md text-sm hover:opacity-90 transition">
          Contact Now
        </button>

      </div>

    </div>
  );
}