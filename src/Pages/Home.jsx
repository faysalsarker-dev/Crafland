import { Link } from "react-router-dom";
import Slider from "../component/Slider";
import { Typewriter } from "react-simple-typewriter";



const Home = () => {
    return (
        <div>

            <div className="lg:h-[80vh] grid grid-cols-2 gap-5 px-4 justify-between items-center">
                <div className='flex flex-col p-5'>
              
                    <h2 className="text-4xl font-extrabold">Welcome to <span className="text-[#6D31ED]">Crafland</span></h2>
                    <h4 className="text-3xl font-bold">You can     <Typewriter 
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          /></h4>
                </div>
                <div>
                    <Slider></Slider>
                </div>




            </div>
            {/* <Slider></Slider> */}
           <div className="flex justify-center p-2">
           <h3 className="text-center text-4xl font-extrabold my-8 border-b-2 pb-3 border-b-[#6D31ED]">Our Categories</h3>
           </div>


            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 p-5 gap-5 text-center text-xl font-medium">
                <Link> <div className=" hover:scale-110 transition-transform duration-300 ease-in-out bg-[#D3C1FA] rounded-lg h-[150px] flex justify-center items-center">Clay-made pottery</div></Link>
                <Link> <div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#E2FFD4] rounded-lg h-[150px] flex justify-center items-center">Stoneware</div></Link>
                <Link><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#F7ECFF] rounded-lg h-[150px] flex justify-center items-center">Porcelain</div></Link>
                <Link><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#FFD9C9] rounded-lg h-[150px] flex justify-center items-center">Terra Cotta</div></Link>
                <Link><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#D7F9F3] rounded-lg h-[150px] flex justify-center items-center">Ceramics & Architectural
</div></Link>
                <Link><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#FFF3C9] rounded-lg h-[150px] flex justify-center items-center">Home decor pottery
</div></Link>
            </div>




            <div className="bg-[#8E61F1] h-[400px]">


            </div>




            <div>
                


            </div>

        </div>
    );
};

export default Home;