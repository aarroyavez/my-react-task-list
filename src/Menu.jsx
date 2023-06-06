import { useNavigate } from 'react-router-dom';
import styles from "./styles/Menu.module.css"

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

  const handleContactClick = () => {
    navigate("/contact");
  }

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
        <button 
            type="button"
            className={styles.menuButton}
            onClick={handleContactClick}
        >
            Contact Us
        </button>
    </nav>
  );
}

export default Menu;


