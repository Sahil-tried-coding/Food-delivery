import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Header/Home/Home"
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import Form_popup from "./components/Form_popup/Form_popup";
import { useState } from "react";
const App = () => {

  const[visibleForm,setVisibleForm]=useState(true)



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
          <Route path="/footer" element={<Footer/>}/>
          {/* <Route/> */}
        </Routes>
      </div>
        <Footer/>
    </>
  );
};

export default App;
