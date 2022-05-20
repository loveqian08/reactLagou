import { SIGIN, SigninAciton, signinFail, signinSuccess, SIGNUP, SignupAciton, signupFail, signupSuccess } from "../actions/auth_actions";
import { delay, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { API } from "../../config";
import { convertToObject } from "typescript";

function* handleSignup (action: SignupAciton): any {
    // try {
    //     let res =  yield  axios.post(`${API}/signup`, action.payload);
    //     yield put(signupSuccess());
    // } catch (e:any) {
    //     yield put(signupFail(e.response.data.error));
    // }
    yield delay(3000);
    yield put(signupSuccess());
}


// 登录
function* handleSigin (action: SigninAciton):any {
    try {
        const res2 =  yield axios.post<any>(`${API}/signup`, action.payload);
        yield put(signinSuccess());
    } catch (e:any) {
        yield put(signinFail(e.response.data.error));
    }
}
export default function* authSaga () {
    // 注册
    yield takeEvery(SIGNUP, handleSignup);

    // 登录
    yield takeEvery(SIGIN, handleSigin)
}
