import "./style.css";
import Input from "../input";
import Text from "../text";

function Hint({ hint, handleInput, answerGivenByUser } = {}) {
  const arr = hint.split("");
  // console.log(arr);

  function handleMyInput( index ) {
    return function (value) {
      handleInput({ index, value });
    };
  }

  return (
    <div className="hint">
      {arr.map((data, index) => {
        if (data === "_") {
          return (
            <Input
              key={index}
              value={answerGivenByUser[index] || ''}
              onInput={handleMyInput(index)}
            />
          );
        } else {
          return (
            <Text key={index} text={data} type={Text.StyleType.ANSWER_HINT} />
          );
        }
      })}
    </div>
  );
}

export default Hint;
