import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import * as reducers from "./reducers"
import { watcherSaga } from "./saga/watcher";

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    combineReducers({
        ...reducers
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watcherSaga)