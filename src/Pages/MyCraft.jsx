import { useContext, useEffect, useRef, useState } from "react";
import { ContextData } from "../context/Context";

import MyCard from "../component/MyCard";



const MyCraft = () => {
    const { user } = useContext(ContextData)
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const filterInfo = useRef()
    const [filter, setFilter] = useState('')

   
    console.log(filter);

    useEffect(() => {
        fetch(`http://localhost:5000/myCraft/${user.email}/${filter}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [reload, user.email,filter])



    
    return (
        <>
            <div className="flex justify-center items-center my-6">
                <select className="select select-bordered w-full max-w-xs text-black" onChange={(e)=>( setFilter(e.target.value))} ref={filterInfo} >
                    <option disabled selected>Filter</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

                {
                    data.map(itm => <MyCard key={itm._id} itm={itm} setReload={setReload} reload={reload}></MyCard>)
                }

            </div>
        </>

    );
};

export default MyCraft;