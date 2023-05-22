import styles from "./Header.module.css";
import { BsPlus} from "react-icons/bs"; 
import todoapp from "../assets/todoapp.jpg";
import { useState } from "react";
import { registerUser } from "./services/registerUser";

function Header(){
    // const onSubmit = (data) => {
    //     onSubmit(data);
    // };

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [formValidation, setFormValidation]=useState ({
        title: undefined,
        description: undefined,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleTitleChange=(event) => {
        const value=event.target.value;

        setFormValidation({
            ...formValidation,
            title: value < 3 ? "La tarea debe contener al menos 3 caracteres":"",
        })

        setTitle(value);
    };
        
        // onAddTask(title, description);
        // setTitle("");
        // setDescription("");
        // setError;
    
    



    // function onKeyDown(event) {
    //     if (event.value === "Enter"){
    //         handleSubmit(event);
    //     }
    // };

    const isFormValid = Object.keys(formValidation).every(
        (key) => formValidation[key] === ""
        );

        return (
            <header className={styles.header}>
            <img src={todoapp} width={160} />
            <form onSubmit={handleSubmit}
            className={styles.newTaskForm}>
                    <input 
                        placeholder="Agregar una nueva tarea" 
                        type="text" 
                        value = {title}
                        onChange={handleTitleChange}
                        />
                        {formValidation.title && (
                            <span style={{color:"red"}}>{formValidation.title}</span>
                    )}
                    
                    <textarea
                        className={styles.newTaskForm}
                        placeholder="Agregar una descripción de tarea"
                        type="text"
                        value={description}
                        
                        // onKeyDown={onKeyDown}
                    />
                    {formValidation.description && (
                        <span style={{color: "red"}}>{formValidation.description}</span>
                    )}
        <button disabled={!isFormValid}><BsPlus size={25} /></button>
    </form>
    </header>
    );
}


export default Header;