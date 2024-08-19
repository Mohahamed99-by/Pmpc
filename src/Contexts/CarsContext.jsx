import { createContext, useState } from "react";


const initialState = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 24000 },
    { id: 2, make: 'Honda', model: 'Accord', year: 2019, price: 22000 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021, price: 28000 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018, price: 20000 },
    { id: 5, make: 'Tesla', model: 'Model 3', year: 2021, price: 35000 },
    { id: 6, make: 'BMW', model: '3 Series', year: 2019, price: 40000 },
    { id: 7, make: 'Audi', model: 'A4', year: 2020, price: 37000 },
    { id: 8, make: 'Mercedes', model: 'C-Class', year: 2021, price: 42000 },
    { id: 9, make: 'Nissan', model: 'Altima', year: 2018, price: 18000 },
    { id: 10, make: 'Hyundai', model: 'Elantra', year: 2019, price: 19000 },
];

const CarsCont = createContext();
const CarsContext = ({children}) => {

    const [cars, setCars] = useState(initialState);
    console.log(cars);

    return (
        <div>
            <CarsCont.Provider value={{cars, setCars}}>
                {children}
            </CarsCont.Provider>
        </div>
    )
}
export default CarsContext;
export {CarsCont};