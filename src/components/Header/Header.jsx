import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const Header =()=>{

    return(
        <div className="flex justify-around items-center">
         <div>
         <h1 className='text-4xl font-bold'>Chefs-Table</h1>
         </div>
         <div className="flex text-2xl  gap-5">
            <h4>Home</h4>
            <h4>Recipes</h4>
            <h4>About</h4>
            <h4>Search</h4>
         </div>
         <div className="text-xl flex items-center gap-5">
         <CiSearch></CiSearch><br />
         <input   type="" name="" id="" placeholder="search" />
         <FaRegUser></FaRegUser>   
         </div>
        </div>
    )
}
export default Header;