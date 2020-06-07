const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos
router.get("/all", (req, res) => {
    db.todo.findAll().then(todos => res.send(todos));
});


// post new todo
router.post("/new", (req, res) => {
    db.todo.create({
        text: req.body.text
    }).then(submitedtodo => res.send(submitedtodo));
});


module.exports = router;