import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import UserTable from "./UserTable";
import UserAdd from "./UserAdd";
import UserUpdate from "./UserUpdate";
import { myContext } from "./UserApp";
import './UserLayouts.css'; // Import the custom CSS file
import { FaList, FaUserPlus } from 'react-icons/fa'; // Import icons from react-icons

const UserLayouts = () => {
    const { users, handleOk, handleDrop } = useContext(myContext);

    return (
        <BrowserRouter>
            <div className="layout">
                {/* Sidebar */}
                <nav className="sidebar">
                    <div className="logo">
                        <img src="./public/users-design-beauty-name-Photoroom.png" width={170} height={100} alt="Logo" className="logo-img" />
                    </div>
                    <ul className="sidebar-menu">
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/list-user">
                                <FaList className="sidebar-icon" /> List User
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/add-user">
                                <FaUserPlus className="sidebar-icon" /> Add User
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Main content */}
                <div className="content">
                    <Routes>
                        <Route path="/list-user" element={<UserTable users={users} handleDrop={handleDrop} />} />
                        <Route path="/add-user" element={<UserAdd handleOk={handleOk} />} />
                        <Route path="/update-user/:name" element={<UserUpdate />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default UserLayouts;
