import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import TitleComponent from './TitleComponent';
import HomeTestimonialsItem from './HomeTestimonialsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Arrow from '../assets/images/arrow-slides.png';
import SwiperDot from '../assets/images/swiper-dot.svg?react';


const HomeTestimonials = () => {
    const paginationRef = useRef(null);


    return (
        <Container>
            <TitleComponent title={"Testimonials"} description={"Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"} />
            <div className='testimonials'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 5000,
                    }}
                    speed={1000}

                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: (index, className) => {
                          return `
                            <span class="item ${className}">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
                                </svg>
                            </span>
                            `;
                        },
                      }}
                    navigation={{
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        320: {
                            slidesPerView: 1.1,
                        },
                        375: {
                            slidesPerView: 1.1,
                        },
                        425: {
                            slidesPerView: 1.1,
                        },
                        768: {
                            slidesPerView: 1.5,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 2,
                        }
                    }}
                    
                >
                    <SwiperSlide>
                        <HomeTestimonialsItem CommentOwner={"John Smith"} Position={"Marketing Director at XYZ Corp"} Comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeTestimonialsItem CommentOwner={"John Smith"} Position={"Marketing Director at XYZ Corp"} Comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeTestimonialsItem CommentOwner={"John Smith"} Position={"Marketing Director at XYZ Corp"} Comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeTestimonialsItem CommentOwner={"John Smith"} Position={"Marketing Director at XYZ Corp"} Comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HomeTestimonialsItem CommentOwner={"John Smith"} Position={"Marketing Director at XYZ Corp"} Comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                    </SwiperSlide>


                </Swiper>
                <div className="controls-section">
                    <div className="swiper-prev"><img src={Arrow} alt='Prev' /></div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-next"><img src={Arrow} alt='Next' /></div>
                </div>
            </div>
        </Container>
    );
}

export default HomeTestimonials;
