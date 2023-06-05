import styles from "../pages/Home.module.css";
import home from "../assets/home.png";

function Home() {
    return (
        <>
            <div className={styles.icon}>
                <img src={home} alt="Home" width={160}/>
            </div>
            <h1 className={styles.title}>Bienvenidos a My Task List</h1>
            <p className={styles.message}>¡Hola! Aquí tienes una gran aplicación de administración de tareas diaras. Aquí podrás crear, completar, borrar y actualizar cada tarea o actividad de tu día a día. Con esta App, podrás manejar mejor tu tiempo 😉 ¿Qué esperas para usarla?
            </p>
        </>
       
    );
  }
  
  export default Home;