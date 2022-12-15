import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList, deleteTodoListAction } from "../redux/action/todoAction";
import moment from "moment";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@material-ui/core";

function DisplayTodoList() {
  const dispatch = useDispatch();
  const getAllTodo = useSelector((state) => state.todoList);

  // console.log(getAllTodo.map((id) => id._id));

  useEffect(() => {
    dispatch(getTodoList());
  }, []);
  
  return (
    <>
      <div className="App">
        <h1>DisplayTodoList</h1>
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo List</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getAllTodo &&
            getAllTodo.map((item, id) => {
              return (
                <>
                  <tr key={item._id}>
                    <td>{id + 1}</td>
                    <td>{item.todoList}</td>
                    <td>{moment(getAllTodo.createdAt).fromNow()}</td>
                    <td>
                      <Button>{<EditIcon />}</Button>
                      <Button
                        onClick={() => dispatch(deleteTodoListAction(item._id))}
                      >
                        {<DeleteIcon />}{" "}
                      </Button>{" "}
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default DisplayTodoList;
