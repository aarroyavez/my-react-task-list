import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTaskList from "./components/useTaskList";

function App() {
  const { taskList, addTask, deleteTaskById, toggleTaskCompleteById, deleteAllTasks } =
    useTaskList();

  return (
    <>
      <Header onAddTask={addTask} onDeleteAllTasks={deleteAllTasks}/>
      <TaskList
        onDelete={deleteTaskById}
        taskList={taskList}
        onComplete={toggleTaskCompleteById}
      />
    </>
  );
}

export default App;