import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";


export default combineReducers({
    // dummyMe: () => 'hi dummy'
    posts: postReducer,
    user:userReducer
})