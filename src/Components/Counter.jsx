import React, { useContext } from 'react';
import { MyContext } from '../Contexts/CounterContext';

const Counter = () => {
    const { count, increment, decrement, reset } = useContext(MyContext);
    console.log({count});

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default Counter;
