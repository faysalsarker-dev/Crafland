import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../component/CategoryCard";
import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/groovyWalk.json"

const Category = () => {
    const [loading,setLoading]=useState(true)
    const {info}=useParams()
    const [data,setData]=useState([])

    useEffect(()=>{
        setLoading(true)
        fetch(`https://my-servar-alpha.vercel.app/category/${info}`)
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoading(false)
        })
        .catch(err=>{
            console.log(err)
            setLoading(false)
        
        })
    },[info])


    if(loading){
        return <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={groovyWalkAnimation} loop={true} /></div>
    }



    return (
        <div className="mt-4">
            {
                data?.map((pd,idx)=><CategoryCard key={idx} pd={pd}></CategoryCard>)
            }
    
         
        </div>
    );
};

export default Category;