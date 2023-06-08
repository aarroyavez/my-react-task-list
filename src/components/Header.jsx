import React, { useState } from "react";
import styles from "./Header.module.css";;
import taskListIcon from "../assets/taskListIcon.png";
import { Button } from "@chakra-ui/react";

function Header({ onAddTask, onDeleteAllTasks, onCompleteAll }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formValidation, setFormValidation] = useState({
    error: false,
    errorMessage: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const error = title.length < 3 || title.trim() === "";
    setFormValidation({
      error: error,
      errorMessage: error ? "❌alert: The task must have a minimum of 3 characters❗" : "",
    });

    if (!error) {
      onAddTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  const handleCompleteAllTasks = () => {
    onCompleteAll();
  };


  const handleDeleteAllTasks = () => {
    onDeleteAllTasks();
  };

  const onChangeTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const onChangeDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.todoApp}>My Task List</h1>
      <img src={taskListIcon} alt="Todo App" width={160} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          className={`${styles.inputTitle} ${
            formValidation.error ? styles.inputError : ""
          }`}
          placeholder="Add task"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <input
          className={styles.inputDescription}
          placeholder="Add description"
          type="text"
          value={description}
          onChange={onChangeDescription}
        />
        {formValidation.error && (
          <span className={styles.error}>{formValidation.errorMessage}</span>
        )}
        <Button colorScheme='blue' type="submit" className={styles.addButton}>
          CREATE
          
        </Button>
        <Button
        colorScheme='red'
          className={styles.deleteAllTasks}
          type="button"
          onClick={handleDeleteAllTasks}
        >
          DELETE ALL
        </Button>
        <Button
        colorScheme='pink'
          className={styles.completeAllTasks}
          type="button"
          onClick={handleCompleteAllTasks}
        >
          COMPLETE ALL
          
        </Button>
      </form>
    </header>
  );
}

export default Header;
