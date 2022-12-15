import axios from "axios";

const url ="http://localhost:5000/addtodo";


export const getTodoList = () => axios.get(url);

export const createTodo = (newTodo) => axios.post(url, newTodo);

export const deleteTodoList=(id)=>axios.delete(`${url}/${id}`);


