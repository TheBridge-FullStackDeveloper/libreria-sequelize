const express = require("express")
const BookController = require("../controllers/BookController")
const router = express.Router()

router.post("/",BookController.insert)
router.get("/",BookController.getAll)
router.put("/id/:id",BookController.update)
router.delete("/id/:id",BookController.delete)

module.exports = router