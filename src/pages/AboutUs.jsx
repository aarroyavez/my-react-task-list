// import styles from "../pages/AboutUs.module.css";
// import about from "../assets/about.png";
// import {FaReact} from "react-icons/fa"
// import {VscTasklist} from "react-icons/vsc"
// function AboutUs() {
//     return (
//       <>
//       {/* <div>

//       <div className={styles.icon}>
//         <img src={about} alt="AboutUs" width={160}/>
//       </div>
//           <div><h1 className={styles.title}>Acerca de Nosotros</h1></div>
//           <p className={styles.about}>My Task List es una aplicación web y de escritorio que te ayuda a ordenar y manipular tus tareas o actividades diarias de una manera muy eficiente. Con ella, podrás agregar o crear, eliminar, editar o actualizar y completar tus tareas. La App entrega una interfaz demasiado intuitiva y amigable; fácil de usar y sencilla para administrar tus responsabilidades diarias.</p>
//           <br></br>
//           <h2 className={styles.functions}>Funcionalidades<VscTasklist style={{color: "rgb(0, 170, 255)"}} /></h2>
//           <br></br>
//           <div className={styles.list}>
//           <ul className={styles.ul}>
//             <li>Crear Tareas: Puedes agregar una nueva tarea agregando un título y una descripción</li>
//             <li>Editar Tareas: Si deseas, puedes actualizar una tarea, siempre y cuando, no la hayas completado</li>
//             <li>Completar Tareas: Al momento que hayas culminado o cumplido una tarea, podrás marcarla como completada con el botón de completar</li>
//             <li>Completar Todas las Tareas: Puedes completar todas las tareas de manera rápida</li>
//             <li>Borrar Tareas: Puedes eliminar una tarea, independientemente de si la hayas completado o no</li>
//             <li>Borrar todas las tareas: Puedes elimiar todas las tareas que tengas en la lista de manera rápida</li>
//             <li>Almacenamiento de Datos: La app usa el almacenamiento local del navegador para guardar las tareas. Mantendrás tus tareas cuando cierres la aplicación</li>
//           </ul>
//           </div>
//           <br></br>
//           <h2 className={styles.functions}><FaReact style={{color: "rgb(0, 170, 255)"}}/>Tecnologías<FaReact style={{color: "rgb(0, 170, 255)"}}/></h2>
//           <br></br>
//           <div className={styles.list}>
//             <ul className={styles.ul}>
//               <li>React: La Aplicación se desarrolló por medio de la biblioteca de JavaScript, React y la herramienta Vite</li>
//               <li>React Router: Permite manipular la navegación y el enrutamiento en las distintas páginas de la aplicación.</li>
//               <li>HTML y CSS: Empleadas para estructurar el contenido y la apariencia de la aplicación</li>
//               <li>Almacenamiento Local o Local Storage: Los datos quedan almacenados en la memoria del navegador por medio de la API del Local Storage</li>
//             </ul>
//           </div>
//       </div> */}
      
      
      
      
//       </>
//     );
// }

// export default AboutUs;

import styles from "../pages/AboutUs.module.css";
import about from "../assets/about.png";
import {FaReact} from "react-icons/fa"
import {VscTasklist} from "react-icons/vsc"
import { Box } from "@chakra-ui/react";
function AboutUs() {
    return (
      <>
        <Flex
          // display="flex"
          flexDirection="column"
          align="center"
          justifyContent="center"
          minHeight="100vh"
          p={[4, 6, 10]}
          color="white"
          fontFamily="Poppins"
          boxSizing="border-box"
          bgGradient="linear(to-b, #161B22, #0D1117)"
        
        >
          <Box mb={8}>
        <img src={about} alt="AboutUs" width={160} />
      </Box>
      <Heading as="h1" fontSize="4xl" textAlign="center" mb={8}>
        Acerca de Nosotros
      </Heading>
          
        </Flex>
      </>

      );
      }

export default AboutUs;