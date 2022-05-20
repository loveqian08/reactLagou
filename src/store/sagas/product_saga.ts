import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { 
    filterProduct, 
    FilterProductAction, 
    FilterProductSuccess, 
    FilterProductSuccessAction, 
    FILTER_PRODUCT , 
    FILTER_PRODUCT_SUCCESS 
} from "../actions/product_actions";


function* handleFilterProduct (action: FilterProductAction): any {
    // let res:any =  yield axios.post(`${API}/product/filter`, action.payload)
    var key = String(Math.random() * 10);
    var res = {
        size: 1,
        data: [{
            _id: key,
            name: 'string',
            price: 15,
            desc: 'string',
            category: {
                _id: 'string',
                name: 'string'
            },
            quantity: 0,
            sold: 45,
            shipping: true,
            createdAt: 'string'
        }]
    }
    yield delay(3000);
    yield put(FilterProductSuccess(res, action.payload.skip))
}

export default function* productSage () {
    yield takeEvery(FILTER_PRODUCT, handleFilterProduct);
    // yield takeEvery(FILTER_PRODUCT_SUCCESS, handleFilterProductSuccess);
}