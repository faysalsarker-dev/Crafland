import { Link } from "react-router-dom";
import Slider from "../component/Slider";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import TrandingCard from "../component/TrandingCard";


import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/groovyWalk.json"



const Home = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://my-servar-alpha.vercel.app/allcraft')
            .then(res => res.json())
            .then(info => {
                setData(info)
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)

            })
    }, [])





    return (
        <div>

            <div className="lg:h-[80vh] grid md:grid-cols-2 grid-cols-1  gap-5 px-4 justify-between items-center">
                <div className='flex flex-col p-5 '>

                    <h2 className="text-4xl font-extrabold">Welcome to <span className="text-[#6D31ED]">Crafland</span></h2>
                    <h4 className="text-2xl font-bold ">You can  <Typewriter
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


            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 gap-5 text-center text-xl font-semibold text-[#372856]">
                <Link to='/category/Wooden Furniture & Sculptures'> <div className="flex-row hover:scale-110 transition-transform duration-300 ease-in-out bg-[#f5f1fea4] rounded-lg h-[150px] flex justify-center items-center px-4 ">
                    <img className="flex-1 w-16 " src="https://i.ibb.co/0mscv0H/traced-images-4.png" alt="" />

                    <h3 className="flex-1">Wooden Furniture & Sculptures</h3></div></Link>
                <Link to='/category/Wooden Home Decor'> <div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#f0f9ffaa] rounded-lg h-[150px] flex justify-center items-center px-4 ">
                    
                    <div className="flex-1 p-4">
                        <img className="w-[80%]" src="https://i.ibb.co/bJ3X3XN/traced-lamp-line-black-icon-vector.png" alt="" />
                    </div>
                    <h3 className="flex-1">Wooden Home Decor</h3></div></Link>
                <Link to='/category/Wooden Utensils and Kitchenware'><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#e2f1e591] rounded-lg h-[150px] flex  md:flex-row flex-row justify-center items-center px-4 ">
<div className="flex-1 p-2">
    
                    <img className="w-[60%]" src="https://i.ibb.co/Mc79Vnn/traced-images-3.png" alt="" />
</div>
                
                    <h3 className="flex-1">Wooden Utensils and Kitchenware</h3></div></Link>
                <Link to='/category/Jute Home Decor'><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#d4edf88d] rounded-lg h-[150px] flex justify-center items-center px-4 ">
                    
                    <div className="flex-1">
                        <img className="w-[70%]" src="https://i.ibb.co/BKJRzxg/traced-images-2-1.png" alt="" />
                    </div>
                    <h3 className="flex-1">Jute Home Decor</h3></div></Link>
                <Link to='/category/Jute Kitchenware & utensils'><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#d7f9f386] rounded-lg h-[150px]  justify-center items-center px-4 flex flex-row ">
               <div className="flex-1 p-4"> <img className=" w-[60%] " src="https://i.ibb.co/6vcZSkc/traced-images.png" alt="" /></div>

                    
                    <h3 className="flex-1">Jute Kitchenware & utensils</h3>
                </div></Link>
                <Link to='/category/Jute and wooden jewellery'><div className="hover:scale-110 transition-transform duration-300 ease-in-out bg-[#fff3c976] rounded-lg h-[150px] justify-center items-center px-4 flex flex-row"> <div className="flex-1 p-2"> <img className=" w-[70%] " src="https://i.ibb.co/PFtt6J8/traced-images-2.png" alt="" /></div><h3 className="flex-1">Jute and wooden jewellery</h3>

                </div></Link>
            </div>

            <div className="space-y-3 px-4 my-10">


                <h3 className="text-center text-3xl font-bold my-6">Features</h3>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 text-[#323743]">
                    <div className="bg-[#FFC9E2] p-5 rounded-xl">
                        <h3 className="text-xl  font-bold text-[#323743]">Add Craft Item</h3>
                        <p>Welcome to our crafting community! Start by adding your unique creations to our platform.
                            Showcase your talent by uploading photos and descriptions of your handmade items.
                        </p>

                    </div>
                    <div className=" lg:col-span-2 bg-[#D3C1FA]  p-5 rounded-xl">
                        <h3 className="text-xl  font-bold text-[#323743]">Explore Peoples Collections</h3>
                        <p>Discover a diverse range of handmade items from talented creators around the world.
                            Browse through various categories such as jewelry, home decor, fashion, and more.
                            Find inspiration for your own projects by exploring different styles and techniques.

                        </p>

                    </div>
                </div>
                <div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 text-[#323743]">
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

            <div className="flex justify-start p-2">
                <h3 className="text-center text-4xl font-extrabold my-8 border-b-2 pb-3 border-b-[#6D31ED]">Trending</h3>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {loading ? (
                    <div className="h-[80vh] flex justify-center items-center">
                        <Lottie className="w-2/4" animationData={groovyWalkAnimation} loop={true} />
                    </div>
                ) : (
                    data?.slice(0, 6).map(itm => <TrandingCard key={itm._id} itm={itm}></TrandingCard>)
                )}

            </div>



            <div className="bg-[#8E61F1] text-center p-8 rounded-2xl space-y-7 my-6">
                <h3 className="text-center text-4xl font-bold text-white">Getting started</h3>
                <Link to='/register'><button className="bg-white badge mt-5 p-4 font-semibold text-[#8E61F1]">Sing up</button></Link>


            </div>




            <div>



            </div>

        </div>
    );
};

export default Home;