import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
function Home() {
   const[category,setCategory]=useState()
  return (
    <div>
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home