import React from "react";
import Task from "./Task";
import styles from "./TaskList.module.css";

function TaskList({ taskList, onComplete, onDelete, onUpdateTask }) {
  const taskListQuantity = taskList.length;
  const completedTaskList = taskList.filter((task) => task.isCompleted).length;

  const handleTaskUpdate = (taskId, updatedTitle) => {
    onUpdateTask(taskId, updatedTitle);
  };

  return (
    <section className={styles.taskList}>
      <header className={styles.header}>
        <div>
          <p>Created Tasks</p>
          <span>{taskListQuantity}</span>
        </div>

        <div>
          <p className={styles.textColor}>Complete Tasks</p>
          <span>
            {completedTaskList} of {taskListQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onUpdateTask={handleTaskUpdate}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskList;



