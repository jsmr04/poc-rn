import { takeLatest } from "redux-saga/effects";
import { requestPosts } from "../actions/posts";
import { workerPosts } from "./posts";

export function* watcherSaga(){
    yield takeLatest(requestPosts().type, workerPosts)
}