import { all } from "redux-saga/effects";
import authSaga from "./auth_saga";
import categorySaga from "./category_saga";
import productSage from "./product_saga";

// 所有的saga 都是经过rootSaga 发送
export default function* rootSage () {
    yield all([authSaga(), categorySaga(), productSage()])
}