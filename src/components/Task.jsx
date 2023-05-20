import styles from "./Task.module.css";
import {VscTrash, VscPassFilled} from "react-icons/Vsc";

function Task({task, onComplete, onDelete}) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <VscPassFilled /> : <div />}
            </button>

        <div>
            
            <p className={`${styles.taskTitle} ${task.isCompleted ? styles.textCompleted : ""}`}>{task.title}</p>
            <p className={`${styles.taskDescription} ${task.isCompleted ? styles.textCompleted: ""}`}>{task.description}</p>
        </div>
            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <VscTrash size={20} />
            </button>
        </div>
    )
}

export default Task;