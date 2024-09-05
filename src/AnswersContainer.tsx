import Answer from './Answer';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

type Props = {
  answers: { value: string; selected: boolean }[];
};
const AnswersContainer = ({ answers }: Props) => {
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  const returnClassName = (answer: {
    value: string;
    selected: boolean;
  }): 'correct' | 'incorrect' | 'not-selected' | 'initial' => {
    if (questions[currentQuestion].answers.some((answer) => answer.selected)) {
      if (questions[currentQuestion].correct_answer === answer.value) {
        return 'correct';
      }
      if (
        questions[currentQuestion].correct_answer !== answer.value &&
        answer.selected
      ) {
        return 'incorrect';
      }
      if (!answer.selected) {
        return 'not-selected';
      }
    }
    if (questions[currentQuestion].answers.every((answer) => !answer.selected))
      return 'initial';
    return 'initial';
  };
  return (
    <div className="answers-container">
      {answers.map((answer, index) => (
        <Answer
          key={index}
          answer={answer}
          status={returnClassName(answer)}
          answerIndex={index}
        />
      ))}
    </div>
  );
};

export default AnswersContainer;
