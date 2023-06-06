import styles from "../pages/AboutUs.module.css";
import about from "../assets/about.png";
import { BiCheck } from "react-icons/bi";
import {FaReact} from "react-icons/fa"
import {VscTasklist} from "react-icons/vsc"

function AboutUs() {
    return (
      <>
      <div>

      <div className={styles.icon}>
        <img src={about} alt="AboutUs" width={160}/>
      </div>
          <div><h1 className={styles.title}>Acerca de Nosotros</h1></div>
          <p className={styles.about}>My Task List es una aplicación web y de escritorio que te ayuda a ordenar y manipular tus tareas o actividades diarias de una manera muy eficiente. Con ella, podrás agregar o crear, eliminar, editar o actualizar y completar tus tareas. La App entrega una interfaz demasiado intuitiva y amigable; fácil de usar y sencilla para administrar tus responsabilidades diarias.</p>
          <br></br>
          <h2 className={styles.functions}><VscTasklist style={{color: "rgb(0, 170, 255)"}} />Funcionalidades<VscTasklist style={{color: "rgb(0, 170, 255)"}} /></h2>
          <br></br>
          <div className={styles.list}>
          <ul className={styles.ul}>
            <li><BiCheck color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>Crear Tareas</strong>: Puedes agregar una nueva tarea agregando un título y una descripción</li>
            <li><BiCheck color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>Editar Tareas</strong>: Si deseas, puedes actualizar una tarea, siempre y cuando, no la hayas completado</li>
            <li><BiCheck color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>Completar Tareas</strong>: Al momento que hayas culminado o cumplido una tarea, podrás marcarla como completada con el botón de completar</li>
            <li><BiCheck color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>Completar Todas las Tareas</strong>: Puedes completar todas las tareas de manera rápida</li>
            <li><BiCheck color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>Borrar Tareas</strong>: Puedes eliminar una tarea, independientemente de si la hayas completado o no</li>
            <li><BiCheck color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>Borrar todas las tareas</strong>: Puedes elimiar todas las tareas que tengas en la lista de manera rápida</li>
            <li><BiCheck color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>Almacenamiento de Datos</strong>: La app usa el almacenamiento local del navegador para guardar las tareas. Mantendrás tus tareas cuando cierres la aplicación</li>
          </ul>
          </div>
          <br></br>
          <h2 className={styles.functions}><FaReact style={{color: "rgb(0, 170, 255)"}}/>Tecnologías<FaReact style={{color: "rgb(0, 170, 255)"}}/></h2>
          <br></br>
          <div className={styles.list}>
            <ul className={styles.ul}>
              <li><FaReact color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>React</strong>: La Aplicación se desarrolló por medio de la biblioteca de JavaScript, React y la herramienta Vite</li>
              <li><FaReact color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>React Router</strong>: Permite manipular la navegación y el enrutamiento en las distintas páginas de la aplicación.</li>
              <li><FaReact color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>HTML y CSS</strong>: Empleadas para estructurar el contenido y la apariencia de la aplicación</li>
              <li><FaReact color="#ff00ff"/><strong style={{color: "rgb(0, 170, 255)"}}>Almacenamiento Local o Local Storage</strong>: Los datos quedan almacenados en la memoria del navegador por medio de la API del Local Storage</li>
            </ul>
          </div>
      </div>
      </>
    );
}

export default AboutUs;