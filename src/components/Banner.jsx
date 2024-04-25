import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-96 mt-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/rsKFmh8z/110181.jpg')] w-full bg-no-repeat bg-cover opacity-90 flex flex-col  gap-4 justify-center items-center h-[70vh] rounded-xl text-white text-4xl font-bold ">
            Explore Elite Estates: Where Luxury Meets Lifestyle
            <div className="text-slate-200 font-normal text-xl w-[70%] text-center">
              Step into Elite Estates, where luxury intertwines with lifestyle.
              Uncover our handpicked selection of exquisite residences, crafted
              to surpass your every expectation.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/zGh84KJZ/31098.jpg')] w-full bg-no-repeat bg-cover opacity-90 flex flex-col  gap-4 justify-center items-center h-[70vh] rounded-xl text-white text-4xl font-bold">
            Explore Elite Estates: Where Luxury Meets Lifestyle
            <div className="text-slate-200 font-normal text-xl w-[70%] text-center">
              Step into Elite Estates, where luxury intertwines with lifestyle.
              Uncover our handpicked selection of exquisite residences, crafted
              to surpass your every expectation.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/JhMrJ71f/23510.jpg')] w-full bg-no-repeat bg-cover opacity-90 flex flex-col  gap-4 justify-center items-center h-[70vh] rounded-xl text-white text-4xl font-bold">
            Explore Elite Estates: Where Luxury Meets Lifestyle
            <div className="text-slate-200 font-normal text-xl w-[70%] text-center">
              Step into Elite Estates, where luxury intertwines with lifestyle.
              Uncover our handpicked selection of exquisite residences, crafted
              to surpass your every expectation.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.postimg.cc/fLbM2HS5/7729.jpg')] w-full bg-no-repeat bg-cover opacity-90 flex flex-col  gap-4 justify-center items-center h-[70vh] rounded-xl text-white text-4xl font-bold">
            Explore Elite Estates: Where Luxury Meets Lifestyle
            <div className="text-slate-200 font-normal text-xl w-[70%] text-center">
              Step into Elite Estates, where luxury intertwines with lifestyle.
              Uncover our handpicked selection of exquisite residences, crafted
              to surpass your every expectation.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
