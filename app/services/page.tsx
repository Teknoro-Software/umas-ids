"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Package,
  Truck,
  ShieldCheck,
  Leaf,
  Warehouse,
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Homemade Spice Products",
    desc: "Freshly prepared spice powders using traditional recipes and premium ingredients.",
    icon: Leaf,
    image: "/images/spices.avif",
  },
  {
    title: "Bulk Orders",
    desc: "Large-scale supply for retailers, wholesalers, and business customers.",
    icon: Package,
    image: "/images/bulk.jpg",
  },
  {
    title: "Export Services",
    desc: "Exporting quality products to UAE, Europe, and USA markets.",
    icon: Globe,
    image: "/images/export.jpg",
  },
  {
    title: "Quality Assurance",
    desc: "Every batch is checked for freshness, hygiene, and consistency.",
    icon: ShieldCheck,
    image: "/images/quality.jpg",
  },
  {
    title: "Direct Sourcing",
    desc: "Carefully selected raw materials from trusted suppliers.",
    icon: Warehouse,
    image: "/images/farm.jpg",
  },
  {
    title: "Reliable Delivery",
    desc: "Fast and safe delivery for both local and export orders.",
    icon: Truck,
    image: "/images/shipping.jpg",
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="bg-[#1B1B1B] text-white">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] flex items-center px-6 md:px-20 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1400&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-2xl">
          <p className="text-sm text-white/70">Home / Services</p>

          <h1 className="text-4xl md:text-5xl font-semibold mt-3">
            Quality You Can Trust <br /> From Kitchen to Global Markets
          </h1>

          <p className="mt-4 text-sm text-white/80">
            From homemade spice powders to bulk and export supply,
            we deliver freshness, quality, and reliability.
          </p>
        </div>

      </section>

      {/* 💎 SERVICES GRID */}
      <section className="px-6 md:px-20 py-20">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="bg-[#262626] border border-[#333] rounded-xl overflow-hidden hover:border-[#3bb471] transition">

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="mb-3 text-[#3bb471]">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">
                    {item.desc}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* 🌿 FEATURE SPLIT */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/hero.jpeg"
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold">
            Homemade Quality Meets Global Standards
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            SHIFMAR FOODS combines traditional homemade preparation methods with
            modern packaging and logistics. Whether for local customers or
            international markets, we ensure consistent quality and taste.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="mt-6 bg-[#3bb471] text-white px-6 py-3 text-sm rounded-md hover:opacity-90 transition"
          >
            Contact Us
          </button>
        </div>

      </section>

      {/* 💼 TRUST STRIP */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-3 gap-6">

        {[
          "Homemade & Authentic",
          "Bulk & Export Available",
          "Trusted by Customers",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-8 text-center rounded-lg ${i === 1
              ? "bg-[#3bb471] text-white"
                : "bg-[#262626] border border-[#333]"
              }`}
          >
            <h3 className="font-medium">{item}</h3>
          </motion.div>
        ))}

      </section>

    </div>
  );
}