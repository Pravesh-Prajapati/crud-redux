import { createStore,combineReducers } from "redux";
import { ContactReducers } from "./Reducers/ContactReducers";

let AllValue=combineReducers({
    KeyData:ContactReducers
})
let store= createStore(AllValue)
export default store

 