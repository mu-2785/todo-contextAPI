import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/Home";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Pagination from "./components/Pagination";
import NavBar from "./components/NavBar";




const App = () => {
  const { user, loginWithPopup, isAuthenticated, logout } = useAuth0();
  const { darkTheme, setDarkTheme, cardView, setCardView } =
    useContext(AppContext);

  

  return (
    <center className={darkTheme ? "m_app_dark" : "m_app_light"}>
     
      <NavBar isAuthenticated={isAuthenticated} user={user} loginWithPopup={loginWithPopup} ></NavBar>

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
