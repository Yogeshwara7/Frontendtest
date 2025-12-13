import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const initialProducts = [
    { id: 1, name: "Rose", price: 10, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { id: 2, name: "Tulip", price: 8, image: "https://images.unsplash.com/photo-1567429749616-6668b32b5a08?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { id: 3, name: "Daisy", price: 5, image: "https://images.unsplash.com/photo-1687445665323-5767393970cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { id: 4, name: "Daisy1", price: 5, image: "https://images.unsplash.com/photo-1687445665323-5767393970cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { id: 5, name: "Daisy2", price: 5, image: "https://images.unsplash.com/photo-1687445665323-5767393970cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0" },
];

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
            const saved = localStorage.getItem("cart");
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    });

    const [products, setProducts] = useState(() => {
        try {
            const saved = localStorage.getItem("products");
            return saved ? JSON.parse(saved) : initialProducts;
        } catch (e) {
            return initialProducts;
        }
    });

    function addToCart(item) {
        setCart((prev) => [...prev, item]);
    }

    function clearCart() {
    setCart([]);
    }

    function removeProductsByIds(ids) {
        const idsNum = ids.map((id) => Number(id));
        setProducts((prev) => prev.filter((p) => !idsNum.includes(Number(p.id))));
    }

    function resetProducts() {
        setProducts(initialProducts);
        try {
            localStorage.removeItem("products");
        } catch (e) {}
    }
        useEffect(() => {
            try {
                localStorage.setItem("products", JSON.stringify(products));
            } catch (e) {
            }
        }, [products]);

        useEffect(() => {
            try {
                localStorage.setItem("cart", JSON.stringify(cart));
            } catch (e) {
            }
        }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, products, removeProductsByIds, resetProducts }}>
            {children}
        </CartContext.Provider>
    );
}