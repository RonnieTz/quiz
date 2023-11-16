import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import axios from "axios";
import { setState } from "../../redux/slice";

const Welcome = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      const greet = async () => {
        const res = await axios.post("http://192.168.1.102:3000/greet", {
          token,
        });
        console.log(res.data);

        const { username } = res.data.decoded;
        if (username) {
          dispatch(setState("logged_in"));
        }
      };
      greet();
    }
  }, []);
  return (
    <div className="welcome">
      Welcome to quiz game. Register an account, or login in to start playing.
    </div>
  );
};
export default Welcome;
