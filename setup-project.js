const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Helper function to create a directory if it does not exist
function createDirectoryIfNotExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Directory created: ${dir}`);
    }
}

// Helper function to create a file with optional content
function createFile(filePath, content = '') {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File created: ${filePath}`);
}

// Define directories and files
const directories = [
    'src/assets',
    'src/components',
    'src/redux/actions',
    'src/redux/reducers'
];

const files = {
    'src/assets/logo.svg': '',
    'src/components/Graph.tsx': `import React from 'react';

const Graph: React.FC = () => {
    return <div>Graph Component</div>;
};

export default Graph;
`,
    'src/components/Table.tsx': `import React from 'react';

const Table: React.FC = () => {
    return <div>Table Component</div>;
};

export default Table;
`,
    'src/components/ProductList.tsx': `import React from 'react';

const ProductList: React.FC = () => {
    return <div>Product List Component</div>;
};

export default ProductList;
`,
    'src/redux/actions/productActions.ts': `import { Action } from 'redux';
import { Product } from './types';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export interface SetProductsAction extends Action<typeof SET_PRODUCTS> {
    payload: Product[];
}

export const setProducts = (products: Product[]): SetProductsAction => ({
    type: SET_PRODUCTS,
    payload: products
});
`,
    'src/redux/reducers/productReducer.ts': `import { Reducer } from 'redux';
import { Product } from '../types';
import { SET_PRODUCTS, SetProductsAction } from '../actions/productActions';

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: []
};

const productReducer: Reducer<ProductState, SetProductsAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};

export default productReducer;
`,
    'src/redux/store.ts': `import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';

export const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
`,
    'src/App.tsx': `import React from 'react';
import ProductList from './components/ProductList';

const App: React.FC = () => {
    return (
        <div className="App">
            <ProductList />
        </div>
    );
};

export default App;
`,
    'src/index.tsx': `import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
`
};

// Install/update dependencies
function installDependencies() {
    console.log('Installing dependencies...');
    execSync('npm install redux react-redux @reduxjs/toolkit', { stdio: 'inherit' });
    execSync('npm install @types/react-redux @types/redux', { stdio: 'inherit' });
}

// Update project files
function updateProject() {
    directories.forEach(dir => createDirectoryIfNotExists(dir));

    Object.keys(files).forEach(filePath => createFile(filePath, files[filePath]));
}

// Main function
function main() {
    installDependencies();
    updateProject();
    console.log('Project setup complete.');
}

// Run the script
main();
