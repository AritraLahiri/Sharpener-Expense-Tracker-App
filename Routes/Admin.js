const path = require("path");
const cors = require("cors");
const express = require("express");
const adminController = require("../Controllers/Admin");
const router = express.Router();

router.post("/add-expense", adminController.AddExpense);
router.get("/expense", adminController.getExpenses);
router.delete("/delete/:expenseID", cors(), adminController.deleteExpense);

module.exports = router;
