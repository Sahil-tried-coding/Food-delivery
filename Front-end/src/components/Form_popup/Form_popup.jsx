import { useState } from "react";
// import { assets } from "../../assets/assets";
import { RxCross1 } from "react-icons/rx";
function Form_popup({setVisibleForm}) {
  const [currState, setCurrState] = useState("Sign-in");
  return (
    <div id="form" className="h-screen z-50 backdrop-blur-xl  w-screen absolute">
    
    <div className="sm:top-[10rem] sm:left-[35rem] sm:w-[25vw] z-20  flex flex-col gap-5 absolute w-[80vw] top-[7.5rem] left-[2.8rem] bg-white max-h-max px-4 border-2 border-black rounded-lg py-4">
      <div className="  flex  items-center justify-between">
        <h1 className="text-2xl font-semibold">{currState}</h1>
        <RxCross1 className=" cursor-pointer text-2xl font-semibold" onClick={()=>setVisibleForm(false)} />
      </div>
      <div className="flex flex-col gap-5">
        {currState === "Sign-in" ? (
          <input className="w-full p-2 rounded-md border-2 border-black" type="text" placeholder="Name" required />
        ) : (
          <></>
        )}
        <input className="w-full p-2 rounded-md border-2 border-black" type="email" placeholder="Email" required />
        <input className="w-full p-2 rounded-md border-2 border-black" type="password" placeholder="Password" required />
      </div>
      <div className="">
        { currState==="Sign-in"?<button className="w-full  p-3 rounded-xl text-white bg-orange-500 font-semibold">Create Account</button> : <button className="w-full  p-3 rounded-xl text-white bg-orange-500 font-semibold">Log-in</button>}
      </div>
      <div className="flex  gap-3">
        <input className=" w-6 cursor-pointer " type="checkbox"  />
        <p className="font-light">By continuing I am agree to the terms of use and privacy policy</p>
      </div>
      <div>
        {
            currState==="Sign-in"?<p>Already have an account? <span className="font-semibold text-orange-500 cursor-pointer " onClick={()=>setCurrState("Login")}>Login here</span></p>:<p>Create a new account? <span className="font-semibold text-orange-500 cursor-pointer " onClick={()=>setCurrState("Sign-in")}>Click here</span></p>
        }
        
        
      </div>
    </div>
    </div>
  );
}

export default Form_popup;
