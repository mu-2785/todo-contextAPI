import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
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
          <div className={task.tStatus ? "m_completed" : "m_task"} key={index}>
            <input
              type="checkbox"
              name=""
              id=""
              checked={task.tStatus}
              onClick={() => {
                handleComplete(task.id, task.tStatus);
              }}
            />
            <input
              type="text"
              value={task.tName}
              readOnly
              className="m_input"
            />
            <input
              type="date"
              name=""
              id=""
              value={task.tDate}
              readOnly
              className="m_input"
            />
            <button
              className="m_updatebutton"
              onClick={() => {
                handleUpdate(task.id);
              }}
            >
              UPDATE
            </button>
            <button
              className="m_deletebutton"
              onClick={() => {
                handleDelete(task.id);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;

