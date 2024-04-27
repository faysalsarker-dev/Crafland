import { useContext, useRef } from "react";
import { ContextData } from "../context/Context";
import toast from "react-hot-toast";


const AddCraft = () => {
    const { user } = useContext(ContextData);
    const subcategoryRef = useRef(null);
    const customizationRef = useRef(null);
    const stockStatusRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const processing_Time = form.processingTime.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const sub_category = subcategoryRef.current.value;
        const customization = customizationRef.current.value;
        const stockStatus = stockStatusRef.current.value;


        const email = user?.email;
        const user_name = user?.displayName;

        console.log('submit', name, img, processing_Time, price, rating, sub_category, customization, stockStatus, email, user_name);

        const info = {
            name, img, processing_Time, price, rating, sub_category, customization, stockStatus, email, user_name
        };

        fetch('http://localhost:5000/addcraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success("successfully added")
                }
                console.log(data);
            })
            .catch(() => toast.error('Something went wrong'));
    };

    return (
        <div className="">



            <div className="">
                <h3 className="text-4xl font-extrabold my-8">Add your Craft Item</h3>


                <form onSubmit={handleSubmit} className="px-4">
                    <div className="flex gap-8">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">item name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your item name" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" name="img" placeholder="use image URL" className="input input-bordered" required />
                        </div>


                    </div>



                    <div className="flex gap-8 mt-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Processing time</span>
                            </label>
                            <input type="number" name="processingTime" placeholder="Processing time" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="price" className="input input-bordered" required />
                        </div>





                    </div>

                    <div className="flex gap-8 mt-5">
                        <div className="form-control flex-1">
                            <select className="select select-bordered w-full " ref={subcategoryRef}>
                                <option disabled selected>subcategory Name</option>
                                <option>Wooden Furniture & Sculptures</option>
                                <option>Wooden Home Decor</option>
                                <option>Wooden Utensils and Kitchenware</option>
                                <option>Jute Home Decor</option>
                                <option>Jute Kitchenware & utensils</option>
                                <option>Jute and wooden jewellery</option>
                            </select>
                        </div>

                        <div className="form-control flex-1">
                            <select className="select select-bordered w-full " ref={customizationRef}>
                                <option disabled selected>Customization</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>





                    </div>


                    <div className="flex gap-8 mt-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Status -example: In stock, Made to Order</span>
                            </label>
                            <select className="select select-bordered w-full " ref={stockStatusRef}>
                                <option disabled selected>StockStatus</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </div>

                        <div className="form-control flex-1">

                            <label className="label">
                                <span className="label-text">rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="rating" className="input input-bordered" required />
                        </div>
                    </div>







                    <button className="w-full btn bg-[#6D31ED] mt-5 text-white">Add item</button>


                </form>






            </div>
        </div>
    );
};

export default AddCraft;