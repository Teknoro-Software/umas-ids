"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="px-6 md:px-20 py-24 bg-[#1B1B1B]">

            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT - IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <img
                        src="/about.jpg" // replace with your real image if needed
                        className="w-full h-[420px] object-cover rounded-xl shadow-lg"
                    />

                    {/* FLOAT LABEL */}
                    <div className="absolute bottom-6 left-6 bg-[#262626] border border-[#333] px-5 py-3 rounded-lg text-sm text-white">
                        🌿 Homemade & Authentic Products
                    </div>
                </motion.div>

                {/* RIGHT - CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* BADGE */}
                    <p className="text-xs tracking-[0.3em] text-[#3bb471] mb-4">
                        ABOUT US
                    </p>

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                        Homemade Goodness <br />
                        In Every Pack
                    </h2>

                    {/* TEXT */}
                    <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                        SHIFMAR FOODS is a homemade food brand specializing in freshly prepared
                        spice powders and traditional essentials like sambar powder, chutney
                        powder, chilli powder, turmeric, and more. Every product is made with
                        carefully selected ingredients, ensuring authentic taste, purity, and
                        quality in every pack.

                        <br /><br />

                        We focus on delivering hygienic, chemical-free, and flavorful products
                        that bring the true taste of homemade cooking to your kitchen.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-3 text-sm text-white">
                        <div>✔ Homemade & authentic recipes</div>
                        <div>✔ Freshly prepared & hygienic</div>
                        <div>✔ No preservatives or additives</div>
                    </div>

                    {/* STATS
                    <div className="flex gap-6 mt-10">

                        <div className="bg-[#262626] border border-[#333] px-6 py-4 rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-[#D97706]">8+</h3>
                            <p className="text-xs text-gray-400">Products</p>
                        </div>

                        <div className="bg-[#262626] border border-[#333] px-6 py-4 rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-[#D97706]">100%</h3>
                            <p className="text-xs text-gray-400">Homemade</p>
                        </div>

                        <div className="bg-[#262626] border border-[#333] px-6 py-4 rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-[#D97706]">Fresh</h3>
                            <p className="text-xs text-gray-400">Daily Prep</p>
                        </div>

                    </div> */}


                </motion.div>
            </div>
        </section>
    );
}