import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Task = ({ task, handleComplete, handleDelete, handleUpdate }) => {
  const { cardView } = useContext(AppContext);

  return (
    <div
      className={`${task.tStatus ? "m_completed_task" : ""} ${
        cardView ? "m_card_view" : ""
      } m_task`}
    >
      <input
        type="checkbox"
        name=""
        id=""
        checked={task.tStatus}
        onClick={() => {
          handleComplete(task.id, task.tStatus);
        }}
      />
      <input type="text" value={task.tName} readOnly className="m_input" />
      <input
        type="date"
        name=""
        id=""
        value={task.tDate}
        readOnly
        className="m_input"
      />
      <div className="m_button_container">
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
    </div>
    // </div>
  );
};

export default Task;
