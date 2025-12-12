import { useContext } from "react";
import { CartContext } from "../context/CardContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Cart Items</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>No items in the cart</p>
      ) : (
        <div
          style={{
            display: "flex",flexWrap: "wrap",gap: "20px",justifyContent: "center",marginTop: "20px"
          }}
        >
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                width: "250px",border: "1px solid gray",borderRadius: "10px",padding: "15px",backgroundColor: "#f0f8ff",display: "flex",flexDirection: "column",alignItems: "center"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "200px",height: "200px", objectFit: "cover", borderRadius: "10px",border: "1px solid gray",marginBottom: "10px"
                }}
              />

              <h3 style={{ margin: "5px 0" }}>{item.name}</h3>
              <p style={{ margin: 0 }}>Price: {item.price} Rs</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
