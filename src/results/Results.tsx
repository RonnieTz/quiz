import { CircularProgress } from '@mui/material';
import PlayAgainButton from './PlayAgainButton';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Results = () => {
  const { questions } = useSelector((state: RootState) => state.app);
  const correctAnswers = questions.filter((question) => {
    const selectedAnswer = question.answers.find((answer) => answer.selected);
    return selectedAnswer?.value === question.correct_answer;
  }).length;
  return (
    <div className="results">
      <div className="circular-container">
        <CircularProgress
          sx={{ position: 'absolute', color: 'rgb(232, 242, 255)' }}
          value={100}
          variant="determinate"
          size={'400px'}
        />
        <CircularProgress
          sx={{ position: 'absolute', color: 'rgb(20, 89, 157)' }}
          value={50}
          variant="determinate"
          size={'400px'}
        ></CircularProgress>
        <div className="congrats-box">Congrats!</div>
        <div className="score">{`${correctAnswers}/${questions.length}`}</div>
      </div>
      <PlayAgainButton />
    </div>
  );
};
export default Results;
