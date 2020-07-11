import React from "react";
import {
  Box,
  withStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import { muiStyles } from "./styles";

const CreateOrEditTask = (props) => {
  const classes = props.classes;
  return (
    <Box className={classes.input}>
      <FormControl
        error={props.categoryError ? true : false}
        variant="outlined"
        className={classes.formControl}
      >
        <InputLabel id="categorylabel">Category</InputLabel>
        <Select
          labelId="categorylabel"
          name="category"
          value={props.categoryName}
          onChange={props.handleChange}
          label="Category"
        >
          {props.categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.name}>
              {cat.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{props.categoryError}</FormHelperText>
      </FormControl>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={1}
        label="Got Work to Do?"
        variant="outlined"
        className={classes.txtarea}
        name="body"
        value={props.body}
        onChange={props.handleChange}
        helperText={props.bodyError}
        error={props.bodyError ? true : false}
      />
    </Box>
  );
};

export default withStyles(muiStyles)(CreateOrEditTask);
