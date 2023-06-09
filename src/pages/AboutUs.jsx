import about from "../assets/about.png";
import { Link } from "react-router-dom";
import createTasks from "../assets/createTasks.jpeg";
import editTasks from "../assets/editTasks.jpeg";
import editTasks2 from "../assets/editTasks2.jpeg";
import completeTasks from "../assets/completeTasks.jpeg";
import completeAllTasks from "../assets/completeAllTasks.jpeg";
import deleteTasks from "../assets/deleteTasks.jpeg";
import deleteTasks2 from "../assets/deleteTasks2.jpeg";
import deleteTasksAll from "../assets/deleteTasksAll.jpeg";
import { Box, Flex, Heading, Text, Divider, Image, Stack, WrapItem, Wrap, ButtonGroup, Button } from "@chakra-ui/react";
import {RiReactjsFill} from "react-icons/ri"

function AboutUs() {
  const whatsappMessage = "¡Hola! Estoy interesado en contactarte.";
    return (
      <>
        <Flex display="flex" flexDirection="column" align="center" justifyContent="center" minHeight="100vh" p={[4, 6, 10]} color="" fontFamily="Poppins" boxSizing="border-box" 
        // bgGradient="linear(to-b, #161B22, #0D1117)"
        // bg="#0D1117"
        >
          <Box mb={8}>
            <img src={about} alt="AboutUs" width={200} />
          </Box>
          <Flex flexDirection="column" alignItems="center" maxWidth="800px">
            <Heading as="h1" fontSize={["4xl", "4xl", "6xl"]} fontWeight="bold" mb={[8, 4, 50]}>
              Acerca de Nosotros
            </Heading>
            <Text fontSize={["2xl", "2xl", "3xl"]} mt={["1vh", "20vh", "0vh"]} textAlign="justify" padding="0 20px">
              My Task List es una aplicación que te ayuda a ordenar y manipular tus tareas o actividades diarias de una manera muy eficiente. Con ella, podrás crear, eliminar, actualizar y completar tus tareas. La App entrega una interfaz demasiado intuitiva y amigable; fácil de usar y sencilla para administrar tus responsabilidades diarias.
            </Text>
            <Divider my={[4, 4, 4]} borderBottomWidth="2px" borderBottomColor="gray" opacity="0.6" flexDirection="column" />
            {/* <Flex minWidth={"100"} bg="#0D1117" display="flex" flexDirection="column" align="center" justifyContent="center" p={[4, 6, 10]} color="white" fontFamily="Poppins" boxSizing="border-box">  */}
            <Heading as="h2" fontSize={["3xl", "3xl", "5xl"]} color="" mb={[8, 4, 50]} mt="2" id="funcionalidades">Funcionalidades</Heading>
            <Flex id="funcionalidades"fontSize={["xl", "xl", "xl"]} p="0 20px">
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} textAlign="justify" color="" mb={[8, 4, 8]} mt="-20px">
                La aplicación cumple una serie de funcionalidades que te ayudarán a ordenar tus tareas de manera rápida
              </Text>
            {/* </Flex> */}
              </Flex>
              <Divider my={[4, 4, 4]} borderBottomWidth="2px" borderBottomColor="gray" opacity="0.6" flexDirection="column"/>
            <Flex fontSize={["xl", "xl", "xl"]}>
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} color="" fontWeight="bold" textAlign="justify"mb={[8, 4, 8]}>
                Crear Tareas
              </Text>
            </Flex>
            <Flex fontSize={["xl", "xl", "xl"]} p="0 20px" flexDirection="column" align="center">
              <Text as="h2" fontSize={["1xl", "2xl", "2xl"]} textAlign="justify" color="" mb={[8, 4, 4]} mt="-20px">
                Agregar una nueva tarea agregando un título y una descripción. Con el botón "CREATE" podrás crear tareas de manera individual
              </Text>
              <Box>
                <Image src={createTasks} alt="create" borderRadius='20px' objectFit='cover'/>
              </Box>
            </Flex>
              <Divider my={[4, 4, 4]} borderBottomWidth="2px" borderBottomColor="gray" opacity="0.6" flexDirection="column" />
            <Flex fontSize={["xl", "xl", "xl"]}>
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} color="" fontWeight="bold" textAlign="justify" mb={[8, 4, 8]}>
                Editar Tareas
              </Text>
            </Flex>
            <Flex fontSize={["xl", "xl", "xl"]} p="0 20px" flexDirection="column" align="center">
              <Text as="h2" fontSize={["1xl", "2xl", "2xl"]} textAlign="justify" color="" mb={[8, 4, 4]} mt="-20px">
                Si deseas, puedes actualizar una tarea, siempre y cuando, no la hayas completado. El botón edición solo estará habilitado cuando NO hayas completado la tarea
              </Text>
              <Box>
                <Image src={editTasks} alt="create" borderRadius='20px' objectFit='cover'/>
              </Box>
              <Text as="h2" fontSize={["1xl", "2xl", "2xl"]} textAlign="justify" color="" mb={[8, 4, 4]} mt="4">
                Podrás editar la tarea sin necesidad de modificar la descripción y guardarla cuando consideres que está actualizada. Observa cómo se actualizan los botones al momento de editar la tarea. Se muestra un botón de "Guardar" la tarea editada y un botón "X" de cancelar la edición
              </Text>
              <Box>
                <Image src={editTasks2} alt="create" borderRadius='20px' objectFit='cover'/>
              </Box>
            </Flex>
            <Divider my={[4, 4, 4]} borderBottomWidth="2px" borderBottomColor="gray" opacity="0.6" flexDirection="column" />
            <Flex fontSize={["xl", "xl", "xl"]}>
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} color="" fontWeight="bold" textAlign="justify" mb={[8, 4, 8]}>
                Completar Tareas
              </Text>
            </Flex>
            <Flex fontSize={["xl", "xl", "xl"]} p="0 20px" flexDirection="column" align="center">
              <Text as="h2" fontSize={["1xl", "2xl", "2xl"]} textAlign="justify" color="" mb={[8, 4, 4]} mt="-20px">
                Al momento que hayas culminado o cumplido una tarea, podrás marcarla como completada con el botón de completar. El botón es un círculo.
              </Text>
              <Box>
                <Image src={completeTasks} alt="create" borderRadius='20px' objectFit='cover'/>
              </Box>
            </Flex>
            <Flex fontSize={["xl", "xl", "xl"]}>
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} color="" fontWeight="bold" textAlign="justify" mb={[8, 4, 8]} mt="4">
                Completar Todas las Tareas
              </Text>
            </Flex>
            <Flex fontSize={["xl", "xl", "xl"]} p="0 20px" flexDirection="column" align="center">
              <Text as="h2" fontSize={["1xl", "2xl", "2xl"]} textAlign="justify" color="" mb={[8, 4, 4]} mt="-20px">
                Observar que cuando hayan muchas tareas por completar, puede volverse tedioso completar tarea por tarea. Para eso, tendrás el botón de "COMPLETE ALL" para la lista como completa.
              </Text>
              <Box>
                <Image src={completeAllTasks} alt="create" borderRadius='20px' objectFit='cover'/>
              </Box>
            </Flex>
            <Divider my={[4, 4, 4]} borderBottomWidth="2px" borderBottomColor="gray" opacity="0.6" flexDirection="column"/>
            <Flex fontSize={["xl", "xl", "xl"]}>
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} color="" fontWeight="bold" textAlign="justify" mb={[8, 4, 8]} >
                Borrar Tareas
              </Text>
            </Flex>
            <Flex fontSize={["xl", "xl", "xl"]} p="0 20px" flexDirection="column" align="center">
              <Text as="h2" fontSize={["1xl", "2xl", "2xl"]} textAlign="justify" color="" mb={[8, 4, 4]} mt="-20px">
              Puedes eliminar una tarea, independientemente de si la hayas completado o no. Observar cómo el botón de eliminar tarea está habilitado con la tarea completada y cuando no lo está.
              </Text>
              <Box>
                <Image src={deleteTasks} alt="create" borderRadius='20px' objectFit='cover'/>
              </Box>
              
            </Flex>
            <Flex fontSize={["xl", "xl", "xl"]}>
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} color="" fontWeight="bold" textAlign="justify" mb={[8, 4, 8]} mt="4">
                Borrar Todas las Tareas
              </Text>
            </Flex>
            <Flex fontSize={["xl", "xl", "xl"]} p="0 20px" flexDirection="column" align="center">
              <Text as="h2" fontSize={["1xl", "2xl", "2xl"]} textAlign="justify" color="" mb={[8, 4, 4]} mt="-20px">
              Puedes elimiar todas las tareas que tengas en la lista de manera rápida
                </Text>
              <Box>
                <Image src={deleteTasksAll} alt="create" borderRadius='20px' objectFit='cover'/>
              </Box>
            </Flex>
            <Divider my={[4, 4, 4]} borderBottomWidth="2px" borderBottomColor="gray" opacity="0.6" flexDirection="column"/>
          </Flex>
        </Flex>

        <Flex bg="black" display="flex" flexDirection="column" align="center" justifyContent="center" p={[4, 6, 10]} color="white" fontFamily="Poppins" boxSizing="border-box">
            {/* <Divider maxWidth="1000px" borderBottomWidth="2px" borderBottomColor="white" opacity="0.2" flexDirection="column"/> */}
            <Heading as="h2" fontSize={["3xl", "3xl", "5xl"]} color="white" mb={[8, 4, 50]}>
              Tecnologías
              <RiReactjsFill style={{display: "inline-block",verticalAlign: "middle", // Alinear verticalmente el ícono en el medio
                  marginLeft: "10px", // Añadir un margen izquierdo para separar el ícono del texto
                  }}
              />
            </Heading>
            <Flex fontSize={["xl", "xl", "xl"]} p="0 20px" maxWidth="1000px">
              <Text as="h2" fontSize={["2xl", "3xl", "3xl"]} textAlign="center" color="" mb={[8, 4, 8]} mt="-20px">
                  La Aplicación fue desarrollada con el framework de JavaScript, React y su herramienta Vite.js
              </Text>
            </Flex>
            <Divider maxWidth="1000px" borderBottomWidth="2px" borderBottomColor="white" opacity="0.2" flexDirection="column"/>
              <Box py={10} mb={0}>
              <Wrap spacing={8} justify={["center", "center", "start"]} width="100%">
                <WrapItem>
                  <Link to="https://developer.mozilla.org/es/docs/Web/HTML">
                    <Button colorScheme='red'>HTML</Button>
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link to="https://developer.mozilla.org/es/docs/Web/CSS">
                    <Button colorScheme='blue'>CSS</Button>
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link to="https://developer.mozilla.org/es/docs/Web/JavaScript">
                    <Button colorScheme='yellow'>JavaScript</Button>
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link to="https://es.reactjs.org/">
                    <Button colorScheme='blue'>React</Button>
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link to="https://vitejs.dev/">
                    <Button colorScheme='purple'>Vite</Button>
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link to="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"> 
                    <Button colorScheme='messenger'>Local Storage</Button>
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link to="https://reactrouter.com/">
                    <Button colorScheme='purple'>React Router</Button>
                  </Link>
                </WrapItem>
              </Wrap>
              </Box>
            <Divider my={[, 4, 4]} maxWidth="1000px" borderBottomWidth="2px" borderBottomColor="white" opacity="0.2" flexDirection="column"/>
          
          <Box mt={10} textAlign="center">
            <Link to="/">
              <ButtonGroup spacing={4}>
                <Button colorScheme="green" size="lg" leftIcon={<RiReactjsFill />} variant="outline">
                  Volver al Inicio
              </Button>
              
            </ButtonGroup>
          </Link>
        </Box>
        </Flex>

      </>
    );
  }
export default AboutUs;