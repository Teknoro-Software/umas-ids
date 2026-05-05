"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, CookingPot } from "lucide-react";

const steps = [
    {
        title: "Ingredient Selection",
        desc: "We carefully select fresh and high-quality spices to ensure authentic taste and aroma.",
        icon: Leaf,
    },
    {
        title: "Homemade Preparation",
        desc: "Spices are cleaned, roasted, and ground using traditional homemade methods.",
        icon: CookingPot,
    },
    {
        title: "Packing & Delivery",
        desc: "Hygienically packed and delivered fresh to maintain quality and flavor.",
        icon: ShieldCheck,
    },
];

export default function Process() {
    return (
        <section className="px-6 md:px-20 py-24 bg-[#1B1B1B]">

            {/* TITLE */}
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Our Process
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                    From fresh ingredients to your kitchen
                </p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-8">

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className="group text-center"
                    >

                        {/* ICON */}
                        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#3bb471] text-white mb-6 group-hover:scale-110 transition">
                            <step.icon className="w-6 h-6" />
                        </div>

                        {/* STEP */}
                        <p className="text-xs tracking-widest text-[#3bb471] mb-2">
                            STEP {i + 1}
                        </p>

                        {/* CARD */}
                        <div className="bg-[#262626] border border-[#333] p-6 rounded-xl hover:border-[#3bb471] transition">

                            <h3 className="text-lg font-semibold text-white">
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-400 mt-2">
                                {step.desc}
                            </p>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}