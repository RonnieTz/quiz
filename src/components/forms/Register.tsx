import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  setUsername,
  setPassword,
  setPassword_2,
  setFormMessage,
  resetForm,
  setState,
  setName,
} from "../../redux/slice";
import axios from "axios";
import { User } from "../../assets/UserType";

const Register = () => {
  const { form } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch<AppDispatch>();
  const { username, password, password_2, message } = form;
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { username, password };
    if (!username || !password) {
      dispatch(setFormMessage("Username or password missing."));
      dispatch(setPassword_2(""));
    }
    if (password !== password_2) {
      dispatch(setFormMessage("Your passwords don't match."));
      dispatch(setPassword(""));
      dispatch(setPassword_2(""));
    }
    if (password && password === password_2) {
      try {
        const res = await axios.post(
          "https://quiz-game-mpv3.onrender.com/register",
          data
        );
        const { user, message }: { message: string; user: User } = res.data;
        if (message === "Account created uccessfully.") {
          localStorage.setItem("token", user.token);
          dispatch(setState("logged_in"));
          dispatch(setName(user.username));
          dispatch(resetForm(null));
        }
        if (message === "User already registered.") {
          dispatch(setFormMessage(message));
          dispatch(setUsername(""));
          dispatch(setPassword(""));
          dispatch(setPassword_2(""));
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={(e) => dispatch(setUsername(e.target.value))}
          value={username}
          placeholder="username..."
          type="text"
        />

        <input
          onChange={(e) => dispatch(setPassword(e.target.value))}
          value={password}
          placeholder="password..."
          type="password"
        />
        <input
          onChange={(e) => dispatch(setPassword_2(e.target.value))}
          value={password_2}
          placeholder="confirm..."
          type="password"
        />

        <button className="submit">Register</button>
        <p className="message">{message}</p>
      </form>
    </div>
  );
};
export default Register;
