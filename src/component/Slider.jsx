import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay,  Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div>
                <>
                <>
            <Swiper
                spaceBetween={50}
               
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay, Navigation ]}
                className="mySwiper z-10  container"
            >
            
                <SwiperSlide  ><div  className='w-full p-12 lg:h-[80vh] md:h-[40vh] h-[45vh] bg-cover bg-no-repeat bg-center overflow-hidden rounded-lg'style={{backgroundImage: 'url(https://img.freepik.com/free-photo/wicker-basket-isolated_2829-18054.jpg?t=st=1714126501~exp=1714130101~hmac=870689642742bf9e9de8a31404bec0caa9a4a52c30fddab79b6f7a9a0e341de2&w=826)'}}>


                    
                
                
            
                </div></SwiperSlide>
               
            
               
            
                <SwiperSlide ><div className='w-full p-12 lg:h-[80vh] md:h-[40vh] h-[45vh] bg-cover bg-no-repeat bg-center overflow-hidden rounded-lg'style={{backgroundImage: 'url(https://img.freepik.com/premium-vector/zero-waste-reusable-cutlery-metal-straws-cleaning-brush-knitted-jute-basket-vector-clipart_530505-491.jpg?w=740)'}}>


                    
                
                
            
                </div></SwiperSlide>
               
              
            

            </Swiper>

        </>
    </>
        </div>
    );
};

export default Slider;