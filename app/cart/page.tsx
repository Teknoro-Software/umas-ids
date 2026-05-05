"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeItem, updateQty } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-[#1B1B1B] min-h-screen px-6 md:px-20 py-24 text-white">

      {/* HEADER */}
      <div className="mb-16 flex justify-between items-end">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Your Inquiry List
        </h1>

        <p className="text-sm text-gray-400">
          {cart.length} items
        </p>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <div className="text-center mt-40">
          <p className="text-gray-400 mb-6">
            No products added yet
          </p>

          <button
            onClick={() => router.push("/shop")}
            className="px-6 py-3 bg-[#3bb471] text-white text-sm rounded-md hover:opacity-90 transition"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-16">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-8">

            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-6 items-center bg-[#262626] border border-[#333] rounded-xl p-4"
              >

                {/* IMAGE */}
                <img
                  src={item.image || "/images/fallback.jpg"}
                  onError={(e) => {
                    e.currentTarget.src = "/images/fallback.jpg";
                  }}
                  className="w-24 h-28 object-cover rounded-md"
                />

                {/* DETAILS */}
                <div className="flex-1">

                  <h3 className="text-sm font-medium">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-[#3bb471] mt-1 uppercase">
                    Inquiry Product
                  </p>

                  <p className="text-sm mt-2 text-gray-400">
                    ₹{item.price.toLocaleString()}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-4 mt-4">

                    <div className="flex items-center border border-[#333] rounded-md overflow-hidden">

                      <button
                        onClick={() => updateQty(item.id, "dec")}
                        className="px-3 py-1 hover:bg-[#333]"
                      >
                        −
                      </button>

                      <span className="px-4 text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, "inc")}
                        className="px-3 py-1 hover:bg-[#333]"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-gray-400 hover:text-red-400"
                    >
                      Remove
                    </button>

                  </div>

                </div>

                {/* PRICE */}
                <div className="text-sm font-semibold">
                  ₹{(item.price * item.qty).toLocaleString()}
                </div>

              </motion.div>
            ))}

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#262626] border border-[#333] rounded-xl p-8 h-fit"
          >

            <h3 className="text-sm tracking-wide mb-8 text-gray-300">
              Inquiry Summary
            </h3>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-400">Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm mb-6">
              <span className="text-gray-400">Delivery</span>
              <span>Discussed later</span>
            </div>

            <div className="border-t border-[#333] pt-4 flex justify-between text-sm mb-8">
              <span>Total Estimate</span>
              <span className="font-semibold">
                ₹{total.toLocaleString()}
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-[#3bb471] text-white py-3 rounded-md text-sm hover:opacity-90 transition"
            >
              Proceed to Checkout
            </button>

          </motion.div>

        </div>
      )}
    </div>
  );
}