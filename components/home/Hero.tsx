"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();

    return (
        <section className="relative h-screen overflow-hidden">

            {/* 🍲 BACKGROUND IMAGE */}
            <img
                src="/hero.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 🌑 DARK OVERLAY (important for readability) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white max-w-4xl">

                {/* BRAND */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    SHIFMAR FOODS PRIVATE LIMITED
                </motion.h1>

                {/* BADGE */}
                <div className="mt-6 inline-block border border-white/40 px-4 py-1 text-xs tracking-widest text-gray-200">
                    HANDMADE • AUTHENTIC • HOME STYLE
                </div>

                {/* MAIN TITLE */}
                <h2 className="mt-8 text-3xl md:text-5xl font-semibold leading-tight">
                    Fresh Homemade <br />
                    Spice Powders & Atta
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-5 text-gray-300 max-w-md text-sm md:text-base">
                    Prepared using traditional methods with high-quality ingredients,
                    delivering rich taste and authentic homemade flavor.
                </p>

                {/* PRODUCT TAGS */}
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-200">
                    <span>Sambar Powder</span>
                    <span>Chutney Powder</span>
                    <span>Chilli Powder</span>
                    <span>Turmeric</span>
                    <span>Black Pepper</span>
                    <span>Wheat Atta</span>
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">

                    <button
                        onClick={() => router.push("/shop")}
                        className="bg-[#3bb471] px-8 py-3 text-white text-sm hover:scale-[1.05] transition"
                    >
                        View Products
                    </button>

                    <button
                        onClick={() => router.push("/contact")}
                        className="border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition"
                    >
                        Order Now
                    </button>

                </div>

                {/* CONTACT */}
                <div className="mt-8 text-sm text-gray-300">
                    📞 9495368709 / 8891542092
                </div>

            </div>

            {/* BOTTOM STRIP */}
            <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md py-4 flex justify-center gap-10 text-white text-xs">

                <span className="flex flex-row items-center"><Check className="mt-1 mr-1" size={15} color="#3bb471" /> 100% Veg</span>
                <span className="flex flex-row items-center"><Check className="mt-1 mr-1" size={15} color="#3bb471" /> FSSAI Approved</span>
                <span className="flex flex-row items-center"><Check className="mt-1 mr-1" size={15} color="#3bb471" /> Homemade Quality</span>

            </div>

        </section>
    );
}