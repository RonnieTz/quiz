import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import StartGameButton from "./StartGameButton";
import Logout from "./Logout";
import NewGameButton from "./NewGameButton";

const Navbar = () => {
  const { state, gameStatus } = useSelector((state: RootState) => state.store);
  return (
    <nav className="navbar">
      {state === "logged_out" && (
        <>
          <RegisterButton />
          <LoginButton />
        </>
      )}
      {state === "login" && <RegisterButton />}
      {state === "register" && <LoginButton />}
      {state === "logged_in" && gameStatus === "options" && <StartGameButton />}
      {state === "logged_in" &&
        (gameStatus === "finished" || gameStatus === "playing") && (
          <NewGameButton />
        )}
      {state === "logged_in" && <Logout />}
    </nav>
  );
};
export default Navbar;
