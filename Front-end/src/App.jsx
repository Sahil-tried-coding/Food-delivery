import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Header/Home/Home"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
import Footer from "./components/Footer/Footer";
import Form_popup from "./components/Form_popup/Form_popup";
import { useState } from "react";
import Cart from "./pages/Cart/Cart"
import Explore from "./components/Explore/Explore";
import Place_order from "./pages/Place_order/Place_order";
const App = () => {

  const[visibleForm,setVisibleForm]=useState(false)
  const[category,setCategory]=useState("All")


  return (
    <>
    {
      visibleForm?<Form_popup setVisibleForm={setVisibleForm}/>:<></>
    }
      <div className="w-[80%] pt-5 m-auto">
        
        <Navbar visibleForm={visibleForm} setVisibleForm={setVisibleForm} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/explore-menu" element={<FoodDisplay category={category} />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/place-order" element={<Place_order/>}/>
          
          {/* <Route/> */}
        </Routes>
      </div>
        <Footer/>
    </>
  );
};

export default App;
