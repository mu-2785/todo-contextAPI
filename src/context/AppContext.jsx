import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [taskList, setTaskList] = useState([]); //  it contain all the tasks
  const [taskToUpdate, setTaskToUpdate] = useState([]); //  it contains the task to update
  const [darkTheme, setDarkTheme] = useState(false); //  this state will handle the dark and light theme
  const [cardView, setCardView] = useState(false); //  this state will handle card view and list view
  const [currentPage, setCurrentPage] = useState(1); //  this state will handle current page
  const [taskToShow, setTaskToShow] = useState([]); // this state will contain only filtered task
  const [totalPages, setTotalPages] = useState(taskToShow.length / 6); //  this state will handle total no of pages

  useEffect(() => {
    // useEffect to fetch data from localStorage
    const storedTask = JSON.parse(localStorage.getItem("taskListData")) || [];

    if (storedTask.length) {
      setTaskList((prevTaskList) => [...prevTaskList, ...storedTask]);
      setTaskToShow((prevTaskList) => [...prevTaskList, ...storedTask]);
    }
  }, []);

  useEffect(() => {
    //  useEffect to store data in local storage
    localStorage.setItem("taskListData", JSON.stringify(taskList));
    setTotalPages(taskList.length / 6);
  }, [taskList]);

  const addTask = (tName, tDate, tIndex) => {
    //  function to add a new task
    const id = Date.now();
    setTaskList([
      ...taskList,
      { tName: `${tName}`, tDate: `${tDate}`, id: `${id}`, tStatus: false },
    ]);
    setTaskToShow([
      ...taskList,
      { tName: `${tName}`, tDate: `${tDate}`, id: `${id}`, tStatus: false },
    ]);
    toast.success("TASK ADDED ");
  };

  const deleteTask = (taskId) => {
    //  function to delete a task
    const updatedTaskList = taskList.filter((task) => {
      if (task.id != taskId) {
        return task;
      }
    });
    setTaskList([...updatedTaskList]);
    setTaskToShow([...updatedTaskList]);

    toast.success("TASK DELETED");
  };

  const setComplete = (taskId) => {
    //  function to set a task as completed
    taskList.filter((task) => {
      if (task.id == taskId) {
        task.tStatus = !task.tStatus;
      }
    });
    setTaskList([...taskList]);
    setTaskToShow([...taskList]);
    toast.success("TASK COMPLETED");
  };

  const updateTask = (taskId, updatedTask) => {
    //  function to update the task
    try {
      taskList.filter((task) => {
        if (task.id == taskId) {
          setTaskToUpdate([task]);
        }
      });

      taskList.filter((task) => {
        if (task.id == taskId) {
          task.tName = updatedTask.tName;
          task.tDate = updatedTask.tDate;
        }
      });
      setTaskList([...taskList]);
      setTaskToShow([...taskList]);
      toast.success("TASK UPDATED ");
    } catch (error) {
      toast.warning("PROVIDE THE UPDATE");
    }
  };

  const today = () => {
    //  this function return the current date
    const currentDate = new Date();
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth() + 1;
    let yyyy = currentDate.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  const filterElements = (searchParams) => {
    const filteredItems = taskList.filter((task) => {
      if (task.tName.toLowerCase().includes(searchParams.toLowerCase())) {
        return task;
      }
    });

    if (filteredItems.length > 0) {
      setTaskToShow([...filteredItems]);
      setTotalPages(taskToShow.length / 6);
    } else {
      setTaskToShow([...taskList]);
      setTotalPages(taskList.length / 6);
    }
  };

  const filterByStatus = (val) => {
    console.log(val);

    const filteredArray = taskList.filter((task) => {
      if (val === "complete") {
        if (task.tStatus === true) {
          return task;
        }
      } else if (val === "incomplete") {
        if (task.tStatus === false) {
          return task;
        }
      } else {
        return task;
      }
    });
    setTaskToShow(filteredArray);
  };

  const value = {
    //  data is packed in value and passed as value
    taskList,
    setTaskList,
    addTask,
    deleteTask,
    setComplete,
    updateTask,
    taskToUpdate,
    setTaskToUpdate,
    today,
    darkTheme,
    setDarkTheme,
    cardView,
    setCardView,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    taskToShow,
    setTaskToShow,
    filterElements,
    filterByStatus,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
