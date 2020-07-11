import React from "react";
import {
  Card,
  Typography,
  CardContent,
  Box,
  Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { muiStyles } from "./styles";
import ToDoCardActions from './CardActions';

const ToDoGridView = ({ todo, classes }) => {
  return (
    <Grid lg={3} md={4} sm={6} xs={12} className={classes.gridroot} item>
      <Card className={classes.gridcard}>
        <CardContent className={classes.gridcardcategory}>
          <Typography gutterBottom variant="h5" component="h2">
            {todo.categoryName}
          </Typography>
        </CardContent>
        <CardContent className={classes.gridcardcontent}>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.gridcardbody}
          >
            {todo.body}
          </Typography>
        </CardContent>
        <Box justifyContent="flex-end" className={classes.cardactions}>
        <ToDoCardActions todo={todo}/>
        </Box>
      </Card>
    </Grid>
  );
};

export default withStyles(muiStyles)(ToDoGridView);
