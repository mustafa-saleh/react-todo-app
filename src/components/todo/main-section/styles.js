import { PRIMARY } from "../../../config/colors";

export const muiStyle = (theme) => ({
  root: {
    height: 560,
    backgroundColor: PRIMARY,
    display: "flex",
  },
  box: {
    // height: 264,
    maxWidth: 730,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  welcome: {
    marginBottom: "20px",
    // height: 166
  },
  btn: {
    margin: "auto",
    width: 140,
    padding: "8px 0px",
    fontWeight: "bold",
    marginBottom: "20px",
    // color: '#373F41'
  },
});
