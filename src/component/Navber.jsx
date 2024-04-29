
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextData } from "../context/Context";
import '../App.css'
import { RiMenu3Line } from "react-icons/ri";
import { Tooltip } from 'react-tooltip'


const Navber = () => {
  const { user, logOut } = useContext(ContextData)
  const [theme, setTheme] = useState(false)
  document.getElementById('html').setAttribute("data-theme", `${theme && "dark"}`)
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
                <div className="py-5"><NavLink to='/' className={({ isActive }) =>
                  isActive ? " active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
                } >Home</NavLink></div>
                <div className="py-5"><NavLink to='/AllArt&craft' className={({ isActive }) =>
                  isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
                } >All Art & craft </NavLink></div>
                <div className="py-5"><NavLink to='/AddCraftItem' className={({ isActive }) =>
                  isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
                } >Add Craft Item</NavLink></div>
                <div className="py-5"><NavLink to='/MyArt&CraftList' className={({ isActive }) =>
                  isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
                } >My Art & Craft List</NavLink></div>


              </div>
            </div>
          </div>




        </div>
        <a className="btn btn-ghost text-2xl font-bold">Craft<span className="text-[#6D31ED]">Land</span></a>
      </div>
      <div className="navbar-center hidden lg:flex gap-8">

        {nav}

      </div>
      <div className="navbar-end gap-5"><label className="swap swap-rotate">

        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={() => setTheme(!theme)} />

        {/* sun icon */}
        <svg className="swap-on fill-current  w-9 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        {/* moon icon */}
        <svg className="swap-off fill-current w-9 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

      </label>{
          user ? <>

            <a className="my-anchor-element"><div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} />
              </div>
            </div></a>
            <Tooltip anchorSelect=".my-anchor-element" place="top" className="z-40">
              {user.displayName === null ? 'User name is not found' : user.displayName}
            </Tooltip>
            <button onClick={handleLogOut} className=" bg-[#6D31ED] text-white  rounded-full px-3 py-2">Logout</button></> : <>
            <Link to='/login' className="border-[#6D31ED] border text-[6D31ED]  rounded-full px-3 py-2">Login</Link>
            <Link to='/register' className="bg-[#6D31ED] md:block hidden text-white rounded-full px-3 py-2">Register</Link>
          </>
        }


      </div>
    </div>
  );
};

export default Navber;