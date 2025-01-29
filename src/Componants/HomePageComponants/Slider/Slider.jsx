
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import banner1 from '../../../assets/Slider/Black and Pink Edgy Black Friday Banner Landscape.png'
import banner2 from '../../../assets/Slider/Black and White Modern Black Friday Sale Banner.png'
import banner3 from '../../../assets/Slider/Green and Yellow Simple Clean Shoes Sale Banner.png'
const Slider = () => {
    return (
        <>
        <div className=''>

        <Swiper
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      
        className="mySwiper"
      >
      

        <SwiperSlide>
            <img src={banner2} className='w-full h-[50vh] object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner1} className='w-full h-[50vh] object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner3} className='w-full h-[50vh] object-cover' alt="" />
        </SwiperSlide>

        
      </Swiper>
        </div>
        </>
    );
};

export default Slider;