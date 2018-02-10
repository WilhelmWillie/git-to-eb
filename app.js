const express = require('express')
const app = express()

/* Simple API */
app.get('/',
  (req, res) => res.json({
    message: 'Hello world'
  })
)

/* Returns customized hi message */
app.get(
  '/hi/:name',
  (req, res) => res.json({
    message: 'Hello ' + req.params.name + '!'
  })
)

/* Returns customized bye message */
app.get(
  '/bye/:name',
  (req, res) => res.json({
    message: 'Bye ' + req.params.name + '! Have a great day'
  })
)

app.listen(3000, () => console.log('Test app listening on port 3000'))

module.exports = app
