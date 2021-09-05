import { useState } from "react";
import { createContext } from "react";

export const newContext = createContext();

export const AppProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState("");

  return (
    <newContext.Provider value={{ quantity, setQuantity, product, setProduct }}>
      {children}
    </newContext.Provider>
  );
};
