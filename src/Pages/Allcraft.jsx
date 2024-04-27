import { useEffect, useState } from "react";
import { CiViewList } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";


const Allcraft = () => {
const [table,setTable]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allCraft')
        .then(res=>res.json())
        .then(data=>setTable(data))
    },[])

console.log(table);

const totalPrice = table.reduce((acc, pd) => acc + parseFloat(pd.price), 0)
const totalRating = table.reduce((acc, pd) => acc + parseFloat(pd.rating), 0)

    return (
        <div>
 <h3 className="text-2xl font-extrabold">Overview</h3>
            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="h-[200px] bg-[#F5F1FE] rounded-xl my-4 flex flex-col p-14 space-y-3">
                    <h5 className="text-xl font-semibold">Total item</h5>
                   <h3 className="text-4xl font-bold flex gap-4 items-center"><CiViewList />{table.length<10?<>0{table.length}</>:table.length}</h3>
                </div>
                <div className="h-[200px] bg-[#F0F9FF] rounded-xl my-4 flex flex-col p-14 space-y-3">
                <h5 className="text-xl font-semibold">Total Price</h5>
                   <h3 className="text-4xl font-bold flex gap-4 items-center"><MdOutlineAttachMoney />{totalPrice}</h3>  
                </div>
                <div className="h-[200px] bg-[#F1F8FD] rounded-xl my-4 flex flex-col p-14 space-y-3">
                <h5 className="text-xl font-semibold">Total Price</h5>
                   <h3 className="text-4xl font-bold flex gap-4 items-center"><FaRegStar />{totalRating}</h3>  
                </div>
            </div>

            <h3 className="text-3xl font-bold">Detailes</h3>
            <div className="overflow-x-auto mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>iamge</th>
        <th>Name</th>
        <th>Rating</th>
        <th>stockStatus</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        table.map((pd,idx)=>(
            <tr key={idx}>
       
        <td>
          <div className="">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={pd.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          <div>
           
            <div>
              <div className="font-bold">{pd.name}</div>

            </div>
          </div>
        </td>
        <td><p className="flex items-center gap-2">

           <FaStar />
              {pd.rating}
        </p>
          <br/>
          
        </td>
        <td>{pd.stockStatus}</td>
        <th>
          <button className="btn bg-[#6D31ED] btn-xs text-white">details</button>
        </th>
      </tr>
        ))
      }
     
      {/* row 2 */}
      </tbody>
    
  </table>
</div>
            
        </div>
    );
};

export default Allcraft;