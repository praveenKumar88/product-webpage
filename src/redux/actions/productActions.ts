// Define action types
import {Product} from "../../types/product";

export const SET_PRODUCTS = 'SET_PRODUCTS';

// Define the action interface
export interface SetProductsAction {
    type: typeof SET_PRODUCTS;
    payload: Product[];
}

// Union action types if there are other actions
export type ProductActionTypes = SetProductsAction;

// Action creator
export const setProducts = (products: Product[]): SetProductsAction => ({
    type: SET_PRODUCTS,
    payload: products,
});
