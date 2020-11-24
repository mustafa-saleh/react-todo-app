import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";
import { PRIMARY } from "../../config/colors";

const useStyle = makeStyles({
  root: {
    background: PRIMARY,
    // opacity: 0.19,
  },
  brand: {},
  name: {
    color: "#3C64B1",
    fontWeight: "bold",
  },
});

const Header = (props) => {
  const classes = useStyle();

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar className={classes.brand}>
          <Container>
            <Typography variant="h6" className={classes.name}>
              TODO APP HEADER
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
