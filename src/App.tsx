import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/actions/productActions';
import ProductList from './components/ProductList';
import { fetchProducts } from './services/productService';

const App: React.FC = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <header>
                <img src="/assets/logo.svg" alt="Stackline Logo" />
                <h1>Product List</h1>
            </header>
            <ProductList />
        </div>
    );
};

export default App;
