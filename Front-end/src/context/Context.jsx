import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});



  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((last) => ({ ...last, [itemId]: 1 }));
    } else {
      setCartItem((last) => ({ ...last, [itemId]: last[itemId] + 1 }));
    }
  };


  const removeFromCart = (itemId) => {
    setCartItem((last) => {
      const updatedCart = { ...last };
      updatedCart[itemId] -= 1;
      if (updatedCart[itemId] === 0) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };
  


//   const removeFromCart = (itemId) => {
//     setCartItem((last) => {
//       const newCart = { ...last };
//       if (newCart[itemId] > 1) {
//         newCart[itemId] -= 1;
//       } else {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//   };


  useEffect(()=>{
    console.log(cartItem);
  },[cartItem])

  const contextValue = {
    food_list,
    removeFromCart,
    addToCart,
    cartItem,
    setCartItem,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
