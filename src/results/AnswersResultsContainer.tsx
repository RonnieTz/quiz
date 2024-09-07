import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ResultDetailContainer from './ResultDetailContainer';

const AnswersResultsContainer = () => {
  const { questions } = useSelector((state: RootState) => state.app);
  return (
    <div className="answer-results-container">
      {questions.map((question, index) => {
        return (
          <div key={question.id} className="result-item">
            <div className="result-index">{index + 1}</div>
            <ResultDetailContainer
              correctAnswer={question.correct_answer}
              userAnswer={
                question.answers.find((answer) => answer.selected)?.value
              }
            />
          </div>
        );
      })}
    </div>
  );
};
export default AnswersResultsContainer;
