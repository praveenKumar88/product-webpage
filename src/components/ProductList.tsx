import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';  // Correct import

const ProductList: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
