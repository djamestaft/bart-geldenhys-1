import { StaticImageData } from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// import styles bundle
import 'swiper/css/bundle';

interface iProps {
    bannerImages: Array<StaticImageData>,
    overlay: Boolean
}
function Banner(props: iProps) {
  return (
    <div className={props.overlay ? 'overlay-image' : ''}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
          {props.bannerImages.map((e: any) => {
            return (
              <SwiperSlide key={e}><img src={e.src} alt="" height="400px" width="100%" /></SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  )
}

export default Banner