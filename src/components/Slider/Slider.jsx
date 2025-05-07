import css from './slider.module.css'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import axios from 'axios'
import { SliderItem } from './SliderItem'
export const Slider = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products')
        setProduct(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [])

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
          {product.map(item => (
            <SwiperSlide>
              <SliderItem product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </main>
  )
}
