import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import Welcome from "./components/logged_out/Welcome";
import Game from "./components/game/Game";

function App() {
  const { state } = useSelector((state: RootState) => state.store);
  return (
    <>
      <Navbar />
      {state === "login" && <Login />}
      {state === "register" && <Register />}
      {state === "logged_out" && <Welcome />}
      {state === "logged_in" && <Game />}
    </>
  );
}

export default App;
