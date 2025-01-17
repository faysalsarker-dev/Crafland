import { useContext, useEffect, useRef, useState } from "react";
import { ContextData } from "../context/Context";

import MyCard from "../component/MyCard";
import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/groovyWalk.json"

const MyCraft = () => {
    const [loading,setLoading]=useState(true)
    const { user } = useContext(ContextData)
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const filterInfo = useRef()
    const [filter, setFilter] = useState('')
    const [filtervalue, setFilterValue] = useState('All')


   
  

    useEffect(() => {
        setLoading(true)
        fetch(`https://my-servar-alpha.vercel.app/myCraft/${user.email}/${filter}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [reload, user.email,filter])

    if(loading){
        return <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={groovyWalkAnimation} loop={true} /></div>
    }

    
    return (
        <>
            <div className="flex justify-start items-center gap-2 my-6 py-8">
           
                
                    <div>
                        Filter By customization :
                    </div>
                    
                        <select className="select select-bordered  w-1/4 max-w-xs" onChange={(e)=>( setFilter(e.target.value) , setFilterValue(e.target.value))} ref={filterInfo} >
                            <option disabled selected={filtervalue === 'All'}>All</option>
                            <option selected={filtervalue === 'Yes'}>Yes</option>
                            <option selected={filtervalue === 'No'}>No</option>
                        </select>
                
           
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

            { data.length > 0 ? (
                    data.map((itm) => (
                        <MyCard key={itm._id} itm={itm} setReload={setReload} reload={reload}></MyCard>
                    ))
                ) : (
                    <div className="flex justify-center items-center col-span-3">
                        <h3 className="text-3xl font-bold text-center">You havent added any item</h3>
                    </div>
                )}

            </div>
        </>

    );
};

export default MyCraft;