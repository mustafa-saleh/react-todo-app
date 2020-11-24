import React, { Component } from "react";
import {
  Container,
  Typography,
  IconButton,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { connect } from "react-redux";

import { ToDoViewMode } from "../../../redux/actions/ToDoActions";
import { styles } from "./styles";

class ItemsSection extends Component {
  state = {
    view: "",
  };

  handleClick = (view) => {
    this.setState({
      view: view,
    });

    this.props.ToDoViewMode(view);
  };

  render() {
    const cls = this.props.classes;
    return (
      <div>
        <Container className={cls.control}>
          <Typography variant="h5" className={cls.hot}>
            TODOs BOARD
          </Typography>
          <Tooltip title="Grid">
            <div onClick={(e) => this.handleClick("grid")}>
              <IconButton>
                <AppsIcon fontSize="large" className={cls.icon} />
              </IconButton>
            </div>
          </Tooltip>
          <Tooltip title="List">
            <div onClick={(e) => this.handleClick("list")}>
              <IconButton>
                <FormatListBulletedIcon fontSize="large" className={cls.icon} />
              </IconButton>
            </div>
          </Tooltip>
        </Container>
      </div>
    );
  }
}

export default connect(null, { ToDoViewMode })(
  withStyles(styles)(ItemsSection)
);
