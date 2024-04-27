
import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";


const ProductDetails = () => {
    const {id} =useParams()
    const [data,setData]=useState({})
console.log(id);

    useEffect(()=>{
        fetch(`http://localhost:5000/productDetails/${id}`)
        .then(res=>res.json())
        .then(info=>{
            setData(info);
            console.log(info);

        })

    },[id])
console.log(data.name);

const {img,name,sub_category,price,description,customization,stockStatus,processing_Time,rating}= data


    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 py-10 gap-4 lg:px-0 px-4">
         <div className="w-full ">
            <img className=" w-full rounded-lg" src={img} alt={name} />
         </div>
         <div className=" space-y-2">
            <h2 className="text-3xl font-extrabold">{name}</h2>
            <p className="text-slate-500">{sub_category}</p>

            <div className="flex items-center text-3xl font-semibold text-[#6D31ED] my-6">
            <MdAttachMoney />
                <span>{price}</span>
            </div>
            <p><span className="font-semibold">Descriptin: </span>{description}</p>
            <div className="flex gap-2  font-semibold my-4">
            <span className="flex gap-2 items-center badge bg-[#FF56A5] text-white shadow-xl">Customization: {customization}</span>
            <span className="flex gap-2 items-center badge bg-[#6D31ED] text-white shadow-xl">{stockStatus}</span>
         </div>

         <div className="flex flex-col gap-2 text-xl font-medium">

            <div className="flex items-center gap-2">processing time : {processing_Time} <MdAccessTime /></div>
            <div className="flex items-center gap-2">Rating : {rating} <CiStar /></div>
         </div>

            
            </div>  
        </div>
    );
};

export default ProductDetails;