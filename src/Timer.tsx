import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { setTimer } from './redux/appSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        questions[currentQuestion].time < 20 &&
        questions[currentQuestion].answers.every((answer) => !answer.selected)
      ) {
        dispatch(
          setTimer({
            time: questions[currentQuestion].time + 1,
            currentQuestion,
          })
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [questions[currentQuestion].time, currentQuestion, dispatch]);
  return (
    <div className="timer">
      <CircularProgress
        sx={{
          position: 'absolute',
          zIndex: 1,
          color: 'rgb(14, 63, 112)',
        }}
        variant="determinate"
        value={100 - questions[currentQuestion].time * 5}
        thickness={2}
      />
      <CircularProgress
        sx={{
          position: 'absolute',
          color: 'rgb(204, 228, 255 )',
        }}
        variant="determinate"
        value={100}
        thickness={2}
      />
      <span style={{ color: 'rgb(26, 26, 26)' }}>
        {questions[currentQuestion].time}
      </span>
    </div>
  );
};

export default Timer;
