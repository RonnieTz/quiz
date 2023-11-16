import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  setUsername,
  setPassword,
  resetForm,
  setName,
  setState,
  setFormMessage,
  setPassword_2,
} from "../../redux/slice";
import axios from "axios";
import { User } from "../../assets/UserType";

const Login = () => {
  const { form } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch<AppDispatch>();
  const { username, password, message } = form;
  const postData = async (data: any) => {
    try {
      const res = await axios.post("http://192.168.1.102:3000/login", data);
      const { user, message }: { message: string; user: User } = res.data;
      if (message === "Login successful.") {
        localStorage.removeItem("token");
        localStorage.setItem("token", user.token);
        dispatch(setState("logged_in"));
        dispatch(setName(user.username));
        dispatch(resetForm(null));
      }
      if (message === "User is not registered.") {
        dispatch(setFormMessage(message));
        dispatch(setUsername(""));
        dispatch(setPassword(""));
        dispatch(setPassword_2(""));
      }
      if (message === "Wrong password.") {
        dispatch(setFormMessage(message));
        dispatch(setPassword(""));
        dispatch(setPassword_2(""));
      }
    } catch (err) {
      console.log(err);
    }
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { username, password };
    postData(data);
  };
  const guest = async () => {
    const data = { username: "guest", password: "guest" };
    postData(data);
  };
  return (
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

      <button className="submit">Login</button>
      <button onClick={guest} type="button" className="guest">
        Guest
      </button>
      <p className="message bottom">{message}</p>
    </form>
  );
};
export default Login;
