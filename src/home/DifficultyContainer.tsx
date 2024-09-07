import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { selectDifficulty } from '../redux/appSlice';

const DifficultyContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { difficulties } = useSelector((state: RootState) => state.app);

  return (
    <div className="difficulty-container">
      <div className="difficulty-list-title">Choose difficulty</div>
      <div className="difficulty-list">
        {difficulties.map((difficulty, index) => (
          <div
            onClick={() => dispatch(selectDifficulty(index))}
            key={difficulty.value}
            className={`difficulty${difficulty.selected ? ' selected' : ''}`}
          >
            <p>{difficulty.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DifficultyContainer;
