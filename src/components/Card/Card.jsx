 import React from 'react';
 import { IoIosTime } from "react-icons/io";
 import { FaGripfire } from "react-icons/fa";
 
 const card = ({card,handleWantCook}) => {
    const{id,recipe_img,recipe_name,description,ingredients,time,calories}=card
    return (
        <div className='p-3'>
            
             <div className=''><img src={recipe_img} alt="" /></div>
            <h1 className='text-2xl font-semibold'>{recipe_name}</h1>
            <p className='text-xl font-medium'>{description}</p>
            <h2>Ingredients:{ingredients.length}</h2>
           <div className='p-4'>
            <ul>{ingredients[1]}</ul>
            <ul>{ingredients[2]}</ul>
            <ul>{ingredients[3]}</ul>
            <ul>{ingredients[4]}</ul>
             
           </div>
           <div className='flex justify-between'>
             <p className='flex'><IoIosTime ></IoIosTime> {time}</p>   
             <p className='flex'><FaGripfire></FaGripfire>{calories}</p>   
           </div>
            <button onClick={()=>handleWantCook(card,id)} className='bg-green-400 m-2 p-3 text-xl text-black rounded-2xl'>Want to cook</button> 
            
        </div>
    );
 };
 
 export default card;