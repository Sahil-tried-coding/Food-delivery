import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  // const [subTotal,setSubTotal] = useState(null) 

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
  
  // const totalAmount = ()=>{
  //   let amount =0;
  //   for (const items  in cartItem) {
  //     if(cartItem[items]>0){
  //       let totalamount = food_list.find((pro)=>pro.id===items)
  //       amount+=totalamount*cartItem[items]
  //    }
  //     }
  //     return amount
  //   }
    
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product.id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  }
  

  const contextValue = {
    food_list,
    removeFromCart,
    addToCart,
    cartItem,
    setCartItem,
    getTotalCartAmount
    
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
