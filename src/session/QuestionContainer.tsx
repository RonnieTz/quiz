import DetailContainer from './DetailContainer';
import Question from './Question';

type Props = {
  question: string;
};

const QuestionContainer = ({ question }: Props) => {
  return (
    <div className="question-container">
      <Question question={question} />
      <DetailContainer />
    </div>
  );
};

export default QuestionContainer;
