import React from 'react'

const CarouselItem = ({ img, indx, start, stop }) => {
    return (
        <div className='carousel-item' onMouseEnter={stop} onMouseOut={start}>
            <img src={img} alt={indx} />
        </div>
    )
}

export default CarouselItem