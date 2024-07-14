import { assets } from "../../assets/assets";
function Mobile_app() {
  return (
    <div id="mobile-app">
      <div className="h-[30rem] flex flex-col gap-10 items-center justify-center">
        <div className=" text-xl font-semibold text-center bg-transparent border-2 p-3 border-black rounded shadow-lg  shadow-black hover:text-orange-500 hover:bg-black hovre:shadow-orange-500 hover:shadow-lg"> 
        Hungry? Elixir Delivers!
        </div>
        <div className="sm:text-4xl text-xl font-bold text-center">
          For Better Experience Download <span className="text-orange-500">Exlier</span> App
        </div>
        <div className="flex gap-3">
          <img className="hover:scale-105 hover:duration-500 cursor-pointer sm:w-[14rem] sm:h-[4.5rem] w-[8rem] h-10" src={assets.play_store} />
          <img className="hover:scale-105 hover:duration-500 cursor-pointer sm:w-[14rem] sm:h-[4.5rem] w-[8rem] h-10" src={assets.app_store} />
        </div>
      </div>
    </div>
  );
}

export default Mobile_app;
