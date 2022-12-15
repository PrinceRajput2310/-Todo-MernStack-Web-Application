import {combineReducers} from "redux";
import { todoListREducer } from "./todoReducer";


export const rootReducers=combineReducers({
    todoList:todoListREducer
})