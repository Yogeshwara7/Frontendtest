import { Link } from "react-router-dom";
import FlowerCard from "../components/Flowercard";

const flowers=[
    {id:1, name:"Rose", price:10, image:"https://plus.unsplash.com/premium_photo-1661963037608-26bdb13b2032?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:2, name:"Tulip", price:8, image:"https://images.unsplash.com/photo-1567429749616-6668b32b5a08?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:3, name:"Daisy", price:5, image:"https://images.unsplash.com/photo-1687445665323-5767393970cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

function Home(){
    return(
        <div style={{padding:"20px", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
            <h1>Flower Shop</h1>
            <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
                {flowers.map((flower)=>(
                    <FlowerCard key={flower.id} flower={flower}/>
                ))}
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
            <button style={{fontSize:"16px" , padding:"10px 20px", cursor:"pointer", color:"white", backgroundColor:"grey", border:"none", borderRadius:"5px"}}>
            <Link to="/Cart">Go to Cart</Link>
            </button>
            </div>
        </div>
    );
}

export default Home;