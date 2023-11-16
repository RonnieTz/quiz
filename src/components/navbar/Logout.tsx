import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  setState,
  setCurrentQuestion,
  setTotalCorrectAnswers,
} from "../../redux/slice";

const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <button
      onClick={() => {
        dispatch(setState("logged_out"));
        dispatch(setCurrentQuestion(0));
        dispatch(setTotalCorrectAnswers(0));
        localStorage.removeItem("token");
      }}
      className="nav-button logout"
    >
      Logout
    </button>
  );
};
export default Logout;
