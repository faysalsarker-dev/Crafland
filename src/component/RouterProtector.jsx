/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ContextData } from "../context/Context";
import { Navigate, useLocation } from "react-router-dom";

import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/groovyWalk.json"





const RouterProtector = ({children}) => {
    const {user,loading} = useContext(ContextData)
    const location = useLocation()
  
     

    if(loading){
        return <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={groovyWalkAnimation} loop={true} /></div>
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