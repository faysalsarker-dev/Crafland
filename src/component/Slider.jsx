import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Slider = () => {
    return (
        <div>
            <>
                <>
                    <Swiper
                        spaceBetween={50}
                        Navigation={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Autoplay, Navigation, Pagination]}
                        className="mySwiper z-10  container"
                    >

                        {/* <SwiperSlide  ><div className='w-full p-12 lg:h-[80vh] md:h-[40vh] h-[45vh] bg-cover bg-no-repeat bg-center overflow-hidden rounded-lg' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/wicker-basket-isolated_2829-18054.jpg?t=st=1714126501~exp=1714130101~hmac=870689642742bf9e9de8a31404bec0caa9a4a52c30fddab79b6f7a9a0e341de2&w=826)' }}>






                        </div></SwiperSlide> */}




                        <SwiperSlide className='px-6 py-8 w-full lg:h-[80vh] md:h-[40vh] h-[45vh] '>
                            <img className='w-[90%] mx-auto' src="https://i.ibb.co/6XsbcSJ/Picsart-24-04-29-09-43-38-682.png" />
                        </SwiperSlide>


                        <SwiperSlide className=' p-6 w-full lg:h-[80vh] md:h-[40vh] h-[45vh] flex justify-center items-center'>
                            <img className='w-[60%]  mx-auto' src="https://i.ibb.co/vh9nJNS/Picsart-24-04-29-10-23-56-299.png" />
                        </SwiperSlide>


                        <SwiperSlide className=' px-6 py-8  w-full lg:h-[80vh] md:h-[40vh] h-[45vh] '>
                            <img className='w-[70%]' src="https://i.ibb.co/G3vDzrq/Picsart-24-04-29-09-59-32-657.png" />
                        </SwiperSlide>




                    </Swiper>

                </>
            </>
        </div>
    );
};

export default Slider;