import React, { useContext } from "react";
import { StoreContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
function Place_order() {

    const{getTotalCartAmount}=useContext(StoreContext)
    const navigate = useNavigate();
  return (
    <div className="w-full sm:gap-10 sm:space-x-[10rem] sm:flex-row flex flex-col gap-10  max-h-max my-20">
      <div className="w-[45%">
        <h1 className="text-2xl font-bold text-center my-5">
          Delivery information
        </h1>

        <div className="flex  flex-col gap-5">
          <div className=" flex justify-between ">
            <input
              className=" border-2 border-black w-[45%] px-3 py-1.5"
              type="text"
              placeholder="First Name"
            />
            <input
              className=" border-2 border-black w-[45%]  px-3 py-1.5"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex gap-3 flex-col w-full">
            <input
              className=" border-2 border-black w-full  px-3 py-1.5"
              placeholder="Email address"
              type="email"
            />
            <input
              className=" border-2 border-black w-full  px-3 py-1.5"
              placeholder="Street"
              type="text"
            />
          </div>
          <div className="flex   justify-between">
            <input
              className=" w-[45%] border-2 border-black px-3 py-1.5"
              type="text"
              placeholder="City"
            />
            <input
              className=" border-2 border-black w-[45%]  px-3 py-1.5"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex justify-between">
            <input
              className=" border-2 border-black w-[45%]  px-3 py-1.5"
              type="text"
              placeholder="Zip-code"
            />
            <input
              className="border-2 border-black w-[45%]  px-3 py-1.5"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className=" border-2 border-black w-full  px-3 py-1.5"
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>
      
              <div className="w-full sm:w-[35%] flex gap-4 flex-col">
                <h1 className="font-bold text-2xl">Cart Totals</h1>
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery fee</p>
                  <p>$2</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">${getTotalCartAmount() + 2}</p>
                </div>
                <div className="flex gap-10">
                <button  className="max-w-max p-3 rounded-lg text-white text-sm whitespace-nowrap bg-orange-500">
                  PROCEED TO CHECKOUT
                </button>
                <button onClick={()=>navigate("/cart")} className="max-w-max p-3  text-white text-sm whitespace-nowrap bg-blue-400">
                  Back To Cart
                </button>
                </div>
              </div>
    </div>
  );
}

export default Place_order;
