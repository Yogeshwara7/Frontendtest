import { useContext } from "react";
import { CartContext } from "../context/CardContext";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <h2 style={{ textAlign: "left", margin: 0 }}>Cart Items</h2>
      </div>

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
      
      <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
        <button
          style={{ padding: "12px 20px", cursor: cart.length === 0 ? "not-allowed" : "pointer", backgroundColor: cart.length === 0 ? "#ccc" : "#4CAF50", color: "white", border: "none", borderRadius: "6px" }}
          onClick={() => {
            if (cart.length === 0) return;
            if (window.confirm("Proceed to pay and clear cart?")) {
              clearCart();
              window.alert("Payment successful! Cart cleared.");
            }
          }}
          disabled={cart.length === 0}
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default Cart;
