import Task from "./Task";
import styles from "./TaskList.module.css";

function TaskList() {
    return (
        <section className={styles.taskList}>
            <header className={styles.header}>
                <div>
                    <p>Crear tarea</p>
                    <span>5</span>
                </div>

                <div>
                    <p className={styles.textColor}>Tareas Completas</p>
                    <span>1 de 5</span>
                </div>
            </header>

            <div className={styles.list}>
                <Task />
            </div>
        </section>
    )
}

export default TaskList;