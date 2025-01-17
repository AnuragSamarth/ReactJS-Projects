import { useEffect, useRef } from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Carousel({ children }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselBoxRef = useRef();
  const clearIntervalRef = useRef();

  //   console.log(clearIntervalRef)

  useEffect(() => {
    startSlider();
  }, []);

  function startSlider() {
    clearIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const { count, slides } = sliderInfo();
        //    console.log(count)
        const newIndex = prev === count - 1 ? 0 : prev + 1;

        [...slides].forEach((slide, index) => {
          slide.setAttribute("data-active", index === newIndex);
        });

        return newIndex;
      });
    }, 5000);
  }

  function handlePrev() {
    // stop the interval
    clearInterval(clearIntervalRef.current);

    const { count, slides } = sliderInfo();
    const newIndex =
      currentImageIndex === 0 ? count - 1 : currentImageIndex - 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });
    startSlider();
    setCurrentImageIndex(newIndex);
  }

  function handleNext() {
    // stop the interval
    clearInterval(clearIntervalRef.current);

    const { count, slides } = sliderInfo();
    const newIndex =
      currentImageIndex === count - 1 ? 0 : currentImageIndex + 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === newIndex);
    });
    startSlider();
    setCurrentImageIndex(newIndex);
  }

  function sliderInfo() {
    const carouselBox = carouselBoxRef.current;
    const slides = carouselBox.children;
    const count = slides.length;

    return { slides, count };
  }

  function handleStepperClick(newIndex){
     return () => {
        clearInterval(clearIntervalRef.current);

        const { slides } = sliderInfo();
    
        [...slides].forEach((slide, index) => {
          slide.setAttribute("data-active", index === newIndex);
        });
        startSlider();
        setCurrentImageIndex(newIndex);
     }
  }

  //   console.log("re-render");

  return (
    <section>
      <div className="w-full h-screen flex justify-center relative">
        <h2>{currentImageIndex}</h2>
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <section ref={carouselBoxRef} className="w-[90%] h-80 mt-10 relative flex">
          {children}
        </section>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="absolute top-96 left-96">
        {Array.from(children).map((_, index) => {
          return <button key={index} className="ml-3" onClick={handleStepperClick(index)}>{index}</button>;
        })}
      </div>
    </section>
  );
}
