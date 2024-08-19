import React, { useReducer } from 'react';

const Counter = ({ reducer, initialState }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>{state.count}</div>
            <button style={{ width: '50px', height: '50px' }} onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        </>
    );
};

export default Counter;
