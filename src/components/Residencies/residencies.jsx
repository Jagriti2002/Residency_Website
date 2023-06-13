import React from 'react'
import './residencies.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const residencies = () => {
  return (
    <section id='residencies' className="residency_wrapper">
        <div className="paddings innerWidth residency-container">
            <div className="residency-heading flexColStart">
                <span className='primaryText'>Best Choices</span>
                <span className='greenText'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons />
                {data.map((card, i)=>(
                    <SwiperSlide key={i}>
                        <div className="flexColStart residency-card">
                            <img src={card.image} alt="home" />
                            <span className='dollarText residency-price'>
                                <span>$</span>
                                <span>{card.price}</span>
                            </span>
                            <span className='nameText'>{card.name}</span>
                            <span className='paraText'>{card.detail}</span>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}