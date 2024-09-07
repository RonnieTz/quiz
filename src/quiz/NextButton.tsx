import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setCurrentQuestion } from '../redux/appSlice';
import { useNavigate } from 'react-router-dom';

const NextButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  console.log(currentQuestion, questions.length);

  return (
    <div
      onClick={() => {
        if (currentQuestion === questions.length - 1) {
          navigate('/results');
          return;
        }
        dispatch(setCurrentQuestion(currentQuestion + 1));
      }}
      className="next"
    >
      <span>
        {currentQuestion === questions.length - 1 ? 'See results' : 'Next'}
      </span>
      <ArrowForwardIcon />
    </div>
  );
};

export default NextButton;
