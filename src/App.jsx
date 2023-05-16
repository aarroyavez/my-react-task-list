import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTaskList from "./components/CustomHook";

function App() {
  const { taskList, addTask, deleteTask, updateTask } = useTaskList();

  return (
    <>
      <Header onAddTask={addTask} />
      <TaskList
        taskList={taskList}
        onComplete={(taskId) => updateTask(taskId, { isCompleted: true })}
        onDelete={deleteTask}
      />
    </>
  );
}

export default App;
