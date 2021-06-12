const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://sashaasdzxc:322322322@cluster0.glu8r.mongodb.net/dormitory?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const PORT = 3001

app.use(express.json())

app.post('/rooms', (req, res) => {
  console.log(req.body)
  const r = [
    {
      num: 1,
      rooms: {
        num: 1,
        size: 1,
        emty: 0,
      }
    }
  ]
  res.send(JSON.stringify(r))
})

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`)
})
