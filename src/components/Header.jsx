import styles from "./Header.module.css";
import { BsPlus} from "react-icons/bs"; 
import todoapp from "../assets/todoapp.jpg";
function Header(){
    return (
     <header className={styles.header}>
        <img src={todoapp} width={160} />
    
    <form className={styles.FormNuevaTarea}>
        <input placeholder="Agregar una nueva tarea" type="text" />
        <button>
            
            <BsPlus size={25} />
            </button>
    </form>

    </header>
    )
}

export default Header;

