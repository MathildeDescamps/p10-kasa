import { useState } from "react";

function Carousel(props) {
    let pictures = props.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shownSlide, setShownSlide] = useState(1);
    let newIndex;
    // Slide to previous image function
    function slideToPrevious() {
        const isFirstSlide = currentIndex === 0;
        newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setShownSlide(newIndex + 1);
    }
    // Slide to next image function
    function slideToNext() {
        const isLastSlide = currentIndex === pictures.length - 1;
        newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setShownSlide(newIndex + 1);
    }
    return (
        <div className="slider">
            <div className="slide" style={{ backgroundImage: `url(${pictures[currentIndex]})` }}></div>
            <span className="slider-button-prev" onClick={slideToPrevious} ></span>
            <span className="slider-button-next" onClick={slideToNext} ></span>
            <span className="slider-pagination">{shownSlide + ' / ' + pictures.length}</span>
        </div>
    )
}
export default Carousel;