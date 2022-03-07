import { POST_CALL_REQUEST, POST_CALL_SUCCESS, POST_CALL_FAILURE } from "../types/posts";

//Defaults
const initialState = {
    fetching: false,
    data: [],
    error: null
}

//Reducer
export default (state = initialState, action)=>{
    switch (action.type){
        case POST_CALL_REQUEST:
            return {...state, fetching: true, error: null};
        case POST_CALL_SUCCESS:
            return {...state, fetching: false, data: action.payload};
        case POST_CALL_FAILURE:
            return {...state, fetching: false, data: [], error: action.error};
        default:
            return state
    }
}