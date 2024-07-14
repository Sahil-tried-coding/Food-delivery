import { menu_list } from "../../assets/assets"
import "./Explore.css"
// eslint-disable-next-line react/prop-types
function Explore({category,setCategory}) {
  return (
    <div id="explore_menu" className=" w-full  flex flex-col gap-5 py-5">
        <h1 className="text-3xl sm:text-6xl ">Explore our Menu</h1>
        <p className="w-full font-light sm:text-xl sm:font-semibold"> Explore our diverse menu and discover your new favorite dishes, all crafted to perfection. With Elixer, every meal feels like a magical experience delivered right to your door.</p>
        
        <div className="flex flex-row sm:h-[15rem] h-[9rem] overflow-y-hidden  items-center gap-5  overflow-x-scroll sm:overflow-hidden w-full">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="min-w-[100px]  sm:min-w-[100px] gap-5 space-y-3  text-center h-full" key={index}>
                            <img id={category===item.menu_name?"active":""} className=" h-20 w-[6rem] sm:h-[8rem] sm:w-[12rem] "  src={item.menu_image}/>
                            <h2 className="font-sans sm:text-2xl  font-semibold"> {item.menu_name}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Explore