import { ProductActionTypes, SET_PRODUCTS } from '../actions/productActions';
import {Product} from "../../types/product";

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
};

const productReducer = (state = initialState, action: ProductActionTypes): ProductState => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
