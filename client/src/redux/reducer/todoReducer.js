import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_ALL_TODO_LIST,
} from "../actionTypes";

// const initilalState={
//        todoList:[]
// }

export const todoListREducer = (todoList = [], action) => {
  switch (action.type) {
    case GET_ALL_TODO_LIST:
      return action.payload;

    case CREATE_TODO:
      return [...todoList, action.payload];

    case DELETE_TODO:
      return todoList.filter((item) => item._id !== action.payload);

    default:
      return todoList;
  }
};
