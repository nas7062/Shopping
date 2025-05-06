import css from './slider.module.css'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination } from 'swiper/modules'
export const Slider = () => {
  const arr = new Array(12).fill(0).map((_, i) => i + 1)
  console.log(arr)
  return (
    <main className={css.slider}>
      <>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          navigation={true}
          spaceBetween={2}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {arr.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={`/src/assets/slider${item}.jpg`} alt={`슬라이더 사진${item}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </main>
  )
}
