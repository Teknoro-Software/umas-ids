"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

type CartItem = Product & {
    qty: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeItem: (id: number) => void;
    updateQty: (id: number, type: "inc" | "dec") => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => useContext(CartContext)!;

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window === "undefined") return [];

        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    

    // ✅ SAVE TO LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // 🛒 ADD TO CART
    const addToCart = (product: Product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);

            if (exists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            return [...prev, { ...product, qty: 1 }];
        });
    };

    // ❌ REMOVE ITEM
    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // ➕ ➖ UPDATE QTY
    const updateQty = (id: number, type: "inc" | "dec") => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            qty:
                                type === "inc"
                                    ? item.qty + 1
                                    : item.qty - 1,
                        }
                        : item
                )
                .filter((item) => item.qty > 0) // ✅ auto remove if 0
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, updateQty }}>
            {children}
        </CartContext.Provider>
    );
}