import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { setTimer, timeUp } from './redux/appSlice';

const Timer = () => {
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.app
  );
  const question = questions[currentQuestion];

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        question.time < 20 &&
        question.answers.every((answer) => !answer.selected)
      ) {
        dispatch(
          setTimer({
            time: question.time + 1,
            currentQuestion,
          })
        );
      }
      if (
        question.time === 20 &&
        question.answers.every((answer) => !answer.selected) &&
        !question.timeIsUp
      ) {
        dispatch(timeUp(currentQuestion));
        console.log('time up');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [
    question.time,
    currentQuestion,
    dispatch,
    question.answers,
    question.timeIsUp,
  ]);
  return (
    <div className="timer">
      <CircularProgress
        sx={{
          position: 'absolute',
          zIndex: 1,
          color: 'rgb(14, 63, 112)',
        }}
        variant="determinate"
        value={100 - question.time * 5}
        thickness={2}
      />
      <CircularProgress
        sx={{
          position: 'absolute',
          color: question.timeIsUp ? 'rgb(154, 34, 34)' : 'rgb(204, 228, 255 )',
        }}
        variant="determinate"
        value={100}
        thickness={2}
      />
      <span style={{ color: 'rgb(26, 26, 26)' }}>{20 - question.time}</span>
      {question.timeIsUp && <div className="time-up">Time's up!</div>}
    </div>
  );
};

export default Timer;
