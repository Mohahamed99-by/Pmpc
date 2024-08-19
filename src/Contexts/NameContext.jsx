import { createContext, useState } from "react";

const NameCxt = createContext();

const NameContext = ({children}) => {
    
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    console.log({name});
    return (
        <div>
            <NameCxt.Provider value={{name, setName, handleNameChange}}>
                {children}
            </NameCxt.Provider>
        </div>
    )
}
export default NameContext;
export {NameCxt};