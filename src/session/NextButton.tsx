import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setCurrentQuestion } from '../redux/appSlice';

const NextButton = () => {
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  return (
    <div
      onClick={() => {
        if (currentQuestion === questions.length - 1) {
          return;
        }
        dispatch(setCurrentQuestion(currentQuestion + 1));
      }}
      className="next"
    >
      <span>Next</span>
      <ArrowForwardIcon />
    </div>
  );
};

export default NextButton;
