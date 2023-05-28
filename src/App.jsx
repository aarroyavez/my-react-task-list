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
    updateTaskTitleById, // Nueva función para actualizar el título de la tarea
  } = useTaskList();

  const handleUpdateTask = (taskId, updatedTitle) => {
    updateTaskTitleById(taskId, updatedTitle);
  };

  return (
    <>
      <Header onAddTask={addTask} onDeleteAllTasks={deleteAllTasks} />
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

