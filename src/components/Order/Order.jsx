import React from 'react';
 

const Order = ({wantToCook}) => {
    console.log(wantToCook)
    return (
        <div className='w-1/3 '>
             <div >
             <h1 className=' text-center text-xl font-bold'>
                Want to cook:{wantToCook.length}
                </h1>
                <hr />
            <table  className='w-full text-center '>   
              <tr   >
                <th>Name</th>
                <th>Time</th>
                <th>calories</th>
                <th></th>
            </tr>
                {
                wantToCook.map((wantTocook)=>{
                    return(
                        <tr>
                            <td>{wantTocook.recipe_name}</td>
                            <td>{wantTocook.time}</td>
                            <td>{wantTocook.calories}</td>
                            <td><button className='bg-green-400 p-1 rounded-4xl'>percase</button></td>
                        </tr>
                    )
                })
             }
             </table>
           
          
             </div>
             
        </div>
    );
};

export default Order;