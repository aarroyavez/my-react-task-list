import styles from "./Header.module.css";
import { BsPlusCircle} from "react-icons/bs"; 
import todoapp from "../assets/todoapp.jpg";
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";

function Header({onAddTask, onDeleteAllTasks}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [formValidation, setFormValidation]=useState({
        error: false, 
        errorMessage:""});

    const handleSubmit = (event) => {
        event.preventDefault();

        const error = title.length < 3;
        setFormValidation({error: error, errorMessage: error ? "❌The task must have a minimum of 3 characters❗":""});
        if (!error) {        
        onAddTask(title, description);
        setTitle("");
        setDescription("");
        }
    };

    const handleDeleteAllTasks = () => {
        onDeleteAllTasks();
    };

    function onKeyDown(event) {
        if (event.key === "Enter"){
            handleSubmit(event);
        }
    }

    const onChangeTitle = (event)=> {
        const value = event.target.value;
        setTitle(value);
      };

    const onChangeDescription=(event) => {
        const value = event.target.value;
        setDescription(value);
    }

    return (
     <header className={styles.header}>
        <img src={todoapp} width={160}/>
    
    <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
            className={styles.inputTitle} 
            placeholder="Add task" 
            type="text" 
            value={title} 
            onChange={onChangeTitle} 
        />
        <input
            className={styles.inputDescription}
            placeholder="Add description"
            type="text"
            value={description}
            onChange={onChangeDescription}
            onKeyDown={onKeyDown}
        />
        {formValidation.error ? (
            <span className={styles.error}>{formValidation.errorMessage}</span>
        ): null}
        <button type="submit" className={styles.addButton}>CREATE
            <BsPlusCircle size={20} 
            />
        </button>
        <button className={styles.deleteAllTasks} type="button" onClick={handleDeleteAllTasks}>
            DELETE ALL
            <BsTrashFill size={20}/>
        </button>
    </form>
    
    </header>
    )
}

export default Header;