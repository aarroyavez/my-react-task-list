import { useState, useEffect } from "react";

const localStorageKey = "todo:savedTaskList";

function useTaskList() {
  const [taskList, setTaskList] = useState([]);
  
  function loadSavedTaskList() {
    const saved = localStorage.getItem(localStorageKey);
    if (saved) {
      setTaskList(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTaskList();
  }, []);

  function setTaskListSave(newTaskList) {
    setTaskList(newTaskList);
    localStorage.setItem(localStorageKey, JSON.stringify(newTaskList));
  }

  function addTask(taskTitle, taskDescription) {
    setTaskListSave([
      ...taskList,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        description: taskDescription,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId) {
    const newTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskListSave(newTaskList);
  }

  function toggleTaskCompleteById(taskId) {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTaskListSave(newTaskList);
  }

  function updateTaskTitleById(taskId, updatedTitle) {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: updatedTitle,
        };
      }
      return task;
    });
    setTaskListSave(newTaskList);
  }

  function completeAllTasks() {
    const allTasksCompleted = taskList.every((task) => task.isCompleted);

    const newTaskList = taskList.map((task) => ({
      ...task,
      isCompleted: !allTasksCompleted,
    }));

    setTaskListSave(newTaskList);
  }

  function deleteAllTasks() {
    setTaskList([]);
    localStorage.removeItem(localStorageKey);
  }

  return {
    taskList,
    addTask,
    deleteTaskById,
    toggleTaskCompleteById,
    updateTaskTitleById,
    deleteAllTasks,
    completeAllTasks,
  };
}

export default useTaskList;

