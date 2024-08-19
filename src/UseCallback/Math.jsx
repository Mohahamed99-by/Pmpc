import { useCallback } from "react";

const Math = () => {

    let x = 10;
    let y = 15;
    const handleClick = useCallback(() => {
        const result = x + y;
        console.log(result);
        return alert(result);
    }, [x,y]);

    return (
        <button onClick={handleClick}>Calculate</button>
    )
}

export default Math;