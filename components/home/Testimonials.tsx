"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Ahmed Khan",
        role: "Importer – UAE",
        text: "Consistent quality and reliable shipments. A trusted partner for our imports.",
    },
    {
        name: "Sophia Müller",
        role: "Distributor – Germany",
        text: "Professional service and excellent export handling. Meets high international standards.",
    },
    {
        name: "John Williams",
        role: "Buyer – USA",
        text: "Premium products with smooth logistics and timely delivery every time.",
    },
    {
        name: "David Lee",
        role: "Wholesale Buyer – Singapore",
        text: "Great pricing, consistent supply, and strong communication throughout.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-r from-[#E1A49A]/40 via-transparent to-[#F4C47C]/30 overflow-hidden relative">

            {/* 🌿 BACKGROUND GLOW */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A02D27]/10 rounded-full blur-3xl"></div>

            {/* TITLE */}
            <div className="px-6 md:px-20 mb-16 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    What Our Clients Say
                </h2>
                <p className="text-sm text-[#6C5547] mt-2">
                    Trusted by global importers and distributors
                </p>
            </div>

            {/* SCROLL */}
            <div className="relative z-10">

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-8 w-max px-6 md:px-20"
                >

                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="min-w-[320px] group"
                        >

                            {/* CARD */}
                            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-xl shadow-md hover:shadow-xl transition relative">

                                {/* ⭐ TOP ACCENT */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#A02D27] opacity-70"></div>

                                {/* TEXT */}
                                <p className="text-sm text-[#2A1A17] leading-relaxed">
                                    “{t.text}”
                                </p>

                                {/* USER */}
                                <div className="mt-6 flex items-center justify-between">

                                    <div>
                                        <h4 className="text-sm font-semibold text-[#2A1A17]">
                                            {t.name}
                                        </h4>
                                        <p className="text-xs text-[#6C5547]">
                                            {t.role}
                                        </p>
                                    </div>

                                    {/* ⭐ RATING */}
                                    <div className="text-[#A02D27] text-sm">
                                        ★★★★★
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}