import styles from "./Header.module.css";
import { BsPlus} from "react-icons/bs"; 
import todoapp from "../assets/todoapp.jpg";
import { useState } from "react";

function Header({onAddTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [formValidation, setFormValidation]=useState({error: false, errorMessage:""});
    // const [error, setError] = useState("");

    function handleSubmit (event){
        event.preventDefault();

        const error = title.length < 3;
        setFormValidation({error: error, errorMessage: error ? "La tarea debe contener por lo menos tres(3) caracteres":""});

        // if (title.length < 3) {
        //     setError("La tarea debe contener por lo menos tres(3) caracteres");
        //     return;
        // }

        if (!error) {        
        onAddTask(title, description);
        setTitle("");
        setDescription("");
        }
        // setError;
    };

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

        {formValidation.error ? (
            <span className={styles.error}>{formValidation.errorMessage}</span>
        ): null}
        {/* {error && <p className={styles.error}>{error}</p>} */}
        
        <button>
            <BsPlus size={25} 
            />
        </button>
    </form>
    </header>
    )
}

export default Header;