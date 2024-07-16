import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore'
import { useState } from 'react'
import Place_order from '../Place_order/Place_order'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Mobile_app from '../../components/Mobile/Mobile_app'
function Home() {
   const[category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Mobile_app/>
    </div>
  )
}

export default Home