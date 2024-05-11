import React, { createContext, useState, useEffect, useContext } from "react";

export interface CartContextType {
    cart: any[];
    addToCart: (product: any, id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    increaseAmount: (id: number) => void;
    decreaseAmount: (id: number) => void;
    itemAmount: number;
    total: number;
}

interface CartItem {
    id: number;
    title: string;
    price: number;
    amount: number;
    image: string;
  }

export const CartContext = createContext<CartContextType>({} as CartContextType);

const CartContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  // cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product:any, id:Number) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id:Number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // cleart cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id:Number) => {
    const cartItem = cart.find((item) => item.id === id);
    if(cartItem){
    addToCart(cartItem, id);
    }
  };

  // decrease amount
  const decreaseAmount = (id:Number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem && cartItem.amount <= 1) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
