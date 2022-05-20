import {
    FILTER_PRODUCT,
    FILTER_PRODUCT_SUCCESS,
    ProductUnionType,

} from '../actions/product_actions';
import { Product } from '../models/product';

export interface ProductState {
    filter: {
        loaded: boolean,
        success: boolean,
        result: {
            size: number,
            data: Product[]
        }
    }
}
const initialValues: ProductState = {
    filter: {
        success: false,
        loaded: false,
        result: {
            size: 0,
            data: []
        }
    }
}
export default function filterReducer (state = initialValues, action: ProductUnionType) {
    switch (action.type) {
        case FILTER_PRODUCT:
            return {
                ...state,
                filter: {
                    loaded: false,
                    success: false,
                    result: {
                        size: 0,
                        data: state.filter.result.data
                    }
                }
            }
        case FILTER_PRODUCT_SUCCESS:
            // 当请求到了新数据以后 报错老的数据 
            let data = action.skip == 0 ? action.payload.data : [
                ...state.filter.result.data,
                ...action.payload.data
            ]
            return {
                ...state,
                filter: {
                    loaded: true,
                    success: true,
                    result: {
                        size: action.payload.size,
                        data
                    }
                }
            }
        default:
            return state    
    }
}