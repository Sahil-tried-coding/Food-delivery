import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/Context";
import { RxCross1 } from "react-icons/rx";
import { assets } from "../../assets/assets";
function Cart() {
  const { addToCart,removeFromCart, food_list, cartItem, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(getTotalCartAmount());
  const[displayDiscount,setDisplayDiscount]=useState(false)



  const changeHandler = (e) => {
    setInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.toLowerCase() === "hire me") {
      setDiscountedAmount(getTotalCartAmount() * 0.3);
      setDisplayDiscount(true)
    } else {
      setDiscountedAmount(getTotalCartAmount());
    }
  }

  return (
    <div>
      {
        getTotalCartAmount() === 0 ?
          <div className="w-full h-screen sm:items-center justify-center flex flex-col gap-14 -mt-20">
            <h1 className="font-bold text-4xl">Your cart is as empty as my inbox on a Friday night.</h1>
            <Link to="/explore-menu">
              <button className="hover:bg-black hover:text-white w-full sm:w-auto font-bold text-xl border-4 capitalize rounded-full border-dotted decoration-black px-8 py-3 border-orange-500">
                Explore Menu
              </button>
            </Link>
          </div>
          :
          <div className="w-full max-h-max">
            <div className="pt-[8rem] sm:pt-[5rem] max-h-max w-full">
              <div className="flex sm:justify-around gap-10 py-5">
                <p className="text-start">Items</p>
                <div className="flex gap-3 sm:mr-[20rem] ml-6 sm:gap-[8rem]">
                  <p>Title</p>
                  <p>Price</p>
                  <div className="sm:gap-14 gap-3 flex">
                    <p>Quantity</p>
                    <p className="">Total</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col w-full h-full gap-5">
                {food_list.map((item) => {
                  const quantity = cartItem[item.id];
                  if (quantity) {
                    return (
                      <div
                        className="flex sm:justify-around h-20 py-3 border-b-2 border-black w-[87vw] items-center"
                        key={item.id}
                      >
                        <img className="w-12 h-12" src={item.image} alt={item.name} />
                        <ul className="flex mx-1 mr-4 gap-3 sm:gap-20">
                          <li className="w-[100px] sm:text-start text-end whitespace-nowrap">
                            {item.name}
                          </li>
                          <li>${item.price}</li>
                          <li className="w-[65px] text-center">{quantity}</li>
                          <li>${quantity * item.price}</li>
                        </ul>
                        <button
                          className="text-xl h-7 w-[2rem] font-bold text-right"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <img className="h-7  w-[2rem]" src={assets.remove_icon_red}/>
                        </button>
                        <button
                          
                          onClick={() => addToCart(item.id)}
                        >
                          <img className="h-7 ml-3 w-[2rem] sm:w- " src={assets.add_icon_green}/>
                        </button>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            <div className="max-h-max my-10 flex flex-col sm:flex-row gap-12">
              <div className="w-full">
                <h1>If you have Promo Code Enter here</h1>
                <form onSubmit={submitHandler} className="flex mt-4">
                  <input
                    value={input}
                    onChange={changeHandler}
                    className="border-none sm:w-[25rem] w-full h-12 bg-gray-200 text-black p-2 rounded-lg"
                    type="text"
                    placeholder="promo-code"
                  />
                  <button type="submit" className="absolute sm:left-[25rem] sm:w-[10%] right-10 h-12 bg-black rounded-lg text-white px-10">
                    Submit
                  </button>
                </form>
                <div className="flex flex-col gap-4 mt-4">
                  <p>Available Promo Codes:</p>
                  <p className="text-blue-500">Use "hire me" to get 70% off</p>
                  <button className=" py-3 px-5 sm:w-[50%] w-full font-bold text-xl border-4 border-dashed border-black">
                    H i r e M e
                  </button>
                </div>
              </div>
              <div className="w-full flex gap-4 flex-col">
                <h1 className="font-bold text-2xl">Cart Totals</h1>
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery fee</p>
                  <p>$2.00</p>
                </div>
                {
                  displayDiscount && <div className="flex justify-between">
                  <p className="text-orange-500"><b>Promo code Applied</b></p>
                  <p><b>- 70%</b></p>
                </div>
                }
                <div className="flex justify-between">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">${(discountedAmount + 2).toFixed(2)}</p>
                </div>
                <button onClick={() => navigate("/place-order")} className="max-w-max p-3 rounded-lg text-white text-sm whitespace-nowrap bg-orange-500">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default Cart;
