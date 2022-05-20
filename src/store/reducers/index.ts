import testReducer from "./test.reduser";
import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import authReducer, { AuthState } from "./auth_reducer";
import categoryReducer, { CategoryState } from "./category.reducer";
import filterReducer from './product_reducer';
import { ProductState } from "./product_reducer";
// const rootReducer = combineReducers({
//     test: testReducer,
//     router: connectRouter(history)
// })
// export default rootReducer;

// 导出router类型 防止ts报错找不到里面的属性
export interface AppState  {
    router: RouterState,
    auth: AuthState,
    category: CategoryState,
    product: ProductState
}

const createRootReducer = (history: History) => combineReducers({
    test: testReducer,
    router: connectRouter(history),
    auth: authReducer,
    category: categoryReducer,
    product: filterReducer
})
export default createRootReducer;