import { Link } from "react-router-dom";

const Errpage = () => {
    return (
        <div className="min-h-[90vh]  justify-center items-center ">
           <div className="space-y-3 text-center">
            <h5 className="text-[#6D31ED]">Uh oh..</h5>
            <h2 className="text-4xl font-bold">Something went wrong</h2>
            <p>Please try again later</p>
           <Link to='/'> <button className=" mt-4 btn bg-[#6D31ED] text-white">Go Back Home</button></Link>
           </div>
            
        </div>
    );
};

export default Errpage;