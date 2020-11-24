import React from "react";
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
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
    margin: "auto",
  },
});

const Footer = (props) => {
  const classes = useStyle();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.brand}>
          <Typography variant="h6" className={classes.name}>
            TODO APP FOOTER
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
