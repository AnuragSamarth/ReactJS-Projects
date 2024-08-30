import "./style.css";
import Button from "../button";
import Text from "../text";

function Controller({
  question = "",
  handleNext = () => {},
  handlePrev = () => {},
  showPrev,
  showNext,
} = {}) {
  return (
    <div className="controller">
      {showPrev && <Button label="Prev" onClick={handlePrev} />}
      <Text text={question} type={Text.StyleType.QUESTION_TITLE} />
      {showNext && <Button label="Next" onClick={handleNext} />}
    </div>
  );
}

export default Controller;
