import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../component/CategoryCard";


const Category = () => {

    const {info}=useParams()
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/category/${info}`)
        .then(res=>res.json())
        .then(obj=>setData(obj))
        .catch(err=>console.log(err))
    },[info])


console.log(data);



    return (
        <div className="mt-4">
            {
                data?.map((pd,idx)=><CategoryCard key={idx} pd={pd}></CategoryCard>)
            }
    
         
        </div>
    );
};

export default Category;