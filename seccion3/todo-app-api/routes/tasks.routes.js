const { Router } = require("express");
const { createTask, getAllTasks, updateTask, deleteTask} = require("../controllers");

const router = Router();

router.post("/task", createTask);
router.get("/task", getAllTasks)
router.put("/task", updateTask);
router.delete("/task", deleteTask);

module.exports = router;
