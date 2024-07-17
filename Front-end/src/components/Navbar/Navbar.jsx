import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import Mobile_app from "../Mobile/Mobile_app";
import { StoreContext } from "../../context/Context";
function Navbar({ setVisibleForm }) {
  const [menu, setMenu] = useState("home");
  const [nav, setNav] = useState(false);
  const{getTotalCartAmount}= useContext(StoreContext)
  // const Handler = ()=>{
  //   setVisibleForm(true)
  //   setNav(false)
  // }

  return (
    <div
      id="navbar"
      className="flex sm:z-10 z-30 sm:justify-center justify-between border-4 border-x-orange-500 border-y-black sm:border-none  sm:p-0 sm:-mt-0 p-2 -mt-4 rounded-xl  bg-white  w-[80vw] sm:w-full fixed sm:gap-[10rem]  sm:relative"
    >
      {/* img */}

      <img
        className="sm:h-18 sm:scale-150 h-12 w-[8rem] scale-125"
        src={assets.elixer_logo}
      ></img>
      {/* <img className="sm:h-[3rem] sm:scale-150 h-6" src={assets.logo}></img> */}

      {/* ui */}
      <ul className="sm:flex  whitespace-nowrap hidden w-[50%]  items-center gap-5 text-lg">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#mobile-app"
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      {/* right */}
      <FaBars
        onClick={() => setNav(true)}
        className="sm:hidden text-2xl mt-4"
      />
      {nav && (
       
         <div className="  flex duration-100 backdrop-blur-3xl h-[100vh] -top-5 -right-[2.9rem] absolute w-[100vw]  pt-6 pr-2 z-20 flex-col gap-4  justify-start items-end sm:flex  sm:gap-5 border-4 border-orange-500 w-">
          {/* <div className=" backdrop-blur-xl flex duration-100 bg-white h-[50vh] right-0 absolute w-[50vw] pt-6 pr-2 z-20 flex-col gap-4  justify-start items-end sm:flex  sm:gap-5 border-4 border-orange-500"> */}
          <RxCross1
            className=" sm:hidden font-bold cursor-pointer  text-2xl"
            onClick={() => setNav(false)}
          />
<Link
            to="/"
            onClick={() => setNav(false)}
            className="mr-0 flex w-[40vw] bg-white border-2 border-black items-center  justify-center gap-2 px-3 py-1.5 text-black rounded-xl"
          >
            Home
          </Link>
          <div className="mr-5 flex cursor-pointer w-[40vw] bg-white border-2 border-black items-center  justify-center gap-2 px-3 py-1.5 text-black rounded-xl ">
            <img className="h-5 w-5" src={assets.search_icon} />
            <span>Search</span>
          </div>
          <Link to="/cart">
          <div onClick={()=>setNav(false)} className="mr-10 flex cursor-pointer w-[40vw] bg-white border-2 border-black items-center  justify-center gap-2 px-3 py-1.5 text-black rounded-xl">
            <img className="h-5  w-5" src={assets.basket_icon} />
            <span>Cart</span>
          </div>
          </Link>
          <a
            href="#footer"
            onClick={() => setNav(false)}
            className="mr-16 flex w-[40vw] bg-white border-2 border-black items-center  justify-center gap-2 px-3 py-1.5 text-black rounded-xl"
          >
            Contact-us
          </a>
          <a
            href="#mobile-app"
            onClick={() => setNav(false)}
            className="mr-[6rem] flex w-[40vw] bg-white border-2 border-black items-center  justify-center gap-2 px-3 py-1.5 text-black rounded-xl"
          >
            Mobile App
          </a>
          
          <div className={
            getTotalCartAmount()===0?"hidden":"mr-26 h-3 w-3 rounded-full right-[8.7rem] top-[11.2rem] bg-red-600 absolute sm:right-[16.5rem]"
          }></div>
          <a href="#form">
            <button
              onClick={() => {
                setNav(false);
                setVisibleForm(true);
              }}
              className="mr-[7rem] bg-white w-[40vw] py-1.5 rounded-xl sm:w-[6rem] sm:h-8 sm:rounded-2xl text-black border-2 border-black"
            >
              Sign-in
            </button>
          </a>

          <div className="mt-20 text-xl font-semibold mx-auto text-center bg-transparent border-2 p-3 border-black rounded shadow-lg  shadow-black hover:text-orange-500 hover:bg-black hovre:shadow-orange-500 hover:shadow-lg">
            Hungry? Elixir Delivers!
          </div>
          <img src={assets.elixer_logo} />
        </div>
      //  </div>
      )}

      <div className="hidden sm:flex  mt-3 h-6 gap-3 sm:gap-5">
        <img src={assets.search_icon}></img>
        <Link  to="/cart">
        
        <img className="relative h-6 w-6" src={assets.basket_icon}></img>
        </Link>
        <div className={
          getTotalCartAmount()===0?"":"h-3 w-3 rounded-full right-[9.9rem] top-3 sm:top-0  bg-red-600 absolute sm:right-[6.5rem]"
        }></div>
        <button
          onClick={() => setVisibleForm(true)}
          className="bg-white w-[6rem] h-8 rounded-2xl text-black border-2 border-black"
        >
          Sign-in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
