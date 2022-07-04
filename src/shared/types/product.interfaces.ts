import { ReactNode } from 'react';

export type ProductsProviderProps = {
    children: ReactNode;
}

export type ProductsContextProps = {
    products: Product[];
    setProducts: (data: Product[]) => void;
    listProducts: (text: string, offset?: number) => void;
    categories: string[];
    getProduct: (id: string) => void;
    selectedProduct?: Product;
    setSelectedProduct: (data?: any) => void;
    pagination: {
        total: number;
        primary_results: number;
        offset: number;
        limit: number;
    };
}

export type Product = {
    id: string;
    title: string;
    categories: string[];
    price: {
        amount: number;
        decimals: number;
        currency: string;
    }
    thumbnail: string;
    pictures: any[];
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    city: string;
    description: string;
}