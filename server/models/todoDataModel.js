import mongoose from "mongoose";

const addtodoModel=mongoose.Schema({
            todoList:String,
            createdAt:{
                  type:Date,
                  default:new Date()
            }
})

const TodoListData=mongoose.model("TodoListData",addtodoModel);

export default TodoListData;