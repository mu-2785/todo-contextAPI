import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <center className="m_app">
      <AddTask />
      <TaskList />
    </center>
  );
};
export default App;


