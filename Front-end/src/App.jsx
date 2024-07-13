import Navbar from "./components/Navbar/Navbar"
import {Routes,Route} from "react-router-dom"
// import Home from "./pages/Header/Home/Home"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
// import Explore from "./components/Explore/Explore"
const App = () => {
  return (
    <div className="w-[80%] pt-5 m-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/header" element={<Header/>}/>
        {/* <Route path="menu" element={<Explore/>}/> */}
        {/* <Route/> */}
      </Routes>
    </div>
  )
}

export default App