import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import bannerImg from "../assets/banner1.jpg";
import book1 from "../assets/book1.jpg"
import book2 from "../assets/book2.jpg"
import book3 from "../assets/book3.jpg"
import book4 from "../assets/book4.jpg"
import book5 from "../assets/book5.jpg"
import book6 from "../assets/book6.jpg"
import book7 from "../assets/book7.jpg"


const Banner = () => {
  return (
    <div
      className="h-[calc(100vh-71px)] w-full bg-cover bg-center relative flex items-center mb-12 "
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center w-full md:px-20 lg:px-40">
        {/* Left content */}
        <div className="text-white max-w-xl space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0 leading-tight">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left text-gray-200">
            A curated collection of stories, knowledge, and adventure. Explore
            the shelves with a swipe!
          </p>
        </div>

        {/* Right swiper */}
        <div className="w-[250px] md:w-[300px] lg:w-[350px]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {[book1, book2, book3, book4, book5, book6, book7].map(
              (book, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center h-[400px] rounded-xl overflow-hidden shadow-xl bg-white"
                >
                  <img
                    src={book}
                    alt={`book-${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
