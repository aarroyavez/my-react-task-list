import styles from "./Task.module.css";
import {VscTrash} from "react-icons/Vsc";
function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
            <div />
            </button>

            <p>Ponerme al día con las clases de ADA School</p>
            
            <button className={styles.deleteButton}>
                <VscTrash size={20} />
            </button>
        </div>
    )
}

export default Task;