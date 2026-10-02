import { BiCategory } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

import { NavLink } from "react-router-dom";



const  Navbar = () => {
    return (
        <div className="border-y py-2 border-gray-200">
            <div className="flex justify-between items-center container mx-auto px-24">
                <div className="flex cursor-pointer hover:scale-110  tranasition-all duration-500items-center gap-2 bgp text-white py-2 px-6 rounded-md">
                    <BiCategory />
                    <p>All Category</p>
                </div>

                <div className="flex gap-12">
                    <NavLink className={({isActive})=>isActive? `cp`: ``}to="/">Home</NavLink>
                    <NavLink className={({isActive})=>isActive? `cp`: ``}to="/shop">Shop Now</NavLink>
                    <NavLink className={({isActive})=>isActive? `cp`: ``}to="/about">About</NavLink>
                    <NavLink className={({isActive})=>isActive? `cp`: ``} to="/blog">Blog</NavLink>
                    <NavLink className={({isActive})=>isActive? `cp`: ``}to="/contact">Contact</NavLink>
                </div>

                <div className="flex cursor-pointer hover:scale-110  tranasition-all duration-500 items-center gap-2 bgp  text-white py-2 px-6 rounded-md">
                     <FiShoppingCart />
                    <p>Shop Now</p>
                </div>
            </div>
        </div>
    );
};
export default Navbar;