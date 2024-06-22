import { Books } from "../data";
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { register } from 'swiper/element/bundle';
register();


function TopSellingBooks(){
    
//   const bookCoverPageRender = Books.map((book , i)=>{
//     return (
//         <div key={i}>
//             <a href="#">
//             <img src={book.book_cover} alt="book image" width="250px"/>
//             </a>
//         </div>
//     )
//   })
//   console.log(bookCoverPageRender)

    return (
        <>
           <div className="mt-16">
              <h1 className=" font-bold text-2xl mb-5">Top Selling Books</h1>
              <swiper-container slides-per-view="8" autoplay="true" enabled="true">
             { 
             Books.map((book, i)=>{
             <swiper-slide>
                   <div>
                    <a href="#">
                        <img src={book.book_cover} alt={book.title} key={i}/>
                    </a>
                   </div>
              </swiper-slide>
             })
              }
              </swiper-container>
           </div>
        </>
    )
}

export default TopSellingBooks;