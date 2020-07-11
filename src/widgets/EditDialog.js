import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { green } from "@material-ui/core/colors";

import { EditDialogAction } from "../redux/actions/ToDoActions";
import CreateOrEditTask from "./CreateOrEditTask";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class EditDialogSlide extends Component {
  state = {
    task: {
      category: "",
      body: "",
      categoryError: "",
      bodyError: "",
    },
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (Object.entries(nextProps.editDialog).length > 0) {
      this.setState({
        task: {
          category: nextProps.editDialog.task.categoryName,
          body: nextProps.editDialog.task.body,
          categoryError: this.state.task.categoryError,
          bodyError: this.state.task.bodyError,
        },
      });
    }
  }

  validate = () => {
    let categoryError = "";
    let bodyError = "";

    if (!this.state.task.category) categoryError = "Please select a category";

    if (!this.state.task.body.trim().length)
      bodyError = "Task description is required";

    if (categoryError || bodyError) {
      this.setState({
        task: {
          ...this.state.task,
          categoryError: categoryError,
          bodyError: bodyError
        },
      });
      return false;
    }

    return true;
  };

  handleClose = (action) => {
    if (action === "edit") {
      const isValid = this.validate();
      if (isValid) {
        const item = {
          categoryName: this.state.task.category,
          body: this.state.task.body,
          id: this.props.editDialog.task.id,
        };

        this.props.EditDialogAction(item, action);
      }
      return;
    }
    this.props.EditDialogAction(this.props.editDialog.task, action);
  };

  handleChange = (event) => {
    this.setState({
      task: {
        ...this.state.task,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Dialog
          open={(this.props.editDialog.open === undefined)? false: this.props.editDialog.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("cancel")}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          maxWidth="md"
          fullWidth={true}
        >
          <DialogTitle id="dialog-title">{"Edit Task"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Please modify the task information
            </DialogContentText>
          </DialogContent>
          <CreateOrEditTask
            categories={this.props.categories}
            categoryName={this.state.task.category}
            body={this.state.task.body}
            categoryError={this.state.task.categoryError}
            bodyError={this.state.task.bodyError}
            handleChange={this.handleChange}
          />
          <DialogActions>
            <Button onClick={() => this.handleClose("cancel")} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleClose("edit")} style={{color: green[500]}}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editDialog: state.ToDo.openEditDialog,
  categories: state.Categories.categories
});

export default connect(mapStateToProps, { EditDialogAction })(
  EditDialogSlide
);
