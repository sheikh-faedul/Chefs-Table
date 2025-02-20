 import Header from './components/Header/Header'
import './App.css'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Order from './components/Order/Order'
import { useState } from 'react'
 

function App() {
    const [wantToCook,setWantTocook]=useState([]);
       
  const handleWantCook =(card)=>{
  
    const newWantCook =[...wantToCook,card];
      setWantTocook( newWantCook,card);  
  }
  
 
  return (
    <>
       <Header></Header>
       <Banner></Banner>
         <div className='text-center'>
         <h2 className='text-4xl'>Our Recipes</h2>
         <p className='text-xl'>There are many famouse recipes in our restouraunt.We provide taditional food item to our valuable guiest</p>
         </div>
       <div className='flex'>
           <Recipes handleWantCook={handleWantCook}></Recipes>
           <Order wantToCook={wantToCook}></Order>
       </div>

    </>
  )
}

export default App
