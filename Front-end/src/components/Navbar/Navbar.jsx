import { useState } from "react"
import { assets } from "../../assets/assets"
import "./Navbar.css"
function Navbar() {

    const[menu,setMenu]=useState("home")


  return (
    <div className="flex sm:justify-between justify-between  ">
        {/* img */}
        <img className="sm:h-18 sm:scale-150 h-12 w-[8rem] scale-125" src={assets.elixer_logo}></img>
        {/* <img className="sm:h-[3rem] sm:scale-150 h-6" src={assets.logo}></img> */}

        {/* ui */}
        <ul className="sm:flex hidden items-center gap-5 text-lg">
            <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>contact-us</li>
        </ul>
        {/* right */}
        <div className="flex mt-3 h-6 gap-3 sm:gap-5">
            <img src={assets.search_icon}></img>
            <img className="relative" src={assets.basket_icon}></img>
            <div className="h-3 w-3 rounded-full right-[9.9rem] top-3 bg-red-600 absolute sm:right-[16.5rem]"></div>
            <button className="bg-white w-[6rem] h-8 rounded-2xl text-black border-2 border-black">Sign-in</button>

        </div>
    </div>
  )
}

export default Navbar