import { Link } from "react-router-dom";
import Slider from "../component/Slider";
import { Typewriter } from "react-simple-typewriter";
import { GiStoneCrafting } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";



const Home = () => {
    return (
        <div>

            <div className="lg:h-[80vh] grid grid-cols-2 gap-5 px-4 justify-between items-center">
                <div className='flex flex-col p-5 '>

                    <h2 className="text-4xl font-extrabold">Welcome to <span className="text-[#6D31ED]">Crafland</span></h2>
                    <h4 className="text-2xl font-bold text-[#040404af]">You can  <Typewriter
                        words={['Add Craft Item', 'Explore Peoples Collections', 'Watch Your Adding Collection']}
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
                <Link to='/category/Wooden Furniture & Sculptures'> <div className=" hover:scale-110 transition-transform duration-300 ease-in-out bg-[#D3C1FA] rounded-lg h-[150px] flex justify-center items-center px-4 text-[#323743]"><h3>Wooden Furniture & Sculptures</h3></div></Link>
                <Link to='/category/Wooden Home Decor'> <div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#E2FFD4] rounded-lg h-[150px] flex justify-center items-center px-4 text-[#323743]"><h3>Wooden Home Decor</h3></div></Link>
                <Link to='/category/Wooden Utensils and Kitchenware'><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#F7ECFF] rounded-lg h-[150px] flex justify-center items-center px-4 text-[#323743]"><h3>Wooden Utensils and Kitchenware</h3></div></Link>
                <Link to='/category/Jute Home Decor'><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#FFD9C9] rounded-lg h-[150px] flex justify-center items-center px-4 text-[#323743]"><h3>Jute Home Decor</h3></div></Link>
                <Link to='/category/Jute Kitchenware & utensils'><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#D7F9F3] rounded-lg h-[150px] flex justify-center items-center px-4 text-[#323743]"><h3>Jute Kitchenware & utensils</h3>
                </div></Link>
                <Link to='/category/Jute and wooden jewellery'><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#FFF3C9] rounded-lg h-[150px] flex justify-center items-center px-4 text-[#323743]"><h3>Jute and wooden jewellery</h3>

                </div></Link>
            </div>

            <div className="space-y-3 px-4 my-10">


                <h3 className="text-center text-3xl font-bold my-6">Features</h3>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                    <div className="bg-[#FFC9E2] p-5 rounded-xl">
                        <h3 className="text-xl  font-bold text-[#323743]">Add Craft Item</h3>
                        <p>Welcome to our crafting community! Start by adding your unique creations to our platform.
                            Showcase your talent by uploading photos and descriptions of your handmade items.
                        </p>
                        <GiStoneCrafting />
                    </div>
                    <div className=" lg:col-span-2 bg-[#D3C1FA]  p-5 rounded-xl">
                        <h3 className="text-xl  font-bold text-[#323743]">Explore Peoples Collections</h3>
                        <p>Discover a diverse range of handmade items from talented creators around the world.
                            Browse through various categories such as jewelry, home decor, fashion, and more.
                            Find inspiration for your own projects by exploring different styles and techniques.

                        </p>
                        <MdTravelExplore />
                    </div>
                </div>
                <div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                        <div className="bg-[#FDCFC4] p-5 rounded-xl lg:col-span-2 flex justify-start">
                            <div>
                                <h3 className="text-xl  font-bold text-[#323743]">Update Your Craft Item</h3>
                                <p>Keep your collection up-to-date by easily editing and managing your craft items.
                                    Update product descriptions, prices, and availability to keep customers informed.
                                    Showcase new designs or variations of existing products to attract more attention.

                                </p>
                            </div>
                        </div>
                        <div className="  bg-[#F0F9FF]  p-8 rounded-xl">
                            <h3 className="text-xl  font-bold text-[#323743]">Watch Your Adding Collection</h3>
                            <p>Keep track of your added craft items and monitor their performance on our platform.
                                Receive notifications and insights on views, likes, and purchases of your creations.


                            </p>
                        </div>
                    </div>
                </div>

            </div>



            <div className="bg-[#8E61F1] text-center p-8 rounded-2xl space-y-7">
                <h3 className="text-center text-4xl font-bold text-white">Getting started</h3>
                <Link className="mt-5" to='/register'><button className="bg-white badge p-4 font-semibold text-[#8E61F1]">Sing up</button></Link>


            </div>




            <div>



            </div>

        </div>
    );
};

export default Home;