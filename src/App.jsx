import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/Home";

const App = () => {
  const { user, loginWithPopup, isAuthenticated, logout } = useAuth0();

  return (
    <center className="m_app">
      <nav className="m_navbar">
        {!isAuthenticated ? (
          <button
            className="m_login_logout"
            onClick={(event) => loginWithPopup()}
          >
            login
          </button>
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
        </>
      )}
    </center>
  );
};
export default App;
