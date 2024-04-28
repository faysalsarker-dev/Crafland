import {  useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


const UpdatePage = () => {
   
    const { id } = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/productDetails/${id}`)
            .then(res => res.json())
            .then(info => {
                setData(info);
                console.log(info);

            })

    }, [id])

    const {img,name,sub_category,price,description,customization,stockStatus,processing_Time,rating}= data


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
        const description = form.description.value;

        const sub_category = subcategoryRef.current.value;
        const customization = customizationRef.current.value;
        const stockStatus = stockStatusRef.current.value;


    

        console.log('submit', name, img, processing_Time, price, rating, sub_category, customization, stockStatus);

        const info = {
            name, img, processing_Time, price, rating, sub_category, customization, stockStatus, description
        };

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Itam Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                }
                console.log(data);
            })
            .catch(() => toast.error('Something went wrong'));
    };

    return (
        <div className="">



            <div className="">
                <h3 className="text-4xl font-extrabold my-8">Update your Craft Item</h3>


                <form onSubmit={handleSubmit} className="px-4">
                    <div className="flex gap-8">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">item name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your item name" defaultValue={name} className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" name="img" defaultValue={img} placeholder="use image URL" className="input input-bordered" required />
                        </div>


                    </div>



                    <div className="flex gap-8 mt-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Processing time</span>
                            </label>
                            <input type="number" name="processingTime" defaultValue={processing_Time} placeholder="Processing time" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                        </div>





                    </div>

                    <div className="flex gap-8 mt-5">
                        <div className="form-control flex-1">
                            <select className="select select-bordered w-full " defaultValue={sub_category} ref={subcategoryRef}>
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
                            <select className="select select-bordered w-full "defaultValue={customization} ref={customizationRef}>
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
                            <select className="select select-bordered w-full "defaultValue={stockStatus} ref={stockStatusRef}>
                                <option disabled selected>StockStatus</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </div>

                        <div className="form-control flex-1">

                            <label className="label">
                                <span className="label-text">rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="w-ful my-6"><textarea defaultValue={description} name="description" className="textarea textarea-bordered w-full" placeholder="short description"></textarea></div>





                    <button className="w-full btn bg-[#6D31ED] mt-5 text-white">Update item</button>


                </form>






            </div>
        </div>
    );
};

export default UpdatePage;