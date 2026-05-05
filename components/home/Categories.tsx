"use client";

import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "Sambar Powder",
        image: "/images/sambar.webp",
        prices: ["100g - ₹52", "250g - ₹128", "500g - ₹252", "1kg - ₹500"],
    },
    {
        id: 2,
        name: "Chutney Powder",
        image: "/images/chutney.jpeg",
        prices: ["100g - ₹40", "250g - ₹98", "500g - ₹190", "1kg - ₹385"],
    },
    {
        id: 3,
        name: "Red Chilli Powder",
        image: "/images/redchilli.jpg",
        prices: ["100g - ₹45", "250g - ₹110", "500g - ₹215", "1kg - ₹420"],
    },
    {
        id: 4,
        name: "Coriander Powder",
        image: "/images/coriander.webp",
        prices: ["100g - ₹35", "250g - ₹85", "500g - ₹165", "1kg - ₹320"],
    },
    {
        id: 5,
        name: "Kashmiri Red Chilli",
        image: "/images/kashmiri.jpg",
        prices: ["100g - ₹70", "250g - ₹170", "500g - ₹330", "1kg - ₹650"],
    },
    {
        id: 6,
        name: "Turmeric Powder",
        image: "/images/turmeric.jpg",
        prices: ["100g - ₹40", "250g - ₹100", "500g - ₹180", "1kg - ₹360"],
    },
    {
        id: 7,
        name: "Black Pepper Powder",
        image: "/images/pepper.webp",
        prices: ["50g - ₹70", "100g - ₹135", "250g - ₹337", "500g - ₹670"],
    },
    {
        id: 8,
        name: "Whole Wheat Atta",
        image: "/images/atta.jpg",
        prices: ["500g - ₹40", "1kg - ₹76", "2kg - ₹150", "5kg - ₹375"],
    },
];

export default function ProductsSection() {
    return (
        <section className="py-20 bg-[#1B1B1B]">

            {/* TITLE */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Spice Products
                </h2>
                <p className="text-sm mt-2 text-gray-400">
                    Homemade • Authentic • Freshly Ground
                </p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-4 gap-8 px-6 md:px-10">

                {products.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-[#262626] p-6 rounded-xl border border-[#333] hover:border-[#3bb471] transition group"
                    >

                        <div className="flex gap-5 items-center">

                            {/* IMAGE */}
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#3bb471]/30 group-hover:border-[#3bb471] transition">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* TEXT */}
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {item.id}. {item.name}
                                </h3>

                                <p className="text-xs text-gray-400 mt-2 mb-2">
                                    Available in:
                                </p>

                                <div className="text-sm text-gray-200 space-y-1">
                                    {item.prices.map((p, idx) => (
                                        <div key={idx}>{p}</div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </motion.div>
                ))}

            </div>


        </section>
    );
}