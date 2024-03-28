import { useState } from "react";
import { useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import imagesData from "./images.json";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  let length = images.length;

  const nextSlider = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlider = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setImages(imagesData);
  }, []);

  return (
    <div className="container">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlider} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlider} />
      {images.map((image, index) => {
        return (
          <div
            className={index === currentSlide ? "slide-active" : "slide"}
            key={index}
          >
            {index == currentSlide && <img src={image.download_url} />}
          </div>
        );
      })}
    </div>
  );
}
