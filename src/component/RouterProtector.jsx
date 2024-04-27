/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ContextData } from "../context/Context";
import { Navigate, useLocation } from "react-router-dom";






const RouterProtector = ({children}) => {
    const {user,loading} = useContext(ContextData)
    const location = useLocation()
  
     

    if(loading){
        return <div className="h-[80vh] flex justify-center items-center"><span className="loading loading-spinner text-primary loading-lg"></span></div>
    }
    if(!user){
       return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return (
        <>
            {children}
        </>
    );
};

export default RouterProtector;