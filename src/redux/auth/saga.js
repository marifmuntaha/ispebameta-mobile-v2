import {SagaIterator} from "redux-saga";
import {authApiResponseError, authApiResponseSuccess} from "./actions";
import {AuthActionTypes} from "./constants";
import {APICore, setAuthorization} from "../../utils/api/APICore";
import {login as loginApi, signup as signupApi, logout as logoutApi} from '../../utils/api/auth'
import {all, call, fork, put, takeEvery} from "redux-saga/effects";

const api = new APICore();

function* login({payload: {email, password}}): SagaIterator {
    try {
        const response = yield call(loginApi, {email, password})
        const data = response && response.data;
        const user = data && data.result;
        api.setLoggedInUser(user);
        setAuthorization(user['token']);
        yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, data))
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, error))
        api.setLoggedInUser(null)
        setAuthorization(null)
    }
}

function* signup({payload: {name, email, password, password_confirmation, nip, institution, position}}): SagaIterator {
    try {
        const response = yield call(signupApi, {name, email, password, password_confirmation, nip, institution, position})
        const data = response && response.data;
        yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, data))
    } catch (error){
        yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error))
    }
}
function* logout(): SagaIterator {
    try {
        yield call(logoutApi)
        api.setLoggedInUser()
        setAuthorization()
        yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}))
    } catch (error) {
        yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, error))
    }
}

export function* watchLoginUser() {
    yield takeEvery(AuthActionTypes.LOGIN_USER, login);
}

export function* watchSignupUser() {
    yield takeEvery(AuthActionTypes.SIGNUP_USER, signup)
}

export function* watchLogout() {
    yield takeEvery(AuthActionTypes.LOGOUT_USER, logout);
}

function* authSaga() {
    yield all([fork(watchLoginUser), fork(watchSignupUser),fork(watchLogout)])
}

export default authSaga;