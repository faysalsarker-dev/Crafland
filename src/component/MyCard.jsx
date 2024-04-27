/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";

const MyCard = ({itm}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={itm.img} alt={itm.name}/></figure>
        <div className="card-body">
          <h2 className="card-title">{itm.name}</h2>
          <div className="flex gap-2  font-semibold">
            <span className="flex gap-2 items-center badge badge-primary">Customization: {itm.customization}</span>
            <span className="flex gap-2 items-center badge badge-primary">{itm.stockStatus}</span>
         </div>



         <div className="flex justify-between text-xl font-semibold">
            <span className="flex gap-2 items-center"><MdOutlineAttachMoney/>{itm.price}</span>
            <span className="flex gap-2 items-center"><CiStar/>{itm.rating}</span>
         </div>

     


          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default MyCard;