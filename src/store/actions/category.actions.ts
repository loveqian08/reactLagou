import { Category } from "../models/category";

/**
 * 1. 首选定义action type
 * 
 * 2. 定义接口类型
 * 
 * 3. 定义actionCreate
 */ 
export const GET_CATEGORY = 'GET_CATEGORY'; 
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'; 

export interface GetCategoryAction {
    type: typeof GET_CATEGORY
}

export interface GetCategorySuccessAction {
    type: typeof GET_CATEGORY_SUCCESS,
    payload: Category[]
}

export const getCategory = ():GetCategoryAction => ({
    type:  GET_CATEGORY
})

export const getCategorySuccess = (payload: Category[]):GetCategorySuccessAction => ({
    type:  GET_CATEGORY_SUCCESS,
    payload
})

export type CategoryUnionType = GetCategoryAction | GetCategorySuccessAction;