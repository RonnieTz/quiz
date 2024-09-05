import NextButton from './NextButton';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const Footer = () => {
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  return (
    <div className="footer">
      {questions[currentQuestion].answers.some((answer) => answer.selected) && (
        <NextButton />
      )}
    </div>
  );
};

export default Footer;
