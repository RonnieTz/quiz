import AnswersContainer from './AnswersContainer';
import Footer from './Footer';
import QuestionContainer from './QuestionContainer';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const Container = () => {
  const { questions, currentQuestion } = useSelector(
    (state: RootState) => state.app
  );
  console.log(questions);

  return (
    <div className="container">
      {questions.length && (
        <>
          <QuestionContainer question={questions[currentQuestion].question} />
          <AnswersContainer answers={questions[currentQuestion].answers} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Container;
