const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos
router.get("/all", (req, res) => {
    db.todo.findAll().then(todos => res.send(todos));
});


//get single todo by Id
router.get("/find/:id", (req, res) => {
    db.todo.findAll({
        where: {
            id: req.params.id
        }
    }).then(todo => res.send(todo));
});


// post new todo
router.post("/new", (req, res) => {
    db.todo.create({
        text: req.body.text
    }).then(submitedtodo => res.send(submitedtodo));
});
 

// delete todo
router.delete("/delete/:id", (req, res) => {
    db.todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("sucess"));
});


module.exports = router;