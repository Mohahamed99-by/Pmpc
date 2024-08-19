import { createContext, useState } from "react";


const myContext = createContext([]);

const UserApp = ({children}) => {
    const [users, setUsers] = useState([]);

    const handleOk = (data) => {
        setUsers(prevState => [...prevState, data]);
    };

    const handleDrop = (nameP) => {
        const result = users.filter(user => user.name !== nameP);
        setUsers(result);
    }
    

    return (
        <myContext.Provider value={{ users, handleOk, handleDrop, setUsers }}>
            {children}
        </myContext.Provider>
    );
}

export default UserApp;
export { myContext };
