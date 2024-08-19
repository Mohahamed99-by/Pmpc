

const Product = ({product}) => {
    return <>
        
        <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td><img src={product.image}  width={100} height={100} alt="" /></td>
            <td className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">{product.rating.rate}/{product.rating.count}</td>
            
        </tr>
    </>
}
export default Product;