import { useState } from "react";

const Slider = () => {
  const slides = [
    "https://harrypottershop.co.uk/cdn/shop/products/PL00010246_1_552dd515-d5e5-4dc7-9284-718e5f78a615_800x.png?v=1624519722",
    "https://harrypottershop.co.uk/cdn/shop/products/PL00010398_1_6cb1f27a-b5dc-491c-a823-66c1059ba035_800x.png?v=1624548504",
    "https://harrypottershop.co.uk/cdn/shop/products/1284170_3_grande_04cd615d-d15b-4edd-a4d4-16faf521dde3_800x.png?v=1679960444",
    "https://harrypottershop.co.uk/cdn/shop/products/Hogwarts_Express_Sign_pin_badge_scaled_800x.png?v=1610095877",
    "https://harrypottershop.co.uk/cdn/shop/products/timeturnerpin1_800x.png?v=1620635768",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  return (
    <div>
      <div className="relative w-3/4 mx-auto flex justify-center items-center xs">
        <div className=" overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 ease-in-out transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 mx-auto">
                
                  {" "}
                  <img
                    src={slide}
                    alt="image"
                    className="w-full h-[350px] object-contain"
                  />
                </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 -left-2  transform -translate-y-1/2 -translate-x-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-75"
            onClick={goToPrevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 -translate-x-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-75"
            onClick={goToNextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
