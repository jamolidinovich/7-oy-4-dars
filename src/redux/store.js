import { combineReducers, createStore } from "redux";
import { todosReducer } from "./todosReducer";

const rootReducer = combineReducers({
    todos: todosReducer 
})

export const store = createStore(rootReducer)