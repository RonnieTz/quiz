import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  setGameStatus,
  setCurrentQuestion,
  setTotalCorrectAnswers,
} from "../../redux/slice";

const NewGameButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newGame = () => {
    dispatch(setGameStatus("options"));
    dispatch(setCurrentQuestion(0));
    dispatch(setTotalCorrectAnswers(0));
  };
  return (
    <button onClick={newGame} className="nav-button">
      New Game
    </button>
  );
};
export default NewGameButton;
