/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";


const MyCard = ({itm}) => {





    return (
        <div className="card  bg-base-100 shadow-xl p-4">
        <figure className="w-full overflow-hidden p-2"><img src={itm.img} className="w-full rounded-lg" alt={itm.name}/></figure>
        <div className="card-body space-y-2">
          <div>
            <h2 className="card-title font-bold">{itm.name}</h2>
            <h2 className="text-slate-500">{itm.sub_category}</h2>
          </div>
          <div className="flex gap-2  font-semibold">
            <span className="flex gap-2 items-center badge bg-[#FF56A5] text-white shadow-xl">Customization: {itm.customization}</span>
            <span className="flex gap-2 items-center badge bg-[#6D31ED] text-white shadow-xl">{itm.stockStatus}</span>
         </div>



         <div className="flex justify-between text-xl font-semibold">
            <span className="flex gap-2 items-center"><MdOutlineAttachMoney/>{itm.price}</span>
            <span className="flex gap-2 items-center"><CiStar/>{itm.rating}</span>
         </div>

     
      
          <div className="grid grid-cols-2 gap-3">
            <Link className="btn bg-[#6D31ED] text-white" to={`/update/${itm._id}`}><button className="">Update</button></Link>
            <button className="btn bg-[#F5F1FE] text-[#6D31ED]">Delete</button>
          </div>
        </div>
      </div>
    );
};

export default MyCard;