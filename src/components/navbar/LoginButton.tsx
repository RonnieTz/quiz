import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setState } from "../../redux/slice";

const LoginButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <button onClick={() => dispatch(setState("login"))} className="nav-button">
      Login
    </button>
  );
};
export default LoginButton;
