import Header from "./components/Header"
import TaskList from "./components/TaskList"
import { useState } from "react";

const localStorageKey = "todo:savedTaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask(taskTitle){
    setTaskList([...taskList,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function setTaskListSave(newTaskList) {
    setTaskList(newTaskList);
    localStorage.setItem(localStorageKey, JSON.stringify(newTaskList));
  }

  function deleteTaskById(taskId) {
    const newTaskList = taskList.filter(task => task.id != taskId);
    setTaskList(newTaskList);
  }

  function toggleTaskCompleteById(taskId) {
    const newTaskList = taskList.map(task => {
      if(task.id === taskId) {
        return {
          ...task, 
          isCompleted: !task.isCompleted
        }
      }

      return task;
    });
    setTaskList(newTaskList);
  }
  return (
    <>
      <Header onAddTask={addTask} />
      <TaskList
      onDelete={deleteTaskById} 
      taskList={taskList} 
      onComplete={toggleTaskCompleteById}
        />
    </>
  )
}

export default App
