import DetailContainer from './DetailContainer';
import Question from './Question';

const QuestionContainer = () => {
  return (
    <div className="question-container">
      <Question />
      <DetailContainer />
    </div>
  );
};

export default QuestionContainer;
