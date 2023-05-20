import styles from "./Header.module.css";
import { BsPlus} from "react-icons/bs"; 
import todoapp from "../assets/todoapp.jpg";
import { useState } from "react";

function Header({onAddTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit (event){
        event.preventDefault();
        onAddTask(title, description);
        setTitle("");
        setDescription("");
    }

    function onKeyDown(event) {
        if (event.key === "Enter"){
            handleSubmit(event);
        }
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    function onChangeDescription(event) {
        setDescription(event.target.value);
    }

    return (
     <header className={styles.header}>
        <img src={todoapp} width={160} />
    
    <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input 
            placeholder="Agregar una nueva tarea" 
            type="text" 
            value={title} 
            onChange={onChangeTitle} 
        />

        <textarea
            className={styles.newTaskForm}
            placeholder="Agregar una descripción de tarea"
            type="text"
            value={description}
            onChange={onChangeDescription}
            onKeyDown={onKeyDown}
        />
        
        <button>
            <BsPlus size={25} 
            />
        </button>
    </form>
    </header>
    )
}

export default Header;