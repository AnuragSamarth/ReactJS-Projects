import { useState } from "react";
import { CiStar } from "react-icons/ci";
import "./style.css"

function Starrating({ star }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleCLick(getCurrentIndex) {
       setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
      setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
      setHover(rating)
  }

  return (
    <>
      <div className="flex">
        {[...Array(star)].map((_, index) => {
          index += 1;
          return (
            <CiStar
              key={index}
              size={80}
              className={index <= (hover || rating) ? 'active' : 'inactive' }
              onClick={() => handleCLick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          );
        })}
      </div>
    </>
  );
}

export default Starrating;
