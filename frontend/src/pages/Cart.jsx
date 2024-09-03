import React, { useState } from "react";

function Cart() {
    const [cart, setCart] = useState([
        { id: 1, name: "Product 1", price: 50 },
        { id: 2, name: "Product 2", price: 30 },
        { id: 3, name: "Product 3", price: 20 },
    ]);

    const styles = {
        body: {
            fontFamily: "Arial, sans-serif",
            margin: 0,
            padding: 0,
            backgroundColor: "#f4f4f4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        },
        cartContainer: {
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
            textAlign: "center"
        },
        heading: {
            marginBottom: "20px",
            fontSize: "24px",
            color: "#333"
        },
        itemList: {
            listStyle: "none",
            padding: 0,
            margin: "0 0 20px 0"
        },
        item: {
            backgroundColor: "#fafafa",
            border: "1px solid #ddd",
            marginBottom: "10px",
            padding: "15px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        button: {
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            marginLeft: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px"
        },
        buttonHover: {
            backgroundColor: "#0056b3"
        },
        totalCost: {
            fontSize: "18px",
            fontWeight: "bold",
            margin: "10px 0",
            color: "#333"
        },
        clearButton: {
            backgroundColor: "#dc3545",
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            color: "#fff",
            border: "none"
        },
        clearButtonHover: {
            backgroundColor: "#c82333"
        },
        purchaseButton: {
            backgroundColor: "#28a745",
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            color: "#fff",
            border: "none"
        },
        purchaseButtonHover: {
            backgroundColor: "#218838"
        },
        emptyCartMessage: {
            color: "#777",
            fontSize: "18px"
        }
    };

    function buyItem(itemId) {
        alert(`Item with ID ${itemId} purchased!`);
    }

    function removeItem(itemId) {
        setCart(cart.filter(item => item.id !== itemId));
    }

    function clearCart() {
        setCart([]);
    }

    function purchaseAll() {
        alert('All items purchased!');
        setCart([]);
    }

    const totalCost = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div style={styles.body}>
            <div style={styles.cartContainer}>
                <h2 style={styles.heading}>Your Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p style={styles.emptyCartMessage}>Your cart is empty.</p>
                ) : (
                    <ul style={styles.itemList}>
                        {cart.map(item => (
                            <li key={item.id} style={styles.item}>
                                {item.name} - ${item.price}
                                <div>
                                    <button
                                        style={styles.button}
                                        onClick={() => buyItem(item.id)}
                                    >
                                        Buy
                                    </button>
                                    <button
                                        style={styles.button}
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {cart.length > 0 && (
                    <>
                        <div style={styles.totalCost}>Total: ${totalCost}</div>
                        <button style={styles.purchaseButton} onClick={purchaseAll}>
                            Purchase All
                        </button>
                        <button style={styles.clearButton} onClick={clearCart}>
                            Clear Cart
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
