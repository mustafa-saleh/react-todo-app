import {
  FETCH_TODOS,
  ADD_TODO,
  TODO_VIEW_MODE,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO_DONE,
  DIALOG_ACTION,
  OPEN_DIALOG,
  OPEN_EDIT_DIALOG,
  DIALOG_EDIT_TODO,
  EDIT_DIALOG_ACTION,
} from "./types";
import { BASE_URL } from "../../config/config";
import { getData, editData, postData, deleteData } from "../../utils/fetch";

export const FetchToDos = () => (dispatch) => {
  getData(BASE_URL + "todos").then(
    (result) => {
      // console.log('SUCCESS:', result)
      return dispatch({
        type: FETCH_TODOS,
        payload: result,
      });
    },
    (error) => {
      console.log("ERROR:", error);
    }
  );
};

export const AddToDo = (item) => (dispatch) => {
  postData(BASE_URL + "todos", item).then(
    (result) => {
      // console.log("SUCCESS:", result);
      return dispatch({
        type: ADD_TODO,
        payload: result,
      });
    },
    (error) => console.log("ERROR:", error)
  );
};

export const ToDoViewMode = (mode) => (dispatch) => {
  return dispatch({
    type: TODO_VIEW_MODE,
    payload: mode,
  });
};

export const DeleteToDo = (id) => (dispatch) => {
  deleteData(BASE_URL + `todos/${id}`).then((result) => {
    // console.log("SUCCESS:", result);
    return dispatch(
      {
        type: DELETE_TODO,
        payload: result.id,
      },
      (error) => console.log("ERROR:", error)
    );
  });
};

export const ToggleToDoDone = (id) => (dispatch) => {
  return dispatch({
    type: TOGGLE_TODO_DONE,
    payload: { id: id, flag: Math.floor(Math.random() * 10) },
  });
};

export const EditToDo = (id, item) => (dispatch) => {
  editData(BASE_URL + `todos/${id}`, item).then((result) => {
    // console.log("SUCCESS:", result);
    return dispatch(
      {
        type: EDIT_TODO,
        payload: item,
      },
      (error) => console.log("ERROR:", error)
    );
  });
};

export const DialogEditToDo = (id) => (dispatch) => {
  return dispatch({
    type: DIALOG_EDIT_TODO,
    payload: id,
  });
};

export const OpenDialog = (id) => (dispatch) => {
  return dispatch({
    type: OPEN_DIALOG,
    payload: { open: true, id },
  });
};

export const DialogAction = (id, action) => (dispatch) => {
  return dispatch({
    type: DIALOG_ACTION,
    payload: { id, action },
  });
};

export const OpenEditDialog = (task) => (dispatch) => {
  return dispatch({
    type: OPEN_EDIT_DIALOG,
    payload: { open: true, task },
  });
};

export const EditDialogAction = (task, action) => (dispatch) => {
  return dispatch({
    type: EDIT_DIALOG_ACTION,
    payload: { task, action },
  });
};
