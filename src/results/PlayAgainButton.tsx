import ReplayIcon from '@mui/icons-material/Replay';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentQuestion } from '../redux/appSlice';

const PlayAgainButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setCurrentQuestion(0));
        navigate('/');
      }}
      className="play-again"
    >
      <p>Play Again</p>
      <ReplayIcon />
    </div>
  );
};
export default PlayAgainButton;
