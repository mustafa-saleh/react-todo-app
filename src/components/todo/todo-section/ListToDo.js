import React, { Component } from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { rootStyle } from "./styles";
import { FetchToDos, OpenEditDialog, EditToDo } from "../../../redux/actions/ToDoActions";
import ToDoListView from "../../../widgets/ToDoListView";
import ToDoGridView from "../../../widgets/ToDoGridView";

class ListToDo extends Component {
  UNSAFE_componentWillMount() {
    this.props.FetchToDos();
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (Object.entries(newProps.newTodo).length) {
      const idx = this.props.todos.findIndex(todo => 
        todo.id === newProps.newTodo.id)
      if(idx > -1) {
        this.props.todos[idx].categoryName = newProps.newTodo.categoryName;
        this.props.todos[idx].body = newProps.newTodo.body;
      } else {
        this.props.todos.unshift(newProps.newTodo);
      }
    }

    if (newProps.deleteId.length > 0) {
      const idx = this.props.todos.findIndex(
        (todo) => todo.id === newProps.deleteId
      );
      this.props.todos.splice(idx, 1);
    }
    
    if (newProps.editId.length > 0) {
      const idx = this.props.todos.findIndex(
        (todo) => todo.id === newProps.editId
      );

      const task = this.props.todos[idx];
      this.props.OpenEditDialog(task);
    }

    if (Object.entries(newProps.toggleId).length) {
      const idx = this.props.todos.findIndex(
        (todo) => todo.id === newProps.toggleId.id
      );
      this.props.todos[idx].done = !this.props.todos[idx].done;
      const item = this.props.todos[idx];
      this.props.EditToDo(item.id, item);
    }

    if(Object.entries(newProps.editDialog).length > 0){
      if(newProps.editDialog.action === "edit"){
        const idx = this.props.todos.findIndex(
          (todo) => todo.id === newProps.editDialog.task.id
        );
        if( (idx > -1)){
          if((this.props.todos[idx].categoryName !== newProps.editDialog.task.categoryName) || (this.props.todos[idx].body !== newProps.editDialog.task.body)){
            const item = newProps.editDialog.task;
            this.props.EditToDo(item.id, item);
          }
        }
      }
    }
  }

  renderToDos = () =>
    this.props.todos === undefined || this.props.todos.length === 0 ? (
      <Typography
        align="center"
        variant="h6"
        component="p"
        className={this.props.classes.text}
      >
        No Tasks Available for Display
      </Typography>
    ) : this.props.viewMode === "list" ? (
      this.props.todos.map((todo, idx) => (
        <div key={idx}>
          <ToDoListView todo={todo} />
        </div>
      ))
    ) : (
      <Grid container spacing={1}>
        {this.props.todos.map((todo, idx) => (
          <React.Fragment key={idx}>
            <ToDoGridView todo={todo} />
          </React.Fragment>
        ))}
      </Grid>
    );

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>{this.renderToDos()}</div>;
  }
}

const mapStateToProps = (state) => ({
  todos: state.ToDo.items,
  newTodo: state.ToDo.item,
  viewMode: state.ToDo.viewMode,
  deleteId: state.ToDo.deleteId,
  toggleId: state.ToDo.toggleId,
  editId: state.ToDo.editId,
  editDialog: state.ToDo.editDialogAction
});

ListToDo.propTypes = {
  FetchToDos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.object,
  viewMode: PropTypes.string,
  deleteId: PropTypes.string,
};

export default withStyles(rootStyle)(
  connect(mapStateToProps, { FetchToDos, OpenEditDialog, EditToDo })(ListToDo)
);
