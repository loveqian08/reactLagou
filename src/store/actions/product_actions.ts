import { Product } from "../models/product";

/**
 * 筛选相关的action
 */
export const FILTER_PRODUCT = 'FILTER_PRODUCT';
export const FILTER_PRODUCT_SUCCESS = 'FILTER_PRODUCT_SUCCESS';

export interface FilterPayload {
    order?: string,
    sortby?: string,
    limit?: number,
    skip: number,
    filter?: {
        category: string[],
        price: number[]
    }
}
export interface FilterProductAction {
    type: typeof FILTER_PRODUCT
    payload: FilterPayload
}
export interface FilterProductSuccessAction {
    type: typeof FILTER_PRODUCT_SUCCESS;
    payload: {
        size: number,
        data: Product[]
    }
    skip: number
}

export const filterProduct = 
(payload:FilterPayload ):FilterProductAction => ({
    type: FILTER_PRODUCT,
    payload
})
export const FilterProductSuccess = (
    payload: {
        size: number,
        data: Product[]
    },
    skip: number
):FilterProductSuccessAction => ({
    type: FILTER_PRODUCT_SUCCESS,
    payload,
    skip
})

export type ProductUnionType = 
| FilterProductSuccessAction
| FilterProductAction