// CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getCart } from "../../lib/cart/add_to_cart";
import { SingleProductType } from "../../types/product";

interface CartContextProps {
  cartData: SingleProductType[] | null;
  updateCartData: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartData, setCartData] = useState<SingleProductType[] | null>(getCart());

  useEffect(() => {
    const handleStorageChange = () => {
      setCartData(getCart());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const updateCartData = () => {
    setCartData(getCart());
  };

  return (
    <CartContext.Provider value={{ cartData, updateCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
