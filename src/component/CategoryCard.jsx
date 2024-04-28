/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoryCard = ({pd}) => {
    const {img,name,sub_category,price,description,customization,stockStatus,processing_Time,rating,_id}= pd
    return (
        <div className="hero-content flex-col lg:flex-row justify-start border shadow-lg rounded-lg ">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt={name}/>
        <div className="py-2">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-1">{sub_category}</p>
          <p className=""><span className="font-semibold">Short Descriotion:</span> {description.slice(0,300)}...</p>
          <div className="flex gap-4 my-4">
            <p className="py-2 badge border-[#6D31ED] ">Customization : {customization}</p>
            <p className="py-2 badge border-[#6D31ED] "><span>processing time :</span> {processing_Time}</p>
            <p className="py-2 badge border-[#6D31ED] ">StockStatus : {stockStatus}</p>
            <p className="py-2 badge border-[#6D31ED] ">Rating : {rating}</p>
            </div>
          <div className=" flex justify-between items-center">
           <button className="btn bg-[#6D31ED] text-white"> <Link to={`/productDetails/${_id}`}>View more details
            </Link></button><p className="text-2xl font-bold text-[#6D31ED]">{price}</p>
            </div>
        </div>
      </div>
    );
};

export default CategoryCard;