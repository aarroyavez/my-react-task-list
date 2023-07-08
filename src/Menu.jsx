import { useNavigate } from 'react-router-dom';
import styles from "./styles/Menu.module.css"
import { Button, WrapItem, Wrap, Flex, Box } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ToggleColorMode from './theme/ToggleColorMode';
import {FaReact} from "react-icons/fa"
import {VscTasklist} from "react-icons/vsc"
function Menu() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleTasksClick = () => {
    navigate('/tasks');
  };
  
  return (
    <>
    <nav className={styles.navBar}>
      <motion.div
                    whileHover={{ scale: 1.1   }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    >
        <Button 
          colorScheme='orange'
          className={styles.menuButton}
          type="button"
          onClick={handleHomeClick}
          >
            Home
        </Button>
          </motion.div>
          <motion.div
                    whileHover={{ scale: 1.1   }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    >
        <Button 
          colorScheme='teal'
          type="button"
          className={styles.menuButton}
          onClick={handleAboutClick}
        >
            About Us
        </Button>
        </motion.div>
        <motion.div
                    whileHover={{ scale: 1.1   }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    >
        <Button 
          colorScheme='purple'
          typeof="button"
          className={styles.menuButton}
          onClick={handleTasksClick}
        >
            Tasks
        </Button>
        </motion.div>
        <ToggleColorMode
        />
    </nav>
    <Wrap
    // spacing={4}
    direction='column'
    position={"absolute"}
    margin="0px 10px 0px"   
    marginTop="20"
    // left="vw"
>  
    <Link to="https://es.reactjs.org/">
      <Button 
      colorScheme='teal' variant="outline"><FaReact /></Button>
    </Link>
    <Link to="/tasks">
      <Button colorScheme='green' variant="outline"><VscTasklist /></Button>
    </Link>
    </Wrap>
    </>
  );
}

export default Menu;


