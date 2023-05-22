import styles from "./Header.module.css";
import { BsPlus} from "react-icons/bs"; 
import todoapp from "../assets/todoapp.jpg";
import { useState } from "react";

function Header({onAddTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [formValidation, setFormValidation]=useState({error: false, errorMessage:""});
    
    function handleSubmit (event){
        event.preventDefault();

        const error = title.length < 3;
        setFormValidation({error: error, errorMessage: error ? "La tarea debe contener por lo menos tres(3) caracteres":""});
        if (!error) {        
        onAddTask(title, description);
        setTitle("");
        setDescription("");
        }
    };

    function onKeyDown(event) {
        if (event.key === "Enter"){
            handleSubmit(event);
        }
    }

    const onChangeTitle = (event)=> {
        const value = event.target.value;
    
        setFormValidation({
          ...formValidation, 
          email: value.length == 0 ? "email is required": ""
        })
    
        setTitle(value);
      };

    const onChangeDescription=(event) => {
        const value = event.target.value;
        setDescription(value);
    }

    return (
     <header className={styles.header}>
        <img src={todoapp} width={160} />
    
    <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
            className={styles.inputTitle} 
            placeholder="Agregar una nueva tarea" 
            type="text" 
            value={title} 
            onChange={onChangeTitle} 
        />
        <input
            className={styles.inputDescription}
            placeholder="Agregar una descripción de tarea"
            type="text"
            value={description}
            onChange={onChangeDescription}
            onKeyDown={onKeyDown}
        />
        {formValidation.error ? (
            <span className={styles.error}>{formValidation.errorMessage}</span>
        ): null}
        <button>
            <BsPlus size={25} 
            />
        </button>
    </form>
    </header>
    )
}

export default Header;