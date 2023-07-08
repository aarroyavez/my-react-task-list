import { Box, Flex } from "@chakra-ui/react";
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
    <Flex 
        // bgGradient="linear(to-b, #161B22, #0D1117)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="100vh"
        pb="40vh"
        >
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
        </Flex>
    </>
  );
}

export default Tasks;
