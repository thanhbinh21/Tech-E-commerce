import React, { createContext, useState, useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  
  const [total, setTotal] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      const items = JSON.parse(savedCartItems);
      return items.reduce((sum, item) => sum + item.quantity, 0);
    }
    return 0;
  });

  

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const newTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const addToCart = (product, quantityChange = 1) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityChange }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantityChange }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };


  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        total,
        setTotal,
        addToCart, 
        removeFromCart,
        updateQuantity,
      }}
    >
    
      {children}
    </CartContext.Provider>
  );
};