import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import { useState } from "react";

const DEFAULT_START_INDEX = 0;

function App() {
  const [photosData, setPhotosData] = useState([]);

  const [activeImageIndex, setActiveImageIndex] = useState(DEFAULT_START_INDEX);

  async function photoApi() {
    try {
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
      if (!res.ok) {
        throw new Error("Request failed with status " + res.status);
      }
      const data = await res.json();
      setPhotosData(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  useEffect(() => {
    photoApi();
  }, []);

  const activeImage = photosData[activeImageIndex];

  function handlePrev(){
    // console.log('btn Prev');
    setActiveImageIndex(activeImageIndex - 1);
  }

  function handleNext(){
    // console.log('btn Next');
    setActiveImageIndex(activeImageIndex + 1);
  }

  return (
    <>
      <div className="w-full h-screen bg-slate-900 flex items-center justify-evenly relative">
        <Button lable="Prev" onClick={handlePrev} />
        {activeImage ? (
          <ImageContainer id={activeImage.id} downloadUrl={activeImage.download_url} author={activeImage.author} />
        ) : (
          <p>Loading...</p> // Display a loading state until the image is ready
        )}
        <Button lable="Next" onClick={handleNext} />
      </div>
    </>
  );
}

export default App;
