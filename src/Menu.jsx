import { useNavigate } from 'react-router-dom';
import styles from "./Menu.module.css"

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
        <button 
            className={styles.menuButton}
            type="button"
            onClick={handleHomeClick}
        >
            Home
        </button>
        <button 
            type="button"
            className={styles.menuButton}
            onClick={handleAboutClick}
        >
            About Us
        </button>
        <button 
            typeof="button"
            className={styles.menuButton}
            onClick={handleTasksClick}
        >
            Tasks
        </button>
    </nav>
  );
}

export default Menu;


