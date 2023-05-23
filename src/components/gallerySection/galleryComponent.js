import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Navigation, Pagination]);

import slider from '../../../src/assets/img/5.png';
import slider2 from '../../../src/assets/img/3.png';



export const Gallery = ({header, children}) => {
    return(
        <section id="gallery" className="gallery bg-gray-100 flex items-center justify-center text-center">
            <div className="container mx-auto my-24">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-extralight mb-6" dangerouslySetInnerHTML={{ __html: header }}>
                    </h1>
                    <div className="max-w-3xl mt-12 shadow-2xl">
                        {children}
                    </div>
                </div>
            </div>
        </section>

    );
};

export const Slider = ({seconds, children}) => {
    return(
        <Swiper
            spaceBetween={5}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: seconds }} // Configuración del autoplay
        >
            {children}
        </Swiper>
    );
}; 

export const SliderItem = ({image, alt}) => {
    return(
        <SwiperSlide>
            <img src={image} alt={alt} />
        </SwiperSlide>
    );
};