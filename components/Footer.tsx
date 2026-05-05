"use client";

import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="bg-[#1B1B1B] text-white mt-20">

            {/* 🔔 CTA STRIP */}
            <div className="mx-6 md:mx-20 -mt-16 mb-14 bg-[#3bb471] rounded-xl px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Looking for Homemade Quality or Bulk Supply?
                    </h2>
                    <p className="text-sm text-white/80 mt-1">
                        We provide fresh homemade products and also handle export orders worldwide
                    </p>
                </div>

                <button
                    onClick={() => router.push("/contact")}
                    className="bg-white text-[#1B1B1B] px-6 py-3 text-sm rounded-md hover:opacity-90 transition"
                >
                    Contact Us
                </button>
            </div>

            {/* 🧊 MAIN FOOTER */}
            <div className="px-6 md:px-20 py-5 border-t border-white/10 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div>
                        <Image
                                                src="/logo.png"
                                                alt="SHIFAS FOODS"
                                                width={160}
                                                height={50}
                                                className="relative object-contain h-10 w-auto brightness-110"
                                            />
                        <p className="mt-3 text-sm text-white/70 leading-relaxed">
                            Homemade spice powders and traditional food products made with
                            authentic recipes and fresh ingredients. We also supply bulk
                            orders and export products to international markets.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="font-medium text-[#3bb471] mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li onClick={() => router.push("/")} className="cursor-pointer hover:text-white">Home</li>
                            <li onClick={() => router.push("/shop")} className="cursor-pointer hover:text-white">Products</li>
                            <li onClick={() => router.push("/contact")} className="cursor-pointer hover:text-white">Contact</li>
                        </ul>
                    </div>

                    {/* PRODUCTS */}
                    <div>
                        <h4 className="font-medium text-[#3bb471] mb-3">
                            Products
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>Sambar Powder</li>
                            <li>Chutney Powder</li>
                            <li>Chilli Powder</li>
                            <li>Turmeric</li>
                            <li>Black Pepper</li>
                            <li>Wheat Atta</li>
                        </ul>
                    </div>

                    {/* CONTACT / SOCIAL */}
                    <div>
                        <h4 className="font-medium text-[#3bb471] mb-3">
                            Connect
                        </h4>

                        <p className="text-sm text-white/70 mb-3">
                            📞 9495368709 <br />
                            📞 8891542092
                        </p>

                        <div className="flex gap-4 text-white/70 text-lg">

                            <motion.div whileHover={{ scale: 1.2 }}>
                                <FaFacebook className="cursor-pointer hover:text-white" />
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.2 }}>
                                <FaInstagram className="cursor-pointer hover:text-white" />
                            </motion.div>

                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/50">
                    © 2026 SHIFMAR FOODS PRIVATE LIMITED. All rights reserved.
                </div>

            </div>
        </footer>
    );
}