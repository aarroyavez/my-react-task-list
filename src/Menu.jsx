import { Link } from "react-router-dom";

function Menu(){
    return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/about">About Us</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/tasks">Tasks</Link>
            </li>
        </ul>
    </nav>
    );
}

export default Menu;