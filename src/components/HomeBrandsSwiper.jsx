import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Brand1 from '../assets/images/brands/1.png';
import Brand2 from '../assets/images/brands/2.png';
import Brand3 from '../assets/images/brands/3.png';
import Brand4 from '../assets/images/brands/4.png';
import Brand5 from '../assets/images/brands/5.png';
import Brand6 from '../assets/images/brands/6.png';

const HomeBrandsSwiper = () => {
    return (
        <div className='brands-swiper'>
            <Container>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        waitForTransition: false,
                    }}
                    speed={5000}
                    breakpoints={{
                        1024: {
                            slidesPerView: 6,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        375: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 2,
                        }
                    }}
                >

                    <SwiperSlide><img src={Brand1} /></SwiperSlide>
                    <SwiperSlide><img src={Brand2} /></SwiperSlide>
                    <SwiperSlide><img src={Brand3} /></SwiperSlide>
                    <SwiperSlide><img src={Brand4} /></SwiperSlide>
                    <SwiperSlide><img src={Brand5} /></SwiperSlide>
                    <SwiperSlide><img src={Brand6} /></SwiperSlide>
                    <SwiperSlide><img src={Brand1} /></SwiperSlide>
                    <SwiperSlide><img src={Brand2} /></SwiperSlide>
                    <SwiperSlide><img src={Brand3} /></SwiperSlide>
                    <SwiperSlide><img src={Brand4} /></SwiperSlide>
                    <SwiperSlide><img src={Brand5} /></SwiperSlide>
                    <SwiperSlide><img src={Brand6} /></SwiperSlide>
                </Swiper>
            </Container>
        </div>
    );
}

export default HomeBrandsSwiper;
