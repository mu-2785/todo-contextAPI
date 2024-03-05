import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Task from "./Task";

const TaskList = () => {
  const { taskList, deleteTask, setComplete, updateTask } =
    useContext(AppContext);

  const [taskStatus, setTaskStatus] = useState(false);

  const handleDelete = (taskId) => {
    //  function to handle the delete button
    console.log("delete", taskId);
    deleteTask(taskId);
  };
  //nothing
  const handleUpdate = (taskId) => {
    //  function to handle the update button
    updateTask(taskId);
  };

  const handleComplete = (taskId, taskStatus) => {
    //  function to handle the delete button
    setTaskStatus(!taskStatus);
    setComplete(taskId);
  };

  return (
    <div className="m_tasklist">
      {taskList.map((task, index) => {
        taskStatus ? setTaskStatus(false) : <></>;
        return (
          <>
            <Task
              task={task}
              handleComplete={handleComplete}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </>
        );
      })}
    </div>
  );
};

export default TaskList;


