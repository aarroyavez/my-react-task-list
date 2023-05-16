import styles from "./Task.module.css";
import {VscTrash, VscPassFilled} from "react-icons/Vsc";


function Task({task, onComplete}) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <VscPassFilled /> : <div />}
            </button>

            <p>{task.title}</p>
            
            <button className={styles.deleteButton}>
                <VscTrash size={20} />
            </button>
        </div>
    )
}

export default Task;