import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setState } from "../../redux/slice";

const RegisterButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <button
      onClick={() => dispatch(setState("register"))}
      className="nav-button"
    >
      Register
    </button>
  );
};
export default RegisterButton;
