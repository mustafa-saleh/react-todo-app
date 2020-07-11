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
  EDIT_DIALOG_ACTION,
  DIALOG_EDIT_TODO
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  viewMode: "",
  deleteId: "",
  editId: "",
  toggleId: {},
  dialog: {},
  openEditDialog: {},
  editDialogAction: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...initialState,
        items: action.payload,
      };
    case ADD_TODO:
      return {
        ...initialState,
        items: state.items,
        item: action.payload,
      };
    case TODO_VIEW_MODE:
      return {
        ...initialState,
        items: state.items,
        viewMode: action.payload,
      };
    case DELETE_TODO:
      return {
        ...initialState,
        items: state.items,
        deleteId: action.payload,
      };
    case TOGGLE_TODO_DONE:
      return {
        ...initialState,
        items: state.items,
        toggleId: action.payload,
      };
    case EDIT_TODO:
      return {
        ...initialState,
        items: state.items,
        item: action.payload,
      };
    case DIALOG_EDIT_TODO:
      return {
        ...initialState,
        items: state.items,
        editId: action.payload,
      };
    case OPEN_DIALOG:
    case DIALOG_ACTION:
      return {
        ...initialState,
        items: state.items,
        dialog: action.payload,
      };
    case OPEN_EDIT_DIALOG:
      return {
        ...initialState,
        items: state.items,
        openEditDialog: action.payload,
      };
    case EDIT_DIALOG_ACTION:
      return {
        ...initialState,
        items: state.items,
        editDialogAction: action.payload,
      };
    default:
      return state;
  }
}
