const Todo = require('../models/todo');

// Create Todo
exports.createTodo = async (req, res) => {
   try {
        const { task } = req.body;

        const todo = await Todo.create({ task });

        res.status(201).json(todo);

   } catch (err) {
        res.status(500).send(err);
   }
};

// Get All Todos
exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update Todo
exports.updateTodo = async (req, res) => {
    try {
        const todos = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!todo){
            return res.status(404).json({message:"Todo not Found"});

        }
        res.status(200).json(todo);

        

    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: "Todo Not Found" });
        }

        res.status(200).json({
            message: "Todo Deleted Successfully"
        });

    } catch (err) {
        res.status(500).send(err);
    }
};