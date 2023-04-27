const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('this is a todo-list')
})

app.listen(3100, () => {
  console.log('server is running on port:3100')
})