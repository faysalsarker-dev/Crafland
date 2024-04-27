import { useContext, useEffect } from "react";
import { ContextData } from "../context/Context";




const MyCraft = () => {
const {user}=useContext(ContextData)
    useEffect(()=>{
        fetch(`http://localhost:5000/myCraft${user.email}`)
        .then(res=>res.json())
        .then(data=> console.log(data))
    },[user.email])
    return (
        <div>
            
        </div>
    );
};

export default MyCraft;