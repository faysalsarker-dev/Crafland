import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 mt-10 text-black rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to='/' className="link link-hover">Home</Link>
          <Link to='/AllArt&craft' className="link link-hover">All Art & craft</Link>
          <a className="link link-hover">Privacy</a>
      
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