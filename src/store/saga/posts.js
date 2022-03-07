import { call, put } from "redux-saga/effects";
import axios from "axios";
import { successPosts, errorPosts } from "../actions/posts";

export function* workerPosts(){
    try {
        const response = yield call(getPosts)
        const data = response.data

        yield put(successPosts(data))
    } catch (error) {
        yield put(errorPosts(error))
    }
}

const getPosts = async ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}