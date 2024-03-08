import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/Home";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Pagination from "./components/Pagination";

const App = () => {
  const { user, loginWithPopup, isAuthenticated, logout } = useAuth0();
  const { darkTheme, setDarkTheme, cardView, setCardView } =
    useContext(AppContext);

  const handleThemeButtons = () => {
    setDarkTheme(!darkTheme);
  };

  const handleViewButtons = () => {
    setCardView(!cardView);
  };

  return (
    <center className={darkTheme ? "m_app_dark" : "m_app_light"}>
      <nav className="m_navbar">
        {darkTheme ? (
          <button className="m_theme" onClick={handleThemeButtons}>
            Light
          </button>
        ) : (
          <button className="m_theme" onClick={handleThemeButtons}>
            Dark
          </button>
        )}

        {cardView ? (
          <button className="m_view_button" onClick={handleViewButtons}>
            List
          </button>
        ) : (
          <button className="m_view_button" onClick={handleViewButtons}>
            Card
          </button>
        )}

        {!isAuthenticated ? (
          <>
            <p className="m_welcome">WELCOME TO TODO APP</p>
            <button
              className="m_login_logout"
              onClick={(event) => loginWithPopup()}
            >
              login
            </button>
          </>
        ) : (
          <>
            <p className="m_welcome">WELCOME {user.name}</p>
            <button className="m_login_logout" onClick={() => logout()}>
              logOut
            </button>
          </>
        )}
      </nav>

      {!isAuthenticated ? (
        <Home />
      ) : (
        <>
          <AddTask />
          <TaskList />
          <Pagination />
        </>
      )}
    </center>
  );
};
export default App;


