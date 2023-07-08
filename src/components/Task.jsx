import React, { useState } from "react";
import styles from "./Task.module.css";
import { VscTrash, VscPassFilled, VscEdit, VscSaveAs, VscChromeClose } from "react-icons/vsc";
import { useEffect } from "react";

function Task({ task, onComplete, onDelete, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCancelClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCompleteClick = () => {
    onComplete(task.id);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSaveClick();
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
  };

  const handleSaveClick = () => {
    if (editedTitle.length >= 3) {
      setIsEditing(false);
      onUpdateTask(task.id, editedTitle);
    }
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={handleCompleteClick}>
        {task.isCompleted ? <VscPassFilled /> : <div />}
      </button>

      <div>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            className={styles.editInput}
            onKeyDown={handleKeyDown}
          />
          ) : (
            <p className={`${styles.taskTitle} ${task.isCompleted ? styles.textCompleted : "" }`}>{task.title}</p>
            )}
            <p className={styles.taskDescription}>{task.description}</p>
      </div>

      <div>
        {isEditing ? (
          <>
            <button 
            className={styles.cancelButton} 
            onClick={handleCancelClick}
            >
              <VscChromeClose size={20} />
            </button>
            <button 
            className={styles.saveButton} 
            onClick={handleSaveClick}
            >
              <VscSaveAs size={20} />
            </button>
          </>
        ) : (
          <>
          <button className={styles.deleteButton} onClick={handleDeleteClick}>
              <VscTrash size={20} />
            </button>
            <button
              className={`${styles.editButton} ${task.isCompleted ? styles.disabledButton : ""}`}
              onClick={handleEditClick}
              disabled={task.isCompleted}
            >
              <VscEdit size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Task;

