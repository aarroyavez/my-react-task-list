import styles from "./TaskList.module.css";

function TaskList() {
    return (
        <section className={styles.TaskList}>
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
        </section>
    )
}

export default TaskList;