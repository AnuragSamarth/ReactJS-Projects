import Controller from "./components/controller";
import Hint from "./components/hint";
import Keyboard from "./components/keyboard";
import ScoreBoard from "./components/score-board";
import "./index.css";
import { Questions } from "./constant.js";
import { useEffect, useState } from "react";

const DEFAULT_START_INDEX = 0;

function WordGuessingGame() {
  const [questions, setQuestions] = useState(structuredClone(Questions));

  const [activeQuestionIndex, setActiveQuestionIndex] =
    useState(DEFAULT_START_INDEX);

  const [score, setScore] = useState(0);

  const [answerGivenByUser, setAnswerGivenByUser] = useState({});

  const activeQuestion = questions[activeQuestionIndex];

  const { question, answer, hint, id } = activeQuestion || {};

  const showPrev = activeQuestionIndex > 0;
  const showNext = activeQuestionIndex < questions.length - 1;

  function handlePrev() {
    if (activeQuestionIndex === 0) {
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex - 1);
    setAnswerGivenByUser({});
  }

  function handleNext() {
    if (activeQuestionIndex === questions.length - 1) {
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex + 1);
    setAnswerGivenByUser({});
  }

  function handleKeyPress(key) {
      const index = Object.keys(answerGivenByUser).length;
      console.log(index)

      if(index < hint.length){
          const oldInfo = structuredClone(answerGivenByUser);
          oldInfo[index] = key;
          setAnswerGivenByUser(oldInfo)
        }
        // console.log(answerGivenByUser);
  }

  function handleInput({ index, value }) {
    // console.log(index, value)
    if (answerGivenByUser[index]?.length >= 1) {
      return;
    }
    const oldInfo = structuredClone(answerGivenByUser);
    oldInfo[index] = value;
    setAnswerGivenByUser(oldInfo);
  }

  console.log(answerGivenByUser);

  // Winning log
  useEffect(() => {
    const hintArray = hint.split("");
    Object.keys(answerGivenByUser).forEach((key) => {
      const val = answerGivenByUser[key];
      hintArray[key] = val;
    });

    const finalAnswer = hintArray.join("");
    if (finalAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
      setScore(score + 1);
      const oldQuestions = structuredClone(questions);
      oldQuestions[activeQuestionIndex].isAnswered = true;
      setQuestions(oldQuestions);
      alert("your are right");
    }
  }, [answerGivenByUser]);

  return (
    <div className="bg-slate-700 h-screen flex items-center flex-col justify-evenly">
      <div className="hint-score">
        <Hint
          key={id}
          hint={hint}
          handleInput={handleInput}
          answerGivenByUser={answerGivenByUser}
        />
        <ScoreBoard score={score} />
      </div>
      <Controller
        question={question}
        handleNext={handleNext}
        handlePrev={handlePrev}
        showPrev={showPrev}
        showNext={showNext}
      />
      <Keyboard handleKeyPress={handleKeyPress} />
    </div>
  );
}

export default WordGuessingGame;
