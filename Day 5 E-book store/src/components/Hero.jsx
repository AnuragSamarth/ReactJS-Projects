import { Books } from "../data.js";
// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


function Hero() {

  const renderBooks = Books.map((book, i) => {
    return (
      <SwiperSlide key={i}>
      <img src={book.book_cover} alt="book cover page" width="200px" />
    </SwiperSlide>
    );
  });

  return (
    <>
      <div className=" mt-20 ml-16 space-y-4 grid gap-8  justify-items-center  md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-7xl font-bold mb-10">
            Unlock Worlds, <br />
            turn pages....
          </h1>
          <p className="text-xl">
            Journey through the pages, find solace in words, and let the stories
            within shape your worlds.
          </p>
        </div>
        <div className=" w-72">
        <Swiper
            effect="cards"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {renderBooks}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Hero;
