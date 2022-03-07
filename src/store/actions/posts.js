import { POST_CALL_REQUEST, POST_CALL_SUCCESS, POST_CALL_FAILURE } from "../types/posts";

//Actions creators
export const requestPosts = ()=>({type: POST_CALL_REQUEST})
export const successPosts = (payload)=>({type: POST_CALL_SUCCESS, payload})
export const errorPosts = (error)=>({type: POST_CALL_FAILURE, error})