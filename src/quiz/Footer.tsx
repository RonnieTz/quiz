import NextButton from './NextButton';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Footer = () => {
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  const question = questions[currentQuestion];
  return (
    <div className="footer">
      {(question.answers.some((answer) => answer.selected) ||
        question.timeIsUp) && <NextButton />}
    </div>
  );
};

export default Footer;
