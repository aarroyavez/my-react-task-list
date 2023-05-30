import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTaskList from "./components/useTaskList";

function App() {
  const {
    taskList,
    addTask,
    deleteTaskById,
    toggleTaskCompleteById,
    deleteAllTasks,
    completeAllTasks,
    updateTaskTitleById,
  } = useTaskList();

  const handleUpdateTask = (taskId, updatedTitle) => {
    updateTaskTitleById(taskId, updatedTitle);
  };

  return (
    <>
      <Header
        onAddTask={addTask}
        onDeleteAllTasks={deleteAllTasks}
        onCompleteAll={completeAllTasks} // Actualizado el nombre de la prop
      />
      <TaskList
        taskList={taskList}
        onComplete={toggleTaskCompleteById}
        onDelete={deleteTaskById}
        onUpdateTask={handleUpdateTask}
      />
    </>
  );
}

export default App;

