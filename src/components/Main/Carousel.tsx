import React, { useState, useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import Image from "next/image";
import Carousel from "react-responsive-carousel";
interface Slide {
  imageUrl: string;
  caption?: string; // Optional caption
}

const MyCarousel: React.FC<Slide[]> = () => {
  const slides = [
    "/1705063992-1600х491UZ.png",
    "/1707125602-1600x491UZ.png",
    "/1707476026-1600491_x8b.png",
    "/1711612116-Main_1600x491_uz.png",
    "/slide1.png",
    "/1713186276-1600x491radar.png",
    "/1714733057-main_1600x491_uz.png",
    "/1714989982-Intel s23_1600╤Е491_uz.png",
    "/1715658746-Banner-1-uzb2.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<any>(null); // Ref for manual control (optional)

  const handleSlideChange = (newIndex: number) => setCurrentSlide(newIndex);

  const handleAutoplay = () => {
    // Optional logic for autoplay, could use libraries like react-interval
  };

  useEffect(() => {
    // Handle autoplay on component mount/unmount if enabled
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel
          showArrows={true} // Optional: Show navigation arrows
          onChange={handleSlideChange} // Update state on slide change
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <Image
                layout="fill"
                objectFit="scale-down"
                src={slide}
                alt="Slide"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <button onClick={() => carouselRef.current.slidePrev()}>Previous</button>
      <button onClick={() => carouselRef.current.slideNext()}>Next</button>
      {/* Optional dots for navigation */}
      {/* <div className="carousel-dots">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={currentSlide === index ? 'active' : ''}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div> */}
      {/* Optional autoplay controls */}
      {/* <button onClick={handleAutoplay}>Autoplay</button> */}
    </div>
  );
};

export default MyCarousel;
