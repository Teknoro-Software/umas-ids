"use client";

import { motion } from "framer-motion";
import { Globe, Package, Truck } from "lucide-react";

const services = [
    {
        title: "Spice Export",
        desc: "Exporting premium Indian spices to UAE, Europe, and USA markets.",
        icon: Globe,
    },
    {
        title: "Bulk Orders",
        desc: "Large-scale supply for wholesalers, distributors, and global buyers.",
        icon: Package,
    },
    {
        title: "Global Shipping",
        desc: "Reliable logistics ensuring fast and secure international delivery.",
        icon: Truck,
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-[#1B1B1B]">

            {/* TITLE */}
            <div className="px-6 md:px-20 mb-14 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Our Services
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                    End-to-end export solutions for global markets
                </p>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20">

                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >

                        {/* CARD */}
                        <div className="h-full bg-[#262626] border border-[#333] rounded-xl p-8 text-center hover:border-[#3bb471] transition duration-300">

                            {/* ICON */}
                            <div className="mb-5 text-[#3bb471] flex justify-center group-hover:scale-110 transition">
                                <service.icon className="w-8 h-8" />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold text-white">
                                {service.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                                {service.desc}
                            </p>

                            {/* CTA */}
                            <p className="mt-5 text-[#3bb471] text-sm opacity-0 group-hover:opacity-100 transition">
                                Learn More →
                            </p>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}