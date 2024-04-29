import { Outlet } from "react-router-dom";
import Navber from './../component/Navber';
import Footer from "../component/Footer";


const Root = () => {
    return (
        <>
        <Navber></Navber>
        <div className=" max-w-6xl mx-auto lg:px-0 px-4">
          
           <div className="min-h-[90vh]">
            <Outlet></Outlet>
            </div>
           
        </div>
        
        <Footer></Footer>
        </>
        
    );
};

export default Root;