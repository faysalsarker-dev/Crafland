import { Outlet } from "react-router-dom";
import Navber from './../component/Navber';
import Footer from "../component/Footer";


const Root = () => {
    console.log('root');
    return (
        <>
        <div className=" max-w-6xl mx-auto">
          <Navber></Navber>
           <div className=" min-h-[90vh]">
            <Outlet></Outlet>
            </div>
           
        </div>
        
        <Footer></Footer>
        </>
        
    );
};

export default Root;