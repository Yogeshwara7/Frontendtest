import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CardContext";

function Cart() {
  const { cart, clearCart, removeProductsByIds, resetProducts } = useContext(CartContext);
  const navigate = useNavigate();

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
      
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
        <button
          style={{ padding: "12px 20px", cursor: "pointer", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "6px" }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>

        <button
          style={{ padding: "12px 20px", cursor: "pointer", backgroundColor: "#0275d8", color: "white", border: "none", borderRadius: "6px" }}
          onClick={() => {
            if (window.confirm("Reset products to initial state? This restores any removed items.")) {
              resetProducts();
              window.alert("Products reset to initial state.");
            }
          }}
        >
          Reset
        </button>

        <button
          style={{ padding: "12px 20px", cursor: cart.length === 0 ? "not-allowed" : "pointer", backgroundColor: cart.length === 0 ? "#ccc" : "#4CAF50", color: "white", border: "none", borderRadius: "6px" }}
          onClick={() => {
            if (cart.length === 0) return;
            if (window.confirm("Proceed to pay and remove these items from the site?")) {
              console.log("Cart before pay:", cart);
              const idsToRemove = cart.map((it) => it.id).filter(Boolean).map((id) => Number(id));
              console.log("IDs to remove:", idsToRemove);
              if (idsToRemove.length > 0) {
                removeProductsByIds(idsToRemove);
                console.log("Products after removal will be updated in context and localStorage");
              }
              clearCart();
              window.alert("Payment successful! Items removed from site and cart cleared.");
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
