import { useContext } from "react";
import { CartContext } from "../context/CardContext";

function FlowerCard({flower}){
    const{addToCart} = useContext(CartContext);

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            border:"1px solid gray",
            margin:"10px",
            padding:"10px",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            backgroundColor:"#f9f9f9",
        }}>
        
        <img src={flower.image} alt={flower.name} style={{width:"200px", height:"200px", objectFit:"cover", border:"1px solid gray", padding:"6px", backgroundColor:"#fff", borderRadius:"4px"}}/>
        <h3>{flower.name}</h3>
        <p>Price: {flower.price}Rs</p>
       <button style={{color:"white", backgroundColor:"grey", cursor:"pointer"}} onClick={() => {
    addToCart(flower);
}}>
  Add to Cart
</button>

        </div>
    );
}

export default FlowerCard;