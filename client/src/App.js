import React from "react";
import useStyles from "./components/styles"
import { AppBar, Typography } from "@mui/material";
import AddTodoList from "./components/addTodoList";
import DisplayTodoList from "./components/displayTodoList";
import { Box } from "@material-ui/core";

function App() {
  const classes = useStyles();
  return (
    <>
      <Box position="static" color="inherit" className={classes.appBar} >
        <Typography variant="h5"  className={classes.heading}>
          TODO LIST MERN STACK APPLICATION
        </Typography>
      </Box>
      <AddTodoList />
      <DisplayTodoList />
    </>
  );
}

export default App;
