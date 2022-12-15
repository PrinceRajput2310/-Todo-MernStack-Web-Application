import * as api from "../../api/index.js";
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO,GET_ALL_TODO_LIST } from "../actionTypes";

export const getTodoList = () => async (dispatch) => {
    try {
      const { data } = await api.getTodoList();
      dispatch({
        type:GET_ALL_TODO_LIST ,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo);
    dispatch({
      type: CREATE_TODO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const deleteTodoListAction=(id)=>async(dispatch)=>{
        
  try {
    await api.deleteTodoList(id);
    dispatch({ type: DELETE_TODO, payload: id });
  } catch (error) {
    console.log((error) => console.log(error));
  }
}