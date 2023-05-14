import styles from "./Task.module.css";

function Task() {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
            <div />
            </button>
        </div>
    )
}

export default Task;