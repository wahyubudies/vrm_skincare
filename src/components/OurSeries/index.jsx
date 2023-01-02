import React from 'react'
import { series, additional } from "../../ui_config/img.json"

import "./index.sass"

const OurSeries = () => {
    const getSeries = series.map((s, idx) => {
        return (
            <img key={idx}
                src={`./img/${s.name}`}
                alt=""
                className='series_img' />
        )
    })
    const getAdditional = additional.map((a, idx) => {
        return (
            <img key={idx}
                src={`./img/${a.name}`}
                alt=""
                className='series_img' />
        )
    })
    return (
        <React.Fragment>
            <h3 className='title'>Our Series</h3>
            <div className="wrapper">
                {getSeries}
            </div>
            <h3 className='title'>Additional</h3>
            <div className="wrapper">
                {getAdditional}
            </div>
        </React.Fragment>
    )
}

export default OurSeries