import { Link } from "react-router-dom";
import FlowerCard from "../components/Flowercard";
import { useContext } from "react";
import { CartContext } from "../context/CardContext";

function Home() {
    const { products } = useContext(CartContext);

    return (
        <div style={{ padding: "20px", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <h1>Flower Shop</h1>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                {products.length === 0 ? (
                    <p style={{ textAlign: "center", width: "100%" }}>No products available.</p>
                ) : (
                    products.map((flower) => <FlowerCard key={flower.id} flower={flower} />)
                )}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Link to="/Cart" style={{ textDecoration: "none" }}>
                    <button style={{ fontSize: "16px", padding: "10px 20px", cursor: "pointer", color: "white", backgroundColor: "grey", border: "none", borderRadius: "5px" }}>Go to Cart</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;