import React from "react";
import {
  Card,
  Typography,
  CardContent,
  Box
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { muiStyles } from "./styles";
import ToDoCardActions from './CardActions';

const ToDoListView = ({ todo, classes }) => {
  return (
    <Card className={classes.card}>
      <Box className={classes.box}>
        <CardContent className={classes.category} >
          <Typography gutterBottom variant="h5" component="h2">
            {todo.categoryName}
          </Typography>
        </CardContent>
        <ToDoCardActions todo={todo}/>
      </Box>
      <CardContent>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
        >{todo.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(muiStyles)(ToDoListView);
