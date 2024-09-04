import AnswersContainer from './AnswersContainer';
import Footer from './Footer';
import QuestionContainer from './QuestionContainer';

const Container = () => {
  return (
    <div className="container">
      <QuestionContainer />
      <AnswersContainer />
      <Footer />
    </div>
  );
};

export default Container;
