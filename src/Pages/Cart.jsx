import { useContext } from "react";
import { CartContext } from "../context/CardContext";

function Cart(){
    const{cart} = useContext(CartContext);
    console.log("Cart items:", cart);
    return(
        <div style={{padding:"20px"}}>
            <h2>Cart Items</h2>
            {cart.length===0 ? (
                <p>No items in the cart</p>
            ) : (  cart.map((item, index)=>(
                <div key={index} style={{border:"1px solid gray", margin:"10px", padding:"10px", display:"flex", gap:"20px", alignItems:"center"}}>
                    <img src={item.image} alt={item.name} style={{width:"150px", height:"150px", objectFit:"cover", border:"1px solid gray", padding:"6px", backgroundColor:"#fff", borderRadius:"4px"}}/>
                    <div>
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}Rs</p>
                    </div>
                </div>
            ))
            )}
        </div>
    );
}

export default Cart;