// Layouts.js
import { Link, Outlet } from "react-router-dom";
import './Layouts.css';  // Import the CSS file

const Layouts = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Layouts;
