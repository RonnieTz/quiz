import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setGame, setGameStatus } from "../../redux/slice";
import axios from "axios";

const StartGameButton = () => {
  const { options } = useSelector((state: RootState) => state.store);
  const { categories, quantity, difficulties } = options;
  const dispatch = useDispatch<AppDispatch>();

  const startGame = async () => {
    const data = {
      categories: categories
        .filter((item) => item.selected)
        .map((item) => item.id),
      quantity,
      difficulties: difficulties
        .filter((item) => item.selected)
        .map((item) => item.name),
    };
    try {
      const res = await axios.post(
        "https://quiz-game-mpv3.onrender.com/start",
        data
      );
      const { message, questions }: { message: string; questions: any } =
        res.data;
      if (message === "Success") {
        dispatch(setGame(questions));
        dispatch(setGameStatus("playing"));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button onClick={startGame} className="nav-button center">
      Play Game
    </button>
  );
};
export default StartGameButton;
