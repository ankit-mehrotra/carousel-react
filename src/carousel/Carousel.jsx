import CarouselItem from "./CarouselItem"
import "./Carousel.css";
import { useEffect, useRef, useState } from "react";
import CarouselControls from "./CarouselControls";
import CarouselIndicator from "./CarouselIndicator";

const Carousel = ({ images, interval = 3000, controls, indicators }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef();

    const sliderStopFn = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    const sliderStartFn = () => {
        sliderStopFn()
        slideInterval.current = setInterval(() => {
            setCurrentSlide(curr => curr < images.length - 1 ? curr + 1 : 0)
        }, interval)

    }
    const prev = () => {
        sliderStartFn()
        const index = currentSlide > 0 ? currentSlide - 1 : images.length - 1;
        setCurrentSlide(index);
    }

    const next = () => {
        sliderStartFn()
        const index = currentSlide < images.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }

    useEffect(() => {
        sliderStartFn();
        return () => sliderStopFn()
    }, []);

    const switchIndex = (indx) => {
        sliderStartFn()
        setCurrentSlide(indx);
    }

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                {
                    images.map((img, indx) => (
                        <CarouselItem img={img} key={indx} indx={indx} stop={sliderStopFn} start={sliderStartFn} />
                    ))
                }
            </div>
            {indicators && <CarouselIndicator slides={images} currentIndx={currentSlide} switchIndex={switchIndex} />}
            {controls && <CarouselControls prev={prev} next={next} />}
        </div>
    )
}

export default Carousel