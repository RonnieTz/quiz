import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Finished = () => {
  const { questions, totalCorrectAnswers } = useSelector(
    (state: RootState) => state.store.game
  );
  return (
    <div className="finished">
      <h1>You scored</h1>
      <h2>{`${totalCorrectAnswers} / ${questions.length}`}</h2>
      <img
        src="https://i.ebayimg.com/images/g/WawAAOSwacJbJkM5/s-l1600.jpg"
        alt="middle finger"
      />
    </div>
  );
};
export default Finished;
