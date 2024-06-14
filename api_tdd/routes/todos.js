var express = require('express');
var router = express.Router();
var createError = require('http-errors');

const todos = [{id:1, name:'Do something', completed: false}];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(todos);
});

router.get('/:id', function(req, res, next) {
    const todo = todos.find(todo => todo.id === Number(req.params.id));
    if (todo) {
        res.json(todo);
    } else {
        return next(createError(404, 'Todo not found'));
    }
});

router.post('/', function(req, res, next) {
    const {body} = req;

    if (!body.name || typeof(body.name) !== 'string') {
        return next(createError(422, 'Validation Error'));
    }
    
    const newTodo = {
        id: todos.length + 1,
        name: body.name,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo)
});



router.post
module.exports = router;
