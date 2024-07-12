import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from "./sagas";

import Auth from "./auth/reducers";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

export const store = configureStore({
    reducer: {
        auth: Auth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

sagaMiddleware.run(rootSaga)