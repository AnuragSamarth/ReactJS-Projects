import { Books } from "../data";
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { register } from 'swiper/element/bundle';
register();
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";



function TopSellingBooks(){
    
  const bookCoverPageRender = Books.map((book , i)=>{
    return (
            <img src={book.book_cover} alt="book image" key={i} className=" w-[220px] inline-block mr-6"/>
    )
  })
  
  const slideLeft = ()=>{
    let slider  = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = ()=>{
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

    return (
        <>
           <div className=" mt-10 flex flex-col items-center">
              <h1 className=" font-bold text-2xl mb-5">Top Selling Books</h1>
            <div className=" relative flex items-center">
                <GrFormPrevious size={40} onClick={slideLeft} className="opacity-50 cursor-pointer  hover:opacity-100"/>
               <div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                  {bookCoverPageRender}
               </div>
               <MdNavigateNext size={40} onClick={slideRight} className="opacity-50 cursor-pointer  hover:opacity-100"/>
            </div>
           </div>
        </>
    )
}

export default TopSellingBooks;