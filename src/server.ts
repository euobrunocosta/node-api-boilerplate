import express from 'express'
import { someConfig } from '@config/config'

const app = express()

console.log(someConfig)

app.get('/', (request, response) => {
  response.json({ message: 'Hello World!' })
})

const port = 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
