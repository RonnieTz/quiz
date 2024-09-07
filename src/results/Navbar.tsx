import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setResultsWindow } from '../redux/appSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { results } = useSelector((state: RootState) => state.app);
  return (
    <div className="navbar">
      <div
        style={{
          borderBottom:
            results.window === 'score'
              ? '2.5px solid black'
              : '2.5px solid transparent',
          color: results.window === 'score' ? 'black' : 'rgb(20, 89, 157)',
        }}
        onClick={() => dispatch(setResultsWindow('score'))}
        className="navbar-item"
      >
        Score
      </div>
      <div
        style={{
          borderBottom:
            results.window === 'answers'
              ? '2.5px solid black'
              : '2.5px solid transparent',
          color: results.window === 'answers' ? 'black' : 'rgb(20, 89, 157)',
        }}
        onClick={() => dispatch(setResultsWindow('answers'))}
        className="navbar-item"
      >
        Answers
      </div>
    </div>
  );
};
export default Navbar;
