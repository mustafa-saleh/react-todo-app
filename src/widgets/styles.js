export const muiStyles = (theme) => ({
  box: {
    display: "flex",
  },
  category: {
    flexGrow: 1,
    background: "#EAF0F1",
    padding: '6px 16px' 
  },
  gridroot: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridcardcategory: {
    background: "#EAF0F1",
    padding: '6px 16px' 
  },
  gridcardbody: {
    flex: '1 0 auto'  //Grow, shrink, basis
  },
  gridcardcontent: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto'
  },
  gridcard: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto'
  },
  cardactions: {
    display: 'flex',
  },
  input: {
    display: "flex",
    margin: '0 8px'
  },
  formControl: {
    minWidth: 120,
  },
  txtarea: {
    marginLeft: "6px",
    marginBottom: "20px",
    flexGrow: 1
  },
});
