import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {  NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-100   mt-16  rounded">
        <nav className="grid grid-flow-col gap-4">
        <div className=""><NavLink to='/' className={({ isActive }) =>
                  isActive ? " active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
                } >Home</NavLink></div>
                <div className=""><NavLink to='/AllArt&craft' className={({ isActive }) =>
                  isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
                } >All Art & craft </NavLink></div>
                <div className=""><NavLink to='/AddCraftItem' className={({ isActive }) =>
                  isActive ? "active-route nav-link-active text-[#6D31ED] border-b-2  border-b-[#6D31ED] font-bold" : ""
                } >Add Craft Item</NavLink></div>
               
      
        </nav> 
        <nav>
          
          <div className="grid grid-flow-col gap-4 text-3xl">
          <a target="_blank" href="https://www.facebook.com/faysal.sharker.140/"><FaFacebook /></a>
          <a target="_blank" href="https://www.instagram.com/faysal_sarker_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
          <a target="_blank" href="https://github.com/faysalsarker-dev"><FaGithub /></a>
           
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2024 - All right reserved by Craft Land</p>
        </aside>
      </footer>
    );
};

export default Footer