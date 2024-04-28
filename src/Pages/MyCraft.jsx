import { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/Context";

import MyCard from "../component/MyCard";



const MyCraft = () => {
    const { user } = useContext(ContextData)
    const [data, setData] = useState([])
    const [reload,setReload] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/myCraft${user.email}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [reload,user.email])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

           {
            data.map(itm=> <MyCard key={itm._id} itm={itm} setReload={setReload} reload={reload}></MyCard>)
           }

        </div>
    );
};

export default MyCraft;