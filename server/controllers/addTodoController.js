import TodoListData from "../models/todoDataModel.js";
import mongoose from "mongoose";

export const addTodoList = async (req, res) => {
  const todo = req.body;
  const todoList = new TodoListData(todo);
  try {
    await todoList.save();
    res.status(200).json(todoList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTodoList = async (req, res) => {
  try {
    const todoDataList = await TodoListData.find();
    res.status(200).json(todoDataList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTodoList = async (req, res) => {
  const { id} = req.params;
  console.log("Delete id",id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with that id");
  await TodoListData.findByIdAndRemove(id);
  res.json({ message: "Post Deleted SuccessFully" });
};
