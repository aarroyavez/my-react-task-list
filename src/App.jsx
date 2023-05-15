import Header from "./components/Header"
// import Task from "./components/Task"
import TaskList from "./components/TaskList"
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask(taskTitle){
    setTaskList([
      ...taskList,{
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }
  return (
    <>
      <Header onAddTask={addTask} />
      <TaskList />
      
    </>
  )
}

export default App
