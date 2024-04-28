import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Navigation,Pagination } from 'swiper/modules';


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

                        modules={[Autoplay, Navigation,Pagination]}
                        className="mySwiper z-10  container"
                    >

        <SwiperSlide  ><div className='w-full p-12 lg:h-[80vh] md:h-[40vh] h-[45vh] bg-cover bg-no-repeat bg-center overflow-hidden rounded-lg' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/wicker-basket-isolated_2829-18054.jpg?t=st=1714126501~exp=1714130101~hmac=870689642742bf9e9de8a31404bec0caa9a4a52c30fddab79b6f7a9a0e341de2&w=826)' }}>






                        </div></SwiperSlide>




                        <SwiperSlide ><div className='w-full p-12 lg:h-[80vh] md:h-[40vh] h-[45vh] bg-cover bg-no-repeat bg-center  overflow-hidden rounded-lg' style={{ backgroundImage: 'url(<a href="https://www.freepik.com/free-photo/close-up-arrangement-modern-vases_31276789.htm#fromView=search&page=2&position=17&uuid=262a5723-f56f-4ad2-99f4-50c4b3bf22a5">Image by freepik</a>)' }}>






                        </div></SwiperSlide>




                    </Swiper>

                </>
            </>
        </div>
    );
};

export default Slider;