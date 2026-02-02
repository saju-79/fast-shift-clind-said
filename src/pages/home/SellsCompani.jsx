import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
// import  {Autoplay}  from "swiper";

const logos = [
  "/assets/brands/amazon.png",
  "/assets/brands/moonstar.png",
  "/assets/brands/casio.png",
  "/assets/brands/amazon_vector.png",
  "/assets/brands/randstad.png",
  "/assets/brands/star.png",
];

const SellsCompani = () => {
  return (
    <div className=" my-10 rounded-xl">
      <h1 className="text-[#03373D] my-6 text-center text-xl md:text-2xl lg:text-4xl font-extrabold">
        We've helped thousands of sales teams
      </h1>

      <div className="bg-white py-6 items-center rounded-xl">
        <Swiper
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false  }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          modules={[Autoplay]}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt="brand"
                className="h-3 md:h-5 lg:h-6 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SellsCompani;

