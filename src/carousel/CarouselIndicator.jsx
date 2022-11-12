import React from 'react'

const CarouselIndicator = ({ slides, currentIndx, switchIndex }) => {
    return (
        <div className="carousel-indicators">
            {slides.map((_, indx) =>
                <button
                    className={`carousel-indictor-item ${currentIndx === indx ? 'active' : ""}`}
                    onClick={() => switchIndex(indx)}
                ></button>)}
        </div>
    )
}

export default CarouselIndicator