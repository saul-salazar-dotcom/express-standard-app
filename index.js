const compression = require('./middlewares/compression')
const helmet = require('./middlewares/helmet')
const cookieParser = require('cookie-parser')
const cors = require('./middlewares/cors')
const logs = require('./middlewares/logs')
const bodyParser = require('body-parser')
const express = require('express')

// create express instance
let app = express()

// settings
// https://expressjs.com/en/5x/api.html#app.settings.table
app.disable('etag') // Disable 304 not modified http status
app.set('case sensitive routing', false) // set false to make /foo and /Foo the same
app.set('strict routing', false) // set false to make /foo and /foo/ the same
app.set('json spaces', 2) // number of spaces to indent prettified json
app.set('x-powered-by', false) // remove x-powered-by header
app.set('trust proxy', true)

// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app = compression(app)
app = helmet(app)
app = logs(app)
app = cors(app)

module.exports = app
