import React from "react";
import { Container, withStyles } from "@material-ui/core";

// COMPS
import { rootStyle } from "./styles";
import ListToDo from "./ListToDo";
import AlertDialogSlide from "../../../widgets/ConfirmationDialog";
import EditDialogSlide from "../../../widgets/EditDialog";

const ToDoSction = ({ classes }) => {
  return (
    <Container className={classes.root}>
      <ListToDo />
      <AlertDialogSlide />
      <EditDialogSlide />
    </Container>
  );
};

export default withStyles(rootStyle)(ToDoSction);
