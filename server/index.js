const express = require('express')
const path = require('path')

const app = express()

const port = 3000

app.use(express.static(path.join(__dirname, '../build')))

app.get('/*', function (_req, res) {
  res.sendFile(path.join(__dirname, 'build'))
})

const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`)
})

module.exports = server
