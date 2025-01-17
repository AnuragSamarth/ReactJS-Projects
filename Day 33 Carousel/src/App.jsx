import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Carousel>
        <img
          src="/public/image1.jpg"
          alt="images"
          className="w-full h-full object-cover rounded-lg absolute data-[active=true]:block transition ease-in duration-200  data-[active=false]:hidden"
        />
        <img
          src="/public/image2.jpg"
          alt="images"
          className="w-full h-full object-cover rounded-lg absolute data-[active=true]:block transition ease-in duration-200 data-[active=false]:hidden"
        />
        <img
          src="/public/image3.jpg"
          alt="images"
          className="w-full h-full object-cover rounded-lg absolute data-[active=true]:block transition ease-in duration-200 data-[active=false]:hidden"
        />
        <img
          src="/public/image4.jpg"
          alt="images"
          className="w-full h-full object-cover rounded-lg absolute data-[active=true]:block transition ease-in duration-200 data-[active=false]:hidden"
        />
      </Carousel>
    </>
  );
}

export default App;
