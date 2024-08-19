import { useContext } from "react";
import { CarsCont } from "../Contexts/CarsContext";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const Cars = () => {

    const {cars} = useContext(CarsCont);


    const handleCarsList = () => {
        return cars.map((car) => (
            <li className="list-group-item" key={car.id}>{car.make} {car.model} {car.year} {car.price}</li>
        ))
    }
    const handleCarsTable = () => {
        return cars.map((car) => (
            <tr key={car.id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.price}</td>
            </tr>
        ))
    }

    return (
        <div className="container">
            
            <h1>Cars</h1>
            <ul className="list-group">
                {handleCarsList()}
            </ul>
            <table className="table table-striped table-bordered">
               <thead className="thead-dark">
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price</th>
                </tr>
               </thead>
               <tbody>
                {handleCarsTable()}
               </tbody>
            </table>
        </div>
    )
}
export default Cars;