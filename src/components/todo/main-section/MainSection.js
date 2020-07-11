import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// COMPOS
import { AddToDo } from "../../../redux/actions/ToDoActions";
import CreateOrEditTask from "../../../widgets/CreateOrEditTask";

// Style
import styles from "./main.module.css";
import { muiStyle } from "./styles";

const initialState = {
  category: "",
  body: "",
  categoryError: "",
  bodyError: "",
};

class MainSection extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let categoryError = "";
    let bodyError = "";

    if (!this.state.category) categoryError = "Please select a category";

    if (!this.state.body.trim().length)
      bodyError = "Task description is required";

    if (categoryError || bodyError) {
      this.setState({ categoryError, bodyError });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      const todo = {
        categoryName: this.state.category,
        body: this.state.body,
        done: false,
      };

      this.setState(initialState);
      this.props.AddToDo(todo);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.root}>
        <Box className={classes.box}>
          <Box className={classes.welcome}>
            <div className={styles.greeting}>
              Hello Friend, What do you feel Like Dowing?
            </div>
          </Box>
          <form onSubmit={this.onSubmit}>
            <Box className={classes.box}>
              <CreateOrEditTask
                categories={this.props.categories}
                categoryName={this.state.category}
                categoryError={this.state.categoryError}
                body={this.state.body}
                bodyError={this.state.bodyError}
                handleChange={this.handleChange}
              />
              <Button
                variant="outlined"
                color="primary"
                className={classes.btn}
                type="submit"
              >
                Pin To Board
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    );
  }
}

MainSection.propTypes = {
  AddToDo: PropTypes.func.isRequired,
};


export default withStyles(muiStyle)(connect(null, { AddToDo })(MainSection));
