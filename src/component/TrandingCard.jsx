/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md"; 
import { Link } from "react-router-dom";



const TrandingCard = ({ itm }) => {
    
    const { img, name, sub_category, price, customization, description, stockStatus, rating, _id } = itm;

 

    return (
        <div className="card bg-base-100 shadow-xl p-1">
            <figure className="w-full overflow-hidden p-2">
                <img src={img} className="w-full rounded-lg" alt={name} />
            </figure>
            <div className="card-body space-y-2">
                <div>
                    <h2 className="card-title font-bold">{name}</h2>
                    <h2 className="text-slate-500">{sub_category}</h2>
                </div>
                <p className="text-slate-600">{description.slice(0, 100)}....</p>
                <div className="flex gap-1 font-semibold">
                    <span className="flex gap-2 items-center badge border-[#6D31ED] shadow-xl">Customization:{customization}</span>
                    <span className="flex gap-2 items-center badge border-[#6D31ED] shadow-xl">{stockStatus}</span>
                </div>
                <div className="flex justify-between text-xl font-semibold">
                    <span className="flex gap-2 items-center"><MdAttachMoney />{price}</span>
                    <span className="flex gap-2 items-center"><CiStar />{rating}</span>
                </div>
                <div>
                    <Link to={`productDetails/${_id}`}>
                        <button className="btn w-full text-[#EDEAF4] bg-[#6D31ED]">View details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrandingCard;
