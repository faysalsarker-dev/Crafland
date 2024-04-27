
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextData } from "../context/Context";
import '../App.css'
import { RiMenu3Line } from "react-icons/ri";
import { Tooltip } from 'react-tooltip'


const Navber = () => {
  const { user, logOut } = useContext(ContextData)
  const nav = <>
    <div><NavLink to='/' className={({ isActive }) =>
      isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
    } >Home</NavLink></div>
    <div><NavLink to='/AllArt&craft' className={({ isActive }) =>
      isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
    } >All Art & craft </NavLink></div>
    <div><NavLink to='/AddCraftItem' className={({ isActive }) =>
      isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
    } >Add Craft Item</NavLink></div>
    <div><NavLink to='/MyArt&CraftList' className={({ isActive }) =>
      isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
    } >My Art & Craft List</NavLink></div>

  </>

  const handleLogOut = () => {
    logOut()
  }

  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="lg:hidden">

          <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn drawer-button"><RiMenu3Line /></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-5 py-8">
                {/* Sidebar content here */}
                {nav}

              </div>
            </div>
          </div>




        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-8">

        {nav}

      </div>
      <div className="navbar-end gap-3">{
        user ? <> <a data-tooltip-id="my-tooltip-click"><div className="avatar">
          <div className="w-10 rounded-full p-2 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img className="ounded-full" src={user.photoURL} alt="" />
          </div>
        </div>  </a>
          <Tooltip
            id="my-tooltip-click"
            className="z-40 bg-slate-400"
      
      
            events={['click']}
          ><div>
  <div className="flex flex-col justify-center items-center rounded-xl my-5">
              <div className="w-8 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} alt="" />
          </div>
    <span>{user.displayName}</span>
    <span>{user.email}</span>
    <span>world!</span>
  </div>
          </div>
            
       
          </Tooltip> <button onClick={handleLogOut} className="bg-[#6D31ED] text-white  rounded-full px-3 py-2">Logout</button></> : <>
          <Link to='/login' className="bg-[#6D31ED] text-white  rounded-full px-3 py-2">Login</Link>
          <Link to='/register' className="bg-[#6D31ED]  text-white rounded-full px-3 py-2">Register</Link>
        </>
      }


      </div>
    </div>
  );
};

export default Navber;