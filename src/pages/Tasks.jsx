import Header from "../components/Header";
import TaskList from "../components/TaskList";
import useTaskList from "../components/useTaskList";

function Tasks() {
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
        onCompleteAll={completeAllTasks}
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

export default Tasks;
