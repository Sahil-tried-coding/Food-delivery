import { assets } from "../../assets/assets";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="bg-black text-white
    h-[49rem] sm:h-[30rem]"
      id="footer"
    >
      {/* 1st part */}
      <div className="sm:flex sm:items-baseline sm:px-10 sm:justify-evenly sm:py-10" >
        <div className="sm:w-[40%]">
          <img className="sm:w-[17rem] sm:mx-1 sm:h-[6rem]" src={assets.elixer_logo} />
          <p className="px-10">
            Elixir brings your favorite meals to your doorstep, fast and fresh.
            Discover a variety of cuisines and enjoy seamless ordering with our
            easy-to-use app. Download Elixir today and satisfy your cravings
            effortlessly!
          </p>
          <div className="flex items-center sm:px-9 sm:justify-start  justify-center gap-5 mt-7">
            <div className="flex cursor-pointer text-3xl gap-3">
              <FaInstagram />
              <FaLinkedin />
              <FaXTwitter />
            </div>
          </div>
        </div>

        {/* center */}
        <div className="flex flex-col px-10 gap-3 my-8">
          <h2 className="font-bold text-2xl">COMPANY</h2>
          <ul className="flex flex-col gap-3 font-light">
            <li className="">Home</li>
            <li className="">About us</li>
            <li className="">Delivery</li>
            <li className="">Privacy policy</li>
          </ul>
        </div>

        {/* last */}
        <div className="flex flex-col px-10 gap-3">
          <h1 className="font-bold text-2xl">GET IN TOUCH</h1>
          <ul className="flex flex-col gap-3 font-light">
            <li>+91 797248xxx0</li>
            <li>contact@elixer.com</li>
          </ul>
        </div>
      </div>

      <div className="border-none text-center mt-7 flex flex-col gap-6 sm:text-2xl ">
        <hr></hr>
        <h1 className="">Copyright 2024 © Exlier.com - All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default Footer;
