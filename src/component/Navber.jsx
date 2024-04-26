
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextData } from "../context/Context";




const Navber = () => {
const {user,logOut}=useContext(ContextData)
  const nav = <>
        <div><NavLink to='/' className={({ isActive }) =>
            isActive ? " text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
        } >Home</NavLink></div>
        <div><NavLink to='/AddCraftItem' className={({ isActive }) =>
            isActive ? " text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
        } >Add Craft Item</NavLink></div>
        <div><NavLink to='/MyArt&CraftList' className={({ isActive }) =>
            isActive ? " text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
        } >My Art&Craft List</NavLink></div>
       
    </>

    const handleLogOut=()=>{
      logOut()
    }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu space-y-6 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-4">
        {/* <ul className="menu menu-horizontal px-1"> */}
         {nav}
        {/* </ul> */}
     
      <div className="navber-end flex gap-3">
        {user?<div onClick={handleLogOut} className="bg-[#6D31ED] text-white rounded-xl px-2 py-1">log out</div>:<><div className="bg-[#6D31ED] text-white rounded-xl px-2 py-1"><NavLink to='/login'>Login</NavLink></div>
        <div className="bg-[#6D31ED] text-white rounded-xl px-2 py-1"><NavLink to='/register' >Register</NavLink></div></>}
      </div>
       </div>
    </div>
  );
};

export default Navber;