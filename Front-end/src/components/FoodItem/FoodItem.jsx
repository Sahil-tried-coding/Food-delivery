/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Context";
function FoodItem({ name, id, category, price, desc, img }) {
  //  const[counter,setCounter]=useState(0);
  let { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-[21rem] rounded-2xl my-6 h-[25rem]  border-2 border-black">
      <div>
        <img className="w-full h-[14rem] " src={img} />
      </div>
      {!cartItem[id] ? (
        <img
          className=" -mt-16 ml-[16rem] cursor-pointer  "
          onClick={() => addToCart(id)}
          src={assets.add_icon_white}
        />
      ) : (
        <div className="flex cursor-pointer  absolute bg-white items-center -mt-16 ml-[12.5rem] gap-3 w-[130px] p-2 rounded-full">
          <img
            className=""
            onClick={() => removeFromCart(id)}
            src={assets.remove_icon_red}
          />
          <h1 className="text-xl rounded-full text-black font-bold ">
            {cartItem[id]}
          </h1>
          <img
            className=" "
            onClick={() => addToCart(id)}
            src={assets.add_icon_green}
          />
        </div>
      )}
      <div className="flex flex-col gap-3  p-5 pt-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-poppins font-semibold">{name}</h2>
          <img className="w-[5rem] h-[1rem]" src={assets.rating_starts} />
        </div>
        <p className="text-base font-light">{desc}</p>
        <div className="font-semibold text-2xl text-orange-600">${price}</div>
      </div>
    </div>
  );
}

export default FoodItem;