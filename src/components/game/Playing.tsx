import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  answerQuestion,
  selectAnswer,
  setCurrentQuestion,
  setGameStatus,
  setTotalCorrectAnswers,
} from "../../redux/slice";

const Playing = () => {
  const { game } = useSelector((state: RootState) => state.store);
  const { questions, currentQuestion, totalCorrectAnswers } = game;
  const dispatch = useDispatch<AppDispatch>();
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    } else {
      dispatch(setGameStatus("finished"));
    }
  };
  const checkQuestion = () => {
    dispatch(answerQuestion(currentQuestion));
    const selectedAnswerIndex = questions[currentQuestion].answers.findIndex(
      (answer) => answer.selected
    );
    if (
      questions[currentQuestion].answers[selectedAnswerIndex].value ===
      questions[currentQuestion].correctAnswer
    ) {
      dispatch(setTotalCorrectAnswers(totalCorrectAnswers + 1));
    }
  };
  return (
    <div className="game-container">
      {
        <>
          <h1 className="question">{questions[currentQuestion].question}</h1>
          <div className="answers">
            {questions[currentQuestion].answers.map((answer, answerIndex) => (
              <h2
                className={`answer ${
                  answer.selected &&
                  !questions[currentQuestion].questionAnswered
                    ? "selected"
                    : answer.selected &&
                      answer.value === questions[currentQuestion].correctAnswer
                    ? "correct"
                    : answer.selected &&
                      answer.value !== questions[currentQuestion].correctAnswer
                    ? "wrong"
                    : questions[currentQuestion].answers.some(
                        (answer) => answer.selected
                      ) &&
                      questions[currentQuestion].questionAnswered &&
                      answer.value === questions[currentQuestion].correctAnswer
                    ? "correct"
                    : ""
                }`}
                key={answerIndex}
                onClick={() =>
                  dispatch(
                    selectAnswer({
                      questionIndex: currentQuestion,
                      answerIndex,
                    })
                  )
                }
              >
                {answer.value}
              </h2>
            ))}
          </div>
          <div className="game-info">
            {`${currentQuestion + 1} / ${questions.length}`}
          </div>
          <div className="game-controls">
            <button
              disabled={
                !questions[currentQuestion].answers.some(
                  (answer) => answer.selected
                ) || questions[currentQuestion].questionAnswered
              }
              onClick={checkQuestion}
              className={`game-buttons ${
                !questions[currentQuestion].answers.some(
                  (answer) => answer.selected
                ) || questions[currentQuestion].questionAnswered
                  ? "disabled"
                  : ""
              }`}
            >
              Check answer
            </button>
            <button
              onClick={nextQuestion}
              disabled={!questions[currentQuestion].questionAnswered}
              className={`game-buttons ${
                !questions[currentQuestion].questionAnswered ? "disabled" : ""
              }`}
            >
              Next
            </button>
          </div>
        </>
      }
    </div>
  );
};
export default Playing;
