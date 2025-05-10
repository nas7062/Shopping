import styles from './recommend.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
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
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
        </SwiperSlide>
      </Swiper>
    </main>
  )
}

export default Recommend
