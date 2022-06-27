const express = require('express')
const app = express()
const fs = require('fs')

const path = process.env.DB_PATH || './todos.json'

app.use(express.json())

app.listen(8080, function () {
    console.log('Running on port 8080!')
});

app.post('/todo', function (req, res) {
    console.log('Entered POST /todo')
    console.log('Payload: ' + JSON.stringify(req.body))

    const newTodo = req.body

    if (!fileExists(path)) {
        console.log('DB file does not exist, going to create it')
        fs.writeFileSync(path, "[]");
    }

    let existingTodos = getTodos()
    existingTodos.push(newTodo)

    fs.writeFileSync(path, JSON.stringify(existingTodos));

    res.sendStatus(200)
});

app.get('/todo', function (req, res) {
    console.log('Entered GET /todo')
    if (!fileExists(path)) {
        res.status(200).send('No todos there yet')
    } else {
        res.json(getTodos())
    }
});

const fileExists = function () {
    try {
        if (fs.existsSync(path)) {
            return true
        }
        return false
    } catch (err) {
        console.error(err)
    }
}

const getTodos = function () {
    let rawdata = fs.readFileSync(path);
    let todos = JSON.parse(rawdata);
    return todos
}
