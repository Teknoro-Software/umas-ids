"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/shop" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { cart } = useCart();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // 🔥 Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-black/80 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* 🔥 LOGO */}
                <h1
                    onClick={() => router.push("/")}
                    className="text-lg md:text-xl font-semibold text-white cursor-pointer tracking-wide"
                >
                    UMA&apos;S <span className="text-[#F4C47C]">IDS</span>
                </h1>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-8 text-sm text-gray-300">

                    {links.map((link) => {
                        const active = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative group transition"
                            >
                                <span
                                    className={`${active ? "text-white" : "group-hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </span>

                                {/* 🔥 Animated underline */}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#D97706] transition-all duration-300 ${active
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-5">

                    {/* CART */}
                    <div
                        onClick={() => router.push("/cart")}
                        className="relative cursor-pointer"
                    >
                        <ShoppingCart className="w-5 h-5 text-white" />

                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#D97706] text-white text-xs px-1.5 rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => router.push("/contact")}
                        className="hidden md:block bg-[#D97706] text-white px-5 py-2 text-sm rounded-full hover:scale-105 transition"
                    >
                        Get Quote
                    </button>

                    {/* MOBILE BUTTON */}
                    <button onClick={() => setOpen(!open)} className="md:hidden">
                        {open ? (
                            <X className="text-white" />
                        ) : (
                            <Menu className="text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col gap-6 text-sm text-gray-300">

                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="hover:text-white transition"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={() => {
                            router.push("/contact");
                            setOpen(false);
                        }}
                        className="mt-4 bg-[#A02D27] text-white py-3 rounded-full"
                    >
                        Get Quote
                    </button>
                </div>
            )}
        </nav>
    );
}