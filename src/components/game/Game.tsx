import "./game.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Options from "./Options";
import {} from "../../redux/slice";
import Playing from "./Playing";
import Finished from "./Finished";

const Game = () => {
  const { gameStatus } = useSelector((state: RootState) => state.store);
  return (
    <div className="container">
      {gameStatus === "options" && <Options />}
      {gameStatus === "playing" && <Playing />}
      {gameStatus === "finished" && <Finished />}
    </div>
  );
};
export default Game;
