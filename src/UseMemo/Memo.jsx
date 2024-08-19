import { useMemo, useState } from "react";

const Meme = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const handleClickA = () => {
        setCountA(prevCountA => prevCountA + 1);
    };
    const handleClickB = () => {
        setCountB(prevCountB => prevCountB - 1);
    };

    const isEven = useMemo(() => {
        for (let i = 0; i < 100000000; i++); // Busy work to simulate heavy computation
        return countA % 2 === 0;
    }, [countA])

    const handleStyleButtonA = {
        color: 'white', 
        margin: '10px', 
        padding: '20px',
        border: '1px solid red',
        backgroundColor: isEven ? 'green' : 'red'
    };
    const handleStyleButtonB = {
        color: 'white', 
        margin: '10px', 
        padding: '20px',
        border: '1px solid red',
        backgroundColor: 'blue'
    };

    return (
        <div>
            <h1>Meme</h1>
            <button style={handleStyleButtonA} onClick={handleClickA}>{countA}</button>
            {isEven ? 'زوجي' : 'فردي'}
            <button style={handleStyleButtonB} onClick={handleClickB}>{countB}</button>
        </div>
    );
};

export default Meme;
