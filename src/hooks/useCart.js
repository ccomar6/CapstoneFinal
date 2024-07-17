// src/hooks/useCart.js
import { useState, useEffect } from 'react';

const useCart = () => {
  const cartKey = 'shoppingCart';
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(cartKey)) || []);

  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const productIndex = prevCart.findIndex(item => item.id === product.id);
      if (productIndex >= 0) {
        const newCart = [...prevCart];
        newCart[productIndex].quantity += 1;
        return newCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(cartKey); // Ensure local storage is also cleared
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart => {
      const productIndex = prevCart.findIndex(item => item.id === productId);
      if (productIndex >= 0) {
        const newCart = [...prevCart];
        newCart[productIndex].quantity = quantity;
        return newCart;
      }
      return prevCart;
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const checkout = () => {
    clearCart();
  };

  return { cart, addToCart, removeFromCart, clearCart, updateQuantity, getTotal, checkout };
};

export default useCart;
