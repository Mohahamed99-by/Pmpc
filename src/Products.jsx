import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Search from "./Search";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const Products = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );


    

    return (
        <>
            <Search type="text" search={search} handleSearch={handleSearch} />

            <p>List of Products</p>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr className="table-dark">
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Products;
