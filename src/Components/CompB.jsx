
import {useContext} from 'react';
import { MyContext} from '../Contexts/CounterContext';
import {NameCxt} from '../Contexts/NameContext';

const CompB = () => {
    const { count } = useContext(MyContext);
    const {name, handleNameChange} = useContext(NameCxt);

    

    return (
        <div>
           <h1>CompB : {count}</h1>
           <input type='text' value={name} onChange={handleNameChange} />
           <p>Name : {name}</p>

        </div>
    )
}
export default CompB;