import { useEffect, useState } from "react";
 import Card from "../card/card";
const Recipes = () => {
    const [cards,setCards]= useState([]);
 
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setCards(data));
    },[])
    return ( 
        <div className="w-2/3 grid grid-cols-2 gap-2">
           {
             cards.map(card=> <Card card={card}></Card>)
           }  
        </div>
    )
}

export default Recipes;