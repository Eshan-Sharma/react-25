import { useState } from "react";
import { useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  let length = 0;
  const url = `https://picsum.photos/v2/list?page=2&limit=10`;

  async function getImages(getUrl) {
    const response = await fetch(getUrl);
    const data = response.json();
    length = data.length;
  }

  const nextSlider = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlider = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  useEffect(() => {
    getImages(url);
  }, [url]);

  return <div className="container"></div>;
}
