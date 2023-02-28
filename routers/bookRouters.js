const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controllers = require('../controllers/bookControllers')

router.get("/", controllers.getAllBooks);
router.post("/", controllers.postBook);
router.get("/:bookId", controllers.getBook);
router.delete("/:bookId", controllers.deleteBook);
router.patch("/:bookId", controllers.updateBook);

module.exports = router;