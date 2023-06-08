import { useNavigate } from 'react-router-dom';
import styles from "./styles/Menu.module.css"
import { Button } from '@chakra-ui/react';
import { motion } from "framer-motion";

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
    </nav>
  );
}

export default Menu;


