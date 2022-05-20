import { delay, put, takeEvery } from "redux-saga/effects";
import { getCategorySuccess, GET_CATEGORY } from "../actions/category.actions";



function* handleGetCategory () {
    yield delay(500);
    console.log("一上来就会来这里")
    // 触发action
    yield put(getCategorySuccess(
        [
            { 
                _id: '1',
                name: 'vue'
            },
            { 
                _id: '2',
                name: 'react'
            },
            { 
                _id: '3',
                name: 'angular'
            }
        ]
    ))
}
export default function* categorySaga () {
    // 获取分类列表
    yield takeEvery(GET_CATEGORY, handleGetCategory);
}