import HomeCard from "../components/HomeCard";

const Home = () => {
  const cardInfo = [
    {
      image:
        "https://harrypottershop.co.uk/cdn/shop/files/Wand_static_card_large.jpg?v=1649173708",
      title: "Wand Shop",
      link:"/wandshop"
    },
    {
      image:
        "https://harrypottershop.co.uk/cdn/shop/files/Trunk_card_large.gif?v=1646994755",
      title: "Trunk Station",
      link:"/trunkstation"
    },
    {
      image:
        "https://harrypottershop.co.uk/cdn/shop/files/Robe_card_large.gif?v=1646928736",
      title: "Clothing Collection",
      link:"/clothingcollection"
    },
    {
      image:
        "https://harrypottershop.co.uk/cdn/shop/files/Sweets_static_card_large.jpg?v=1649173724",
      title: "Sweet Trolley",
      link:"/sweettrolley"

    },
  ];
  return (
    <>
    {/* ? Slider */}
      <div
        id="default-carousel"
        className="relative w-full mb-5"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://harrypottershop.co.uk/cdn/shop/products/PL00010246_1_552dd515-d5e5-4dc7-9284-718e5f78a615_800x.png?v=1624519722"
              className="absolute block w-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://harrypottershop.co.uk/cdn/shop/products/PL00010398_1_6cb1f27a-b5dc-491c-a823-66c1059ba035_800x.png?v=1624548504"
              className="absolute block w-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://harrypottershop.co.uk/cdn/shop/products/1284170_3_grande_04cd615d-d15b-4edd-a4d4-16faf521dde3_800x.png?v=1679960444"
              className="absolute block w-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://harrypottershop.co.uk/cdn/shop/products/Hogwarts_Express_Sign_pin_badge_scaled_800x.png?v=1610095877"
              className="absolute block w-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://harrypottershop.co.uk/cdn/shop/products/timeturnerpin1_800x.png?v=1620635768"
              className="absolute block w-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      {/* ? Card Info And Links */}
      <div className="flex gap-x-1 justify-evenly mb-5 xs flex-wrap">
        {cardInfo.map((info,index) => (
          <HomeCard key={index} {...info} />
        ))}
      </div>
    </>
  );
};

export default Home;
