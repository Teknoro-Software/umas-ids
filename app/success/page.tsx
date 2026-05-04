"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

export default function SuccessPage() {
    const router = useRouter();

    const [requestId] = useState(() =>
        Math.floor(100000 + Math.random() * 900000)
    );

    return (
        <div className="relative bg-[#1B1B1B] min-h-screen flex items-center justify-center px-6 overflow-hidden text-white">

            {/* 🔥 GLOW */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D97706]/10 blur-3xl rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 text-center max-w-md w-full bg-[#262626] border border-[#333] rounded-2xl p-10 shadow-xl"
            >

                {/* ✅ ICON */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#D97706]/10 flex items-center justify-center"
                >
                    <Check className="w-7 h-7 text-[#D97706]" />
                </motion.div>

                {/* TITLE */}
                <h1 className="text-2xl md:text-3xl font-semibold">
                    Inquiry Submitted
                </h1>

                {/* SUBTEXT */}
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                    Your export inquiry has been received.
                    Our team will contact you shortly with pricing, availability,
                    and shipping details.
                </p>

                {/* REQUEST ID */}
                <div className="mt-8 text-sm text-gray-400">
                    Reference ID:
                    <span className="ml-2 text-white font-medium">
                        #{requestId}
                    </span>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-[#333] my-10"></div>

                {/* ACTIONS */}
                <div className="space-y-3">

                    <button
                        onClick={() => router.push("/shop")}
                        className="w-full bg-[#D97706] text-white py-3 rounded-md text-sm hover:opacity-90 transition"
                    >
                        Browse More Products
                    </button>

                    <button
                        onClick={() => router.push("/")}
                        className="w-full text-sm text-gray-400 hover:text-white transition"
                    >
                        Back to Home
                    </button>

                </div>

            </motion.div>
        </div>
    );
}