import styles from "./Task.module.css";
import {VscTrash} from "react-icons/Vsc";

function Task({task}) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
            <div />
            </button>

            <p>{task.title}</p>
            
            <button className={styles.deleteButton}>
                <VscTrash size={20} />
            </button>
        </div>
    )
}

export default Task;