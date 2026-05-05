"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#1B1B1B] min-h-screen px-6 md:px-20 py-24 relative overflow-hidden text-white">

      {/* 🔥 GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3bb471]/10 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Let’s Connect for{" "}
          <span className="text-[#3bb471]">Global Export</span>
        </h1>

        <p className="mt-6 text-gray-400 text-base">
          Looking for premium spices and natural products?
          Contact us for bulk supply, export inquiries, and partnerships.
        </p>
      </motion.div>

      {/* MAIN */}
      <div className="grid md:grid-cols-2 gap-16 items-start relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#3bb471]/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#3bb471]" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-gray-400 text-sm mt-1">
                Kerala, India
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#3bb471]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#3bb471]" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-gray-400 text-sm mt-1">
                support@shifmarfoods.com
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#3bb471]/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#3bb471]" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-gray-400 text-sm mt-1">
                +91 9544250000
              </p>
            </div>
          </div>

          {/* INFO */}
          <div className="bg-[#262626] border border-[#333] p-6 rounded-xl">
            <p className="text-sm text-gray-400">
              We respond within 24 hours for all export inquiries and bulk orders.
            </p>
          </div>

          {/* WHATSAPP CTA */}
          <button className="w-full bg-[#25D366] text-black py-3 rounded-md text-sm hover:opacity-90 transition">
            Chat on WhatsApp
          </button>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#262626] border border-[#333] p-8 rounded-2xl"
        >

          <h2 className="text-xl font-semibold mb-6">
            Send Inquiry
          </h2>

          <form className="space-y-5">

            <div className="grid grid-cols-2 gap-4">
              <input className="input4 bg-[#1B1B1B] border-[#333]" placeholder="First Name" />
              <input className="input4 bg-[#1B1B1B] border-[#333]" placeholder="Last Name" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input className="input4 bg-[#1B1B1B] border-[#333]" placeholder="Email" />
              <input className="input4 bg-[#1B1B1B] border-[#333]" placeholder="Phone" />
            </div>

            <textarea
              rows={5}
              className="input4 resize-none bg-[#1B1B1B] border-[#333]"
              placeholder="Enter your requirement..."
            />

            <button className="w-full bg-[#3bb471] text-white py-3 rounded-md hover:opacity-90 transition">
              Submit Inquiry
            </button>

          </form>

        </motion.div>

      </div>
    </div>
  );
}