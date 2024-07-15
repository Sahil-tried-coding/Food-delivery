import img from "./header_img.png";
// import img from "./pexels-enginakyurt-1435895.jpg"
import "./Header.css";
function Header() {
  return (
    <div
      className=" mt-16 
     w-full  "
    >
      <img
        src={img}
        className="object-conatian header-img sm:h-[60vh] h-[20vh]  relative  w-full"
      ></img>
      <h1 className="absolute top-[7rem] text-white font-bold text-2xl left-16 sm:text-6xl sm:top-[12rem] sm:left-[17rem]">
        Order your favourite
        <br /> food here
      </h1>
      <p className="hidden sm:block w-[60%] top-[23rem] text-white left-[19rem] absolute sm:left-[17rem] sm:top-[21rem]">
        Welcome to Eatopia, your ultimate destination for culinary delights
        delivered straight to your door. Discover a world of flavors with our
        diverse menu, catering to every craving. Experience fast, reliable, and
        delightful food delivery with just a few taps!
      </p>
      <button className="absolute top-[12rem] bg-white px-4 py-2 rounded-full left-16 sm:top-[26rem] sm:left-[17rem] sm:px-8 sm:py-3 sm:text-2xl ">
        <a href="#view-menu">view Menu</a>
      </button>
    </div>
  );
}

export default Header;
