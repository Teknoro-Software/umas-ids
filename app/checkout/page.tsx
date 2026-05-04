/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CheckoutPage() {
    const { cart } = useCart();
    const router = useRouter();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        phone: "",
        email: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        localStorage.setItem("quoteRequest", JSON.stringify({ cart, form }));
        localStorage.removeItem("cart");
        router.push("/success");
    };

    return (
        <div className="bg-[#1B1B1B] min-h-screen px-6 md:px-20 py-24 text-white">

            {/* HEADER */}
            <div className="mb-14">
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Export Inquiry
                </h1>
                <p className="text-sm text-gray-400 mt-2">
                    Share your requirements and our team will contact you shortly
                </p>
            </div>

            {cart.length === 0 ? (
                <div className="text-center mt-40">
                    <p className="text-gray-400 mb-6">
                        No products selected
                    </p>

                    <button
                        onClick={() => router.push("/shop")}
                        className="px-6 py-3 bg-[#D97706] text-white rounded-md"
                    >
                        Browse Products
                    </button>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-16">

                    {/* LEFT - FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#262626] border border-[#333] rounded-xl p-8"
                    >

                        <h2 className="text-lg font-medium mb-6">
                            Customer Details
                        </h2>

                        <div className="space-y-5">

                            {/* NAME */}
                            <div className="grid grid-cols-2 gap-4">
                                <input name="firstName" onChange={handleChange} placeholder="First Name" className="input4 bg-[#1B1B1B] border-[#333]" />
                                <input name="lastName" onChange={handleChange} placeholder="Last Name" className="input4 bg-[#1B1B1B] border-[#333]" />
                            </div>

                            {/* ADDRESS */}
                            <input name="address" onChange={handleChange} placeholder="Delivery Location" className="input4 bg-[#1B1B1B] border-[#333]" />

                            {/* CITY */}
                            <div className="grid grid-cols-3 gap-4">
                                <input name="city" onChange={handleChange} placeholder="City" className="input4 bg-[#1B1B1B] border-[#333]" />
                                <input name="state" onChange={handleChange} placeholder="State" className="input4 bg-[#1B1B1B] border-[#333]" />
                                <input name="pin" onChange={handleChange} placeholder="PIN" className="input4 bg-[#1B1B1B] border-[#333]" />
                            </div>

                            {/* CONTACT */}
                            <input name="phone" onChange={handleChange} placeholder="Phone Number" className="input4 bg-[#1B1B1B] border-[#333]" />
                            <input name="email" onChange={handleChange} placeholder="Email Address" className="input4 bg-[#1B1B1B] border-[#333]" />

                            <textarea
                                rows={4}
                                placeholder="Additional requirements (optional)"
                                className="input4 bg-[#1B1B1B] border-[#333]"
                            />

                        </div>

                    </motion.div>

                    {/* RIGHT - SUMMARY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#262626] border border-[#333] rounded-xl p-8 h-fit"
                    >

                        <h2 className="text-lg font-medium mb-6">
                            Inquiry Summary
                        </h2>

                        {/* ITEMS */}
                        <div className="space-y-4 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-gray-400">
                                        {item.name} × {item.qty}
                                    </span>
                                    <span>
                                        ₹{(item.price * item.qty).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* TOTAL */}
                        <div className="border-t border-[#333] pt-4 flex justify-between mb-8">
                            <span className="text-gray-400">Estimated Total</span>
                            <span className="font-semibold">
                                ₹{total.toLocaleString()}
                            </span>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-[#D97706] text-white py-3 rounded-md hover:opacity-90 transition"
                        >
                            Place Order
                        </button>

                    </motion.div>

                </div>
            )}
        </div>
    );
}