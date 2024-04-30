import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div className="min-h-[90vh]  justify-center items-center grid lg:grid-cols-2">
        <div className="w-full"><img className="w-full" src="https://img.freepik.com/premium-vector/characters-looking-404-error-problem-message-page-found-concept-vector-illustration_969888-1.jpg?w=826" alt="" /></div>
        <div className="space-y-3">
         <h5 className="text-[#6D31ED]">Uh oh..</h5>
         <h2 className="text-4xl font-bold">Something went wrong</h2>
         <p>Looks like this page doesnt exist or was removed.</p>
        <Link to='/'> <button className=" mt-4 btn bg-[#6D31ED] text-white">Go Back Home</button></Link>
        </div>
         
     </div>
    );
};

export default NotFoundPage;