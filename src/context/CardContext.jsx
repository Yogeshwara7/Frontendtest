import { createContext, useState } from "react";

export const CartContext=createContext();

export function CartProvider({children}){
    const[cart, setCart]=useState([]);
    function addToCart(item){
        setCart([...cart, item]);
    }

    function clearCart(){
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart,addToCart,clearCart}}>
            {children}
        </CartContext.Provider>
    );
}