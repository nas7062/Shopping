import styles from './recommend.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import RecommendItem from './RecommendItem'
const Recommend = () => {
  return (
    <main className={styles.recommend}>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        navigation={true}
        spaceBetween={2}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          700: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          400: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <RecommendItem />
        </SwiperSlide>
      </Swiper>
    </main>
  )
}
export default Recommend