import {Product} from "../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('file.json');
    return response.json();
};
