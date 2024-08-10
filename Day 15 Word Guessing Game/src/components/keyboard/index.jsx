import "./style.css";
import Button from "../button";

function Keyboard({ handleKeyPress = () => {} } = {}) {
  const arr = [...new Array(26)];
  let start = 65;

  function handleCLick(key) {
    return () => {
      handleKeyPress(key);
    };
  }

  return (
    <div className="keyboard">
      {arr.map((_, index) => {
        const currentKey = String.fromCharCode(start++);
        return (
          <Button
            key={index}
            label={currentKey}
            type={Button.Type.ROUNDED}
            onClick={handleCLick(currentKey)}
          />
        );
      })}
    </div>
  );
}

export default Keyboard;
