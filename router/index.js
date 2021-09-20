const express = require('express')
const cors = require('cors')

const demo_add = require('router/demo/add')


const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

app.use('/demo/add', demo_add)

app.use('*', (_req, res) => {
  return res.status(404)
})

app.listen(port, () => {
  console.log(`> Start server @http://${host}:${port}`)
})