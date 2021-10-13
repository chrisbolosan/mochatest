const express = require('express');
const app = express();
const { taskSchema } = require('./utils/task-schema');

app.use(express.json());

const tasks = [
  {
    id: 1,
    name: 'Task 1',
    completed: false,
  },
  {
    id: 2,
    name: 'Task 2',
    completed: false,
  },
  {
    id: 3,
    name: 'Task 3',
    completed: false,
  },
];
//GET /tasks
app.get('/api/tasks', (req, res) => {
  res.send(tasks);
});
//GET /tasks/:id
app.get('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;

  const task = tasks.find((task) => task.id === parseInt(taskId));
  if (!task) {
    return res.status(404).send('The task with the provided ID does not exist');
  }
  res.send(task);
});

//POST
app.post('/api/tasks', (req, res) => {
  const { error, value } = taskSchema.validate(req.body);

  if (error)
    return res
      .status(400)
      .send('The name should be at least 3 characters long');

  const task = {
    id: tasks.length + 1,
    name: req.body.name,
    completed: req.body.completed,
  };
  tasks.push(task);
  res.send(task);
});
//PUT

//PATCH

//DELETE

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Listening to port ${port}`));
