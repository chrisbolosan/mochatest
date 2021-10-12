const express = require('express');
const app = express();

const tasks = [
  {
    id: 1,
    name: 'Task 1',
    completed: false,
  },
  {
    id: 1,
    name: 'Task 2',
    completed: false,
  },
  {
    id: 1,
    name: 'Task 3',
    completed: false,
  },
];
//GET
app.get('/api/tasks', (req, res) => {
  res.send('Welcome to TASKS API');
});

//POST

//PUT

//PATCH

//DELETE

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Listening to port ${port}`));
