import { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const AddTask = () => {
  const { setTaskToUpdate, addTask, taskToUpdate, updateTask, today } =
    useContext(AppContext);
  const tName = useRef();
  const tDate = useRef();

  const handleAddButton = (event) => {
    //  function to handle add button
    event.preventDefault();
    const todaysDate = today();

    try {
      const name = tName.current.value;
      const date = tDate.current.value;
      name && date
        ? date >= todaysDate
          ? (addTask(name, date),
            (tName.current.value = ""),
            (tDate.current.value = ""))
          : toast.error("DATE CAN NOT BE LESS THEN TODAY")
        : !name
        ? tName.current.focus()
        : tDate.current.focus();
    } catch (error) {
      toast.error("SOMTHING WENT WRONG");
    }
  };

  const handleSet = (event) => {
    //  function to handle set button
    event.preventDefault();
    taskToUpdate[0].tName = tName.current.value;
    taskToUpdate[0].tDate = tDate.current.value;

    updateTask(taskToUpdate[0]);
    setTaskToUpdate([]);
    tName.current.value = "";
    tDate.current.value = "";
  };
  taskToUpdate.length > 0 ? (
    ((tName.current.value = taskToUpdate[0].tName),
    (tDate.current.value = taskToUpdate[0].tDate))
  ) : (
    <></>
  );

  return (
    <form className="m_addtask">
      <input
        type="text"
        ref={tName}
        className="m_input"
        placeholder="TASK NAME"
      />
      <input type="date" name="" id="" ref={tDate} className="m_input" />
      {taskToUpdate.length > 0 ? (
        <button className="m_setbutton" onClick={handleSet}>
          SET
        </button>
      ) : (
        <button className="m_addbutton" onClick={handleAddButton}>
          ADD
        </button>
      )}
    </form>
  );
};

export default AddTask;

