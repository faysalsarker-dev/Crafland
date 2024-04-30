import {  useEffect, useRef, useState } from "react";

import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/groovyWalk.json"


const UpdatePage = () => {
    const [loading,setLoading]=useState(true)
   
    const { id } = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        setLoading(true)
        fetch(`https://my-servar-alpha.vercel.app/productDetails/${id}`)
            .then(res => res.json())
            .then(info => {
                setData(info);
                setLoading(false)
               

            }).catch(err=>{
                console.log(err)
                setLoading(false)
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











       
            const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                confirmButton: "btn bg-[#6D31ED] text-white ml-2",
                cancelButton: "btn btn-danger"
              },
              buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
              title: "Are you sure?",
              text: "You won't to Update this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: " Yes, Update it!",
              cancelButtonText: "No, cancel! ",
              reverseButtons: true
            }).then((result) => {
              if (result.isConfirmed) {
    
                fetch(`https://my-servar-alpha.vercel.app/update/${id}`, {
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
                    
               
                  .catch(err =>{
                  console.log(err);
                      swalWithBootstrapButtons.fire({
                        title: "Your file has been not update",
                        text: `some went wrong`,
                        icon: "error"
                      });
                    
                  })
        
        
        
        
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire({
                  title: "Cancelled",
                  text: "Your imaginary file is safe :)",
                  icon: "error"
                });
              }
            });
        
          





      
    };
  
















if(loading){
    return <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={groovyWalkAnimation} loop={true} /></div>
}

    return (
        <div className="">



            <div className="">
                <h3 className="md:text-4xl text-2xl md:text-start text-center font-extrabold my-8">Update your Craft Item</h3>


                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">item name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your item name" defaultValue={name} className="input input-bordered" required />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="text" name="img" defaultValue={img} placeholder="use image URL" className="input input-bordered" required />
                        </div>


                    </div>



                    <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 mt-5">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Processing time</span>
                            </label>
                            <input type="number" name="processingTime" defaultValue={processing_Time} placeholder="Processing time" className="input input-bordered" required />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                        </div>





                    </div>

                    <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 mt-5">
                        <div className="form-control ">
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

                        <div className="form-control ">
                            <select className="select select-bordered w-full "defaultValue={customization} ref={customizationRef}>
                                <option disabled selected>Customization</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>





                    </div>


                    <div className=" grid md:grid-cols-2 gap-8 mt-5">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Status -example: In stock, Made to Order</span>
                            </label>
                            <select className="select select-bordered w-full "defaultValue={stockStatus} ref={stockStatusRef}>
                                <option disabled selected>StockStatus</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </div>

                        <div className="form-control ">

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