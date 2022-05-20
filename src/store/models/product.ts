import { Category } from "./category"

export interface Price {
    id: number,
    name: string,
    array: [number?, number?]
}
export interface Product {
    _id: string,
    name: string,
    price: number,
    desc: string,
    category: Category,
    quantity: number,
    sold?: number,
    photo?: FormData,
    shipping: boolean,
    createdAt: string
}