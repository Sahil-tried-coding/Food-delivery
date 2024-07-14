import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Header/Home/Home"
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
const App = () => {

  return (
    <>
      <div className="w-[80%] pt-5 m-auto">
        <Navbar />
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
