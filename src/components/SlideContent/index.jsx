import React from 'react'
import "./index.sass"

import { slider } from "../../ui_config/img.json"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const SlideContent = () => {
    const getSlideImages = slider.map((s, idx) => (
        <SplideSlide key={idx}>
            <img src={`./img/${s.name}`} alt="" className='img_item' />
        </SplideSlide>
    ))

    return (
        <div className="wrap_slider">
            <Splide
                options={{
                    rewind: true,
                    width: 800,
                }}
                aria-label="VRM Skin Care">
                {getSlideImages}
            </Splide>
        </div>
    )
}

export default SlideContent