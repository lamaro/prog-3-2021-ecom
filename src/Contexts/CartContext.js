import React, { useState, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState([]);

  const resetCart = () => setCart([]);

  const isInCart = (id) => cart.find((product) => product.id === id) || false;

  const cartTotalItems = () => cart.length;

  const addToCart = ({ id, name, quantity, price }) => {
    const productInCart = isInCart(id);
    if (!productInCart) {
      setCart([...cart, { id, name, quantity, price }]);
    } else {
      const oldQuantity = productInCart.quantity;
      const cartWidhoutProduct = cart.filter((product) => product.id !== id);
      const finalCart = [
        ...cartWidhoutProduct,
        { id: id, name: name, price: price, quantity: quantity + oldQuantity },
      ];
      setCart(finalCart);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, resetCart, cartTotalItems, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
