import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/action/todoAction";
import useStyles from "./styles.js";

function AddTodoList() {
  const classes = useStyles();
       const dispatch=useDispatch();
  const [inputData, setInputData] = useState({
    todoList: "",
  });

  const submitTodoList = (e) => {
    e.preventDefault();
      dispatch(createTodo(inputData))
  };

  return (
    <div className={classes.header}>
      <Box sx={{marginTop:"20px"}}>
      <TextField
        variant="outlined"
        label="Add Todo List"
        value={inputData.todoList}
        onChange={(e) =>
          setInputData({ ...inputData, todoList: e.target.value })
        }
      />
      <Button color="primary" variant="contained" onClick={submitTodoList}>
        Add Todo
      </Button>
      </Box>
    </div>
  );
} 

export default AddTodoList;
