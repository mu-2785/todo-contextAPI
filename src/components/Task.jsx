const Task = ({ task, handleComplete, handleDelete, handleUpdate }) => {
  return (
    // <div className="m_task">
    <div className={task.tStatus ? "m_completed" : "m_task"}>
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
    // </div>
  );
};

export default Task;
