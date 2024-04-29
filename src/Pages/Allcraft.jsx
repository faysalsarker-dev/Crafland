import { useEffect, useState } from "react";
import { CiViewList } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/groovyWalk.json"

const Allcraft = () => {
  const [loading, setLoading] = useState(true)
  const [table, setTable] = useState([])
  useEffect(() => {
    setLoading(true)
    fetch('https://my-servar-alpha.vercel.app/allCraft')
      .then(res => res.json())
      .then(data => {
        setTable(data)
      setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)

    })
  }, [])



  const totalPrice = table.reduce((acc, pd) => acc + parseFloat(pd.price), 0)
  const totalRating = table.reduce((acc, pd) => acc + parseFloat(pd.rating), 0)
  const averageRating = table.length > 0 ? totalRating / table.length : 0;

  if(loading){
    return <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={groovyWalkAnimation} loop={true} /></div>
}

  return (
    <div className="mt-5">
      <h3 className="text-2xl font-extrabold">Overview</h3>
      <div className=" grid lg:grid-cols-3 grid-cols-2 gap-3 my-6">
        <div className="h-[200px] bg-[#F5F1FE] rounded-xl  flex  justify-center items-center ">
          <div className="space-y-3">
            <h5 className="text-xl font-semibold">Total item</h5>
            <h3 className="text-4xl font-bold flex gap-2 items-center"><CiViewList  />{table.length < 10 ? <>0{table.length}</> : table.length}</h3>
          </div>
        </div>
        <div className="h-[200px] bg-[#F0F9FF] rounded-xl  flex  justify-center items-center ">
          <div className="space-y-3">
            <h5 className="text-xl font-semibold">Total Price</h5>
            <h3 className="text-4xl font-bold flex gap-2 items-center"><MdOutlineAttachMoney className="text-4xl" />{totalPrice}</h3>
          </div>
        </div>
        <div className="h-[200px] bg-[#F1F8FD] rounded-xl col-span-2 md:col-span-1 flex  justify-center items-center ">
<div className="space-y-3">
            <h5 className="text-xl font-semibold">Avarage Rating</h5>
            <h3 className="text-4xl font-bold flex gap-2 items-center"><FaRegStar />{averageRating.toFixed(1)}</h3>
</div>
        </div>
      </div>

      <h3 className="text-3xl font-bold">Detailes</h3>
      <div className="overflow-x-auto mx-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>image</th>
              <th>Name</th>
              <th>Rating</th>
              <th>stockStatus</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              table.map((pd, idx) => (
                <tr key={idx}>

                  <td>
                    <div className="">
                      <div className="avatar">
                        <div className="mask mask-squircle w-14 h-18">
                          <img src={pd.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                    </div>
                  </td>
                  <td>


                    <div>
                      <div className="font-bold">{pd.name}</div>

                    </div>

                  </td>
                  <td>
                    <p className="flex items-center gap-2">

                      <FaStar />
                      {pd.rating}
                    </p>


                  </td>
                  <td>{pd.stockStatus}</td>
                  <td className="text-center">
                    <Link to={`/productDetails/${pd._id}`}><button className="btn bg-[#6D31ED] btn-md text-white">details</button></Link>
                  </td>
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