// import { food_list } from "../../assets/assets.js";
import { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem.jsx";
import { StoreContext } from "../../context/Context.jsx";
function FoodDisplay({category}) {
// 1:33:26
  let {food_list}=useContext(StoreContext)
  return (
    <div className="w-full ">
      <h1 className="text-3xl font-bold">Top dishes Near you !</h1>
      <div className="sm:grid sm:grid-cols-3 sm:gap-5 ">
        {food_list.map((item, index) => {
          console.log(category);
            if (category==="All" || category === item.category){
             return <FoodItem
                key={index}
                name={item.name}
                id={item.id}
                category={item.category}
                img={item.image}
                price={item.price}
                desc={item.description}
              />
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
