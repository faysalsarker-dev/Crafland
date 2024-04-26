import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextData } from "../context/Context";



const Navber = () => {
  const {createUser}=useContext(ContextData)
  console.log(createUser);
  const nav = <>
        <div><NavLink to='/' className={({ isActive }) =>
            isActive ? " text-[#009494] border-b  border-[#009494] font-bold" : ""
        } >Home</NavLink></div>
        <div><NavLink to='/' className={({ isActive }) =>
            isActive ? " text-[#009494] border-[#9d4edd] font-bold" : ""
        } >Add Craft Item</NavLink></div>
        <div><NavLink to='/' className={({ isActive }) =>
            isActive ? " text-[#009494] border-[#9d4edd] font-bold" : ""
        } >My Art&Craft List</NavLink></div>
       
    </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-4">
        {/* <ul className="menu menu-horizontal px-1"> */}
         {nav}
        {/* </ul> */}
      </div>
      <div className="navbar-end gap-3 ">
      <input type="checkbox" className="toggle toggle-success"  />
        <NavLink to='/login' className="btn">Login</NavLink>
        <NavLink to='/register' className="btn">Register</NavLink>
      </div>
    </div>
  );
};

export default Navber;