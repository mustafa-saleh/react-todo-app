import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { DialogAction } from "../redux/actions/ToDoActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class AlertDialogSlide extends Component {
  handleClose = (action) => {
    this.props.DialogAction(this.props.dialog.id, action);
  };

  render() {
    if (this.props.dialog.open === undefined) this.props.dialog.open = false;
    return (
      <div>
        <Dialog
          open={this.props.dialog.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("cancel")}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">{"Delete Task"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              You're about to delete a Task, Are you sure?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose("cancel")} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.handleClose("delete")}
              color="secondary"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dialog: state.ToDo.dialog,
});

export default connect(mapStateToProps, { DialogAction })(AlertDialogSlide);
