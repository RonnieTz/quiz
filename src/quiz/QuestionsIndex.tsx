import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const QuestionsIndex = () => {
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  return (
    <div className="questions-index">
      <p>
        {currentQuestion < questions.length
          ? currentQuestion + 1
          : questions.length}
      </p>
      <span>of</span>
      <p>{questions.length}</p>
    </div>
  );
};

export default QuestionsIndex;
