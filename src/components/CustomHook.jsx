import { useState, useEffect } from "react";


const localStorageKey = "todo:savedTaskList";

function useTaskList() {
  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem(localStorageKey);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(taskList));
  }, [taskList]);

  function addTask(taskTitle) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  }

  function deleteTask(taskId) {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== taskId)
    );
  }

  function updateTask(taskId, updatedFields) {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === taskId ? { ...task, ...updatedFields } : task
      )
    );
  }

  return { taskList, addTask, deleteTask, updateTask };
}

export default useTaskList;
