import { combineReducers } from "redux";

import ToDoReducer from "./ToDoReducer";
import CategoriesReducer from './CategoriesReducer';

export default combineReducers({
  ToDo: ToDoReducer,
  Categories: CategoriesReducer,
});
