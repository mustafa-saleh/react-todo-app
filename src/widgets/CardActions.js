import React, { Component } from "react";
import {
  CardActions,
  IconButton,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import LibraryAddCheckOutlinedIcon from "@material-ui/icons/LibraryAddCheckOutlined";
import { connect } from "react-redux";

import { muiStyles } from "./styles";
import {
  DeleteToDo,
  ToggleToDoDone,
  OpenDialog,
  DialogEditToDo,
} from "../redux/actions/ToDoActions";

class ToDoCardActions extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.dialog.action === "delete") {
      this.props.DeleteToDo(nextProps.dialog.id);
      nextProps.dialog.action = "";
    }
  }

  handleClick = (id, btn) => {
    switch (btn) {
      case "edit":
        this.props.DialogEditToDo(id);
        break;
      case "delete":
        this.props.OpenDialog(id);
        break;
      case "done":
        this.props.ToggleToDoDone(id);
        break;

      default:
        break;
    }
  };

  render() {
    const { todo } = this.props;
    const doneColor = todo.done ? green[500] : "inherit";
    return (
      <CardActions>
        <Tooltip title="Edit">
          <div onClick={(e) => this.handleClick(todo.id, "edit")}>
            <IconButton size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </div>
        </Tooltip>
        <Tooltip title="Delete">
          <div onClick={(e) => this.handleClick(todo.id, "delete")}>
            <IconButton size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </Tooltip>
        <Tooltip title="Done">
          <div onClick={(e) => this.handleClick(todo.id, "done")}>
            <IconButton size="small">
              <LibraryAddCheckOutlinedIcon
                style={{ color: doneColor }}
                fontSize="small"
              />
            </IconButton>
          </div>
        </Tooltip>
      </CardActions>
    );
  }
}

const mapStateToProps = (state) => ({
  toggleId: state.ToDo.toggleId,
  dialog: state.ToDo.dialog,
});

export default withStyles(muiStyles)(
  connect(mapStateToProps, {
    DeleteToDo,
    ToggleToDoDone,
    OpenDialog,
    DialogEditToDo,
  })(ToDoCardActions)
);
