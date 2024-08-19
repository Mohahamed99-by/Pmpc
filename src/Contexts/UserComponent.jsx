import { useState } from "react"
import UserContext from "./Contexts/UserContext";

const UserComponent = () => {
    const [user, setUser] = useState('Full-Stack Developer');

    return (
        <UserContext user={user} />
    );
};

export default UserComponent;