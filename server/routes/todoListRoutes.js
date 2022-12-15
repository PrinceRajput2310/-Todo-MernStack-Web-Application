import express from "express";
import { addTodoList,getTodoList ,deleteTodoList} from "../controllers/addTodoController.js";

const router=express.Router();

router.get('/',getTodoList);
router.post('/',addTodoList);
router.delete('/:id',deleteTodoList);

export default router;

