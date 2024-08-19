import { createContext, useState } from "react";

const MyContext = createContext(0);

MyContext.displayName = "CounterContext";


const CounterContext = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <MyContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </MyContext.Provider>
    );
};
export default CounterContext;
export { MyContext };
